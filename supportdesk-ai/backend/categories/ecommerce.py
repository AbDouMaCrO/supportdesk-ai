"""
Category: E-Commerce, Retail & Merchandising (40 Specialized Agent Teams)
"""

ECOMMERCE_TEMPLATES: dict[str, dict] = {
    "product_recommendation_engine": {
        "name": "Product Recommendation Engine",
        "category": "E-Commerce",
        "description": "Generate personalized cross-sell and up-sell product recommendations.",
        "icon": "🛍️",
        "input_label": "Customer purchase history or current cart items",
        "agents": [
            {"role": "E-Commerce Merchandiser", "goal": "Analyze customer preferences, complimentary product affinity, and price margin structure."},
            {"role": "Personalization Copywriter", "goal": "Write 3 personalized product recommendation bundles with enticing 'Why You'll Love This' blurbs."}
        ]
    },
    "abandoned_cart_recovery": {
        "name": "Abandoned Cart Recovery Sequence",
        "category": "E-Commerce Email",
        "description": "Draft high-converting abandoned cart SMS & email recovery sequences.",
        "icon": "🛒",
        "input_label": "Cart items, total value, and discount incentive",
        "agents": [
            {"role": "Conversion Rate Specialist", "goal": "Identify abandonment friction (shipping costs, hesitation) and urgency triggers."},
            {"role": "Cart Recovery Copywriter", "goal": "Write 3-part recovery email sequence (1h, 24h, 48h) + 1 SMS reminder."}
        ]
    },
    "shopify_product_description": {
        "name": "Shopify Product Page Copywriter",
        "category": "E-Commerce Copywriting",
        "description": "Write SEO-optimized Shopify product titles, benefits, specs, and FAQs.",
        "icon": "🏷️",
        "input_label": "Product features, target customer, and brand tone",
        "agents": [
            {"role": "E-Commerce Copy Strategist", "goal": "Highlight emotional benefits, key specs, objection busters, and SEO keywords."},
            {"role": "Shopify Copywriter", "goal": "Produce complete Shopify product description: Catchy Headline, 5 Benefit Bullets, Specs Table, and FAQ."}
        ]
    },
    "customer_review_responder": {
        "name": "E-Commerce Product Review Responder",
        "category": "Customer Care",
        "description": "Generate empathetic responses to 1-star to 5-star customer product reviews.",
        "icon": "⭐",
        "input_label": "Customer review rating (1-5 stars) + review text",
        "agents": [
            {"role": "Customer Experience Specialist", "goal": "Analyze review sentiment, issue validity, brand voice rules, and compensation guidelines."},
            {"role": "Brand Reputation Manager", "goal": "Write professional public reply turning negative reviews into support wins and thanking positive reviewers."}
        ]
    },
    "returns_exchange_agent": {
        "name": "Returns & Exchange Policy Automation",
        "category": "Logistics & Care",
        "description": "Handle customer return inquiries, exchange options, and store credit offers.",
        "icon": "📦",
        "input_label": "Reason for return, order date, and item condition",
        "agents": [
            {"role": "Return Policy Specialist", "goal": "Verify return window eligibility, condition rules, and store credit incentive options."},
            {"role": "Customer Support Representative", "goal": "Write clear return approval email with prepaid label instructions and exchange suggestions."}
        ]
    },
    "black_friday_cyber_monday": {
        "name": "BFCM & Holiday Promo Campaign Suite",
        "category": "E-Commerce Marketing",
        "description": "Create Black Friday / Cyber Monday promotional emails, banners, and ads.",
        "icon": "🏷️",
        "input_label": "BFCM discount %, featured products, and sale duration",
        "agents": [
            {"role": "Promo Campaign Strategist", "goal": "Design sale countdown timeline, VIP early access incentives, and doorbuster offers."},
            {"role": "BFCM Copywriter", "goal": "Write 4 promotional emails (Teaser, Launch, 50% Off Doorbuster, Hours Left) + website banner text."}
        ]
    },
    "supplier_vendor_negotiator": {
        "name": "Supplier & Vendor Price Negotiator",
        "category": "Supply Chain",
        "description": "Draft professional MOQ (Minimum Order Quantity) and unit cost negotiation emails.",
        "icon": "🤝",
        "input_label": "Current unit price, order quantity increase, and target target price",
        "agents": [
            {"role": "Procurement Specialist", "goal": "Analyze volume pricing tiers, payment term leverage (Net-30), and long-term partnership value."},
            {"role": "Supplier Relations Negotiator", "goal": "Draft polite, firm price negotiation email to supplier requesting 10-15% margin improvement."}
        ]
    },
    "inventory_restock_forecaster": {
        "name": "Inventory Restock & SKU Demand Planner",
        "category": "Inventory Management",
        "description": "Calculate reorder points, lead time safety stock, and SKU velocity.",
        "icon": "📊",
        "input_label": "Daily sales velocity, supplier lead time (days), and current stock",
        "agents": [
            {"role": "Inventory Operations Specialist", "goal": "Calculate Safety Stock formula, Reorder Point (ROP), and Days of Inventory Remaining (DIR)."},
            {"role": "Supply Chain Planner", "goal": "Produce SKU Inventory Restock Alert report with recommended purchase order quantities."}
        ]
    },
    "subscription_box_curator": {
        "name": "Subscription Box Curation & Churn Agent",
        "category": "Subscription E-Commerce",
        "description": "Design monthly subscription box themes and unboxing experience guides.",
        "icon": "🎁",
        "input_label": "Subscription niche (beauty, snacks, pet, fitness) + monthly budget per box",
        "agents": [
            {"role": "Subscription Box Curator", "goal": "Select 4-6 complementary items, theme narrative, and packaging unboxing surprise."},
            {"role": "Subscription Copywriter", "goal": "Write theme insert card copy, product descriptions, and social unboxing hashtag challenge."}
        ]
    },
    "dropshipping_product_researcher": {
        "name": "Dropshipping Winning Product Finder",
        "category": "E-Commerce Sourcing",
        "description": "Analyze viral dropshipping products, margins, and supplier reliability.",
        "icon": "🔥",
        "input_label": "Product name or AliExpress/TikTok ad link",
        "agents": [
            {"role": "E-Commerce Trend Scout", "goal": "Evaluate viral engagement metrics, problem-solving factor, wow-factor, and saturation score."},
            {"role": "Margin & Pricing Analyst", "goal": "Calculate COGS, ad spend buffer, target retail price ($29.99 vs $9.99 cost), and net profit margin."}
        ]
    },
    "etsy_seo_listing_generator": {
        "name": "Etsy Shop SEO & Tags Generator",
        "category": "Marketplace Marketing",
        "description": "Write Etsy titles, 13 search tags, and story-driven descriptions.",
        "icon": "🎨",
        "input_label": "Handmade/Craft item details, target buyer, and occasion",
        "agents": [
            {"role": "Etsy SEO Specialist", "goal": "Research long-tail search tags, category placement, and buyer search intent."},
            {"role": "Etsy Copywriter", "goal": "Produce Etsy Title, 13 exact search tags (character limited), and description with care instructions."}
        ]
    },
    "ebay_listing_optimizer": {
        "name": "eBay Listing & Item Specifics Generator",
        "category": "Marketplace Marketing",
        "description": "Generate high-ranking eBay titles, item specifics, and HTML template copy.",
        "icon": "🏷️",
        "input_label": "Item condition (New/Used), brand, model, and features",
        "agents": [
            {"role": "eBay SEO Specialist", "goal": "Maximize Cassini search algorithm matching, title keyword density (80 chars), and item specifics."},
            {"role": "eBay Listing Copywriter", "goal": "Write 80-char Title, Item Specifics key-value table, Condition notes, and Return terms."}
        ]
    },
    "tiktok_shop_creator_brief": {
        "name": "TikTok Shop & Live Shopping Brief",
        "category": "Social Commerce",
        "description": "Draft TikTok Shop affiliate creator briefs and live shopping script outlines.",
        "icon": "🛍️",
        "input_label": "Product name, commission rate %, and key selling points",
        "agents": [
            {"role": "Social Commerce Manager", "goal": "Define creator commission incentives, pin product link timing, and sample request terms."},
            {"role": "TikTok Live Scriptwriter", "goal": "Write 5-minute TikTok Live host demonstration script with flash deal announcements."}
        ]
    },
    "influencer_gifting_campaign": {
        "name": "Seeding & Product Gifting Campaign Agent",
        "category": "PR & Influencer",
        "description": "Manage micro-influencer product seeding and unboxing agreements.",
        "icon": "📦",
        "input_label": "Gifted product value, target niche (beauty, tech, fitness), and shipping details",
        "agents": [
            {"role": "Creator Seeding Coordinator", "goal": "Identify micro-creators, address collection flow, and no-string-attached gifting etiquette."},
            {"role": "Influencer Relations Copywriter", "goal": "Write personalized DM invite + packaging insert note welcoming them to the brand family."}
        ]
    },
    "cross_border_localization": {
        "name": "Cross-Border E-Commerce Localization",
        "category": "Global E-Commerce",
        "description": "Localize currency, sizing, cultural nuances, and shipping info for global stores.",
        "icon": "🌍",
        "input_label": "Product details + target country market (e.g. Japan, Germany, UK, UAE)",
        "agents": [
            {"role": "Internationalization (i18n) Specialist", "goal": "Identify local currency format, metric sizing conversions, payment gateway norms, and cultural tone."},
            {"role": "Global E-Commerce Copywriter", "goal": "Produce localized product description + shipping & duty customs explanation note."}
        ]
    },
    "unboxing_experience_designer": {
        "name": "Packaging & Unboxing Experience Designer",
        "category": "Brand Experience",
        "description": "Design custom mailer box copy, thank-you inserts, and QR code offers.",
        "icon": "🎁",
        "input_label": "Brand values, product category, and customer reorder incentive",
        "agents": [
            {"role": "Packaging Experience Specialist", "goal": "Map sensory unboxing moments: outer box tape, tissue paper wrap, sticker seal, and insert card."},
            {"role": "Brand Experience Copywriter", "goal": "Write Thank-You insert card copy, box lid messaging, and QR code review incentive prompt."}
        ]
    },
    "fba_prep_shipment_planner": {
        "name": "Amazon FBA Prep & Shipment Workflow",
        "category": "Amazon Operations",
        "description": "Build Amazon FBA box packing lists, barcode labeling, and FC destination prep.",
        "icon": "📦",
        "input_label": "ASIN, case pack quantities, box dimensions, and weight",
        "agents": [
            {"role": "Amazon FBA Logistics Specialist", "goal": "Check FNSKU labeling, polybag suffocation warnings, box weight limits (50 lbs), and pallet specs."},
            {"role": "FBA Operations Guide", "goal": "Produce FBA Prep Instruction Sheet for warehouse staff."}
        ]
    },
    "flash_sale_countdown_campaign": {
        "name": "24-Hour Flash Sale Campaign Suite",
        "category": "E-Commerce Marketing",
        "description": "Create high-urgency 24-hour flash sale email & SMS campaigns.",
        "icon": "⚡",
        "input_label": "Flash sale discount %, start time, end time, and featured collection",
        "agents": [
            {"role": "Urgency & Scarcity Marketer", "goal": "Design countdown sequence timing (Sale Live, 6 Hours Left, Final 60 Minutes)."},
            {"role": "Flash Sale Copywriter", "goal": "Write 3 urgent flash sale emails + 2 SMS blasts."}
        ]
    },
    "wholesale_b2b_catalog_copy": {
        "name": "Wholesale B2B Catalog & Tiered Pricing",
        "category": "B2B E-Commerce",
        "description": "Write B2B buyer line sheets, wholesale order minimums, and volume pricing tables.",
        "icon": "🏬",
        "input_label": "Product line, MSRP, wholesale price tiers, and case quantities",
        "agents": [
            {"role": "B2B Merchandising Specialist", "goal": "Structure wholesale line sheet, MSRP vs MAP pricing enforcement, and MOQ tiers."},
            {"role": "Wholesale Copywriter", "goal": "Write B2B Catalog intro, product line sheet copy, and retailer application instructions."}
        ]
    },
    "loyalty_program_rewards_copy": {
        "name": "VIP Loyalty & Rewards Program Suite",
        "category": "Customer Retention",
        "description": "Design VIP tier names, point redemption rules, and perk email announcements.",
        "icon": "👑",
        "input_label": "Brand name, product type, and rewards structure (Points vs Tiers)",
        "agents": [
            {"role": "Loyalty Program Architect", "goal": "Structure 3 VIP tiers (e.g. Silver, Gold, Platinum), points earning rules (10 pts per $1), and birthday perks."},
            {"role": "Loyalty Copywriter", "goal": "Write VIP Program Launch Email, Tier Benefit Table, and Points Balance reminder email."}
        ]
    }
}
