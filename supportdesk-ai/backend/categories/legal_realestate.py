"""
Category: Legal, Compliance & Real Estate (40 Specialized Agent Teams)
"""

LEGAL_REALESTATE_TEMPLATES: dict[str, dict] = {
    "legal_contract_reviewer": {
        "name": "Legal Contract Review & Clause Inspector",
        "category": "Legal Tech",
        "description": "Analyze NDAs, Service Agreements, and contracts for high-risk clauses.",
        "icon": "⚖️",
        "input_label": "Paste contract text or key clauses to review",
        "agents": [
            {"role": "Corporate Legal Auditor", "goal": "Inspect indemnification, liability caps, termination notice, IP assignment, and governing law."},
            {"role": "Legal Risk Specialist", "goal": "Produce Contract Redline Summary with Risk Rating (High/Med/Low) and suggested revision wording."}
        ]
    },
    "property_listing_copywriter": {
        "name": "Real Estate Property Listing Copywriter",
        "category": "Real Estate",
        "description": "Write compelling MLS real estate property descriptions and virtual tour scripts.",
        "icon": "🏠",
        "input_label": "Property details (Beds/Baths, SqFt, Neighborhood, Unique Features)",
        "agents": [
            {"role": "Real Estate Marketing Strategist", "goal": "Identify property emotional hooks, neighborhood highlights, and buyer persona (Family/Investor)."},
            {"role": "Real Estate Copywriter", "goal": "Write MLS Public Remarks (1500 chars), Short Headline, and Instagram Story captions."}
        ]
    },
    "gdpr_privacy_policy": {
        "name": "GDPR & CCPA Privacy Policy Generator",
        "category": "Compliance",
        "description": "Generate GDPR & CCPA compliant website privacy policies and cookie notices.",
        "icon": "🛡️",
        "input_label": "Company name, website, data collected (cookies, email, analytics), and third-party tools",
        "agents": [
            {"role": "Data Privacy Officer (DPO)", "goal": "Audit data processing disclosures under GDPR Article 13 & CCPA opt-out requirements."},
            {"role": "Compliance Writer", "goal": "Write complete Privacy Policy document + Cookie Consent Banner notice copy."}
        ]
    },
    "terms_of_service_builder": {
        "name": "Terms of Service & EULA Builder",
        "category": "Legal Tech",
        "description": "Build custom Terms of Service (ToS) and End User License Agreements (EULA).",
        "icon": "📜",
        "input_label": "App/SaaS name, user eligibility age, payment terms, and user content rules",
        "agents": [
            {"role": "SaaS Legal Specialist", "goal": "Define account registration rules, acceptable use, billing/cancellations, limitation of liability, and arbitration."},
            {"role": "Legal Copywriter", "goal": "Write complete Terms of Service document ready for website footers."}
        ]
    },
    "property_comparable_market_analysis": {
        "name": "Real Estate CMA & Valuation Agent",
        "category": "Real Estate",
        "description": "Produce Comparative Market Analysis (CMA) valuation reports for homes.",
        "icon": "📊",
        "input_label": "Subject property specs + recent comparable sold homes list",
        "agents": [
            {"role": "Real Estate Appraiser Analyst", "goal": "Adjust price for SqFt differences, age, condition, garage, pool, and lot size."},
            {"role": "CMA Report Specialist", "goal": "Output Comparative Market Analysis report with suggested listing price range."}
        ]
    },
    "commercial_lease_agreement": {
        "name": "Commercial Lease Agreement Reviewer",
        "category": "Real Estate Legal",
        "description": "Review NNN (Triple Net), Modified Gross, and Gross commercial lease terms.",
        "icon": "🏢",
        "input_label": "Commercial lease clauses: Rent, CAM charges, tenant improvements, options",
        "agents": [
            {"role": "Commercial Real Estate Attorney", "goal": "Inspect Common Area Maintenance (CAM) audits, personal guarantees, sublease rights, and exclusivity clauses."},
            {"role": "CRE Tenant Advisor", "goal": "Produce Commercial Lease Breakdown Report with tenant negotiation points."}
        ]
    },
    "nda_confidentiality_builder": {
        "name": "Mutual & One-Way NDA Generator",
        "category": "Legal Tech",
        "description": "Draft Non-Disclosure Agreements (NDAs) tailored for partnerships or hires.",
        "icon": "🔐",
        "input_label": "Disclosing & Receiving party names + purpose of discussion + duration",
        "agents": [
            {"role": "IP & Corporate Counsel", "goal": "Define Confidential Information scope, exclusions, standard 2-5 year term, and injunction remedies."},
            {"role": "Legal Drafter", "goal": "Draft clean, ready-to-sign Mutual or One-Way NDA contract document."}
        ]
    },
    "hipaa_compliance_checklist": {
        "name": "HIPAA Medical Data Privacy Auditor",
        "category": "Healthcare Compliance",
        "description": "Audit health tech software for HIPAA Privacy & Security Rule compliance.",
        "icon": "🏥",
        "input_label": "Software features, PHI data flow, hosting provider, and user roles",
        "agents": [
            {"role": "HIPAA Compliance Auditor", "goal": "Audit PHI encryption (in-transit/at-rest), Business Associate Agreements (BAA), audit logs, and access controls."},
            {"role": "Healthcare Risk Manager", "goal": "Produce HIPAA Compliance Scorecard with required security safeguards checklist."}
        ]
    },
    "tenant_screening_applicant": {
        "name": "Tenant Screening & Rental Applicant Evaluator",
        "category": "Property Management",
        "description": "Evaluate rental applicants against income-to-rent and background criteria.",
        "icon": "🔑",
        "input_label": "Applicant income, credit score, rental history notes, and monthly rent",
        "agents": [
            {"role": "Property Management Lead", "goal": "Calculate Rent-to-Income ratio (3x rule), credit history factors, and landlord reference checks."},
            {"role": "Rental Compliance Specialist", "goal": "Produce Fair Housing compliant Tenant Evaluation Report with Approval/Conditional/Denial rationale."}
        ]
    },
    "airbnb_str_listing_optimizer": {
        "name": "Airbnb & Short-Term Rental (STR) Copywriter",
        "category": "Real Estate Marketing",
        "description": "Write high-booking Airbnb titles, host bios, house rules, and amenities lists.",
        "icon": "🏖️",
        "input_label": "STR property location, guest capacity, unique amenities (hot tub, view), and vibe",
        "agents": [
            {"role": "STR Revenue Manager", "goal": "Identify vacation search keywords, guest persona hooks, and house rule boundary settings."},
            {"role": "Airbnb Copywriter", "goal": "Write 5 catchy Airbnb Titles, Listing Summary, Space Description, Amenities Guide, and House Rules."}
        ]
    },
    "trademark_search_risk_eval": {
        "name": "Trademark Clearance & Brand Name Search",
        "category": "Intellectual Property",
        "description": "Evaluate potential trademark conflict risks for brand names and logos.",
        "icon": "®️",
        "input_label": "Proposed brand name + product/service class (e.g. Class 9 Tech, Class 25 Clothing)",
        "agents": [
            {"role": "Trademark Attorney Specialist", "goal": "Check likelihood of confusion (DuPont factors), phonetic similarity, and USPTO goods classes."},
            {"role": "IP Clearance Advisory", "goal": "Deliver Trademark Risk Assessment Report ranking risk (Low/Medium/High) with alternative name suggestions."}
        ]
    },
    "eviction_notice_documentation": {
        "name": "Landlord Notice & Lease Violation Writer",
        "category": "Property Management",
        "description": "Draft formal Notice to Cure or Quit and lease violation notices.",
        "icon": "⚠️",
        "input_label": "Tenant name, property address, lease violation (e.g. non-payment, unauthorized pet), and state",
        "agents": [
            {"role": "Landlord Tenant Law Specialist", "goal": "Check statutory notice days (3-day, 14-day, 30-day), cure requirements, and service of notice rules."},
            {"role": "Property Notice Drafter", "goal": "Draft formal Lease Violation Notice letter compliant with state landlord-tenant guidelines."}
        ]
    },
    "soc2_compliance_gap_analysis": {
        "name": "SOC 2 Type II Security Compliance Auditor",
        "category": "Cyber Security Legal",
        "description": "Audit SaaS infrastructure against SOC 2 Trust Services Criteria (TSC).",
        "icon": "📋",
        "input_label": "Current security controls (SSO, MFA, backups, CI/CD, incident response)",
        "agents": [
            {"role": "SOC 2 Lead Auditor", "goal": "Evaluate Security, Availability, Processing Integrity, Confidentiality, and Privacy criteria gaps."},
            {"role": "Compliance Engineer", "goal": "Produce SOC 2 Gap Analysis Report with prioritized remediation tasks for audit readiness."}
        ]
    },
    "real_estate_wholesaling_contract": {
        "name": "Real Estate Wholesale & Assignment Agent",
        "category": "Real Estate Investing",
        "description": "Draft wholesale purchase contracts and assignment of contract agreements.",
        "icon": "📝",
        "input_label": "Property address, seller price, end buyer assignment fee, and closing timeline",
        "agents": [
            {"role": "Real Estate Wholesale Investor", "goal": "Calculate Maximum Allowable Offer (MAO = ARV * 70% - Repair Costs), earnest money, and inspection contingency."},
            {"role": "RE Transaction Drafter", "goal": "Draft Purchase & Sale Agreement summary + Assignment of Contract clause document."}
        ]
    },
    "employment_severance_agreement": {
        "name": "Employment Separation & Severance Reviewer",
        "category": "Labor Law",
        "description": "Review severance packages, release of claims, and non-compete clauses.",
        "icon": "🤝",
        "input_label": "Severance offer details (weeks pay, benefits continuation, non-compete terms)",
        "agents": [
            {"role": "Employment Law Specialist", "goal": "Inspect ADEA 21-day review period (OWBPA), non-disparagement, non-solicit, and release scope."},
            {"role": "Executive Compensation Advisor", "goal": "Produce Severance Review Summary highlighting negotiation leverage points."}
        ]
    }
}
