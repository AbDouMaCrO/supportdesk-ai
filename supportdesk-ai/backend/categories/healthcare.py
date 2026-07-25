"""
Category: Healthcare, Medical Diagnostics & Clinical Research (40 Specialized Agent Teams)
"""

HEALTHCARE_TEMPLATES: dict[str, dict] = {
    "medical_report_analyzer": {
        "name": "Medical Report & Diagnostic Insight Agent",
        "category": "Healthcare",
        "description": "Analyze medical lab reports, bloodwork metrics, and clinical summaries.",
        "icon": "🩺",
        "input_label": "Paste lab results (CBC, Lipid Panel, Metabolic Panel) or clinical notes",
        "agents": [
            {"role": "Clinical Pathologist Analyst", "goal": "Parse biomarker values, out-of-range lab metrics, and physiological indicators."},
            {"role": "Medical Insight Communicator", "goal": "Translate lab findings into patient-friendly explanations, key questions for doctor, and lifestyle notes."}
        ]
    },
    "symptom_triage_assistant": {
        "name": "Symptom Triage & Clinical Guidance Agent",
        "category": "Healthcare",
        "description": "Provide initial clinical symptom triage and urgency categorization.",
        "icon": "🏥",
        "input_label": "Describe symptoms, duration, age, and medical history",
        "agents": [
            {"role": "Triage Nurse Specialist", "goal": "Evaluate symptom severity (Emergency vs Urgent vs Routine), red flags, and risk factors."},
            {"role": "Clinical Information Specialist", "goal": "Draft triage guidance note highlighting emergency signs, recommended specialist type, and preparation tips."}
        ]
    },
    "drug_interaction_checker": {
        "name": "Pharmaceutical & Drug Interaction Checker",
        "category": "Pharmacy & Pharmacology",
        "description": "Check potential interactions, contraindications, and side effects between medications.",
        "icon": "💊",
        "input_label": "List of current medications, supplements, and dosages",
        "agents": [
            {"role": "Clinical Pharmacologist", "goal": "Analyze cytochrome P450 pathways, drug-drug interactions, food-drug interactions, and contraindications."},
            {"role": "Pharmacy Safety Specialist", "goal": "Produce Drug Interaction Safety Summary ranking severity (Major/Moderate/Minor) with pharmacist consultation advice."}
        ]
    },
    "clinical_trial_matcher": {
        "name": "Clinical Trial & Medical Study Matcher",
        "category": "Clinical Research",
        "description": "Match patient condition criteria against active ClinicalTrials.gov studies.",
        "icon": "🔬",
        "input_label": "Medical condition, stage/subtype, location, and previous treatments",
        "agents": [
            {"role": "Clinical Trial Researcher", "goal": "Identify relevant Phase 1-4 clinical trial protocols, eligibility inclusion/exclusion criteria, and trial sites."},
            {"role": "Patient Advocacy Specialist", "goal": "Summarize top 3 matching trials with NCT IDs, trial goals, location, and enrollment contact details."}
        ]
    },
    "health_insurance_prior_auth": {
        "name": "Prior Authorization & Claim Appeal Writer",
        "category": "Health Insurance",
        "description": "Generate prior authorization letters and insurance denial appeal justifications.",
        "icon": "📄",
        "input_label": "Denied medical procedure/medication, diagnosis code (ICD-10), and insurer reason",
        "agents": [
            {"role": "Medical Billing Compliance Lead", "goal": "Review medical necessity guidelines, ICD-10/CPT codes, and insurer denial documentation."},
            {"role": "Prior Auth Appeal Writer", "goal": "Draft formal Medical Necessity Appeal Letter referencing clinical guidelines and peer-reviewed evidence."}
        ]
    },
    "radiology_report_summarizer": {
        "name": "Radiology Report & Imaging Summarizer",
        "category": "Radiology",
        "description": "Translate complex MRI, CT scan, and X-ray radiology reports into clear terms.",
        "icon": "🦴",
        "input_label": "Paste radiology report text (MRI, CT, Ultrasound)",
        "agents": [
            {"role": "Radiology Information Specialist", "goal": "Parse imaging findings, anatomical measurements, radiologist impressions, and technical terminology."},
            {"role": "Patient Health Communicator", "goal": "Write plain-English explanation of radiology findings, key anatomical areas affected, and follow-up questions."}
        ]
    },
    "nutrition_meal_planner": {
        "name": "Clinical Dietitian & Therapeutic Meal Planner",
        "category": "Nutrition & Wellness",
        "description": "Design medical meal plans for Diabetes, Renal, FODMAP, or Cardiac diets.",
        "icon": "🥗",
        "input_label": "Dietary goal / medical condition (e.g. Type 2 Diabetes, Low Sodium, Keto) + preferences",
        "agents": [
            {"role": "Registered Clinical Dietitian", "goal": "Calculate macronutrient targets, glycemic index restrictions, micronutrient requirements, and dietary exclusions."},
            {"role": "Nutrition Meal Planner", "goal": "Deliver 7-day therapeutic meal plan with recipes, shopping list, and meal prep guidelines."}
        ]
    },
    "mental_health_wellness_journal": {
        "name": "Mental Health & CBT Wellness Companion",
        "category": "Mental Health",
        "description": "Provide Cognitive Behavioral Therapy (CBT) reflection prompts and grounding exercises.",
        "icon": "🧠",
        "input_label": "Current mood, anxious thoughts, or stress triggers",
        "agents": [
            {"role": "CBT Reflection Specialist", "goal": "Identify cognitive distortions (catastrophizing, all-or-nothing thinking) and reframe negative thoughts."},
            {"role": "Wellness & Grounding Guide", "goal": "Deliver personalized CBT reframing exercise + 5-4-3-2-1 grounding technique instructions."}
        ]
    },
    "genomic_variant_interpreter": {
        "name": "Genomic Variant & DNA Report Interpreter",
        "category": "Genomics",
        "description": "Interpret genetic variant reports (rsIDs, ClinVar classifications) and carrier risks.",
        "icon": "🧬",
        "input_label": "Gene symbol or SNP rsID (e.g. BRCA1, MTHFR rs1801133)",
        "agents": [
            {"role": "Genomic Bioinformatician", "goal": "Check ClinVar clinical significance, ACMG variant classification, and functional gene impact."},
            {"role": "Genetic Counseling Specialist", "goal": "Produce Genomic Insight Summary explaining inheritance risk, clinical relevance, and genetic counselor follow-up advice."}
        ]
    },
    "cardiovascular_risk_calculator": {
        "name": "Cardiovascular Health & ASCVD Risk Advisor",
        "category": "Cardiology",
        "description": "Calculate 10-year ASCVD cardiovascular risk and heart health factors.",
        "icon": "❤️",
        "input_label": "Age, systolic BP, total cholesterol, HDL, smoking status, diabetic status",
        "agents": [
            {"role": "Preventive Cardiology Specialist", "goal": "Calculate ASCVD 10-year risk percentage score and evaluate blood pressure/lipid targets."},
            {"role": "Heart Health Advisory", "goal": "Produce Heart Health Action Plan highlighting lifestyle modifications, exercise targets, and physician discussions."}
        ]
    },
    "diabetic_care_manager": {
        "name": "Diabetic Care & HbA1c Monitoring Advisor",
        "category": "Endocrinology",
        "description": "Analyze blood glucose logs, HbA1c trends, and insulin sensitivity factors.",
        "icon": "🩸",
        "input_label": "Fasting glucose readings, post-prandial levels, HbA1c history, and current therapy",
        "agents": [
            {"role": "Endocrinology Care Analyst", "goal": "Identify time-in-range percentage, glucose variability spikes, and glycemic trends."},
            {"role": "Diabetes Educator Specialist", "goal": "Produce Diabetic Management Guide with carb counting tips, hypoglycemia safety rules, and lifestyle adjustments."}
        ]
    },
    "pediatric_growth_milestone": {
        "name": "Pediatric Growth & Developmental Milestone Agent",
        "category": "Pediatrics",
        "description": "Track child growth percentiles and CDC/AAP developmental milestones.",
        "icon": "👶",
        "input_label": "Child age (months/years), height, weight, and developmental progress",
        "agents": [
            {"role": "Pediatric Health Specialist", "goal": "Evaluate WHO/CDC growth percentiles, motor/speech milestones, and immunization schedule."},
            {"role": "Parenting & Child Health Guide", "goal": "Deliver Developmental Progress Report with age-appropriate activities and well-child visit questions."}
        ]
    },
    "dermatology_skin_condition": {
        "name": "Dermatology & Skin Symptom Educational Agent",
        "category": "Dermatology",
        "description": "Analyze skin symptom descriptions and educational care guidelines.",
        "icon": "🧴",
        "input_label": "Describe skin symptom (rash, spot, lesion), location, duration, and triggers",
        "agents": [
            {"role": "Dermatology Research Specialist", "goal": "Analyze lesion characteristics (ABCDE criteria for moles, eczema vs psoriasis patterns)."},
            {"role": "Dermatological Care Communicator", "goal": "Produce Skin Care Educational Note with warning signs requiring urgent dermatologist evaluation."}
        ]
    },
    "sleep_apnea_hygiene_advisor": {
        "name": "Sleep Architecture & Hygiene Advisor",
        "category": "Sleep Medicine",
        "description": "Evaluate sleep quality logs, STOP-BANG sleep apnea risks, and sleep hygiene.",
        "icon": "🌙",
        "input_label": "Sleep duration, snoring status, daytime fatigue level, and bedtime routine",
        "agents": [
            {"role": "Sleep Medicine Analyst", "goal": "Evaluate STOP-BANG sleep apnea score, sleep latency, and circadian rhythm alignment."},
            {"role": "Sleep Optimization Specialist", "goal": "Deliver 14-day Sleep Hygiene Improvement Protocol with light exposure and wind-down routine."}
        ]
    },
    "sports_rehab_injury_protocol": {
        "name": "Sports Medicine & Physical Rehab Protocol",
        "category": "Sports Medicine",
        "description": "Create physical therapy exercise protocols for sprains, strains, and recovery.",
        "icon": "🏋️",
        "input_label": "Injured body part (e.g. ACL, Ankle sprain, Rotator cuff), phase of recovery, and pain score",
        "agents": [
            {"role": "Physical Therapy Specialist", "goal": "Determine PEACE & LOVE acute injury management phase, mobility exercises, and strength progressions."},
            {"role": "Sports Rehabilitation Guide", "goal": "Write 4-week Physical Rehab Exercise Routine with set/rep counts, safety constraints, and return-to-sport criteria."}
        ]
    },
    "geriatric_care_plan": {
        "name": "Geriatric Care & Senior Health Plan",
        "category": "Geriatrics",
        "description": "Design senior care plans covering fall prevention, polypharmacy, and mobility.",
        "icon": "👵",
        "input_label": "Senior age, mobility status, living arrangement, and health conditions",
        "agents": [
            {"role": "Geriatric Care Specialist", "goal": "Evaluate fall risk factors, activities of daily living (ADLs), cognitive status, and home safety hazards."},
            {"role": "Senior Wellness Advisory", "goal": "Deliver Comprehensive Senior Care Plan with home modification checklist and caregiver recommendations."}
        ]
    },
    "oncology_treatment_nav": {
        "name": "Oncology Support & Treatment Navigator",
        "category": "Oncology",
        "description": "Help cancer patients understand treatment options, side effect management, and resources.",
        "icon": "🎗️",
        "input_label": "Cancer type, stage, proposed treatment (Chemo/Radiation/Immunotherapy)",
        "agents": [
            {"role": "Oncology Information Nurse", "goal": "Explain NCCN treatment guidelines, mechanism of chemotherapy/immunotherapy, and common side effects."},
            {"role": "Patient Cancer Navigator", "goal": "Produce Supportive Cancer Care Guide covering nausea/fatigue management, nutrition tips, and support resources."}
        ]
    },
    "pregnancy_prenatal_guide": {
        "name": "Prenatal Care & Pregnancy Milestone Guide",
        "category": "Obstetrics",
        "description": "Track pregnancy trimesters, fetal development, and prenatal nutrition.",
        "icon": "🤰",
        "input_label": "Current week of pregnancy or due date + questions/symptoms",
        "agents": [
            {"role": "Obstetric Health Specialist", "goal": "Outline fetal development milestones for current week, recommended prenatal tests, and warning signs."},
            {"role": "Maternal Wellness Guide", "goal": "Deliver Weekly Pregnancy Guide with safe exercise recommendations, nutrition focus, and birth plan prep."}
        ]
    },
    "dental_oral_health_advisor": {
        "name": "Dental Symptom & Oral Health Advisor",
        "category": "Dentistry",
        "description": "Analyze dental symptoms (toothache, gum bleeding) and hygiene protocols.",
        "icon": "🦷",
        "input_label": "Describe dental symptom, location, pain trigger (hot/cold/chewing), and duration",
        "agents": [
            {"role": "Dental Clinical Specialist", "goal": "Analyze symptoms (Pulpitis vs Periodontal vs Sensitivity red flags) and urgency level."},
            {"role": "Oral Health Communicator", "goal": "Produce Dental Care Advice Note with home pain management tips and dentist appointment preparation."}
        ]
    },
    "telehealth_triage_intake": {
        "name": "Telehealth Patient Intake & History Agent",
        "category": "Telehealth",
        "description": "Generate comprehensive pre-visit medical history notes for virtual appointments.",
        "icon": "💻",
        "input_label": "Chief complaint, medical history, current medications, and allergies",
        "agents": [
            {"role": "Clinical Intake Specialist", "goal": "Structure HPI (History of Present Illness), Past Medical History (PMH), and Review of Systems (ROS)."},
            {"role": "Telehealth Operations Guide", "goal": "Output SOAP Note format (Subjective/Objective/Assessment/Plan) ready for physician review."}
        ]
    },
    "allergy_immunology_planner": {
        "name": "Allergy & Environmental Trigger Management",
        "category": "Allergy & Immunology",
        "description": "Identify allergen triggers (pollen, food, histamine) and elimination plans.",
        "icon": "🤧",
        "input_label": "Allergy symptoms, suspected triggers (pollen, dust, food), and season",
        "agents": [
            {"role": "Allergist & Immunologist Specialist", "goal": "Analyze IgE vs non-IgE responses, pollen counts, cross-reactivity (Oral Allergy Syndrome)."},
            {"role": "Allergy Care Guide", "goal": "Produce Environmental Allergy Management Plan with air filtration, avoidance strategies, and medication tips."}
        ]
    },
    "gastroenterology_gut_health": {
        "name": "Gut Health & IBS Management Agent",
        "category": "Gastroenterology",
        "description": "Evaluate IBS, acid reflux (GERD), and gut microbiome dietary protocols.",
        "icon": "🥑",
        "input_label": "GI symptoms (bloating, heartburn, irregular digestion) + food diary notes",
        "agents": [
            {"role": "Gastroenterology Clinical Analyst", "goal": "Evaluate Bristol Stool Scale, GERD triggers, low FODMAP suitability, and Red Flag symptoms."},
            {"role": "Gut Health Advisory", "goal": "Deliver 21-Day Gut Health Protocol with meal modifications, trigger food tracking, and doctor questions."}
        ]
    },
    "ophthalmology_eye_care": {
        "name": "Vision Health & Eye Care Symptoms Agent",
        "category": "Ophthalmology",
        "description": "Analyze eye fatigue, dry eye symptoms, and vision warning signs.",
        "icon": "👁️",
        "input_label": "Eye symptoms (dryness, strain, redness, blurry vision) + screen time hours",
        "agents": [
            {"role": "Optometry & Eye Care Specialist", "goal": "Evaluate Computer Vision Syndrome (CVS), dry eye triggers, and sudden vision change red flags."},
            {"role": "Vision Health Guide", "goal": "Produce Eye Care Protocol with 20-20-20 rule, ergonomic screen setup, and eye drop guidelines."}
        ]
    },
    "wound_care_first_aid": {
        "name": "First Aid & Wound Care Guidance Agent",
        "category": "Emergency Medicine",
        "description": "Provide immediate step-by-step first aid and wound dressing instructions.",
        "icon": "🩹",
        "input_label": "Describe injury (cut, burn, insect bite, abrasion), depth, bleeding status",
        "agents": [
            {"role": "Emergency Care Triage Specialist", "goal": "Evaluate tetanus risk, infection signs (pus, redness spreading), and need for stitches."},
            {"role": "First Aid Protocol Guide", "goal": "Deliver Immediate First Aid Steps: cleaning, dressing, infection monitoring, and ER warning signs."}
        ]
    },
    "hypertension_blood_pressure": {
        "name": "Hypertension & Blood Pressure Tracker",
        "category": "Cardiology",
        "description": "Analyze blood pressure logs (Systolic/Diastolic) and DASH diet strategies.",
        "icon": "🩺",
        "input_label": "BP readings history (e.g. 138/88) + current medications",
        "agents": [
            {"role": "Hypertension Clinical Specialist", "goal": "Categorize AHA BP stage (Normal, Elevated, Stage 1, Stage 2, Crisis) and circadian BP patterns."},
            {"role": "Cardiovascular Lifestyle Coach", "goal": "Deliver DASH Diet & Sodium Reduction Guide with physical activity target recommendations."}
        ]
    },
    "asthma_respiratory_action": {
        "name": "Asthma Action Plan & Respiratory Guide",
        "category": "Pulmonology",
        "description": "Create personalized Asthma Action Plans (Green/Yellow/Red zones).",
        "icon": "🫁",
        "input_label": "Peak flow readings, asthma triggers, rescue inhaler frequency, and symptoms",
        "agents": [
            {"role": "Pulmonology Care Specialist", "goal": "Define Peak Flow zones (Green > 80%, Yellow 50-80%, Red < 50%) and environmental triggers."},
            {"role": "Asthma Management Guide", "goal": "Draft Asthma Action Plan matrix detailing daily controller vs emergency rescue inhaler protocol."}
        ]
    },
    "kidney_renal_health_diet": {
        "name": "Renal Health & CKD Dietary Management",
        "category": "Nephrology",
        "description": "Manage Chronic Kidney Disease (CKD) dietary sodium, potassium, and phosphorus.",
        "icon": "🫘",
        "input_label": "eGFR value, CKD stage (1-5), serum potassium, and phosphorus levels",
        "agents": [
            {"role": "Nephrology Clinical Specialist", "goal": "Analyze eGFR stage, protein restriction requirements, and electrolyte balance limits."},
            {"role": "Renal Dietitian", "goal": "Deliver Renal-Friendly Nutrition Guide specifying low-potassium, low-phosphorus, and fluid intake guidelines."}
        ]
    },
    "rheumatology_joint_pain": {
        "name": "Rheumatology & Joint Health Protocol",
        "category": "Rheumatology",
        "description": "Evaluate joint inflammation, Arthritis symptoms, and anti-inflammatory diets.",
        "icon": "🦴",
        "input_label": "Joint pain location, morning stiffness duration, swelling, and physical triggers",
        "agents": [
            {"role": "Rheumatology Clinical Specialist", "goal": "Analyze Osteoarthritis vs Rheumatoid Arthritis differential patterns and inflammatory markers."},
            {"role": "Joint Health & Mobility Guide", "goal": "Produce Anti-Inflammatory Joint Protocol covering low-impact exercise, heat/cold therapy, and Omega-3 diet."}
        ]
    },
    "thyroid_hormone_wellness": {
        "name": "Thyroid Health & Metabolic Wellness Agent",
        "category": "Endocrinology",
        "description": "Analyze TSH, Free T3, Free T4 lab results and hypothyroidism/hyperthyroidism symptoms.",
        "icon": "🦋",
        "input_label": "TSH level, Free T3/T4 values, energy levels, weight changes, and temperature tolerance",
        "agents": [
            {"role": "Endocrinology Lab Specialist", "goal": "Parse TSH reference ranges, Hashimoto's/Graves' antibody markers, and hormone conversion."},
            {"role": "Thyroid Wellness Coach", "goal": "Deliver Thyroid Health Guide explaining lab metrics, medication timing rules (e.g. Levothyroxine), and selenium/zinc nutrients."}
        ]
    },
    "occupational_health_ergonomics": {
        "name": "Workplace Ergonomics & Posture Agent",
        "category": "Occupational Health",
        "description": "Prevent Carpal Tunnel, Repetitive Strain Injury (RSI), and desk posture pain.",
        "icon": "🪑",
        "input_label": "Desk setup description, daily computer hours, and pain areas (neck, wrist, lower back)",
        "agents": [
            {"role": "Ergonomics & Human Factors Specialist", "goal": "Analyze monitor height, elbow angle, lumbar support, and keyboard/mouse positioning."},
            {"role": "Workplace Health Guide", "goal": "Deliver Workstation Ergonomic Checklist + 5-minute hourly desk stretch routine."}
        ]
    }
}
