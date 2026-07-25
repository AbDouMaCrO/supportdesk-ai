"""
Role-based agent crews for business automation.
Each template chains multiple specialized agents sequentially to distribute work efficiently.
Organized into Industry Categories:
- Marketing & Social Media
- Software Engineering & DevOps
- Finance, Accounting & Crypto
- Healthcare & Medical Diagnostics
- E-Commerce & Retail
- HR, Recruitment & Career
- Legal, Real Estate & Compliance
- Education & Academic Research
- Data Science, AI & Analytics
- Cybersecurity & Threat Detection
- Productivity, Writing & Creative
- Supply Chain, Logistics & Operations
"""

import os
import sys
from pathlib import Path

# Ensure categories package can be imported whether called from root main.py or backend/
_here = Path(__file__).parent
if str(_here) not in sys.path:
    sys.path.insert(0, str(_here))

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI

from categories import ALL_CATEGORIZED_TEMPLATES

TEMPLATES: dict[str, dict] = ALL_CATEGORIZED_TEMPLATES


def _get_llm() -> ChatOpenAI:
    return ChatOpenAI(
        model=os.environ.get("LLM_MODEL", "openai/gpt-4o-mini"),
        temperature=0.4,
        base_url="https://openrouter.ai/api/v1",
        api_key=os.environ["OPENROUTER_API_KEY"],
    )


def run_crew(template_id: str, user_input: str) -> list[dict]:
    """Run a crew sequentially. Returns list of {role, output} dicts."""
    template = TEMPLATES.get(template_id)
    if not template:
        raise ValueError(f"Unknown template: {template_id}")

    llm = _get_llm()
    context = user_input
    outputs: list[dict] = []

    for i, agent in enumerate(template["agents"]):
        is_first = i == 0
        system = (
            f"You are a {agent['role']}.\n"
            f"Goal: {agent['goal']}\n\n"
            "Be specific, professional, and actionable. Avoid vague generalities."
        )
        if not is_first:
            system += f"\n\nPrevious agent's output (build on this):\n{context}"

        human = (
            f"Original task: {user_input}\n\n"
            + ("Complete your goal." if is_first else "Now complete your goal using the previous output above.")
        )

        resp = llm.invoke([SystemMessage(content=system), HumanMessage(content=human)])
        context = resp.content
        outputs.append({"role": agent["role"], "output": resp.content})

    return outputs
