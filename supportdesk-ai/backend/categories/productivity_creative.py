"""
Category: Productivity, Writing, Design & Creative (40 Specialized Agent Teams)
"""

PRODUCTIVITY_CREATIVE_TEMPLATES: dict[str, dict] = {
    "meeting_notes": {
        "name": "Meeting Notes & Action Extractor",
        "category": "Productivity",
        "description": "Transform meeting transcripts into clear action items and owner assignments.",
        "icon": "📝",
        "input_label": "Paste meeting transcript or raw notes",
        "agents": [
            {"role": "Executive Assistant", "goal": "Extract key discussion topics, decisions made, open questions, and timeline commitments."},
            {"role": "Project Manager", "goal": "Format into a clean summary with explicit Action Items table: Task | Owner | Priority | Deadline."}
        ]
    },
    "copy_editor_proofreader": {
        "name": "Professional Copy Editor & Proofreader",
        "category": "Writing & Editing",
        "description": "Edit text for grammar, punctuation, style consistency, and tone enhancement.",
        "icon": "✍️",
        "input_label": "Paste draft text to edit",
        "agents": [
            {"role": "Grammar & Style Specialist", "goal": "Correct grammatical errors, passive voice, awkward phrasing, and typos."},
            {"role": "Managing Editor", "goal": "Provide polished final text + bulleted list of major improvements made."}
        ]
    },
    "presentation_deck_designer": {
        "name": "Slide Presentation Deck Architect",
        "category": "Creative & Design",
        "description": "Design slide-by-slide outlines, visual layout prompts, and presenter scripts.",
        "icon": "📊",
        "input_label": "Presentation topic, target audience, and number of slides",
        "agents": [
            {"role": "Visual Storytelling Strategist", "goal": "Structure narrative arc: Hook, Context, Problem, Solution, Evidence, and Call-to-Action."},
            {"role": "Slide Designer & Copywriter", "goal": "Write 10-slide outline with Slide Title, 3 Bullet Points, Visual Graphic Prompt, and Speaker Script."}
        ]
    },
    "midjourney_prompt_generator": {
        "name": "Midjourney & DALL-E AI Art Prompt Studio",
        "category": "Creative AI",
        "description": "Generate ultra-detailed Midjourney v6 and DALL-E 3 image generation prompts.",
        "icon": "🎨",
        "input_label": "Image concept, subject, atmosphere, or artistic style desired",
        "agents": [
            {"role": "AI Visual Concept Artist", "goal": "Specify subject framing, lighting (cinematic, volumetric), camera lens (85mm, f/1.8), and color grading."},
            {"role": "Midjourney Prompt Engineer", "goal": "Output 5 optimized Midjourney v6 prompts with parameters (--ar 16:9 --v 6.0 --style raw --stylize 250)."}
        ]
    },
    "video_script_storyboard": {
        "name": "YouTube & Commercial Video Storyboarder",
        "category": "Video Production",
        "description": "Build two-column video storyboards (Visual Scene | Audio/Voiceover).",
        "icon": "🎬",
        "input_label": "Video concept, product/topic, and target video length",
        "agents": [
            {"role": "Video Director", "goal": "Plan shot types (Wide, Medium, Close-Up), camera movement, B-roll, and music mood transitions."},
            {"role": "Storyboard Writer", "goal": "Format two-column table: [Scene # & Shot Type | Visual Description | Voiceover / Audio FX]."}
        ]
    },
    "fiction_worldbuilding_architect": {
        "name": "Fiction Worldbuilding & Character Architect",
        "category": "Creative Writing",
        "description": "Develop deep fantasy/sci-fi world lore, magic systems, and character profiles.",
        "icon": "🗡️",
        "input_label": "Story genre, core premise, or world concept",
        "agents": [
            {"role": "Worldbuilding Specialist", "goal": "Define geography, magic/technology rules, societal factions, history lore, and cultural norms."},
            {"role": "Character Developer", "goal": "Create 2 detailed character dossiers: Backstory, Motivation, Flaw, Internal Conflict, and Voice."}
        ]
    },
    "speech_writer_keynote": {
        "name": "Executive Keynote & Speechwriter",
        "category": "Public Speaking",
        "description": "Write persuasive keynotes, commencement speeches, and award acceptance talks.",
        "icon": "🎤",
        "input_label": "Occasion, audience, key message, time limit, and speaker persona",
        "agents": [
            {"role": "Rhetoric & Speech Strategist", "goal": "Structure opening story hook, rhetorical devices (Rule of Three, Anaphora), and emotional climax."},
            {"role": "Executive Speechwriter", "goal": "Write full speech script with stage directions, pause markers, and emphasis callouts."}
        ]
    },
    "screenplay_scene_dialogue": {
        "name": "Screenplay Scene & Dialogue Writer",
        "category": "Screenwriting",
        "description": "Write formatted screenplay scenes in standard Industry Script format.",
        "icon": "🎭",
        "input_label": "Scene context, characters involved, and dramatic conflict",
        "agents": [
            {"role": "Screenwriting Analyst", "goal": "Establish Scene Heading (INT/EXT), character subtext, pacing, and visual action beats."},
            {"role": "Screenplay Writer", "goal": "Output Industry Standard script scene: Scene Heading, Action Lines, Character Names, Parentheticals, and Dialogue."}
        ]
    },
    "notion_workspace_template": {
        "name": "Notion & Coda Workspace Template Architect",
        "category": "Productivity",
        "description": "Design custom Notion database schemas, view properties, and dashboard layouts.",
        "icon": "📓",
        "input_label": "Use-case (e.g. Project Tracker, Content Calendar, CRM, Habit Tracker)",
        "agents": [
            {"role": "Notion Solutions Architect", "goal": "Design database relation schemas, formula fields, rollups, and view filters (Board, Table, Calendar)."},
            {"role": "Productivity Systems Writer", "goal": "Deliver complete Notion Workspace Setup Guide with database property tables and layout instructions."}
        ]
    },
    "time_blocking_schedule": {
        "name": "Time-Blocking & Energy Management Planner",
        "category": "Personal Productivity",
        "description": "Build high-output daily time-blocking schedules based on circadian energy.",
        "icon": "⏰",
        "input_label": "List of daily tasks, priority goals, meetings, and peak focus hours",
        "agents": [
            {"role": "Productivity Coach", "goal": "Apply Eisenhower Matrix (Urgent vs Important), Deep Work blocks, and energy management principles."},
            {"role": "Time-Blocking Architect", "goal": "Output hour-by-hour Daily Schedule from 6:00 AM to 9:00 PM with color-coded task blocks and buffer breaks."}
        ]
    },
    "podcast_interview_questions": {
        "name": "Podcast Host Interview Question Generator",
        "category": "Podcasting",
        "description": "Generate deep, unique podcast guest interview questions that go beyond standard PR answers.",
        "icon": "🎙️",
        "input_label": "Guest bio/name, area of expertise, and podcast theme",
        "agents": [
            {"role": "Podcast Researcher", "goal": "Uncover guest's previous interview patterns, unique stories, and lesser-known perspectives."},
            {"role": "Master Interviewer", "goal": "Produce 10 deep, conversational interview questions categorized into Icebreaker, Deep Dive, and Rapid Fire."}
        ]
    },
    "newsletter_naming_branding": {
        "name": "Newsletter Brand & Naming Specialist",
        "category": "Substack & Media",
        "description": "Design newsletter names, taglines, section headers, and Substack launch plans.",
        "icon": "📰",
        "input_label": "Newsletter topic, target reader, and writing style",
        "agents": [
            {"role": "Substack Publication Strategist", "goal": "Analyze 5 naming angles (Descriptive, Punny, Direct, Intriguing, Personal Brand)."},
            {"role": "Newsletter Media Designer", "goal": "Deliver 15 Newsletter Title Ideas, Tagline options, 3 recurring Section names, and Welcome Email outline."}
        ]
    },
    "ui_ux_user_persona_builder": {
        "name": "UI/UX User Persona & Journey Mapper",
        "category": "Product Design",
        "description": "Build comprehensive UX User Personas, pain points, and customer journey maps.",
        "icon": "👥",
        "input_label": "Product type + target user demographic & goal",
        "agents": [
            {"role": "UX Researcher", "goal": "Define persona demographics, motivations, frustrations, tech tech literacy, and jobs-to-be-done (JTBD)."},
            {"role": "Product Experience Designer", "goal": "Produce 2 detailed User Persona Dossiers + User Journey Map (Awareness -> Consideration -> Onboarding -> Mastery)."}
        ]
    },
    "song_lyrics_chords_writer": {
        "name": "Songwriting & Lyricist Assistant",
        "category": "Music & Lyrics",
        "description": "Write original song lyrics, verse/chorus structures, and chord progressions.",
        "icon": "🎵",
        "input_label": "Song genre (Pop, Rock, Hip-Hop, Country, R&B), mood, and story theme",
        "agents": [
            {"role": "Lyricist & Rhyme Analyst", "goal": "Structure song form: Verse 1, Pre-Chorus, Chorus, Verse 2, Chorus, Bridge, Outro."},
            {"role": "Songwriter", "goal": "Write complete song lyrics with suggested chord progressions (e.g. I-V-vi-IV) above lines."}
        ]
    },
    "brand_naming_domain_ideas": {
        "name": "Brand Naming & Available Domain Ideas",
        "category": "Branding",
        "description": "Generate 40 creative brand names categorized by naming style.",
        "icon": "🏷️",
        "input_label": "Product concept, target audience, and vibe desired",
        "agents": [
            {"role": "Brand Naming Architect", "goal": "Brainstorm 5 naming categories: Compound words, Portmanteaus, Invented words, Real words, Foreign origin."},
            {"role": "Domain Strategy Copywriter", "goal": "Output 40 brand name ideas + suggested TLD extensions (.com, .io, .ai, .co) and social handles."}
        ]
    }
}
