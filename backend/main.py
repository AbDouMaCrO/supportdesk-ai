"""
SupportDesk AI — FastAPI backend.
All customer-facing and admin endpoints.
"""

import os
import uuid
from pathlib import Path

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, File, Header, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel

from agent import build_index, has_index, run_agent
from db import get_db

load_dotenv()

app = FastAPI(title="SupportDesk AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

_WIDGET = Path(__file__).parent / "static" / "widget.js"

@app.get("/widget.js", include_in_schema=False)
async def serve_widget():
    if not _WIDGET.exists():
        raise HTTPException(404, "Widget not found")
    return FileResponse(_WIDGET, media_type="application/javascript")


PLAN_LIMITS: dict[str, float] = {
    "starter": 500,
    "growth": 2000,
    "pro": float("inf"),
}


# ── Auth dependencies ──────────────────────────────────────────────────────

async def require_business(x_api_key: str = Header(...)) -> dict:
    """Chat endpoint: validates key AND enforces plan chat limit."""
    db = get_db()
    res = db.table("businesses").select("*").eq("api_key", x_api_key).limit(1).execute()
    if not res.data:
        raise HTTPException(401, "Invalid API key")
    biz = res.data[0]
    limit = PLAN_LIMITS.get(biz["plan"], 500)
    if biz["chat_count"] >= limit:
        raise HTTPException(429, f"Monthly chat limit ({int(limit)}) reached. Upgrade your plan.")
    return biz


async def require_admin(x_api_key: str = Header(...)) -> dict:
    """Admin endpoints: validates key only."""
    db = get_db()
    res = db.table("businesses").select("*").eq("api_key", x_api_key).limit(1).execute()
    if not res.data:
        raise HTTPException(401, "Invalid API key")
    return res.data[0]


# ── Registration (public) ──────────────────────────────────────────────────

class RegisterRequest(BaseModel):
    name: str
    email: str


@app.post("/businesses/register", status_code=201)
async def register(req: RegisterRequest):
    db = get_db()
    if db.table("businesses").select("id").eq("email", req.email).limit(1).execute().data:
        raise HTTPException(409, "Email already registered")

    api_key = uuid.uuid4().hex
    res = db.table("businesses").insert({
        "name": req.name,
        "email": req.email,
        "api_key": api_key,
        "plan": "starter",
        "chat_count": 0,
        "system_prompt": f"You are a helpful customer support agent for {req.name}.",
    }).execute()

    return {"api_key": api_key, "business": res.data[0]}


# ── Chat (customer-facing) ─────────────────────────────────────────────────

class ChatRequest(BaseModel):
    session_id: str
    message: str


@app.post("/chat")
async def chat(req: ChatRequest, biz: dict = Depends(require_business)):
    db = get_db()
    biz_id = biz["id"]

    conv_res = (
        db.table("conversations")
        .select("*")
        .eq("business_id", biz_id)
        .eq("session_id", req.session_id)
        .limit(1)
        .execute()
    )
    conv = conv_res.data[0] if conv_res.data else None
    history = conv["messages"] if conv else []

    # Lazy-load FAISS index from DB on first chat for this business
    if not has_index(biz_id):
        kb_res = db.table("kb_files").select("content").eq("business_id", biz_id).execute()
        texts = [r["content"] for r in kb_res.data] if kb_res.data else []
        if texts:
            build_index(biz_id, texts)

    result = run_agent(
        business_id=biz_id,
        session_id=req.session_id,
        user_input=req.message,
        history=history,
        system_prompt=biz.get("system_prompt", "You are a helpful customer support agent."),
    )

    new_history = history + [
        {"role": "user", "content": req.message},
        {"role": "assistant", "content": result["response"]},
    ]

    if conv:
        already_escalated = conv.get("escalated", False)
        db.table("conversations").update({
            "messages": new_history,
            "escalated": already_escalated or result["escalate"],
        }).eq("id", conv["id"]).execute()
        conv_id = conv["id"]
    else:
        new_conv = db.table("conversations").insert({
            "business_id": biz_id,
            "session_id": req.session_id,
            "messages": new_history,
            "escalated": result["escalate"],
        }).execute()
        conv_id = new_conv.data[0]["id"]
        already_escalated = False

    # Create ticket on first escalation
    if result["escalate"] and not already_escalated:
        db.table("tickets").insert({
            "conversation_id": conv_id,
            "business_id": biz_id,
            "status": "open",
        }).execute()

    db.table("businesses").update(
        {"chat_count": biz["chat_count"] + 1}
    ).eq("id", biz_id).execute()

    return {
        "response": result["response"],
        "escalated": result["escalate"],
        "session_id": req.session_id,
    }


# ── Conversations (admin) ──────────────────────────────────────────────────

@app.get("/conversations")
async def list_conversations(biz: dict = Depends(require_admin)):
    db = get_db()
    res = (
        db.table("conversations")
        .select("id, session_id, escalated, created_at, updated_at")
        .eq("business_id", biz["id"])
        .order("updated_at", desc=True)
        .execute()
    )
    return res.data


@app.get("/conversations/{session_id}")
async def get_conversation(session_id: str, biz: dict = Depends(require_admin)):
    db = get_db()
    res = (
        db.table("conversations")
        .select("*")
        .eq("business_id", biz["id"])
        .eq("session_id", session_id)
        .limit(1)
        .execute()
    )
    if not res.data:
        raise HTTPException(404, "Conversation not found")
    return res.data[0]


# ── Tickets (admin) ────────────────────────────────────────────────────────

@app.get("/tickets")
async def list_tickets(status: str = "open", biz: dict = Depends(require_admin)):
    db = get_db()
    res = (
        db.table("tickets")
        .select("*, conversations(session_id, messages, created_at)")
        .eq("business_id", biz["id"])
        .eq("status", status)
        .order("created_at", desc=True)
        .execute()
    )
    return res.data


class TicketUpdate(BaseModel):
    status: str | None = None
    assignee: str | None = None


@app.put("/tickets/{ticket_id}")
async def update_ticket(
    ticket_id: str, body: TicketUpdate, biz: dict = Depends(require_admin)
):
    patch = {k: v for k, v in body.model_dump().items() if v is not None}
    if not patch:
        raise HTTPException(400, "Nothing to update")
    db = get_db()
    res = (
        db.table("tickets")
        .update(patch)
        .eq("id", ticket_id)
        .eq("business_id", biz["id"])
        .execute()
    )
    if not res.data:
        raise HTTPException(404, "Ticket not found")
    return res.data[0]


class ReplyRequest(BaseModel):
    message: str
    agent_name: str = "Support Agent"


@app.post("/tickets/{ticket_id}/reply")
async def reply_to_ticket(
    ticket_id: str, body: ReplyRequest, biz: dict = Depends(require_admin)
):
    db = get_db()
    ticket_res = (
        db.table("tickets")
        .select("*, conversations(*)")
        .eq("id", ticket_id)
        .eq("business_id", biz["id"])
        .limit(1)
        .execute()
    )
    if not ticket_res.data:
        raise HTTPException(404, "Ticket not found")

    ticket = ticket_res.data[0]
    conv = ticket["conversations"]
    new_history = conv["messages"] + [
        {"role": "assistant", "content": body.message, "agent": body.agent_name}
    ]

    db.table("conversations").update({"messages": new_history}).eq("id", conv["id"]).execute()
    db.table("tickets").update({"status": "in_progress"}).eq("id", ticket_id).execute()

    return {"ok": True, "message": body.message}


# ── Knowledge Base (admin) ─────────────────────────────────────────────────

@app.post("/kb/upload", status_code=201)
async def upload_kb(
    file: UploadFile = File(...), biz: dict = Depends(require_admin)
):
    if not (file.filename or "").endswith((".txt", ".md")):
        raise HTTPException(400, "Only .txt and .md files allowed")

    content = (await file.read()).decode("utf-8")
    db = get_db()
    res = db.table("kb_files").insert({
        "business_id": biz["id"],
        "filename": file.filename,
        "content": content,
    }).execute()

    # Rebuild index with all files including new one
    kb_res = db.table("kb_files").select("content").eq("business_id", biz["id"]).execute()
    build_index(biz["id"], [r["content"] for r in kb_res.data])

    return res.data[0]


@app.get("/kb")
async def list_kb(biz: dict = Depends(require_admin)):
    db = get_db()
    res = (
        db.table("kb_files")
        .select("id, filename, created_at")
        .eq("business_id", biz["id"])
        .order("created_at")
        .execute()
    )
    return res.data


@app.delete("/kb/{file_id}", status_code=204)
async def delete_kb(file_id: str, biz: dict = Depends(require_admin)):
    db = get_db()
    db.table("kb_files").delete().eq("id", file_id).eq("business_id", biz["id"]).execute()

    kb_res = db.table("kb_files").select("content").eq("business_id", biz["id"]).execute()
    texts = [r["content"] for r in kb_res.data]
    build_index(biz["id"], texts)


# ── Settings (admin) ───────────────────────────────────────────────────────

class SettingsUpdate(BaseModel):
    name: str | None = None
    system_prompt: str | None = None


@app.put("/settings")
async def update_settings(body: SettingsUpdate, biz: dict = Depends(require_admin)):
    patch = {k: v for k, v in body.model_dump().items() if v is not None}
    if not patch:
        raise HTTPException(400, "Nothing to update")
    db = get_db()
    res = db.table("businesses").update(patch).eq("id", biz["id"]).execute()
    return res.data[0]


# ── Analytics (admin) ──────────────────────────────────────────────────────

@app.get("/analytics")
async def analytics(biz: dict = Depends(require_admin)):
    db = get_db()
    biz_id = biz["id"]

    convs = db.table("conversations").select("escalated").eq("business_id", biz_id).execute().data or []
    tickets = db.table("tickets").select("status").eq("business_id", biz_id).execute().data or []

    return {
        "total_conversations": len(convs),
        "escalated": sum(1 for c in convs if c["escalated"]),
        "total_chats": biz["chat_count"],
        "open_tickets": sum(1 for t in tickets if t["status"] == "open"),
        "resolved_tickets": sum(1 for t in tickets if t["status"] == "resolved"),
        "plan": biz["plan"],
        "plan_limit": int(PLAN_LIMITS.get(biz["plan"], 500)),
    }
