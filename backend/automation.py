"""
Role-based agent crews for business automation.
Each template chains multiple specialized agents sequentially.
"""

import os
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI

_OPENROUTER_BASE = "https://openrouter.ai/api/v1"

TEMPLATES: dict[str, dict] = {
    "lead_research": {
        "name": "Lead Research",
        "description": "Research a company or person and produce a sales prospect report.",
        "icon": "🔍",
        "input_label": "Company or person name + any context",
        "agents": [
            {
                "role": "Business Intelligence Researcher",
                "goal": "Gather comprehensive information about the target: industry, size, products, recent news, key people, and likely pain points.",
            },
            {
                "role": "Sales Strategist",
                "goal": "Turn the research into a concise prospect report with: company snapshot, key talking points, objection handling, and a recommended opening line.",
            },
        ],
    },
    "content_writer": {
        "name": "Content Writer",
        "description": "Research a topic and write a polished blog post or article.",
        "icon": "✍️",
        "input_label": "Topic, target audience, and desired tone",
        "agents": [
            {
                "role": "Research Analyst",
                "goal": "Research the topic thoroughly. Identify key arguments, statistics, examples, and structure for an article.",
            },
            {
                "role": "Content Writer",
                "goal": "Write a complete, engaging article with a headline, introduction, body sections with subheadings, and a conclusion. Use the research provided.",
            },
        ],
    },
    "competitor_analysis": {
        "name": "Competitor Analysis",
        "description": "Analyze a competitor and produce a strategic SWOT report.",
        "icon": "📊",
        "input_label": "Competitor name + your own product/service",
        "agents": [
            {
                "role": "Market Researcher",
                "goal": "Research the competitor: their products, pricing, target market, positioning, strengths, and weaknesses based on publicly known information.",
            },
            {
                "role": "Strategy Consultant",
                "goal": "Create a detailed SWOT analysis and 3–5 strategic recommendations for how to compete against or differentiate from this competitor.",
            },
        ],
    },
    "cold_email": {
        "name": "Cold Email Writer",
        "description": "Write a personalized cold outreach email that gets replies.",
        "icon": "📧",
        "input_label": "Target company/person + your product or service",
        "agents": [
            {
                "role": "Prospect Researcher",
                "goal": "Understand the prospect's likely role, goals, and pain points. Identify a specific angle that makes your outreach relevant to them.",
            },
            {
                "role": "Sales Copywriter",
                "goal": "Write a short (under 150 words), highly personalized cold email. Subject line + body. One clear CTA. No fluff. Sound human, not salesy.",
            },
        ],
    },
    "support_digest": {
        "name": "Support Digest",
        "description": "Analyze support patterns and generate an actionable insights report.",
        "icon": "📋",
        "input_label": "Describe recent support issues, common complaints, or a time period",
        "agents": [
            {
                "role": "Support Data Analyst",
                "goal": "Identify patterns, recurring issues, root causes, and trends from the support information provided.",
            },
            {
                "role": "Operations Strategist",
                "goal": "Write an actionable digest report: top issues ranked by frequency, root cause analysis, and 3–5 concrete recommendations to reduce ticket volume.",
            },
        ],
    },
    "social_media": {
        "name": "Social Media Pack",
        "description": "Create a week of social media posts for any platform.",
        "icon": "📱",
        "input_label": "Your product/service + target platform (LinkedIn, Twitter, Instagram)",
        "agents": [
            {
                "role": "Brand Strategist",
                "goal": "Define the content pillars, tone, and key messages to convey for the week. Outline 7 post ideas with angles.",
            },
            {
                "role": "Social Media Copywriter",
                "goal": "Write all 7 posts in full, ready to publish. Include hashtags where appropriate. Match the platform's style.",
            },
        ],
    },
}


def _get_llm() -> ChatOpenAI:
    return ChatOpenAI(
        model=os.environ.get("LLM_MODEL", "openai/gpt-4o-mini"),
        temperature=0.4,
        base_url=_OPENROUTER_BASE,
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
