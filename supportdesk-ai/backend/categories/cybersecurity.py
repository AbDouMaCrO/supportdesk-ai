"""
Category: Cybersecurity, Red Teaming & Incident Response (30 Specialized Agent Teams)
"""

CYBERSECURITY_TEMPLATES: dict[str, dict] = {
    "vulnerability_scanner_auditor": {
        "name": "Web Application Vulnerability Auditor",
        "category": "Cybersecurity",
        "description": "Analyze OWASP Top 10 web vulnerabilities (XSS, SQLi, CSRF, SSRF).",
        "icon": "🛡️",
        "input_label": "Paste web application code snippet or endpoint URL params",
        "agents": [
            {"role": "Penetration Tester (Pentester)", "goal": "Analyze input validation, SQL injection vectors, XSS reflection, and broken authentication."},
            {"role": "Application Security (AppSec) Engineer", "goal": "Produce Vulnerability Audit Report with CVSS score, reproduction steps, and remediation code fix."}
        ]
    },
    "incident_response_playbook": {
        "name": "Cyber Incident Response Playbook Agent",
        "category": "Incident Response",
        "description": "Generate NIST SP 800-61 incident response steps for security breaches.",
        "icon": "🚨",
        "input_label": "Security breach type (Ransomware, Phishing, Data Leak, Unauthorized Access)",
        "agents": [
            {"role": "Incident Response Commander", "goal": "Map 4 NIST phases: Preparation, Detection/Analysis, Containment/Eradication, and Post-Incident Recovery."},
            {"role": "SOC Lead Analyst", "goal": "Produce Incident Response Playbook detailing isolation steps, forensic preservation, and stakeholder notification."}
        ]
    },
    "phishing_email_analyzer": {
        "name": "Phishing & Social Engineering Analyzer",
        "category": "Email Security",
        "description": "Analyze suspicious emails for spoofed headers, malicious URLs, and phishing hooks.",
        "icon": "🎣",
        "input_label": "Paste raw email headers, sender address, and body content",
        "agents": [
            {"role": "Email Security Analyst", "goal": "Analyze SPF/DKIM/DMARC authentication, domain typosquatting, payload URLs, and urgency manipulation."},
            {"role": "SOC Incident Analyst", "goal": "Produce Phishing Analysis Verdict (Legitimate / Suspicious / Malicious) with IOCs (Indicators of Compromise)."}
        ]
    },
    "cloud_security_iam_audit": {
        "name": "AWS & GCP IAM Security Audit Agent",
        "category": "Cloud Security",
        "description": "Audit AWS/GCP IAM policies for over-privileged permissions and wildcard risks.",
        "icon": "☁️",
        "input_label": "Paste AWS IAM policy JSON or GCP role permissions",
        "agents": [
            {"role": "Cloud Security Architect", "goal": "Audit for wildcard ('*') permissions, admin privilege escalation paths, and missing MFA enforcement."},
            {"role": "IAM Security Specialist", "goal": "Provide Least Privilege IAM policy JSON + remediation action plan."}
        ]
    },
    "threat_modeling_stride": {
        "name": "STRIDE Threat Modeling Architecture Agent",
        "category": "Threat Modeling",
        "description": "Perform STRIDE threat modeling on software architecture diagrams and data flows.",
        "icon": "📐",
        "input_label": "System architecture description, data flow, and components",
        "agents": [
            {"role": "Threat Modeling Architect", "goal": "Evaluate STRIDE risks (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege)."},
            {"role": "Security Risk Specialist", "goal": "Produce STRIDE Threat Matrix table with attack vectors and mitigation controls."}
        ]
    },
    "zero_trust_architecture": {
        "name": "Zero Trust Security Architecture Planner",
        "category": "Network Security",
        "description": "Design Zero Trust Network Access (ZTNA) policies and micro-segmentation.",
        "icon": "🔒",
        "input_label": "Corporate network environment, remote workforce size, and cloud assets",
        "agents": [
            {"role": "Zero Trust Architect", "goal": "Apply 'Never Trust, Always Verify' principles across Identity, Devices, Networks, Applications, and Data."},
            {"role": "Network Security Specialist", "goal": "Deliver Zero Trust Migration Roadmap with ZTNA controller, mTLS, and micro-segmentation guidelines."}
        ]
    },
    "ransomware_readiness_audit": {
        "name": "Ransomware Readiness & Backup Audit Agent",
        "category": "Cyber Defense",
        "description": "Audit immutable backups, disaster recovery, and ransomware mitigation readiness.",
        "icon": "☣️",
        "input_label": "Current backup system (Veeam, AWS S3 Immutable), frequency, and recovery time objective (RTO)",
        "agents": [
            {"role": "Ransomware Defense Specialist", "goal": "Audit 3-2-1-1-0 backup rule, air-gapped storage, active directory hardening, and EDR deployment."},
            {"role": "Cyber Resilience Lead", "goal": "Produce Ransomware Readiness Scorecard with high-priority defense gaps and recovery checklist."}
        ]
    },
    "red_team_payload_analyzer": {
        "name": "Red Team Attack Vector & Payload Analyzer",
        "category": "Red Teaming",
        "description": "Analyze red team adversary emulation TTPs against MITRE ATT&CK matrix.",
        "icon": "⚔️",
        "input_label": "Adversary technique or attack chain description",
        "agents": [
            {"role": "Red Team Lead", "goal": "Map attack vectors to MITRE ATT&CK techniques (Initial Access, Execution, Persistence, Evasion)."},
            {"role": "Blue Team Defense Lead", "goal": "Provide Sigma / YARA detection rules + EDR telemetry detection queries."}
        ]
    },
    "siem_log_correlation_rule": {
        "name": "SIEM Detection Rule Writer (Splunk/Elastic)",
        "category": "SOC Operations",
        "description": "Write Splunk SPL or Elastic SIEM detection queries for suspicious behaviors.",
        "icon": "🔍",
        "input_label": "Suspicious activity to detect (e.g. brute force, powershell execution, lateral movement)",
        "agents": [
            {"role": "SOC Detection Engineer", "goal": "Define log source events (Event ID 4624, Sysmon Event ID 1), threshold timeframes, and false positive exclusions."},
            {"role": "SIEM Query Developer", "goal": "Write ready-to-use Splunk SPL query / Elastic EQL rule with severity level and alert logic."}
        ]
    },
    "container_k8s_security_audit": {
        "name": "Kubernetes & Container Security Auditor",
        "category": "Container Security",
        "description": "Audit Kubernetes clusters for privileged containers, RBAC risks, and network policies.",
        "icon": "☸️",
        "input_label": "Kubernetes pod spec YAML or RBAC role definition",
        "agents": [
            {"role": "DevSecOps Engineer", "goal": "Inspect root container execution, capability drops (CAP_SYS_ADMIN), read-only root filesystems, and cluster RBAC."},
            {"role": "K8s Security Specialist", "goal": "Provide hardened SecurityContext YAML + OPA Gatekeeper / Kyverno security policy."}
        ]
    },
    "api_security_owasp_audit": {
        "name": "OWASP API Security Top 10 Auditor",
        "category": "API Security",
        "description": "Audit APIs for BOLA (Broken Object Level Auth), rate limiting, and mass assignment.",
        "icon": "🔌",
        "input_label": "API endpoint route definitions, request headers, and payload schema",
        "agents": [
            {"role": "API Security Specialist", "goal": "Audit against OWASP API1:2023 (BOLA), API2 (Broken Auth), API3 (Broken Object Property Auth), and rate limits."},
            {"role": "AppSec Specialist", "goal": "Produce API Security Audit Report with code fixes for authorization checks."}
        ]
    },
    "security_awareness_training": {
        "name": "Security Awareness Training Module Creator",
        "category": "Security Training",
        "description": "Generate interactive security awareness training modules for employees.",
        "icon": "🎓",
        "input_label": "Training topic (Phishing, Password Hygiene, Clean Desk, Social Engineering)",
        "agents": [
            {"role": "Cybersecurity Educator", "goal": "Structure real-world attack scenarios, red flags to spot, and immediate reporting procedures."},
            {"role": "Security Training Copywriter", "goal": "Produce 5-minute Employee Training Module: Story Scenario, 3 Quick Rules, and 3 Quiz Questions."}
        ]
    },
    "cryptographic_algorithm_audit": {
        "name": "Cryptographic Protocol & Key Management Auditor",
        "category": "Cryptography",
        "description": "Audit encryption algorithms (AES-256 vs DES/RC4), TLS versions, and key storage.",
        "icon": "🔑",
        "input_label": "Encryption method, key size, cipher suite, and data storage description",
        "agents": [
            {"role": "Cryptographer", "goal": "Evaluate cipher strength (AES-256-GCM vs ECB mode), key exchange (ECDHE), hash functions (SHA-256 vs MD5), and TLS 1.3 compliance."},
            {"role": "Security Engineering Specialist", "goal": "Deliver Cryptographic Security Report with deprecated cipher migration instructions."}
        ]
    },
    "mobile_app_sec_audit": {
        "name": "iOS & Android Mobile App Security Auditor",
        "category": "Mobile Security",
        "description": "Audit mobile apps for hardcoded secrets, insecure storage, and SSL pinning.",
        "icon": "📲",
        "input_label": "Android/iOS app code snippet or manifest permissions",
        "agents": [
            {"role": "Mobile Pentester", "goal": "Check AndroidManifest/Info.plist permissions, Keychain/Keystore usage, hardcoded API keys, and SSL pinning."},
            {"role": "Mobile Security Engineer", "goal": "Produce Mobile AppSec Audit Report detailing OWASP Mobile Top 10 remediation code."}
        ]
    },
    "third_party_vendor_risk": {
        "name": "Third-Party Vendor Cyber Risk Assessment",
        "category": "Vendor Risk",
        "description": "Evaluate vendor security questionnaires (SIG/CAIQ) and supply chain risk.",
        "icon": "🏢",
        "input_label": "Vendor name, service provided, data access level, and security response notes",
        "agents": [
            {"role": "Vendor Risk Manager", "goal": "Analyze vendor SOC 2 status, encryption standards, breach history, and sub-processor risks."},
            {"role": "Cyber Risk Officer", "goal": "Produce Third-Party Security Scorecard with Risk Rating (Low/Medium/High) and required contractual safeguards."}
        ]
    }
}
