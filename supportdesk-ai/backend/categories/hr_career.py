"""
Category: HR, Recruitment, Career & Talent (30 Specialized Agent Teams)
"""

HR_CAREER_TEMPLATES: dict[str, dict] = {
    "resume_parser": {
        "name": "Resume Parser & HR Matcher",
        "category": "HR & Recruitment",
        "description": "Analyze candidate resumes against job requisitions and evaluate fit.",
        "icon": "👔",
        "input_label": "Paste candidate resume text + target job description",
        "agents": [
            {"role": "Talent Acquisition Specialist", "goal": "Extract key technical skills, years of experience, accomplishments, and education history."},
            {"role": "HR Hiring Manager", "goal": "Generate candidate evaluation report: fit score (0-100%), skill gaps, strengths, and interview questions."}
        ]
    },
    "job_description_writer": {
        "name": "Inclusive Job Description Writer",
        "category": "HR & Talent",
        "description": "Write engaging, bias-free job postings optimized for LinkedIn and Indeed.",
        "icon": "📜",
        "input_label": "Job title, department, key responsibilities, and experience level",
        "agents": [
            {"role": "Diversity & Inclusion Specialist", "goal": "Audit for gender-biased language, non-essential requirements, and accessibility barriers."},
            {"role": "Talent Brand Copywriter", "goal": "Write job description: About Us hook, Responsibilities, Qualifications, and Perks & Benefits."}
        ]
    },
    "candidate_interview_questions": {
        "name": "Behavioral & Technical Interview Generator",
        "category": "Interviewing",
        "description": "Generate STAR-method behavioral and technical role-specific interview rubrics.",
        "icon": "❓",
        "input_label": "Role title, seniority level (Junior/Mid/Senior/Lead), and core competencies",
        "agents": [
            {"role": "Competency Architecture Specialist", "goal": "Define core technical competencies, culture alignment traits, and red flag behaviors."},
            {"role": "Interview Coach", "goal": "Produce 5 STAR-method questions + scoring rubric (Poor/Good/Excellent answers)."}
        ]
    },
    "employee_onboarding_plan": {
        "name": "30-60-90 Day Employee Onboarding Plan",
        "category": "HR & Onboarding",
        "description": "Design structured 30-60-90 day onboarding goals for new hires.",
        "icon": "🗓️",
        "input_label": "New hire role, department, and team objectives",
        "agents": [
            {"role": "People Operations Manager", "goal": "Structure 30-day (Learn), 60-day (Execute), and 90-day (Lead/Optimize) milestones."},
            {"role": "Employee Experience Designer", "goal": "Deliver 30-60-90 Day Onboarding Plan document with 1-on-1 check-in templates."}
        ]
    },
    "performance_review_writer": {
        "name": "Performance Review & Self-Evaluation Agent",
        "category": "Performance Management",
        "description": "Draft objective 360-degree performance reviews and constructive feedback.",
        "icon": "📊",
        "input_label": "Employee accomplishments, key projects, areas for growth, and rating level",
        "agents": [
            {"role": "Performance Management Consultant", "goal": "Synthesize feedback using SBI model (Situation-Behavior-Impact) and objective metrics."},
            {"role": "HR Communications Specialist", "goal": "Draft balanced Performance Review summary with strengths, growth opportunities, and SMART goals."}
        ]
    },
    "cover_letter_optimizer": {
        "name": "Tailored Cover Letter & Application Writer",
        "category": "Career Guidance",
        "description": "Write compelling, company-tailored cover letters that land interviews.",
        "icon": "✉️",
        "input_label": "Job description + applicant resume summary + company name",
        "agents": [
            {"role": "Career Positioning Strategist", "goal": "Identify candidate's top 3 matching achievements for the job's biggest pain points."},
            {"role": "Executive Resume Copywriter", "goal": "Write 3-paragraph tailored Cover Letter with a strong hook and clear CTA."}
        ]
    },
    "exit_interview_analyzer": {
        "name": "Exit Interview & Employee Retention Agent",
        "category": "People Analytics",
        "description": "Analyze exit interview notes to identify turnover drivers and workplace fixes.",
        "icon": "🚪",
        "input_label": "Paste raw exit interview transcripts or feedback notes",
        "agents": [
            {"role": "People Analytics Specialist", "goal": "Categorize turnover themes: compensation, management, work-life balance, career growth."},
            {"role": "HR Strategy Director", "goal": "Produce Exit Interview Synthesis Report with top retention risks and 3 actionable fixes."}
        ]
    },
    "salary_compensation_benchmark": {
        "name": "Salary & Compensation Benchmarking Agent",
        "category": "Total Rewards",
        "description": "Benchmark market salary ranges, equity grants, and bonus structures.",
        "icon": "💰",
        "input_label": "Job title, location/remote, experience level, and company stage",
        "agents": [
            {"role": "Compensation & Benefits Analyst", "goal": "Analyze market percentile benchmarks (25th, 50th, 75th, 90th), COLA adjustments, and stock options."},
            {"role": "Total Rewards Advisory", "goal": "Produce Compensation Band Proposal: Base Salary range, Target Bonus %, and Equity grant range."}
        ]
    },
    "linkedin_headline_about": {
        "name": "LinkedIn Profile Optimizer (Headline & About)",
        "category": "Personal Branding",
        "description": "Write SEO-optimized LinkedIn headlines, About summaries, and featured sections.",
        "icon": "👤",
        "input_label": "Current role, target career transition/goal, and key skills",
        "agents": [
            {"role": "LinkedIn Executive Recruiter", "goal": "Analyze recruiter search keywords, social proof hooks, and authority positioning."},
            {"role": "Personal Brand Ghostwriter", "goal": "Deliver 3 LinkedIn Headline options (with emojis) + 1 First-Person 'About' story summary."}
        ]
    },
    "remote_work_policy": {
        "name": "Remote & Hybrid Work Policy Creator",
        "category": "HR Policy",
        "description": "Draft clear remote work, flexible hours, and equipment stipend policies.",
        "icon": "🏠",
        "input_label": "Company size, core hours requirement, and equipment allowance",
        "agents": [
            {"role": "HR Operations Specialist", "goal": "Define working hours, communication SLAs (Slack/Email), home office stipend, and security guidelines."},
            {"role": "Policy Communications Writer", "goal": "Write complete Remote Work Employee Handbook Policy ready for team distribution."}
        ]
    },
    "employee_recognition_award": {
        "name": "Employee Recognition & Peer Nomination Writer",
        "category": "Employee Engagement",
        "description": "Write meaningful peer recognition notes, spot bonus awards, and shout-outs.",
        "icon": "🏆",
        "input_label": "Nominee name, contribution description, and company value demonstrated",
        "agents": [
            {"role": "Employee Engagement Specialist", "goal": "Highlight specific impact, effort, and alignment with company core values."},
            {"role": "Internal Communications Writer", "goal": "Draft peer recognition shout-out for Slack/Townhall + formal certificate message."}
        ]
    },
    "conflict_resolution_mediator": {
        "name": "Workplace Conflict Mediation & Communication",
        "category": "Employee Relations",
        "description": "Guide HR managers through workplace conflict resolution and conversation scripts.",
        "icon": "🤝",
        "input_label": "Conflict situation description between team members or manager/report",
        "agents": [
            {"role": "Employee Relations Mediator", "goal": "Analyze underlying perspectives, communication breakdowns, and common ground."},
            {"role": "HR Mediation Coach", "goal": "Produce Mediation Meeting Agenda + 1-on-1 discussion scripts for both parties."}
        ]
    },
    "internship_program_designer": {
        "name": "Internship Program & Project Guide",
        "category": "University Relations",
        "description": "Design 10-week summer internship project scopes and mentorship rubrics.",
        "icon": "🎓",
        "input_label": "Internship department (Eng, Marketing, Design), duration, and goals",
        "agents": [
            {"role": "University Relations Manager", "goal": "Structure 10-week milestone project, weekly learning objectives, and mentor check-ins."},
            {"role": "Internship Program Coordinator", "goal": "Deliver Internship Project Scope Document + Mid-Term and Final Evaluation Rubric."}
        ]
    },
    "corporate_wellness_program": {
        "name": "Corporate Wellness & Mental Health Program",
        "category": "Employee Wellness",
        "description": "Design employee wellness initiatives, mental health days, and challenge calendars.",
        "icon": "🧘",
        "input_label": "Company budget, team setup (Remote/Office), and wellness goals",
        "agents": [
            {"role": "Corporate Wellness Strategist", "goal": "Design wellness pillars: Mental Health, Physical Activity, Ergonomics, and Burnout Prevention."},
            {"role": "Employee Wellness Coordinator", "goal": "Deliver 30-Day Workplace Wellness Calendar + announcement email and activity guidelines."}
        ]
    },
    "promotion_business_case": {
        "name": "Employee Promotion Pitch & Business Case",
        "category": "Career Advancement",
        "description": "Write persuasive promotion business cases and title upgrade requests.",
        "icon": "🚀",
        "input_label": "Current title, requested title, key achievements, and expanded scope of work",
        "agents": [
            {"role": "Career Development Coach", "goal": "Frame accomplishments in terms of business revenue, team leadership, and next-level scope."},
            {"role": "Executive Pitch Writer", "goal": "Draft 1-page Promotion Business Case document for manager and HR review."}
        ]
    }
}
