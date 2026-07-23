"""
Multi-tenant LangGraph support agent.
Adapted from agents/13-customer-support-agent/agent.py.
"""

from typing import Annotated, TypedDict

import os

from langchain_community.vectorstores import FAISS
from langchain_core.embeddings import Embeddings
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langgraph.graph import END, StateGraph
from langgraph.graph.message import add_messages

_OPENROUTER_BASE = "https://openrouter.ai/api/v1"
_LLM_MODEL = os.environ.get("LLM_MODEL", "openai/gpt-4o-mini")

ESCALATION_KEYWORDS = [
    "refund", "lawsuit", "furious", "fraud", "broken",
    "data loss", "cancel account", "charge", "billing error",
    "scam", "stolen", "hacked",
]

_index_cache: dict[str, FAISS] = {}
_graph = None
_embed_model = None


class _FastEmbedDirect(Embeddings):
    """Bypass the broken langchain FastEmbedEmbeddings pydantic wrapper."""

    def __init__(self):
        from fastembed import TextEmbedding
        self._fe = TextEmbedding("BAAI/bge-small-en-v1.5")

    def embed_documents(self, texts: list[str]) -> list[list[float]]:
        return [v.tolist() for v in self._fe.embed(texts)]

    def embed_query(self, text: str) -> list[float]:
        return next(self._fe.embed([text])).tolist()


def _get_embeddings() -> Embeddings:
    global _embed_model
    if _embed_model is None:
        _embed_model = _FastEmbedDirect()
    return _embed_model


class SupportState(TypedDict):
    messages: Annotated[list, add_messages]
    user_input: str
    retrieved_context: str
    response: str
    escalate: bool
    system_prompt: str
    business_id: str
    session_id: str


def build_index(business_id: str, texts: list[str]) -> None:
    if not texts:
        _index_cache.pop(business_id, None)
        return
    splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=20)
    docs = splitter.create_documents(texts)
    _index_cache[business_id] = FAISS.from_documents(docs, _get_embeddings())


def has_index(business_id: str) -> bool:
    return business_id in _index_cache


def _retrieve(state: SupportState) -> dict:
    vectorstore = _index_cache.get(state["business_id"])
    if not vectorstore:
        return {"retrieved_context": "No knowledge base loaded."}
    docs = vectorstore.similarity_search(state["user_input"], k=3)
    return {"retrieved_context": "\n".join(d.page_content for d in docs)}


def _check_escalation(state: SupportState) -> dict:
    text = state["user_input"].lower()
    return {"escalate": any(kw in text for kw in ESCALATION_KEYWORDS)}


def _generate(state: SupportState) -> dict:
    if state["escalate"]:
        case_id = abs(hash(state["user_input"] + state["session_id"])) % 100000
        return {
            "response": (
                f"I understand your concern and want to ensure this is resolved properly. "
                f"A senior specialist will contact you within 2 hours. Case ID: #{case_id:05d}."
            ),
            "messages": [],
        }

    llm = ChatOpenAI(
        model=_LLM_MODEL,
        temperature=0.2,
        openai_api_base=_OPENROUTER_BASE,
        openai_api_key=os.environ["OPENROUTER_API_KEY"],
    )
    msgs = [
        SystemMessage(content=(
            f"{state['system_prompt']}\n\n"
            f"Knowledge base:\n{state['retrieved_context']}\n\n"
            "Be friendly, concise, and solution-focused. If unsure, say so honestly."
        )),
        *state["messages"][:-1],
        HumanMessage(content=state["user_input"]),
    ]
    resp = llm.invoke(msgs)
    return {"response": resp.content, "messages": [AIMessage(content=resp.content)]}


def _get_graph():
    global _graph
    if _graph is None:
        g = StateGraph(SupportState)
        g.add_node("retrieve", _retrieve)
        g.add_node("escalate", _check_escalation)
        g.add_node("generate", _generate)
        g.set_entry_point("retrieve")
        g.add_edge("retrieve", "escalate")
        g.add_edge("escalate", "generate")
        g.add_edge("generate", END)
        _graph = g.compile()
    return _graph


def run_agent(
    business_id: str,
    session_id: str,
    user_input: str,
    history: list[dict],
    system_prompt: str = "You are a helpful customer support agent.",
) -> dict:
    messages = [
        HumanMessage(content=m["content"]) if m["role"] == "user"
        else AIMessage(content=m["content"])
        for m in history
        if m.get("role") in ("user", "assistant")
    ] + [HumanMessage(content=user_input)]

    state = SupportState(
        messages=messages,
        user_input=user_input,
        retrieved_context="",
        response="",
        escalate=False,
        system_prompt=system_prompt,
        business_id=business_id,
        session_id=session_id,
    )

    result = _get_graph().invoke(state)
    return {"response": result["response"], "escalate": result["escalate"]}
