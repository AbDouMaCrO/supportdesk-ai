"""
Category: Marketing & Social Media (40 Specialized Agent Teams)
"""

MARKETING_TEMPLATES: dict[str, dict] = {
    "lead_research": {
        "name": "Lead Research",
        "category": "Marketing & Sales",
        "description": "Research a company or person and produce a sales prospect report.",
        "icon": "🔍",
        "input_label": "Company or person name + context",
        "agents": [
            {"role": "Business Intelligence Researcher", "goal": "Gather target company profile, industry, size, products, news, and pain points."},
            {"role": "Sales Strategist", "goal": "Produce prospect report with value proposition, talking points, and opening line."}
        ]
    },
    "content_writer": {
        "name": "Content Writer",
        "category": "Marketing & Content",
        "description": "Research a topic and write a polished blog post or article.",
        "icon": "✍️",
        "input_label": "Topic, target audience, and desired tone",
        "agents": [
            {"role": "Research Analyst", "goal": "Research topic, identify key arguments, statistics, and article structure."},
            {"role": "Content Writer", "goal": "Write engaging article with headline, intro, body subheadings, and conclusion."}
        ]
    },
    "social_media": {
        "name": "Social Media Pack",
        "category": "Marketing & Content",
        "description": "Create a week of social media posts for any platform.",
        "icon": "📱",
        "input_label": "Product/service + target platform",
        "agents": [
            {"role": "Brand Strategist", "goal": "Define content pillars, tone, and outline 7 post ideas."},
            {"role": "Social Media Copywriter", "goal": "Write all 7 posts in full with hashtags and platform formatting."}
        ]
    },
    "tiktok_script_creator": {
        "name": "TikTok & Shorts Script Studio",
        "category": "Social Media",
        "description": "Create viral short-form video scripts for TikTok, Instagram Reels, and Shorts.",
        "icon": "🎬",
        "input_label": "Product/Topic + target demographic",
        "agents": [
            {"role": "Viral Hook Strategist", "goal": "Craft 3 high-retention 3-second visual/textual hooks."},
            {"role": "Short-Form Video Scriptwriter", "goal": "Write 30-60s script structured into Hook, Problem, Solution, and CTA with cues."}
        ]
    },
    "seo_keyword_cluster": {
        "name": "SEO & Keyword Cluster Strategist",
        "category": "Marketing & SEO",
        "description": "Perform keyword research and build pillar-cluster SEO content architectures.",
        "icon": "🎯",
        "input_label": "Core industry topic or seed keyword",
        "agents": [
            {"role": "SEO Keyword Intent Specialist", "goal": "Identify high-intent primary keywords, secondary long-tail keywords, and search intent."},
            {"role": "Content Architecture Strategist", "goal": "Build pillar-cluster content plan mapping pillar topics, sub-topics, title tags, and link structure."}
        ]
    },
    "linkedin_thought_leadership": {
        "name": "LinkedIn Thought Leadership Pack",
        "category": "Social Media",
        "description": "Generate high-engagement LinkedIn posts, carousels, and executive storytelling.",
        "icon": "💼",
        "input_label": "Executive insight, industry lesson, or milestone",
        "agents": [
            {"role": "Personal Brand Strategist", "goal": "Extract contrarian insight and define narrative arc."},
            {"role": "LinkedIn Executive Ghostwriter", "goal": "Draft 3 distinct LinkedIn formats: story post, bullet list, and carousel outline."}
        ]
    },
    "ad_copy_generator": {
        "name": "Multi-Platform Ad Copy Suite",
        "category": "Paid Marketing",
        "description": "Generate high-converting ad copy for Facebook, Instagram, Google Ads, and LinkedIn.",
        "icon": "📢",
        "input_label": "Product/Offer + target audience",
        "agents": [
            {"role": "Consumer Psychology Researcher", "goal": "Identify emotional triggers, pain points, desire vectors, and objection handlers."},
            {"role": "Direct Response Ad Copywriter", "goal": "Write ad copy variations (Hook-Body-CTA) optimized for Meta, Google PPC, and LinkedIn."}
        ]
    },
    "influencer_outreach": {
        "name": "Influencer Campaign Manager",
        "category": "Marketing & PR",
        "description": "Identify target influencer archetypes and generate outreach pitches.",
        "icon": "🌟",
        "input_label": "Brand name + campaign goals + niche",
        "agents": [
            {"role": "Influencer Scout & Matcher", "goal": "Define creator personas, tier breakdown, and collaboration metrics."},
            {"role": "PR Outreach Specialist", "goal": "Write 2 high-converting outreach email/DM templates including value prop and terms."}
        ]
    },
    "brand_voice_generator": {
        "name": "Brand Voice & Identity Architect",
        "category": "Branding",
        "description": "Define a comprehensive brand tone, voice guidelines, and style guide.",
        "icon": "🎨",
        "input_label": "Brand description, values, and customer",
        "agents": [
            {"role": "Brand Persona Strategist", "goal": "Define brand archetype, core personality traits, and vocabulary pillars."},
            {"role": "Brand Style Guide Writer", "goal": "Create Brand Voice Guide with tone variations, copywriting rules, and baseline examples."}
        ]
    },
    "youtube_title_thumbnail": {
        "name": "YouTube CTR & Title Optimizer",
        "category": "Video Marketing",
        "description": "Generate viral YouTube titles, thumbnail text concepts, and video descriptions.",
        "icon": "▶️",
        "input_label": "Video topic, target audience, or transcript summary",
        "agents": [
            {"role": "YouTube Growth Strategist", "goal": "Analyze curiosity gaps, high-CTR framing patterns, and thumbnail-title synergy."},
            {"role": "YouTube Packaging Copywriter", "goal": "Output 10 click-worthy titles, 3 thumbnail visual concepts, and SEO description with timestamps."}
        ]
    },
    "email_newsletter_creator": {
        "name": "Email Newsletter & Sequence Writer",
        "category": "Email Marketing",
        "description": "Write engaging email newsletters and automated welcome sequences.",
        "icon": "📩",
        "input_label": "Topic/Offer + goal",
        "agents": [
            {"role": "Email Marketing Strategist", "goal": "Determine email cadence, open hooks, value delivery, and click objectives."},
            {"role": "Email Conversion Copywriter", "goal": "Draft 5 subject line options, preview text, main body copy, and CTAs."}
        ]
    },
    "landing_page_copy": {
        "name": "Landing Page Copywriter",
        "category": "CRO & Copywriting",
        "description": "Generate full landing page copy: Hero, Features, Social Proof, and CTA.",
        "icon": "🖥️",
        "input_label": "Product/SaaS name + value proposition",
        "agents": [
            {"role": "CRO Architect", "goal": "Structure landing page flow: Hero H1, Social Proof, Value Prop, and CTA hierarchy."},
            {"role": "Landing Page Direct Copywriter", "goal": "Write complete section-by-section copy ready for web development."}
        ]
    },
    "viral_hook_generator": {
        "name": "Viral Hook & Caption Engine",
        "category": "Social Media",
        "description": "Generate 20 irresistible hooks and captions for social media growth.",
        "icon": "⚡",
        "input_label": "Topic or key message to share",
        "agents": [
            {"role": "Social Psychology Analyst", "goal": "Map 5 viral hook frameworks: Curiosity Gap, Contrarian, Story, How-To, Data Drop."},
            {"role": "Viral Copywriter", "goal": "Write 20 distinct hook lines + supporting caption templates."}
        ]
    },
    "podcast_repurposer": {
        "name": "Podcast & Video Content Repurposer",
        "category": "Content Marketing",
        "description": "Turn long-form podcast transcripts into tweets, articles, and newsletters.",
        "icon": "🎙️",
        "input_label": "Transcript summary or main takeaways",
        "agents": [
            {"role": "Content Operations Strategist", "goal": "Extract key quotes, core lessons, controversial statements, and takeaways."},
            {"role": "Omnichannel Content Adapter", "goal": "Produce kit: 1 X Thread, 1 LinkedIn Post, 1 Newsletter Segment, and 3 Short Video ideas."}
        ]
    },
    "pr_press_release": {
        "name": "PR & Press Release Strategist",
        "category": "Public Relations",
        "description": "Draft newsworthy press releases and journalist pitch letters.",
        "icon": "📣",
        "input_label": "Company announcement or milestone",
        "agents": [
            {"role": "Public Relations Director", "goal": "Identify media angle, AP-style press release structure, quotes, and media fit."},
            {"role": "PR Copywriter", "goal": "Draft AP-style Press Release + personalized 3-paragraph media pitch email."}
        ]
    },
    "customer_testimonial_story": {
        "name": "Customer Case Study & Success Story",
        "category": "Content Marketing",
        "description": "Transform customer interviews or feedback into compelling case studies.",
        "icon": "⭐",
        "input_label": "Customer details + situation + product used + results",
        "agents": [
            {"role": "Case Study Researcher", "goal": "Structure narrative: Challenge (Before), Solution (With Us), and Impact (After)."},
            {"role": "Storytelling Copywriter", "goal": "Write 1-page Customer Success Story with headline metrics and quote callouts."}
        ]
    },
    "product_launch_campaign": {
        "name": "Product Launch Campaign Manager",
        "category": "Growth Marketing",
        "description": "Build a complete 3-phase product launch marketing campaign.",
        "icon": "🚀",
        "input_label": "Product name + launch date + features",
        "agents": [
            {"role": "Launch Campaign Director", "goal": "Map 3 phases: Teaser Phase, Launch Day Blitz, and Post-Launch Nurture."},
            {"role": "Campaign Content Planner", "goal": "Create copy schedule for social posts, launch email, and product announcement copy."}
        ]
    },
    "pinterest_visual_marketing": {
        "name": "Pinterest Marketing & Board Planner",
        "category": "Social Media",
        "description": "Generate SEO-optimized Pin titles, descriptions, and visual concepts.",
        "icon": "📌",
        "input_label": "Niche/Product + blog post or product URL",
        "agents": [
            {"role": "Pinterest SEO Specialist", "goal": "Research search trends, board categories, and keyword-rich Pin titles."},
            {"role": "Pinterest Copywriter & Designer", "goal": "Write 5 Pin descriptions with keywords + 5 visual text overlays."}
        ]
    },
    "x_twitter_thread_creator": {
        "name": "X / Twitter Viral Thread Engine",
        "category": "Social Media",
        "description": "Write high-retention X/Twitter threads that drive followers and bookmarks.",
        "icon": "🐦",
        "input_label": "Topic, story, or educational guide topic",
        "agents": [
            {"role": "Twitter Growth Strategist", "goal": "Design thread structure: Hook Tweet, 5-8 Value Tweets, Summary, and CTA."},
            {"role": "Thread Copywriter", "goal": "Write full thread formatted ready to tweet with spacing and punchy lines."}
        ]
    },
    "event_webinar_marketing": {
        "name": "Webinar & Event Promotion Suite",
        "category": "Event Marketing",
        "description": "Plan and write promotional assets for upcoming webinars or virtual events.",
        "icon": "🎟️",
        "input_label": "Event title + speakers + date + main topic",
        "agents": [
            {"role": "Event Marketing Strategist", "goal": "Identify attendee benefits, urgency drivers, and registration milestones."},
            {"role": "Event Campaign Copywriter", "goal": "Write 3 promotional emails (Invite, 24h Reminder, Last Call) + 3 social posts."}
        ]
    },
    "affiliate_marketing_manager": {
        "name": "Affiliate Marketing & Review Suite",
        "category": "Affiliate Marketing",
        "description": "Write persuasive product reviews and affiliate campaign content.",
        "icon": "🛍️",
        "input_label": "Product name + main benefits + affiliate offer",
        "agents": [
            {"role": "Affiliate Strategist", "goal": "Analyze pros/cons, comparison points, pricing value, and buyer persona."},
            {"role": "Review Copywriter", "goal": "Draft review article + 3 promo blurbs with natural affiliate link placements."}
        ]
    },
    "crisis_pr_management": {
        "name": "Crisis Communications & PR Response",
        "category": "Public Relations",
        "description": "Draft professional public statements and crisis response plans.",
        "icon": "🛡️",
        "input_label": "Incident description + company name + affected parties",
        "agents": [
            {"role": "Reputation Risk Strategist", "goal": "Assess damage severity, stakeholder concerns, accountability, and resolution."},
            {"role": "Crisis PR Spokesperson", "goal": "Draft official statement, internal employee FAQ, and customer communication."}
        ]
    },
    "community_engagement_reply": {
        "name": "Community Management & Comment Engine",
        "category": "Community",
        "description": "Generate brand-aligned responses for comments, reviews, and DMs.",
        "icon": "💬",
        "input_label": "Paste customer comments, negative reviews, or DMs",
        "agents": [
            {"role": "Community Sentiment Analyst", "goal": "Analyze emotion, underlying request, brand opportunity, and escalation."},
            {"role": "Community Engagement Manager", "goal": "Write 5 response variations (Empathetic, Professional, Playful, De-escalating, Sales Bridge)."}
        ]
    },
    # ── Additional 17 Marketing Specialists ────────────────────────────────────
    "quora_reddit_marketing": {
        "name": "Reddit & Quora Marketing Specialist",
        "category": "Community Marketing",
        "description": "Craft helpful, non-spammy community answers that drive qualified organic traffic.",
        "icon": "💬",
        "input_label": "Target question/thread + your product angle",
        "agents": [
            {"role": "Community Culture Analyst", "goal": "Deconstruct subreddit/Quora etiquette, anti-spam rules, and voter psychology."},
            {"role": "Value-First Copywriter", "goal": "Write a thorough 300-word authoritative response with subtle non-promotional product reference."}
        ]
    },
    "amazon_product_listing": {
        "name": "Amazon SEO & Listing Copywriter",
        "category": "E-Commerce Marketing",
        "description": "Write high-ranking Amazon product titles, 5 bullet points, and A+ content outlines.",
        "icon": "📦",
        "input_label": "Product specifications, target audience, and primary keywords",
        "agents": [
            {"role": "Amazon A9 Algorithm Specialist", "goal": "Extract indexing keywords, backend search terms, and feature priorities."},
            {"role": "E-Commerce Copywriter", "goal": "Produce Amazon Title, 5 Key Feature Bullets, Description, and A+ Banner concepts."}
        ]
    },
    "sms_text_campaign": {
        "name": "SMS & Push Notification Campaign Writer",
        "category": "Mobile Marketing",
        "description": "Create high-converting SMS flash sale texts and push notifications.",
        "icon": "📲",
        "input_label": "Offer details, discount code, and deadline",
        "agents": [
            {"role": "Mobile Concierge Strategist", "goal": "Optimize for character limits (160 chars), compliance, and immediate action."},
            {"role": "SMS Direct Marketer", "goal": "Write 5 urgent SMS variations with trackable link placement and opt-out formatting."}
        ]
    },
    "app_store_optimization": {
        "name": "App Store Optimization (ASO) Engine",
        "category": "App Marketing",
        "description": "Optimize iOS App Store & Google Play titles, subtitles, and screenshot copy.",
        "icon": "📲",
        "input_label": "Mobile app features, category, and target users",
        "agents": [
            {"role": "ASO Keyword Researcher", "goal": "Identify app store ranking keywords, competitor title formulas, and search popularity."},
            {"role": "App Store Copywriter", "goal": "Write App Name, Subtitle (30 chars), Promotional Text, Full Description, and 5 Screenshot Callouts."}
        ]
    },
    "google_my_business_seo": {
        "name": "Local SEO & Google Business Profile Agent",
        "category": "Local Marketing",
        "description": "Generate local business posts, service descriptions, and review responses.",
        "icon": "📍",
        "input_label": "Local business name, service area, and promotion",
        "agents": [
            {"role": "Local SEO Strategist", "goal": "Map geo-targeted keywords, local pack signals, and service categories."},
            {"role": "Local Business Copywriter", "goal": "Write 3 Google Business Posts, updated service descriptions, and review response templates."}
        ]
    },
    "referral_program_copy": {
        "name": "Referral & Viral Growth Campaign Writer",
        "category": "Growth Marketing",
        "description": "Draft invite copy, referral rewards emails, and viral sharing popups.",
        "icon": "🎁",
        "input_label": "Referral incentive (e.g. $20 off) + product overview",
        "agents": [
            {"role": "Viral Loop Architect", "goal": "Design give-$X-get-$Y incentive mechanics and social sharing triggers."},
            {"role": "Referral Copywriter", "goal": "Draft referral landing page headline, email invite template, and 1-click WhatsApp/SMS share text."}
        ]
    },
    "lead_magnet_creator": {
        "name": "Lead Magnet & Opt-In Creator",
        "category": "Lead Generation",
        "description": "Design high-converting PDF cheatsheets, checklists, and lead magnet copy.",
        "icon": "🧲",
        "input_label": "Target topic or audience pain point",
        "agents": [
            {"role": "Lead Generation Strategist", "goal": "Conceptualize actionable lead magnet format (Checklist, Template, Swipe File)."},
            {"role": "Lead Magnet Writer", "goal": "Write full content outline, introduction, actionable checklist items, and backend pitch."}
        ]
    },
    "customer_winback_email": {
        "name": "Customer Win-Back & Churn Reduction Suite",
        "category": "Retention Marketing",
        "description": "Create automated email sequences to reactivate inactive subscribers or churned users.",
        "icon": "🔄",
        "input_label": "Dormant period (e.g. 60 days inactive) + win-back incentive",
        "agents": [
            {"role": "Retention Analyst", "goal": "Identify churn reasons, loss aversion triggers, and reactivation incentives."},
            {"role": "Reactivation Copywriter", "goal": "Write 3-part Win-Back email sequence: 'We miss you', 'Special Offer', and 'Final Goodbye'."}
        ]
    },
    "sponsorship_pitch_deck": {
        "name": "Sponsorship Pitch & Deck Copywriter",
        "category": "Partnerships",
        "description": "Craft compelling pitch letters and deck slide copy for brand sponsorships.",
        "icon": "🤝",
        "input_label": "Event, podcast, or creator platform stats + target sponsor brand",
        "agents": [
            {"role": "Sponsorship Strategist", "goal": "Calculate audience demographics, reach metrics, and tier package pricing."},
            {"role": "Partnership Pitch Copywriter", "goal": "Write executive sponsor pitch email + 5-slide deck copy framework."}
        ]
    },
    "comparison_page_copy": {
        "name": "VS Competitor Comparison Page Copy",
        "category": "SEO & CRO",
        "description": "Build high-converting 'YourBrand vs Competitor' comparison landing page copy.",
        "icon": "⚔️",
        "input_label": "Your product name + key competitor name + primary advantages",
        "agents": [
            {"role": "Competitive Positioning Analyst", "goal": "Map feature comparison grid, pricing advantage, and migration ease."},
            {"role": "Comparison Page Copywriter", "goal": "Write H1 Headline, Comparison Table copy, 'Why Switch' section, and Migration Offer CTA."}
        ]
    },
    "upsell_crosssell_copy": {
        "name": "Post-Purchase Upsell & Cross-Sell Engine",
        "category": "E-Commerce",
        "description": "Generate one-click post-purchase upsell offers and checkout order bumps.",
        "icon": "💎",
        "input_label": "Main product purchased + complementary upsell product",
        "agents": [
            {"role": "Average Order Value (AOV) Strategist", "goal": "Identify complementary product synergy, discount urgency, and impulse buying triggers."},
            {"role": "Upsell Copywriter", "goal": "Write Order Bump copy, 1-Click Upsell Modal text, and Thank-You page cross-sell banner."}
        ]
    },
    "brand_tagline_slogan": {
        "name": "Brand Tagline & Slogan Generator",
        "category": "Branding",
        "description": "Generate 30 memorable brand slogans and positioning taglines.",
        "icon": "💡",
        "input_label": "Brand mission, industry, and core benefit",
        "agents": [
            {"role": "Brand Naming Specialist", "goal": "Analyze 5 framing styles: Visionary, Functional, Metaphorical, Short & Punchy, Emotion-driven."},
            {"role": "Slogan Copywriter", "goal": "Deliver 30 distinct brand taglines categorized by emotional vibe and positioning angle."}
        ]
    },
    "ugc_creator_brief": {
        "name": "UGC Video Creator Brief Generator",
        "category": "Creator Economy",
        "description": "Generate detailed briefs for User-Generated Content (UGC) creators.",
        "icon": "📹",
        "input_label": "Product name, key benefits, and visual aesthetic requirements",
        "agents": [
            {"role": "UGC Campaign Manager", "goal": "Define video length, aspect ratio, lighting/setting requirements, and do's & don'ts."},
            {"role": "Creative Director", "goal": "Write step-by-step visual scene guide, spoken audio script, and B-roll shot list for creators."}
        ]
    },
    "webinar_presentation_deck": {
        "name": "Webinar Presentation Outline & Script",
        "category": "Event Marketing",
        "description": "Outline full 45-minute sales webinar slide deck and presenter script.",
        "icon": "📊",
        "input_label": "Webinar topic + high-ticket offer being sold",
        "agents": [
            {"role": "Webinar Conversion Strategist", "goal": "Structure the 4-part webinar flow: Origin Story, Secret 1, Secret 2, Secret 3, and The Stack Pitch."},
            {"role": "Presentation Copywriter", "goal": "Write 20-slide outline with slide headlines, visual slide prompts, and presenter script notes."}
        ]
    },
    "survey_feedback_copy": {
        "name": "Customer Feedback & NPS Survey Writer",
        "category": "Customer Insights",
        "description": "Draft customer feedback surveys, NPS emails, and review requests.",
        "icon": "📝",
        "input_label": "Customer touchpoint (Post-purchase, 30-day user, Support ticket)",
        "agents": [
            {"role": "CX Insights Researcher", "goal": "Formulate unbiased, high-response survey questions and scale ratings."},
            {"role": "Customer Experience Copywriter", "goal": "Draft survey invitation email, 5 short questions, and Thank-You discount coupon message."}
        ]
    },
    "trade_show_exhibitor": {
        "name": "Trade Show & Booth Marketing Pack",
        "category": "Event Marketing",
        "description": "Write trade show booth banners, flyer copy, and attendee follow-up emails.",
        "icon": "🏬",
        "input_label": "Event name, industry, booth offer/demo, and company name",
        "agents": [
            {"role": "Event Logistics Strategist", "goal": "Design foot-traffic attraction triggers, banner readability, and booth demo scripts."},
            {"role": "Event Copywriter", "goal": "Write 3 Booth Headline Banners, 1-page One-Pager Flyer copy, and Post-Event Follow-Up email."}
        ]
    },
    "crowdfunding_campaign_copy": {
        "name": "Kickstarter & Crowdfunding Campaign Writer",
        "category": "Growth Marketing",
        "description": "Draft full Kickstarter/Indiegogo campaign page copy and reward tiers.",
        "icon": "💸",
        "input_label": "Innovative product concept, funding goal, and early bird rewards",
        "agents": [
            {"role": "Crowdfunding Strategist", "goal": "Structure emotional story arc, prototype evolution, reward tier economics, and stretch goals."},
            {"role": "Crowdfunding Copywriter", "goal": "Write Campaign Story headline, Problem/Solution section, Product Tech Specs, and Reward Tiers."}
        ]
    },
    "influencer_contract_agreement": {
        "name": "Influencer Sponsorship Agreement Writer",
        "category": "Influencer Marketing",
        "description": "Draft influencer sponsorship contracts, usage rights, and deliverable schedules.",
        "icon": "📝",
        "input_label": "Influencer handle, platform, compensation, and required posts",
        "agents": [
            {"role": "Influencer Talent Manager", "goal": "Define FTC disclosure rules (#ad), content approval workflow, and exclusivity period."},
            {"role": "Legal Copywriter", "goal": "Write Influencer Sponsorship Agreement outlining deliverables, usage rights, and payment terms."}
        ]
    },
    "podcast_ad_read_copywriter": {
        "name": "Podcast Host Ad Read Copywriter",
        "category": "Audio Marketing",
        "description": "Write 30-second and 60-second host-read podcast ad scripts.",
        "icon": "🎙️",
        "input_label": "Product name, special promo code/URL, and key talking points",
        "agents": [
            {"role": "Audio Advertising Strategist", "goal": "Structure natural host transition, personal endorsement angle, and clear promo URL repeat."},
            {"role": "Podcast Ad Copywriter", "goal": "Write 30s quick read + 60s conversational host-read ad script with promo code."}
        ]
    },
    "viral_giveaway_contest": {
        "name": "Viral Social Media Giveaway Campaign",
        "category": "Growth Marketing",
        "description": "Design viral Instagram/TikTok giveaway contests with viral sharing rules.",
        "icon": "🎁",
        "input_label": "Prize details, partner brands, and contest duration",
        "agents": [
            {"role": "Viral Growth Marketer", "goal": "Design entry rules (Tag 3 friends, Repost to Story, Follow all brand partners)."},
            {"role": "Social Media Copywriter", "goal": "Write Contest Announcement Post + Reminder Story captions + Official Rules disclaimer."}
        ]
    },
    "b2b_linkedin_outreach_sequence": {
        "name": "LinkedIn InMail & DM Outreach Sequence",
        "category": "B2B Sales",
        "description": "Write 4-part LinkedIn InMail and Connection request messaging sequences.",
        "icon": "💼",
        "input_label": "Prospect title, industry, and your B2B solution",
        "agents": [
            {"role": "B2B Prospecting Specialist", "goal": "Analyze common industry pain points and non-salesy connection angles."},
            {"role": "LinkedIn Sales Copywriter", "goal": "Write Connection Request note, Value-add Message 1, Case Study Message 2, and Final Check-in."}
        ]
    },
    "google_performance_max_ads": {
        "name": "Google Performance Max (PMax) Asset Pack",
        "category": "Paid Ads",
        "description": "Generate Google PMax headlines, long headlines, descriptions, and image prompts.",
        "icon": "🔍",
        "input_label": "Product/Service + landing page URL + main offer",
        "agents": [
            {"role": "PPC Search Strategist", "goal": "Extract high-intent search terms, call-to-action hooks, and benefit variations."},
            {"role": "Google Ad Copywriter", "goal": "Output 5 Short Headlines (30 chars), 5 Long Headlines (90 chars), and 4 Descriptions (90 chars)."}
        ]
    },
    "tiktok_spark_ads_brief": {
        "name": "TikTok Spark Ads & Creator Hook Script",
        "category": "Social Ads",
        "description": "Create authentic-feeling TikTok Spark Ad scripts that look like native UGC.",
        "icon": "⚡",
        "input_label": "Product category + target age group",
        "agents": [
            {"role": "TikTok Native Ads Strategist", "goal": "Analyze native TikTok trends, green-screen effects, and comment-reply hooks."},
            {"role": "TikTok Scriptwriter", "goal": "Write 30s Spark Ad script with native text overlays and casual voiceover."}
        ]
    },
    "email_re-engagement_drip": {
        "name": "Inactive Subscriber Re-Engagement Drip",
        "category": "Email Marketing",
        "description": "Re-engage cold email list subscribers before cleaning the list.",
        "icon": "📧",
        "input_label": "List segment details (e.g. unopened for 90 days) + brand tone",
        "agents": [
            {"role": "Email Deliverability Specialist", "goal": "Analyze inbox placement risks, subject line open hooks, and list hygiene."},
            {"role": "Copywriter", "goal": "Write 3-part Re-engagement sequence: 'Are we breaking up?', 'Top resources you missed', 'Unsubscribing in 24h'."}
        ]
    },
    "content_repurposing_matrix": {
        "name": "1-to-10 Content Repurposing Engine",
        "category": "Content Strategy",
        "description": "Turn 1 core blog post into 10 multi-platform social assets.",
        "icon": "🔄",
        "input_label": "Paste blog post or article text",
        "agents": [
            {"role": "Content Operations Lead", "goal": "Deconstruct article into key takeaways, statistics, quotes, and visual steps."},
            {"role": "Omnichannel Copywriter", "goal": "Generate 3 Tweets, 2 LinkedIn posts, 1 Carousel script, 1 Instagram caption, 2 Short video scripts, and 1 Newsletter blurb."}
        ]
    },
    "webinar_thank_you_replay": {
        "name": "Webinar Replay & Post-Event Sales Sequence",
        "category": "Event Marketing",
        "description": "Draft post-webinar replay emails and limited-time offer expiration alerts.",
        "icon": "📼",
        "input_label": "Webinar topic, replay link, and offer deadline",
        "agents": [
            {"role": "Event Conversion Strategist", "goal": "Structure replay urgency, bonus expiration, and Q&A highlight recap."},
            {"role": "Sales Email Copywriter", "goal": "Write Replay Available Email, Top Q&A Highlights Email, and Final 6-Hours Offer Expiry Email."}
        ]
    },
    "brand_ambassador_program": {
        "name": "Brand Ambassador Program Launch Kit",
        "category": "Community Marketing",
        "description": "Create ambassador application landing page copy, perks list, and welcome kit.",
        "icon": "👑",
        "input_label": "Brand name, ambassador perks (free product, commission), and target audience",
        "agents": [
            {"role": "Community Growth Director", "goal": "Structure ambassador tiers, exclusive perks, monthly challenges, and referral rewards."},
            {"role": "Brand Copywriter", "goal": "Write Ambassador Landing Page Copy, Application Form questions, and Welcome Email."}
        ]
    },
    "customer_onboarding_email_drip": {
        "name": "SaaS Customer Onboarding Email Sequence",
        "category": "Lifecycle Marketing",
        "description": "Guide new software sign-ups from registration to first 'Aha!' value moment.",
        "icon": "🚀",
        "input_label": "SaaS product name, core feature 1, core feature 2, and key activation step",
        "agents": [
            {"role": "User Onboarding Strategist", "goal": "Map activation funnel steps, feature discovery, and friction reduction."},
            {"role": "Lifecycle Copywriter", "goal": "Write 4-part Onboarding Email Sequence: Welcome + Quick Win, Feature 1 Spotlight, Feature 2 Spotlight, and Pro Tip."}
        ]
    },
    "quiz_funnel_copywriter": {
        "name": "Interactive Quiz Funnel Copywriter",
        "category": "Lead Generation",
        "description": "Build interactive quiz questions, outcome result pages, and product matches.",
        "icon": "🧩",
        "input_label": "Quiz topic (e.g. 'What's Your Skincare Type?'), product lines, and goal",
        "agents": [
            {"role": "Quiz Funnel Architect", "goal": "Design 5 quiz questions, scoring logic, and 3 distinct outcome bucket personas."},
            {"role": "Quiz Copywriter", "goal": "Write Quiz Title/Hook, 5 Questions + Option Choices, and 3 Detailed Result Page Copy Blocks with product recommendations."}
        ]
    },
    "press_kit_media_page": {
        "name": "Press Kit & Media Page Copywriter",
        "category": "Public Relations",
        "description": "Draft company press kit bio, founder story, key stats, and media assets guide.",
        "icon": "📰",
        "input_label": "Company milestone, founder background, product mission, and press stats",
        "agents": [
            {"role": "PR & Media Director", "goal": "Structure press kit sections: Company Overview, Boilerplate, Founder Bios, High-Res Logos note, and Press Contact."},
            {"role": "Corporate PR Copywriter", "goal": "Write full Media Kit copy ready for website /press page."}
        ]
    },
    "case_study_video_interview_script": {
        "name": "Video Case Study Interview Script",
        "category": "Video Production",
        "description": "Write customer video case study interview questions and editing outline.",
        "icon": "🎥",
        "input_label": "Customer name, company, problem solved, and key metrics achieved",
        "agents": [
            {"role": "Video Producer", "goal": "Structure interview arc: Pre-problem state, Search for solution, Implementation experience, and Quantifiable results."},
            {"role": "Case Study Director", "goal": "Produce 8 targeted customer interview questions + 2-minute final video edit outline with B-roll prompts."}
        ]
    },
    "referral_contest_gamification": {
        "name": "Viral Referral Leaderboard & Contest Rules",
        "category": "Growth Marketing",
        "description": "Design leaderboard referral contests with milestone rewards and updates.",
        "icon": "🏆",
        "input_label": "Contest duration, top 3 grand prizes, and milestone rewards (e.g. 5 invites = shirt)",
        "agents": [
            {"role": "Gamification Marketer", "goal": "Structure milestone tiers, daily leaderboard update cadence, and referral fraud prevention rules."},
            {"role": "Viral Copywriter", "goal": "Write Contest Launch Email, Milestone Reached Email, and Final Standings Announcement."}
        ]
    },
    "native_advertising_article": {
        "name": "Native Advertising Sponsored Advertorial",
        "category": "Paid Content",
        "description": "Write sponsored advertorial articles that blend seamlessly into news publications.",
        "icon": "🗞️",
        "input_label": "Product/Service + publication style (e.g. Business Insider, Forbes, TechCrunch)",
        "agents": [
            {"role": "Native Content Editor", "goal": "Analyze publication editorial tone, journalistic storytelling, and native ad compliance disclosures."},
            {"role": "Advertorial Copywriter", "goal": "Write 800-word story-driven Advertorial with headline, subheadings, expert quote, and CTA."}
        ]
    },
    "local_event_press_release": {
        "name": "Local Community Event & Grand Opening PR",
        "category": "Local PR",
        "description": "Write press releases for local business grand openings and charity events.",
        "icon": "🎉",
        "input_label": "Local business name, opening date, location, activities, and VIP guests",
        "agents": [
            {"role": "Local PR Coordinator", "goal": "Identify local newspaper/radio pitch angles, community leader invites, and event details."},
            {"role": "Local News Copywriter", "goal": "Write AP-style Local Press Release + pitch email to local journalists and bloggers."}
        ]
    },
    "app_update_release_notes": {
        "name": "Engaging App Store Release Notes Writer",
        "category": "App Marketing",
        "description": "Turn boring bug fixes into funny, engaging App Store update release notes.",
        "icon": "📲",
        "input_label": "App name, new features added, and bug fixes done",
        "agents": [
            {"role": "App Brand Strategist", "goal": "Formulate brand humor style (e.g. Slack/Discord style release notes) vs clear feature highlights."},
            {"role": "Copywriter", "goal": "Write 3 release notes options: Creative/Witty, Clean & Direct, and Emoji-bulleted."}
        ]
    },
    "meta_retargeting_ad_sequence": {
        "name": "Meta Retargeting 3-Stage Ad Sequence",
        "category": "Paid Ads",
        "description": "Write 3-stage Meta retargeting ads (Social Proof, FAQ Handler, Expiry Discount).",
        "icon": "🎯",
        "input_label": "Product name, main customer objections, and discount offer",
        "agents": [
            {"role": "Retargeting Strategist", "goal": "Segment retargeting funnel: Stage 1 (3-7 days: Testimonials), Stage 2 (8-14 days: FAQs), Stage 3 (15-30 days: Discount)."},
            {"role": "Direct Response Copywriter", "goal": "Write 3 distinct ad copy variations tailored to each retargeting stage."}
        ]
    },
    "influencer_gifting_followup": {
        "name": "Influencer Post-Gifting Follow-Up Sequence",
        "category": "Influencer Relations",
        "description": "Follow up politely with gifted creators to encourage organic posting.",
        "icon": "🎁",
        "input_label": "Influencer name, gifted product sent, and delivery date",
        "agents": [
            {"role": "Creator Relations Coordinator", "goal": "Verify package delivery tracking, polite non-pushy follow-up timing (5 days post-delivery)."},
            {"role": "Copywriter", "goal": "Write 2 casual DM/Email follow-up templates checking if product arrived and asking for genuine thoughts."}
        ]
    },
    "holiday_marketing_calendar": {
        "name": "Q4 Holiday Marketing Content Calendar",
        "category": "Content Planning",
        "description": "Map out Q4 key shopping dates (Halloween, Black Friday, Cyber Monday, Christmas).",
        "icon": "🗓️",
        "input_label": "Niche/Product line + target holiday promotion goals",
        "agents": [
            {"role": "Retail Marketing Planner", "goal": "Map key Q4 dates, early bird shopping trends, shipping deadline alerts, and promo themes."},
            {"role": "Content Calendar Writer", "goal": "Deliver Q4 Marketing Calendar table with date, campaign theme, channel, and content summary."}
        ]
    },
    "brand_collaborations_proposal": {
        "name": "Co-Marketing Brand Partnership Proposal",
        "category": "Partnership Marketing",
        "description": "Draft cross-promotional brand partnership proposals for joint campaigns.",
        "icon": "🤝",
        "input_label": "Your brand name + target partner brand name + joint giveaway/product idea",
        "agents": [
            {"role": "Strategic Partnerships Manager", "goal": "Analyze audience overlap, win-win value exchange, and co-marketing distribution channels."},
            {"role": "Partnership Copywriter", "goal": "Write Brand Partnership Pitch Email + 1-page Co-Marketing Campaign Brief."}
        ]
    },
    "customer_advocacy_case_study": {
        "name": "Customer Advocacy & Case Study Video Pitch",
        "category": "Customer Marketing",
        "description": "Pitch happy customers to participate in case studies and testimonial videos.",
        "icon": "⭐",
        "input_label": "Customer company name, key result achieved, and incentive offered",
        "agents": [
            {"role": "Customer Advocacy Manager", "goal": "Design friction-free customer interview process, incentive (gift card/PR feature), and schedule flexibility."},
            {"role": "Copywriter", "goal": "Write personalized Customer Outreach Email requesting a 20-minute video case study interview."}
        ]
    },
    "sales_enablement_one_pager": {
        "name": "Sales Enablement Product One-Pager Copy",
        "category": "Sales Enablement",
        "description": "Create 1-page PDF product overviews for sales teams to send to leads.",
        "icon": "📄",
        "input_label": "Product name, core features, pricing tiers, and competitor advantages",
        "agents": [
            {"role": "Sales Enablement Director", "goal": "Structure 1-pager hierarchy: Executive Summary, Key Features, Architecture/Specs, and Pricing."},
            {"role": "Copywriter", "goal": "Write complete text for a 1-page PDF Sales One-Pager document."}
        ]
    }
}

