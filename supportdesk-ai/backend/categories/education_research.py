"""
Category: Education, Learning & Academic Research (40 Specialized Agent Teams)
"""

EDUCATION_RESEARCH_TEMPLATES: dict[str, dict] = {
    "academic_paper_summarizer": {
        "name": "Academic Research Paper Summarizer",
        "category": "Academic Research",
        "description": "Extract methodology, core findings, limitations, and citations from papers.",
        "icon": "🎓",
        "input_label": "Paste academic paper text, abstract, or arXiv link text",
        "agents": [
            {"role": "Academic Literature Researcher", "goal": "Extract research hypothesis, methodology, dataset size, statistical significance, and limitations."},
            {"role": "Scientific Communicator", "goal": "Produce Academic Paper Digest: Executive Summary, Key Methodology, Main Findings Table, and Future Research Directions."}
        ]
    },
    "course_curriculum_designer": {
        "name": "Online Course & Curriculum Architect",
        "category": "Education",
        "description": "Design module-by-module course curriculums with learning objectives and quizzes.",
        "icon": "📚",
        "input_label": "Course topic, target skill level (Beginner/Intermediate), and duration (weeks)",
        "agents": [
            {"role": "Instructional Design Specialist", "goal": "Apply Bloom's Taxonomy to map weekly learning outcomes, lecture topics, hands-on projects, and assessments."},
            {"role": "Curriculum Copywriter", "goal": "Produce complete Course Syllabus Document with module titles, lesson outlines, project specs, and quiz prompts."}
        ]
    },
    "virtual_tutor_study_plan": {
        "name": "Personalized Study Partner & Exam Prep",
        "category": "Education",
        "description": "Create study schedules, flashcards, and concept explanations.",
        "icon": "🧠",
        "input_label": "Subject (e.g. Organic Chemistry, Calculus, SAT/GRE) + exam date",
        "agents": [
            {"role": "Cognitive Learning Specialist", "goal": "Apply Spaced Repetition and Active Recall strategies to break down syllabus into daily study blocks."},
            {"role": "Virtual Academic Tutor", "goal": "Deliver personalized 30-Day Study Plan + 10 Key Flashcard Q&A sets + 3 practice exam questions."}
        ]
    },
    "grant_research_proposal": {
        "name": "Academic Grant & Research Proposal Writer",
        "category": "Research Funding",
        "description": "Draft research proposals for NSF, NIH, or institutional research grants.",
        "icon": "🏛️",
        "input_label": "Research project title, field, funding agency, and core hypothesis",
        "agents": [
            {"role": "Principal Investigator (PI) Analyst", "goal": "Structure research significance, innovation claims, methodology rigor, and broader impacts."},
            {"role": "Grant Proposal Writer", "goal": "Draft Research Strategy document: Specific Aims, Background & Significance, Research Design, and Timeline."}
        ]
    },
    "language_learning_tutor": {
        "name": "Language Immersion & Conversation Tutor",
        "category": "Language Learning",
        "description": "Generate situational language dialogues, grammar explanations, and vocab exercises.",
        "icon": "🗣️",
        "input_label": "Target language (Spanish, French, Mandarin, German) + proficiency level (A1-C2) + situation",
        "agents": [
            {"role": "Linguistics & Pedagogy Specialist", "goal": "Identify CEFR level vocabulary, grammar structures, idiomatic expressions, and common learner mistakes."},
            {"role": "Language Conversation Coach", "goal": "Produce 2-person realistic dialogue (with translations) + 5 key vocabulary breakdowns + 3 practice prompts."}
        ]
    },
    "stem_problem_solver": {
        "name": "STEM Math & Science Problem Solver",
        "category": "STEM Education",
        "description": "Provide step-by-step solutions and explanations for math, physics, and coding problems.",
        "icon": "🧮",
        "input_label": "Paste math/physics/engineering problem statement",
        "agents": [
            {"role": "STEM Academic Specialist", "goal": "Identify core formulas, physical laws, boundary conditions, and mathematical steps required."},
            {"role": "STEM Educator", "goal": "Deliver step-by-step solution with clear latex/text equations, conceptual explanations for each step, and final answer."}
        ]
    },
    "essay_editing_feedback": {
        "name": "Essay Review & Thesis Enhancement",
        "category": "Writing & Humanities",
        "description": "Review student essays for thesis strength, argumentation, structure, and citations.",
        "icon": "📝",
        "input_label": "Paste essay draft + essay prompt/rubric",
        "agents": [
            {"role": "Humanities Professor", "goal": "Evaluate thesis clarity, evidence strength, logical flow, counter-argument handling, and paragraph transitions."},
            {"role": "Academic Writing Editor", "goal": "Produce Essay Feedback Report with thesis reframing options, structural revisions, and APA/MLA citation checks."}
        ]
    },
    "literature_review_matrix": {
        "name": "Literature Review Synthesis Matrix",
        "category": "Academic Research",
        "description": "Synthesize multiple research papers into a thematic literature review matrix.",
        "icon": "📖",
        "input_label": "Research field/topic or list of 3-5 paper titles and abstracts",
        "agents": [
            {"role": "Systematic Reviewer", "goal": "Identify major theoretical frameworks, consensus points, debate areas, and research gaps across literature."},
            {"role": "Academic Synthesis Writer", "goal": "Produce Literature Review Matrix table + 3-paragraph synthesized Background section."}
        ]
    },
    "flashcard_deck_generator": {
        "name": "Anki & Quizlet Flashcard Generator",
        "category": "Study Tools",
        "description": "Convert textbook chapters or notes into Anki-ready flashcard decks.",
        "icon": "🗂️",
        "input_label": "Paste chapter text or raw lecture notes",
        "agents": [
            {"role": "Information Extraction Specialist", "goal": "Extract key definitions, formulas, dates, paired concepts, and cause-and-effect relationships."},
            {"role": "Anki Deck Creator", "goal": "Output 20 clean Question/Answer flashcards formatted for Anki/Quizlet import (tab-separated)." }
        ]
    },
    "edtech_gamification_designer": {
        "name": "EdTech Gamification & Quiz Designer",
        "category": "EdTech",
        "description": "Design interactive educational games, point systems, and Kahoot quizzes.",
        "icon": "🎮",
        "input_label": "Topic/Subject + target age group (K-12, College, Adult Learners)",
        "agents": [
            {"role": "Gamification Learning Architect", "goal": "Design mechanics: XP points, streak counters, badge milestones, and interactive challenge loops."},
            {"role": "EdTech Content Developer", "goal": "Deliver 10-question multiple-choice Kahoot-style quiz deck with explanations and distractor answer rationale."}
        ]
    },
    "rubric_grading_generator": {
        "name": "Educational Grading Rubric Generator",
        "category": "Education",
        "description": "Build transparent 4-tier grading rubrics (Exemplary, Proficient, Developing, Unacceptable).",
        "icon": "📊",
        "input_label": "Assignment title, grade level, and assessment criteria",
        "agents": [
            {"role": "Assessment & Evaluation Specialist", "goal": "Define 4 core evaluation criteria (e.g. Thesis, Evidence, Organization, Mechanics)."},
            {"role": "Rubric Developer", "goal": "Produce complete 4x4 Grading Rubric Matrix table with detailed descriptors for each grade tier."}
        ]
    },
    "special_education_iep_plan": {
        "name": "IEP Goal & Accommodations Assistant",
        "category": "Special Education",
        "description": "Draft Individualized Education Program (IEP) goals and classroom accommodations.",
        "icon": "🧩",
        "input_label": "Student grade level, learning difference (e.g. Dyslexia, ADHD, Autism), and current skill level",
        "agents": [
            {"role": "Special Education Coordinator", "goal": "Identify SMART (Specific, Measurable, Achievable, Relevant, Time-bound) academic and behavioral goals."},
            {"role": "IEP Specialist", "goal": "Deliver 3 SMART IEP Goals + classroom accommodations list (extra time, assistive tech, sensory breaks)."}
        ]
    },
    "coding_bootcamp_project_spec": {
        "name": "Coding Bootcamp Capstone Project Builder",
        "category": "Tech Education",
        "description": "Design full-stack capstone project specifications for software engineering students.",
        "icon": "💻",
        "input_label": "Tech stack (e.g. React + Node + PostgreSQL) + difficulty level",
        "agents": [
            {"role": "Bootcamp Curriculum Lead", "goal": "Design project scope, required MVP features, stretch goals, and architectural requirements."},
            {"role": "Technical Spec Author", "goal": "Deliver Capstone Project Spec: User Stories, ERD Schema outline, API endpoints list, and Grading Rubric."}
        ]
    },
    "book_summary_key_takeaways": {
        "name": "Non-Fiction Book Summary & Action Plan",
        "category": "Self-Improvement",
        "description": "Distill 300-page business/self-help books into key takeaways and action plans.",
        "icon": "📚",
        "input_label": "Book title & author name (e.g. 'Atomic Habits by James Clear')",
        "agents": [
            {"role": "Executive Book Analyst", "goal": "Deconstruct core framework, mental models, key stories, and central thesis of the book."},
            {"role": "Action Plan Coach", "goal": "Produce 1-page Book Summary: Core Philosophy, 5 Key Lessons, Famous Quotes, and 7-Day Implementation Challenge."}
        ]
    },
    "history_documentary_script": {
        "name": "Historical Event & Documentary Scriptwriter",
        "category": "History & Humanities",
        "description": "Transform historical events into dramatic documentary scripts and educational timelines.",
        "icon": "📜",
        "input_label": "Historical event, era, or figure (e.g. Apollo 11 Mission, Industrial Revolution)",
        "agents": [
            {"role": "Historian Specialist", "goal": "Extract accurate chronological timeline, primary source quotes, key figures, and historical impact."},
            {"role": "Documentary Scriptwriter", "goal": "Write 3-minute video script with voiceover narrative, visual archival prompts, and dramatic pacing."}
        ]
    }
}
