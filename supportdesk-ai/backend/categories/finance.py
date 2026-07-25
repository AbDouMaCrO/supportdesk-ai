"""
Category: Finance, Accounting, Crypto & Trading (40 Specialized Agent Teams)
"""

FINANCE_TEMPLATES: dict[str, dict] = {
    "stock_research": {
        "name": "Stock & Financial Research Agent",
        "category": "Finance",
        "description": "Comprehensive financial analysis and stock evaluation.",
        "icon": "💹",
        "input_label": "Company ticker or name (e.g. AAPL, TSLA, Microsoft)",
        "agents": [
            {"role": "Equity Research Analyst", "goal": "Evaluate company revenue model, competitive moat, balance sheet health, and recent earnings signals."},
            {"role": "Portfolio Manager", "goal": "Produce an investment briefing: bullish case, bearish risks, valuation summary, and strategic outlook."}
        ]
    },
    "crypto_tokenomics_auditor": {
        "name": "Crypto & Tokenomics Auditor",
        "category": "Crypto & Web3",
        "description": "Audit cryptocurrency tokenomics, supply schedules, and utility models.",
        "icon": "🪙",
        "input_label": "Crypto token name, whitepaper summary, or tokenomics metrics",
        "agents": [
            {"role": "Tokenomics Economist", "goal": "Analyze circulating vs max supply, inflation/deflation mechanics, cliff vesting, and unlock schedules."},
            {"role": "Web3 Risk Analyst", "goal": "Draft tokenomics audit report highlighting sell-pressure risks, utility sustainability, and investor score."}
        ]
    },
    "financial_statement_analyzer": {
        "name": "Financial Statement & Ratio Analyzer",
        "category": "Corporate Finance",
        "description": "Analyze Income Statements, Balance Sheets, and Cash Flow statements.",
        "icon": "📊",
        "input_label": "Paste revenue, net income, assets, liabilities, and cash flow figures",
        "agents": [
            {"role": "Chartered Financial Analyst (CFA)", "goal": "Calculate profitability ratios (ROE, ROIC, Gross Margin), liquidity ratios (Current, Quick), and leverage metrics."},
            {"role": "Corporate Finance Advisory", "goal": "Synthesize financial health assessment with DuPont analysis and operational efficiency rating."}
        ]
    },
    "algorithmic_trading_strategy": {
        "name": "Algorithmic Trading Strategy Builder",
        "category": "Trading & Quant",
        "description": "Build Backtrader / QuantConnect Python algorithmic trading strategies.",
        "icon": "📈",
        "input_label": "Trading indicators (e.g. SMA Crossover, RSI Divergence, MACD) + timeframes",
        "agents": [
            {"role": "Quantitative Strategist", "goal": "Define entry/exit signals, stop-loss percentages, trailing stops, and risk-reward ratios."},
            {"role": "Quant Developer", "goal": "Write executable Python Backtrader script with data loading, strategy class, and performance stats."}
        ]
    },
    "personal_budget_optimizer": {
        "name": "Personal Budget & Wealth Planner",
        "category": "Personal Finance",
        "description": "Create personalized 50/30/20 budget allocations and debt payoff plans.",
        "icon": "💰",
        "input_label": "Monthly income, expenses list, and debt balances",
        "agents": [
            {"role": "Financial Planner", "goal": "Categorize fixed vs variable expenses, calculate savings rate, and identify budget leaks."},
            {"role": "Wealth Advisory Specialist", "goal": "Produce 50/30/20 budget breakdown + Debt Avalanche/Snowball payoff roadmap."}
        ]
    },
    "startup_valuation_model": {
        "name": "Startup Valuation & Cap Table Planner",
        "category": "Venture Capital",
        "description": "Calculate startup valuation using DCF, Berkus, and Comparable metrics.",
        "icon": "🚀",
        "input_label": "ARR/MRR, growth rate, TAM, and target funding round amount",
        "agents": [
            {"role": "Venture Capital Analyst", "goal": "Perform Discounted Cash Flow (DCF), First Chicago, and Comparable Multiples valuation."},
            {"role": "Cap Table Specialist", "goal": "Output pre-money vs post-money valuation range + investor dilution Cap Table breakdown."}
        ]
    },
    "forex_currency_analyst": {
        "name": "Forex Market & Currency Pair Analyst",
        "category": "Forex Trading",
        "description": "Analyze macroeconomic indicators and technical trends for currency pairs.",
        "icon": "💱",
        "input_label": "Currency pair (e.g. EUR/USD, GBP/JPY) + timeframe",
        "agents": [
            {"role": "Macroeconomic Economist", "goal": "Analyze central bank interest rate differentials, inflation, GDP data, and geopolitical signals."},
            {"role": "Technical Forex Analyst", "goal": "Identify support/resistance zones, Fibonacci retracements, and high-probability trade setups."}
        ]
    },
    "tax_deduction_finder": {
        "name": "Small Business Tax Deduction Optimizer",
        "category": "Tax & Accounting",
        "description": "Identify tax write-offs, deductible expenses, and tax strategy options.",
        "icon": "📑",
        "input_label": "Business entity type (LLC, S-Corp, Freelance) + expense list",
        "agents": [
            {"role": "CPA Tax Specialist", "goal": "Identify eligible Section 179, home office, travel, equipment, and retirement contribution write-offs."},
            {"role": "Tax Advisory Specialist", "goal": "Produce itemized tax deduction checklist + estimated tax savings calculation."}
        ]
    },
    "mortgage_real_estate_roi": {
        "name": "Real Estate Investment ROI Calculator",
        "category": "Real Estate Finance",
        "description": "Calculate Cash-on-Cash Return, Cap Rate, and Net Operating Income (NOI).",
        "icon": "🏢",
        "input_label": "Property purchase price, down payment, monthly rental income, and operating expenses",
        "agents": [
            {"role": "Real Estate Investment Analyst", "goal": "Calculate Net Operating Income (NOI), Capitalization Rate (Cap Rate), and Debt Service Coverage Ratio (DSCR)."},
            {"role": "Property Investment Consultant", "goal": "Output Cash-on-Cash Return, monthly net cash flow, 5-year equity projection, and buy/pass recommendation."}
        ]
    },
    "credit_score_improvement": {
        "name": "Credit Score Repair & Debt Reduction Engine",
        "category": "Personal Finance",
        "description": "Formulate step-by-step credit score optimization and dispute strategies.",
        "icon": "💳",
        "input_label": "Current credit score, credit utilization %, late payments, or dispute items",
        "agents": [
            {"role": "Credit Audit Specialist", "goal": "Identify credit utilization bottlenecks, derogatory marks, and credit bureau dispute grounds."},
            {"role": "Credit Restoration Advisory", "goal": "Write 60-day credit score improvement action plan + FCRA credit dispute letter templates."}
        ]
    },
    "defi_yield_farming": {
        "name": "DeFi Yield Farming & Staking Optimizer",
        "category": "Crypto & Web3",
        "description": "Analyze decentralized finance (DeFi) yield protocols and impermanent loss risks.",
        "icon": "🌾",
        "input_label": "DeFi protocol or token liquidity pool (e.g. Uniswap v3, Aave, Curve)",
        "agents": [
            {"role": "DeFi Protocol Analyst", "goal": "Analyze APY/APR sources, smart contract audit history, TVL trends, and token rewards emission."},
            {"role": "DeFi Risk Manager", "goal": "Calculate impermanent loss risks, liquidation thresholds, and optimal rebalancing cadence."}
        ]
    },
    "merger_acquisition_diligence": {
        "name": "M&A Due Diligence & Valuation Agent",
        "category": "Corporate Finance",
        "description": "Produce Mergers & Acquisitions (M&A) financial & operational synergy reports.",
        "icon": "🤝",
        "input_label": "Acquiring company profile + target company financials & valuation",
        "agents": [
            {"role": "M&A Deal Lead", "goal": "Evaluate strategic fit, cost synergies, revenue cross-sell potential, and transaction structure."},
            {"role": "Financial Diligence Analyst", "goal": "Produce M&A Due Diligence Report covering valuation multiples, synergy value, and integration risks."}
        ]
    },
    "payroll_compliance_auditor": {
        "name": "Payroll & Overtime Compliance Auditor",
        "category": "Accounting & HR",
        "description": "Audit payroll structures, FLSA overtime compliance, and contractor classification.",
        "icon": "💵",
        "input_label": "Employee vs W2/1099 contractor roles + compensation rules",
        "agents": [
            {"role": "Payroll Compliance Specialist", "goal": "Audit 1099 vs W2 classification, overtime calculation rules, and state tax withholding."},
            {"role": "Compensation Analyst", "goal": "Produce Payroll Compliance Audit report with corrective actions and penalty risk assessment."}
        ]
    },
    "invoice_factoring_cashflow": {
        "name": "Invoice Factoring & Working Capital Agent",
        "category": "Corporate Finance",
        "description": "Optimize accounts receivable, invoice factoring, and working capital cycles.",
        "icon": "🧾",
        "input_label": "Outstanding invoices amount, payment terms (Net-30/60), and cashflow bottleneck",
        "agents": [
            {"role": "Cashflow Strategist", "goal": "Calculate Cash Conversion Cycle (CCC), Days Sales Outstanding (DSO), and working capital gap."},
            {"role": "Commercial Financing Advisory", "goal": "Compare invoice factoring vs AR financing options with fee-benefit trade-offs."}
        ]
    },
    "retirement_fire_calculator": {
        "name": "F.I.R.E. & Retirement Freedom Planner",
        "category": "Personal Finance",
        "description": "Calculate Financial Independence Retire Early (F.I.R.E.) milestone numbers.",
        "icon": "🔥",
        "input_label": "Current age, portfolio value, monthly savings, and target annual retirement spending",
        "agents": [
            {"role": "Retirement Actuary Analyst", "goal": "Calculate 4% withdrawal rule FIRE number, inflation-adjusted growth, and LeanFIRE vs FatFIRE numbers."},
            {"role": "Wealth Preservation Advisor", "goal": "Draft retirement roadmap with asset allocation (stocks/bonds/real estate) and withdrawal strategy."}
        ]
    },
    "options_trading_strategy": {
        "name": "Options Trading Strategy & Greeks Analyzer",
        "category": "Options Trading",
        "description": "Formulate Options strategies (Covered Calls, Iron Condor, Vertical Spreads).",
        "icon": "📈",
        "input_label": "Underlying stock ticker, IV rank, price outlook, and target risk",
        "agents": [
            {"role": "Options Derivatives Quant", "goal": "Analyze Option Greeks (Delta, Gamma, Theta, Vega), Implied Volatility (IV), and probability of profit (POP)."},
            {"role": "Options Strategist", "goal": "Recommend optimal Options strategy (e.g. Iron Condor vs Credit Spread) with max profit/loss table."}
        ]
    },
    "insurance_policy_comparison": {
        "name": "Business & Commercial Insurance Auditor",
        "category": "Insurance Finance",
        "description": "Audit business liability, Cyber Insurance, and Errors & Omissions coverage.",
        "icon": "🛡️",
        "input_label": "Business revenue, industry, employee count, and current insurance coverage",
        "agents": [
            {"role": "Commercial Risk Underwriter", "goal": "Analyze coverage gaps in General Liability, Cyber Risk, E&O, and Workers Comp."},
            {"role": "Insurance Advisory Specialist", "goal": "Produce Commercial Insurance Audit report with policy coverage recommendations and cost optimizations."}
        ]
    },
    "nft_collection_valuation": {
        "name": "NFT Collection & Digital Asset Valuation",
        "category": "Crypto & Web3",
        "description": "Analyze NFT collection floor price stability, trait rarity, and volume metrics.",
        "icon": "🎨",
        "input_label": "NFT collection name or contract address",
        "agents": [
            {"role": "Digital Asset Analyst", "goal": "Analyze floor price liquidity, holder distribution, trait rarity score, and trading volume trends."},
            {"role": "NFT Market Strategist", "goal": "Produce NFT Valuation Report with wash trading checks and fair value price range."}
        ]
    },
    "grant_proposal_budget": {
        "name": "Grant Funding & Non-Profit Budget Writer",
        "category": "Grants & Non-Profit",
        "description": "Build grant budget justifications and narrative financial proposals.",
        "icon": "🏛️",
        "input_label": "Grant project objectives, total funding requested, and expense categories",
        "agents": [
            {"role": "Grant Compliance Specialist", "goal": "Align budget categories (Personnel, Equipment, Travel, Indirect Costs) with grant guidelines."},
            {"role": "Grant Proposal Writer", "goal": "Write itemized Budget Justification Narrative with cost reasonableness arguments."}
        ]
    },
    "microfinance_loan_underwriter": {
        "name": "Microfinance & Small Business Loan Underwriter",
        "category": "Banking",
        "description": "Evaluate small business loan applications, cash flows, and creditworthiness.",
        "icon": "🏦",
        "input_label": "Loan amount requested, business revenue, credit score, and collateral",
        "agents": [
            {"role": "Credit Underwriting Officer", "goal": "Calculate Debt Service Coverage Ratio (DSCR), Loan-to-Value (LTV), and credit risk score."},
            {"role": "Commercial Lending Advisory", "goal": "Produce Loan Underwriting Memorandum with approval condition guidelines or risk mitigants."}
        ]
    },
    "venture_debt_structuring": {
        "name": "Venture Debt & Non-Dilutive Financing Agent",
        "category": "Venture Capital",
        "description": "Structure venture debt terms, warrant coverage, and covenant conditions.",
        "icon": "💼",
        "input_label": "Recent VC equity round size, ARR growth rate, and venture debt requested",
        "agents": [
            {"role": "Venture Debt Principal", "goal": "Structure loan principal, interest rate, warrant coverage %, interest-only period, and covenants."},
            {"role": "Term Sheet Advisory", "goal": "Draft Venture Debt Term Sheet Summary comparing dilution impact vs equity financing."}
        ]
    },
    "transfer_pricing_compliance": {
        "name": "Transfer Pricing & Cross-Border Tax Compliance",
        "category": "Corporate Tax",
        "description": "Audit intercompany transfer pricing models for multinational enterprises.",
        "icon": "🌐",
        "input_label": "Intercompany transactions, parent entity country, and subsidiary services",
        "agents": [
            {"role": "International Tax Economist", "goal": "Apply Arm's Length Principle (ALP), Transactional Net Margin Method (TNMM), and OECD guidelines."},
            {"role": "Transfer Pricing Specialist", "goal": "Produce Transfer Pricing Documentation Framework with benchmark margin ranges."}
        ]
    },
    "equipment_lease_vs_buy": {
        "name": "Equipment Lease vs Buy Financial Evaluator",
        "category": "Corporate Finance",
        "description": "Perform NPV net present value lease vs purchase financial comparison.",
        "icon": "🚜",
        "input_label": "Equipment cost, lease monthly rate, loan interest rate, and useful life years",
        "agents": [
            {"role": "CAPEX Financial Analyst", "goal": "Calculate Net Present Value (NPV), MACRS depreciation tax shields, and salvage values."},
            {"role": "Equipment Financing Consultant", "goal": "Deliver Lease vs Buy Decision Matrix highlighting total cost of ownership and cashflow impact."}
        ]
    },
    "esg_sustainable_investing": {
        "name": "ESG & Sustainable Investment Auditor",
        "category": "Sustainable Finance",
        "description": "Evaluate Environmental, Social, and Governance (ESG) scores for portfolios.",
        "icon": "🌱",
        "input_label": "Company or stock ticker list for ESG evaluation",
        "agents": [
            {"role": "ESG Sustainability Analyst", "goal": "Score carbon footprint intensity, board diversity, supply chain ethics, and governance transparency."},
            {"role": "Sustainable Portfolio Strategist", "goal": "Produce ESG Investment Scorecard with greenwashing risk flag and sustainability index rating."}
        ]
    },
    "cbdc_digital_currency": {
        "name": "CBDC & Central Bank Digital Currency Analyst",
        "category": "Macroeconomics",
        "description": "Analyze Central Bank Digital Currency (CBDC) impact on banking and payments.",
        "icon": "🏛️",
        "input_label": "Country or central bank digital currency framework",
        "agents": [
            {"role": "Monetary Policy Economist", "goal": "Analyze retail vs wholesale CBDC design, commercial bank disintermediation, and privacy controls."},
            {"role": "Fintech Policy Strategist", "goal": "Draft CBDC Impact Report covering payment settlement speed and cross-border remittance efficiency."}
        ]
    },
    "saas_metrics_unit_economics": {
        "name": "SaaS Unit Economics & LTV/CAC Calculator",
        "category": "SaaS Finance",
        "description": "Calculate SaaS LTV, CAC, Payback Period, Net Revenue Retention (NRR), and Churn.",
        "icon": "📊",
        "input_label": "ARPU, monthly churn %, customer acquisition cost (CAC), and gross margin %",
        "agents": [
            {"role": "SaaS Metrics Specialist", "goal": "Calculate Customer Lifetime Value (LTV), LTV:CAC Ratio, Magic Number, and Payback Months."},
            {"role": "SaaS Financial Advisory", "goal": "Deliver SaaS Health Scorecard with benchmark comparison against top-quartile SaaS companies."}
        ]
    },
    "carbon_credit_trading": {
        "name": "Carbon Credit Trading & Offset Verifier",
        "category": "Environmental Finance",
        "description": "Analyze voluntary carbon market (VCM) credits and offset quality.",
        "icon": "🌍",
        "input_label": "Carbon offset project type (forestry, renewable, direct air capture) + volume",
        "agents": [
            {"role": "Carbon Market Specialist", "goal": "Evaluate additionality, permanence, Verra/Gold Standard certification, and leakage risk."},
            {"role": "Carbon Trading Advisory", "goal": "Produce Carbon Credit Valuation Report with price per metric ton (tCO2e) recommendation."}
        ]
    },
    "crowdfund_equity_investor": {
        "name": "Reg CF Equity Crowdfunding Investment Analyst",
        "category": "Venture Capital",
        "description": "Audit Wefunder / Republic Reg CF equity crowdfunding offerings.",
        "icon": "👥",
        "input_label": "Campaign page URL or pitch text, valuation, and security type (SAFE vs Convertible Note)",
        "agents": [
            {"role": "Angel Investor Analyst", "goal": "Audit SAFE valuation cap, discount rate, team background, traction metrics, and burn rate."},
            {"role": "Crowdfund Due Diligence Lead", "goal": "Deliver Reg CF Investment Memo with Red Flags checklist and risk-adjusted return score."}
        ]
    },
    "royalties_ip_valuation": {
        "name": "Intellectual Property & Royalty Valuation",
        "category": "IP Finance",
        "description": "Value patents, music/media royalties, and brand licensing income.",
        "icon": "🎵",
        "input_label": "Historical annual royalty income, contract duration, and IP category",
        "agents": [
            {"role": "IP Valuation Economist", "goal": "Apply Relief-from-Royalty method, Multi-Period Excess Earnings (MPEEM), and discount rates."},
            {"role": "Royalty Investment Advisory", "goal": "Output IP Valuation Report with net NPV lump-sum fair market value calculation."}
        ]
    },
    "treasury_liquidity_management": {
        "name": "Corporate Treasury & Liquidity Risk Manager",
        "category": "Corporate Finance",
        "description": "Optimize corporate cash reserves, money market yields, and FX exposure.",
        "icon": "🏛️",
        "input_label": "Corporate cash balances, monthly operating burn, and foreign currency revenues",
        "agents": [
            {"role": "Treasury Risk Manager", "goal": "Analyze yield curve optimization, short-term commercial paper vs T-bills, and FX hedging."},
            {"role": "Corporate Treasurer", "goal": "Deliver Treasury Liquidity Strategy with cash laddering recommendations and counterparty risk limits."}
        ]
    }
}
