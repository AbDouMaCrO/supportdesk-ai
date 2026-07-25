"""
Category: Software Engineering, DevOps & IT (50 Specialized Agent Teams)
"""

SOFTWARE_DEV_TEMPLATES: dict[str, dict] = {
    "code_review": {
        "name": "Code Review Agent",
        "category": "Software Engineering",
        "description": "Audit code for security vulnerabilities, performance, and best practices.",
        "icon": "💻",
        "input_label": "Paste code snippet or pull request diff",
        "agents": [
            {"role": "Security Auditor", "goal": "Audit code for security vulnerabilities, injection risks, memory leaks, and unhandled edge cases."},
            {"role": "Senior Software Architect", "goal": "Provide specific refactoring recommendations, design improvements, and optimized code snippets."}
        ]
    },
    "github_triager": {
        "name": "GitHub Issue Triager",
        "category": "DevOps & QA",
        "description": "Triage repository issues, estimate severity, and generate solution guides.",
        "icon": "🐛",
        "input_label": "Paste GitHub issue title, description, and error logs",
        "agents": [
            {"role": "DevOps & QA Specialist", "goal": "Categorize severity (Low/Medium/High/Critical), identify bug root cause, and tag appropriate component."},
            {"role": "Solutions Engineer", "goal": "Write helpful contributor response with reproduction steps, workaround, and code fix proposal."}
        ]
    },
    "unit_test_generator": {
        "name": "Unit Test Generator",
        "category": "Software Testing",
        "description": "Write comprehensive unit tests with edge case coverage.",
        "icon": "🧪",
        "input_label": "Paste source code + target framework (e.g. pytest, jest)",
        "agents": [
            {"role": "QA Test Engineer", "goal": "Identify input validation boundaries, exception branches, edge cases, and mock dependencies."},
            {"role": "Senior Automation Developer", "goal": "Write complete, executable unit test suites with assertion fixtures and edge case tests."}
        ]
    },
    "documentation_writer": {
        "name": "Technical Documentation Writer",
        "category": "Documentation",
        "description": "Generate Markdown API docs, guides, and README sections.",
        "icon": "📚",
        "input_label": "Paste code or describe module functionality",
        "agents": [
            {"role": "Technical Analyst", "goal": "Understand function signatures, parameters, return types, error codes, and usage examples."},
            {"role": "Documentation Specialist", "goal": "Write GitHub-flavored Markdown docs complete with overview, parameter tables, code examples, and troubleshooting."}
        ]
    },
    "dockerfile_generator": {
        "name": "Dockerfile & Multi-Stage Container Builder",
        "category": "DevOps & Cloud",
        "description": "Generate production-grade multi-stage Dockerfiles and compose setups.",
        "icon": "🐳",
        "input_label": "Project language/framework (Node, Python, Go) + requirements",
        "agents": [
            {"role": "Container Security Specialist", "goal": "Determine minimal base image (alpine/slim), non-root execution, caching layers, and security scan rules."},
            {"role": "DevOps Automation Architect", "goal": "Write multi-stage Dockerfile + docker-compose.yml with volume bindings, env vars, and healthchecks."}
        ]
    },
    "ci_cd_pipeline_builder": {
        "name": "CI/CD Pipeline Generator",
        "category": "DevOps",
        "description": "Build GitHub Actions, GitLab CI, or Jenkins pipeline files.",
        "icon": "⚙️",
        "input_label": "Repository type + testing & deployment target (AWS, Vercel, Railway, K8s)",
        "agents": [
            {"role": "CI/CD Release Engineer", "goal": "Define build phases, matrix testing, dependency caching, secrets management, and deployment triggers."},
            {"role": "Pipeline Automation Specialist", "goal": "Output ready-to-use .github/workflows/main.yml or .gitlab-ci.yml with complete steps."}
        ]
    },
    "api_schema_designer": {
        "name": "REST & OpenAPI 3.0 Schema Designer",
        "category": "API Engineering",
        "description": "Design OpenAPI 3.0 YAML/JSON specifications for RESTful APIs.",
        "icon": "🔌",
        "input_label": "Domain entities, endpoints needed, and auth type",
        "agents": [
            {"role": "API Systems Architect", "goal": "Define resource paths, HTTP methods, status codes, query params, and JSON schemas."},
            {"role": "OpenAPI Spec Writer", "goal": "Write valid OpenAPI 3.0 YAML spec complete with component schemas and response examples."}
        ]
    },
    "graphql_schema_builder": {
        "name": "GraphQL Schema & Resolver Architect",
        "category": "API Engineering",
        "description": "Design GraphQL type definitions, queries, mutations, and resolvers.",
        "icon": "🕸️",
        "input_label": "Data model requirements and queries needed",
        "agents": [
            {"role": "GraphQL Architect", "goal": "Design Schema Definition Language (SDL) types, inputs, interfaces, and scalar types."},
            {"role": "Resolver Engineer", "goal": "Write schema.graphql + mock TypeScript/Python resolver functions with N+1 dataloader handling."}
        ]
    },
    "database_migration_generator": {
        "name": "Database Schema & Migration Writer",
        "category": "Databases",
        "description": "Generate SQL migrations, indexes, constraints, and ORM models.",
        "icon": "🗄️",
        "input_label": "New tables/fields needed + target ORM (Prisma, Alembic, TypeORM)",
        "agents": [
            {"role": "Database Administrator (DBA)", "goal": "Analyze normalization, foreign key constraints, indexing strategies, and performance impact."},
            {"role": "Migration Engineer", "goal": "Write up/down SQL migration scripts + matching ORM model definitions."}
        ]
    },
    "legacy_code_refactor": {
        "name": "Legacy Code Modernization & Refactor",
        "category": "Software Architecture",
        "description": "Refactor legacy monolithic code into modular, typed, clean architecture.",
        "icon": "🛠️",
        "input_label": "Paste legacy code snippet + target framework/version",
        "agents": [
            {"role": "Software Refactoring Specialist", "goal": "Identify code smells, cyclomatic complexity, tight coupling, and anti-patterns."},
            {"role": "Clean Code Architect", "goal": "Rewrite code following SOLID principles, dependency injection, typing, and modern async patterns."}
        ]
    },
    "kubernetes_manifest_builder": {
        "name": "Kubernetes Manifest & Helm Chart Generator",
        "category": "DevOps & Cloud",
        "description": "Generate Kubernetes Deployments, Services, Ingress, and Helm Charts.",
        "icon": "☸️",
        "input_label": "Application name, container image, replicas, ports, and ingress domain",
        "agents": [
            {"role": "Cloud Infrastructure Engineer", "goal": "Define pod spec, resource limits/requests, liveness/readiness probes, and HPA autoscaling."},
            {"role": "K8s Manifest Architect", "goal": "Write clean deployment.yaml, service.yaml, ingress.yaml, and configmap.yaml manifests."}
        ]
    },
    "terraform_iac_generator": {
        "name": "Terraform Infrastructure as Code (IaC)",
        "category": "Cloud Infrastructure",
        "description": "Generate Terraform (HCL) scripts for AWS, GCP, or Azure resources.",
        "icon": "☁️",
        "input_label": "Cloud provider (AWS/GCP/Azure) + resources needed (VPC, RDS, EC2, S3)",
        "agents": [
            {"role": "Cloud Solutions Architect", "goal": "Map cloud architecture, IAM roles, security groups, subnets, and state storage."},
            {"role": "Terraform Engineer", "goal": "Write valid main.tf, variables.tf, and outputs.tf Terraform code with variable parameterization."}
        ]
    },
    "regex_pattern_generator": {
        "name": "RegEx Pattern & Parser Generator",
        "category": "Developer Tools",
        "description": "Generate complex Regular Expressions with test cases and step explanations.",
        "icon": "🔣",
        "input_label": "Text pattern requirement (e.g. extract email, parse log timestamp)",
        "agents": [
            {"role": "Pattern Recognition Engineer", "goal": "Deconstruct target string rules, optional groups, boundary conditions, and performance risks."},
            {"role": "RegEx Developer", "goal": "Output production RegEx pattern, PCRE/JS/Python syntax variations, and 5 passing/failing test cases."}
        ]
    },
    "git_commit_release_notes": {
        "name": "Git Commit & Conventional Release Notes Generator",
        "category": "DevOps",
        "description": "Convert raw git diffs/log commits into conventional commits and semver release notes.",
        "icon": "📝",
        "input_label": "Paste git diff or raw commit log",
        "agents": [
            {"role": "Release Manager", "goal": "Categorize changes into Breaking Changes, Features (feat), Fixes (fix), and Chores (chore)."},
            {"role": "Changelog Author", "goal": "Draft conventional commit messages + structured markdown CHANGELOG.md release notes."}
        ]
    },
    "microservice_decomposer": {
        "name": "Monolith to Microservice Decomposer",
        "category": "Software Architecture",
        "description": "Break down monolith features into decoupled domain-driven microservices.",
        "icon": "🧩",
        "input_label": "Monolith domain description & bottleneck components",
        "agents": [
            {"role": "Domain-Driven Design (DDD) Architect", "goal": "Identify bounded contexts, domain events, shared database dependencies, and service boundaries."},
            {"role": "Distributed Systems Engineer", "goal": "Produce microservice breakdown diagram outline, gRPC/REST communication protocols, and event-driven queue spec."}
        ]
    },
    "web_scraping_script_builder": {
        "name": "Web Scraping & Data Extractor Builder",
        "category": "Data Engineering",
        "description": "Build robust Playwright/BeautifulSoup/Scrapy web scrapers with proxy handling.",
        "icon": "🕷️",
        "input_label": "Target site URL / HTML sample + data fields to extract",
        "agents": [
            {"role": "DOM & Selector Analyst", "goal": "Inspect HTML structure, identify CSS/XPath selectors, anti-bot mechanisms, and pagination patterns."},
            {"role": "Scraper Engineer", "goal": "Write complete Python/Node.js scraping script with user-agent rotation, error handling, and JSON export."}
        ]
    },
    "syslog_log_analyzer": {
        "name": "Syslog & Application Error Log Parser",
        "category": "DevOps & Monitoring",
        "description": "Parse stack traces, server logs, and identify root cause runtime errors.",
        "icon": "📜",
        "input_label": "Paste stack trace or server log output",
        "agents": [
            {"role": "Site Reliability Engineer (SRE)", "goal": "Parse log timestamps, error level (FATAL/ERROR/WARN), stack trace frame, and failing component."},
            {"role": "Root Cause Incident Specialist", "goal": "Provide root cause diagnosis, immediate remediation steps, and preventive fix code."}
        ]
    },
    "bash_powershell_script_writer": {
        "name": "Bash & PowerShell Automation Script Generator",
        "category": "SysAdmin",
        "description": "Write cross-platform Bash or PowerShell automation scripts.",
        "icon": "💻",
        "input_label": "Automation goal (e.g. backup directory, clean old files, check disk space)",
        "agents": [
            {"role": "Systems Administrator", "goal": "Define script flags, error trapping (set -e / $ErrorActionPreference), logging, and cron/task scheduler setup."},
            {"role": "Shell Script Developer", "goal": "Write clean, commented Bash / PowerShell script with argument handling and safety checks."}
        ]
    },
    "cron_expression_builder": {
        "name": "Cron Schedule & Task Automation Builder",
        "category": "SysAdmin",
        "description": "Generate 5-field/6-field Cron expressions with human explanations.",
        "icon": "⏰",
        "input_label": "Schedule description (e.g. every 15 mins on weekdays)",
        "agents": [
            {"role": "Scheduler Specialist", "goal": "Determine exact cron syntax fields (Minute Hour Day Month Day-of-week)."},
            {"role": "Cron Developer", "goal": "Output standard Linux Cron syntax, Quartz syntax, next 5 execution dates, and test command."}
        ]
    },
    "load_testing_script_generator": {
        "name": "k6 & Locust Load Testing Generator",
        "category": "Performance QA",
        "description": "Generate k6 JS or Locust Python performance & load test scripts.",
        "icon": "⏱️",
        "input_label": "Target endpoint URLs, virtual users (VUs), and ramp-up scenario",
        "agents": [
            {"role": "Performance QA Architect", "goal": "Define SLA response thresholds (p95 < 200ms), stress scenarios, and virtual user scaling curves."},
            {"role": "Load Test Engineer", "goal": "Write executable k6 JS or Locust Python script with authentication headers and threshold assertions."}
        ]
    },
    "wasm_rust_interop_builder": {
        "name": "Rust WebAssembly (Wasm) Interop Generator",
        "category": "Systems Programming",
        "description": "Build Rust code compiled to WebAssembly with JS bindings.",
        "icon": "🦀",
        "input_label": "High-performance algorithm description (e.g. image processing, crypto hashing)",
        "agents": [
            {"role": "Rust Systems Architect", "goal": "Define memory layout, wasm-bindgen exports, and performance bottlenecks."},
            {"role": "Wasm Developer", "goal": "Write Rust src/lib.rs code + JS wrapper for browser/Node execution."}
        ]
    },
    "grpc_protobuf_architect": {
        "name": "gRPC & Protocol Buffers (.proto) Architect",
        "category": "API Engineering",
        "description": "Design .proto buffer definitions and RPC service interfaces.",
        "icon": "⚡",
        "input_label": "Microservice communication requirements and data payloads",
        "agents": [
            {"role": "gRPC Systems Architect", "goal": "Design protobuf syntax proto3 messages, streaming types (unary/client/server/bidi), and package namespaces."},
            {"role": "Protocol Buffer Developer", "goal": "Write valid service.proto file + protoc generation command options."}
        ]
    },
    "serverless_lambda_builder": {
        "name": "Serverless Framework & AWS Lambda Generator",
        "category": "Cloud Architecture",
        "description": "Build Serverless Framework serverless.yml + Lambda handler functions.",
        "icon": "⚡",
        "input_label": "Trigger event (API Gateway, S3 event, DynamoDB stream) + language",
        "agents": [
            {"role": "Serverless Architect", "goal": "Define IAM permissions, memory size, timeout, environment variables, and event triggers."},
            {"role": "Lambda Developer", "goal": "Write serverless.yml + handler.js/handler.py event handler function."}
        ]
    },
    "feature_flag_evaluator": {
        "name": "Feature Flag & A/B Test Implementation",
        "category": "Software Architecture",
        "description": "Implement safe feature flagging, canary rollouts, and kill-switches.",
        "icon": "🚩",
        "input_label": "Feature name, fallback behavior, and targeting criteria",
        "agents": [
            {"role": "Release Safety Engineer", "goal": "Design feature evaluation logic, fallback state, user bucketing, and telemetry events."},
            {"role": "Feature Flag Developer", "goal": "Write clean code wrapper using feature flags with zero latency and safety fallbacks."}
        ]
    },
    "flutter_dart_widget_builder": {
        "name": "Flutter & Dart Mobile UI Builder",
        "category": "Mobile Engineering",
        "description": "Build responsive Flutter widgets, state management, and layouts.",
        "icon": "📱",
        "input_label": "UI screen description + state management preference (Riverpod/Bloc/Provider)",
        "agents": [
            {"role": "Mobile UI/UX Architect", "goal": "Break down screen into widget tree, state controllers, and responsive layout constraints."},
            {"role": "Flutter Developer", "goal": "Write production-ready Dart Flutter widget code with clean formatting."}
        ]
    },
    "react_native_component_builder": {
        "name": "React Native Mobile Component Builder",
        "category": "Mobile Engineering",
        "description": "Create cross-platform React Native components with Tailwind/StyleSheet.",
        "icon": "📱",
        "input_label": "Mobile screen/component UI requirement",
        "agents": [
            {"role": "React Native Architect", "goal": "Design component props, native device interactions, state management, and styling."},
            {"role": "React Native Developer", "goal": "Write TypeScript React Native component using StyleSheet/NativeWind."}
        ]
    },
    "graphql_apollo_client": {
        "name": "Apollo GraphQL Client Integration",
        "category": "Frontend Engineering",
        "description": "Write React Apollo Client queries, mutations, and cache updates.",
        "icon": "⚛️",
        "input_label": "GraphQL query/mutation goal + React UI state requirement",
        "agents": [
            {"role": "GraphQL Frontend Specialist", "goal": "Structure gql query string, optimistic UI updates, and cache normalized keys."},
            {"role": "React Apollo Developer", "goal": "Write React custom hook (useQuery/useMutation) with loading, error, and data states."}
        ]
    },
    "electron_desktop_app_builder": {
        "name": "Electron Desktop App Builder",
        "category": "Desktop Engineering",
        "description": "Design Electron main process, renderer process, and IPC bridge.",
        "icon": "🖥️",
        "input_label": "Desktop app functionality (file system access, tray icon, native menu)",
        "agents": [
            {"role": "Electron Security Architect", "goal": "Configure contextIsolation, preload script, webPreferences, and secure IPC main/renderer bridge."},
            {"role": "Electron Developer", "goal": "Write main.js, preload.js, and IPC communication handlers."}
        ]
    },
    "webpack_vite_bundler_config": {
        "name": "Vite & Webpack Custom Bundler Configurator",
        "category": "Frontend Tooling",
        "description": "Configure Vite/Webpack bundlers for code-splitting, tree-shaking, and plugins.",
        "icon": "📦",
        "input_label": "Build requirement (React, Vue, SSR, PWA, micro-frontend)",
        "agents": [
            {"role": "Build Tooling Architect", "goal": "Analyze bundle size optimizations, chunk splitting strategy, asset loaders, and alias resolve rules."},
            {"role": "Bundler Engineer", "goal": "Write production vite.config.js or webpack.config.js file with comments."}
        ]
    },
    "tailwind_css_design_system": {
        "name": "Tailwind CSS Design System & Utility Generator",
        "category": "Frontend UI",
        "description": "Generate custom tailwind.config.js theme tokens, components, and utility classes.",
        "icon": "🎨",
        "input_label": "Brand palette, typography preferences, and UI component needed",
        "agents": [
            {"role": "UI/UX Design Systems Specialist", "goal": "Define color tokens (50-900 scale), spacing system, typography scale, and dark mode variants."},
            {"role": "Tailwind Developer", "goal": "Write tailwind.config.js extension + HTML/JSX component classes."}
        ]
    },
    "websockets_realtime_server": {
        "name": "WebSockets Real-Time Server & Client Builder",
        "category": "Real-Time Systems",
        "description": "Build Socket.io / WS Node/Python real-time server with client event listeners.",
        "icon": "🔌",
        "input_label": "Real-time application goal (chat rooms, live dashboard, notifications)",
        "agents": [
            {"role": "Real-Time Protocol Architect", "goal": "Define event namespace schema, room joining/leaving logic, heartbeat reconnects, and message payloads."},
            {"role": "WebSocket Developer", "goal": "Write server-side Socket.io script + client-side event listener connection script."}
        ]
    },
    "redis_caching_strategy": {
        "name": "Redis Caching Strategy & Implementation",
        "category": "Performance Engineering",
        "description": "Implement Redis caching patterns (Cache-Aside, Write-Through, TTL expiry).",
        "icon": "⚡",
        "input_label": "Database query or API endpoint to cache + target TTL",
        "agents": [
            {"role": "Caching Architect", "goal": "Select caching pattern, key naming conventions (e.g. user:123:profile), TTL strategy, and cache invalidation rules."},
            {"role": "Redis Engineer", "goal": "Write Python/Node Redis cache wrapper with fallback to DB on cache miss."}
        ]
    },
    "elasticsearch_search_query": {
        "name": "Elasticsearch Query & Index Designer",
        "category": "Search Systems",
        "description": "Build Elasticsearch mappings, bool queries, fuzzy matching, and aggregations.",
        "icon": "🔍",
        "input_label": "Search requirement (full-text search, filtering, facet aggregations)",
        "agents": [
            {"role": "Search Engine Architect", "goal": "Design index mapping, analyzers (standard/ngram), boost scores, and search filters."},
            {"role": "Elasticsearch Engineer", "goal": "Write JSON search query DSL body + index creation schema."}
        ]
    },
    "oauth2_jwt_auth_builder": {
        "name": "OAuth2 & JWT Authentication System",
        "category": "Application Security",
        "description": "Implement secure JWT token generation, refresh tokens, and middleware.",
        "icon": "🔐",
        "input_label": "Language/Framework (Node, Python, Go) + auth flow (JWT, OAuth Google/GitHub)",
        "agents": [
            {"role": "Security Systems Architect", "goal": "Design access token expiry (15m), HttpOnly refresh token cookies, salt rounds, and token revocation."},
            {"role": "Auth Engineer", "goal": "Write sign-up, login, token refresh endpoints + auth middleware function."}
        ]
    },
    "web_accessibility_a11y": {
        "name": "Web Accessibility (a11y) & WCAG 2.1 Auditor",
        "category": "Frontend Quality",
        "description": "Audit HTML/JSX for WCAG 2.1 AA compliance, ARIA attributes, and screen readers.",
        "icon": "♿",
        "input_label": "Paste HTML/JSX code component to audit",
        "agents": [
            {"role": "Accessibility (a11y) Specialist", "goal": "Check color contrast ratio, keyboard focus traps, ARIA roles, image alt text, and semantic HTML tags."},
            {"role": "Frontend Accessibility Engineer", "goal": "Provide remediated code snippet with complete ARIA attributes and keyboard accessibility support."}
        ]
    },
    "storybook_component_docs": {
        "name": "Storybook Component Documentation & Stories",
        "category": "Frontend Quality",
        "description": "Generate Component Story Format (CSF 3) files for Storybook UI catalog.",
        "icon": "📖",
        "input_label": "React/Vue component code",
        "agents": [
            {"role": "Design System Documentation Specialist", "goal": "Identify component argTypes, control knobs, variants (primary, secondary, disabled, loading)."},
            {"role": "Storybook Developer", "goal": "Write ComponentName.stories.tsx file with default story, variant stories, and play() interactions."}
        ]
    },
    "pwa_service_worker_builder": {
        "name": "Progressive Web App (PWA) & Service Worker",
        "category": "Frontend Engineering",
        "description": "Build PWA web app manifest and offline caching service workers.",
        "icon": "📲",
        "input_label": "App name, theme colors, and offline strategy (Cache-first vs Network-first)",
        "agents": [
            {"role": "PWA Solutions Architect", "goal": "Define manifest.json properties, splash screens, scope, and Workbox caching strategies."},
            {"role": "Service Worker Developer", "goal": "Write web manifest.json + service-worker.js with offline cache fallback."}
        ]
    },
    "npm_package_publisher": {
        "name": "NPM Package Builder & Publisher",
        "category": "Developer Tools",
        "description": "Configure package.json, tsup/ts-up bundler, and release scripts for NPM.",
        "icon": "📦",
        "input_label": "Package name, export types (ESM/CJS), and entry point",
        "agents": [
            {"role": "Library Author Architect", "goal": "Define exports map in package.json, peerDependencies, types declaration, and license."},
            {"role": "NPM Release Specialist", "goal": "Output package.json, tsconfig.json, build command, and publish script."}
        ]
    },
    "cron_job_monitoring": {
        "name": "Background Job Queue (Celery/BullMQ) Builder",
        "category": "Backend Engineering",
        "description": "Implement Celery Python or BullMQ Node background job workers.",
        "icon": "🔄",
        "input_label": "Task type (email sending, image processing, report generation) + queue driver (Redis/RabbitMQ)",
        "agents": [
            {"role": "Distributed Queue Architect", "goal": "Design job retry policies, dead letter queues (DLQ), concurrency concurrency limits, and task payload serialization."},
            {"role": "Background Worker Developer", "goal": "Write producer dispatch script + worker task handler script."}
        ]
    },
    "chrome_extension_builder": {
        "name": "Chrome Extension (Manifest V3) Builder",
        "category": "Browser Extensions",
        "description": "Build Chrome Manifest V3 extension with background service worker and popup UI.",
        "icon": "🧩",
        "input_label": "Extension functionality (DOM modifier, API fetcher, popup tool)",
        "agents": [
            {"role": "Chrome Extension Security Architect", "goal": "Define manifest.json v3 permissions, host_permissions, background service worker, and content scripts."},
            {"role": "Extension Developer", "goal": "Write manifest.json, background.js, content.js, and popup.html."}
        ]
    },
    "salesforce_apex_developer": {
        "name": "Salesforce Apex Code & Trigger Generator",
        "category": "Enterprise Software",
        "description": "Write Salesforce Apex classes, triggers, and SOQL queries with test coverage.",
        "icon": "☁️",
        "input_label": "Salesforce object (Account, Opportunity, Contact) + automation requirement",
        "agents": [
            {"role": "Salesforce Solutions Architect", "goal": "Analyze governor limits, bulkification rules, trigger handler patterns, and SOQL optimization."},
            {"role": "Apex Developer", "goal": "Write Apex Trigger, Trigger Handler Class, and @isTest Test Class with 100% coverage."}
        ]
    },
    "jira_automation_workflow": {
        "name": "Jira API & Automation Workflow Script",
        "category": "DevOps & Tools",
        "description": "Automate Jira issue creation, transition states, and webhooks via API.",
        "icon": "📋",
        "input_label": "Jira automation rule or webhook event requirement",
        "agents": [
            {"role": "Agile Workflow Specialist", "goal": "Map Jira issue fields, status transitions, custom fields, and webhook payload structure."},
            {"role": "Jira API Developer", "goal": "Write Python/Node script to authenticate with Jira REST API and perform issue automation."}
        ]
    },
    "solidity_smart_contract": {
        "name": "Solidity Smart Contract Generator",
        "category": "Web3 & Blockchain",
        "description": "Write ERC-20, ERC-721 NFT, or custom Solidity smart contracts with OpenZeppelin.",
        "icon": "⛓️",
        "input_label": "Token/Contract requirements (ERC-20, ERC-721, Staking, Vault)",
        "agents": [
            {"role": "Smart Contract Auditor", "goal": "Analyze reentrancy risks, integer overflow, gas optimization, access control, and OpenZeppelin standards."},
            {"role": "Solidity Developer", "goal": "Write complete Solidity contract code with Hardhat/Foundry deployment script."}
        ]
    },
    "grpc_web_client_builder": {
        "name": "gRPC-Web Client Generator for React/Vue",
        "category": "API Engineering",
        "description": "Generate gRPC-Web frontend client calls and protoc-gen-grpc-web scripts.",
        "icon": "⚡",
        "input_label": "Protobuf service definition + target frontend framework",
        "agents": [
            {"role": "gRPC-Web Architect", "goal": "Define Envoy proxy setup, protoc build flags, and binary wire format serialization."},
            {"role": "Frontend Systems Developer", "goal": "Write gRPC-Web client invocation code with TypeScript types."}
        ]
    },
    "data_pipeline_airflow_dag": {
        "name": "Apache Airflow DAG Data Pipeline Builder",
        "category": "Data Engineering",
        "description": "Create Apache Airflow DAGs for ETL data orchestration.",
        "icon": "🌬️",
        "input_label": "Data pipeline steps (Extract S3 -> Transform Spark -> Load BigQuery)",
        "agents": [
            {"role": "Data Pipeline Architect", "goal": "Design DAG schedule_interval, task dependencies, retries, operators (PythonOperator, BashOperator, S3ToBigQueryOperator)."},
            {"role": "Airflow DAG Engineer", "goal": "Write complete Python DAG definition script file."}
        ]
    },
    "dbt_data_model_builder": {
        "name": "dbt (Data Build Tool) Model Generator",
        "category": "Data Engineering",
        "description": "Write dbt SQL models, schema.yml tests, and documentation.",
        "icon": "🟧",
        "input_label": "Source tables + transformation logic (Staging, Intermediate, Mart)",
        "agents": [
            {"role": "Analytics Engineer", "goal": "Structure dbt project layer (stg_, int_, fct_, dim_), primary keys, and ref() macros."},
            {"role": "dbt Developer", "goal": "Write dbt SQL model + schema.yml test suite (unique, not_null, accepted_values)."}
        ]
    },
    "kafka_event_stream_processor": {
        "name": "Apache Kafka Producer & Consumer Builder",
        "category": "Event Streaming",
        "description": "Build Kafka producer, consumer, and topic event processing scripts.",
        "icon": "📊",
        "input_label": "Topic name + message schema + processing requirement",
        "agents": [
            {"role": "Event-Driven Systems Architect", "goal": "Design topic partitioning, consumer group offset management, and serialization (Avro/JSON)."},
            {"role": "Kafka Developer", "goal": "Write Python (confluent-kafka) or Node (KafkaJS) producer and consumer scripts."}
        ]
    },
    "snowflake_data_warehouse_sql": {
        "name": "Snowflake Data Warehouse & DDL Generator",
        "category": "Data Warehousing",
        "description": "Design Snowflake virtual warehouses, databases, schemas, and COPY INTO commands.",
        "icon": "❄️",
        "input_label": "Data warehouse requirements, file format (JSON/Parquet/CSV), and S3/GCS bucket",
        "agents": [
            {"role": "Snowflake Data Architect", "goal": "Design database/schema hierarchy, virtual warehouse sizing, staging objects, and clustering keys."},
            {"role": "Snowflake Developer", "goal": "Write DDL SQL script creating Warehouse, Database, Stage, File Format, and COPY INTO pipelines."}
        ]
    },
    "playwright_e2e_test_builder": {
        "name": "Playwright End-to-End (E2E) Test Suite Generator",
        "category": "Software Testing",
        "description": "Write TypeScript Playwright E2E browser automation test suites.",
        "icon": "🎭",
        "input_label": "User journey scenario (e.g. Login -> Add to Cart -> Checkout)",
        "agents": [
            {"role": "E2E Test Architect", "goal": "Identify page object models (POM), resilient locator strategies (getByRole, getByTestId), and API intercept mocks."},
            {"role": "Playwright Automation Engineer", "goal": "Write executable Playwright test script with assertions and visual comparisons."}
        ]
    }
}
