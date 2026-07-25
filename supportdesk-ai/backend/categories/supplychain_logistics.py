"""
Category: Supply Chain, Logistics & Operations (30 Specialized Agent Teams)
"""

SUPPLYCHAIN_LOGISTICS_TEMPLATES: dict[str, dict] = {
    "logistics_route_optimization": {
        "name": "Logistics & Freight Route Optimizer",
        "category": "Logistics",
        "description": "Optimize freight shipping routes, carrier selection, and transit times.",
        "icon": "🚛",
        "input_label": "Origin, destination, cargo weight/volume, and delivery deadline",
        "agents": [
            {"role": "Freight Logistics Coordinator", "goal": "Analyze transit modes (FTL, LTL, Air, Ocean), carrier rates, and route bottlenecks."},
            {"role": "Logistics Route Strategist", "goal": "Deliver Route Optimization Plan comparing cost, transit days, and carbon footprint for 3 carrier options."}
        ]
    },
    "warehouse_layout_slotting": {
        "name": "Warehouse Slotting & Storage Optimizer",
        "category": "Warehouse Management",
        "description": "Optimize warehouse SKU slotting, picking paths, and storage density.",
        "icon": "🏭",
        "input_label": "Warehouse size (SqFt), SKU velocity (Fast/Slow movers), and pallet count",
        "agents": [
            {"role": "Warehouse Operations Engineer", "goal": "Apply ABC inventory classification (A-movers near packing, C-movers high racks) and wave picking routes."},
            {"role": "WMS Slotting Specialist", "goal": "Produce Warehouse Slotting & Zone Layout Plan reducing travel time for pickers."}
        ]
    },
    "customs_duty_tariff_calculator": {
        "name": "Customs Duty & HS Code Classification",
        "category": "International Trade",
        "description": "Classify HS Codes, calculate import duties, and verify trade compliance.",
        "icon": "🛃",
        "input_label": "Product material composition, origin country, destination country, and FOB value",
        "agents": [
            {"role": "Customs Compliance Broker", "goal": "Identify 6-digit to 10-digit Harmonized System (HS) code and trade agreement preferential tariffs (e.g. USMCA)."},
            {"role": "Import/Export Specialist", "goal": "Deliver Customs Duty Calculation Report: HS Code, Duty Rate %, VAT/GST %, and required import documentation."}
        ]
    },
    "manufacturing_bom_costing": {
        "name": "Manufacturing Bill of Materials (BOM) Costing",
        "category": "Manufacturing",
        "description": "Build itemized Bill of Materials (BOM) and manufacturing cost models.",
        "icon": "⚙️",
        "input_label": "Product components list, raw material costs, labor rate, and batch size",
        "agents": [
            {"role": "Manufacturing Process Engineer", "goal": "Structure Multi-Level BOM (Raw materials, Sub-assemblies, Standard parts, Labor hours, Scrap factor)."},
            {"role": "Cost Accounting Specialist", "goal": "Output itemized BOM Costing Spreadsheet summary: COGS breakdown per unit."}
        ]
    },
    "quality_control_six_sigma": {
        "name": "Quality Control & Six Sigma Audit Agent",
        "category": "Quality Assurance",
        "description": "Analyze manufacturing defect rates and perform DMAIC Root Cause Analysis.",
        "icon": "🔍",
        "input_label": "Defect count, total units produced, defect types, and process description",
        "agents": [
            {"role": "Six Sigma Black Belt Specialist", "goal": "Calculate DPMO (Defects Per Million Opportunities), Process Capability (Cpk), and Fishbone Cause-and-Effect."},
            {"role": "Quality Control Engineer", "goal": "Deliver DMAIC Quality Report (Define, Measure, Analyze, Improve, Control) with corrective action steps."}
        ]
    },
    "cold_chain_temperature_monitor": {
        "name": "Cold Chain & Refrigerated Logistics Compliance",
        "category": "Cold Chain",
        "description": "Monitor temperature excursions for pharma/food refrigerated shipments.",
        "icon": "❄️",
        "input_label": "Cargo type (Pharma/Perishable food), required temp range (2-8°C), and excursion log data",
        "agents": [
            {"role": "Cold Chain Quality Auditor", "goal": "Analyze temperature log data logger excursions, Mean Kinetic Temperature (MKT), and stability data."},
            {"role": "Perishable Logistics Specialist", "goal": "Produce Cold Chain Excursion Report with cargo disposition recommendation (Release / Hold / Destroy)."}
        ]
    },
    "fleet_maintenance_scheduler": {
        "name": "Fleet Preventative Maintenance Scheduler",
        "category": "Fleet Management",
        "description": "Schedule vehicle preventative maintenance, oil changes, and inspections.",
        "icon": "🚛",
        "input_label": "Fleet vehicle list (Trucks/Vans), mileage, engine hours, and last service date",
        "agents": [
            {"role": "Fleet Maintenance Supervisor", "goal": "Map manufacturer service intervals (10k miles oil, 50k brakes, annual inspection) and DOT compliance."},
            {"role": "Fleet Operations Specialist", "goal": "Output Fleet Maintenance Schedule with upcoming service alerts and estimated downtime budget."}
        ]
    },
    "procurement_rfp_vendor_eval": {
        "name": "Procurement RFP & Vendor Scoring Agent",
        "category": "Procurement",
        "description": "Draft Requests for Proposal (RFP) and evaluate vendor bidding responses.",
        "icon": "📜",
        "input_label": "Purchasing requirement, estimated budget, and vendor criteria",
        "agents": [
            {"role": "Procurement Director", "goal": "Structure RFP requirements, Scope of Work (SOW), pricing matrices, and vendor selection criteria."},
            {"role": "Vendor Evaluation Specialist", "goal": "Produce RFP Document + Weighted Vendor Scoring Matrix table (Price, Quality, Lead Time, SLA)."}
        ]
    },
    "packaging_shipping_box_optimizer": {
        "name": "Shipping Box & Dimensional Weight Optimizer",
        "category": "Packaging",
        "description": "Optimize shipping box sizes to minimize carrier dimensional (DIM) weight charges.",
        "icon": "📦",
        "input_label": "Item dimensions (L x W x H) and weight for order",
        "agents": [
            {"role": "Packaging Engineer", "goal": "Calculate item volume, void fill space requirement, and select optimal standard box size."},
            {"role": "Logistics Cost Analyst", "goal": "Compare Actual Weight vs Carrier DIM Weight (L x W x H / 139) for FedEx/UPS/DHL and recommend optimal box."}
        ]
    },
    "supplier_disruption_risk": {
        "name": "Supply Chain Disruption & Risk Management",
        "category": "Supply Chain Risk",
        "description": "Analyze geopolitical, weather, and single-source supplier disruption risks.",
        "icon": "⚠️",
        "input_label": "Supplier locations, key materials sourced, and current disruption threat",
        "agents": [
            {"role": "Supply Chain Risk Analyst", "goal": "Map Single-Point-of-Failure (SPOF) risks, port congestion, weather alerts, and geographic concentration."},
            {"role": "Continuity Planning Director", "goal": "Deliver Supply Chain Risk Mitigation Plan with dual-sourcing recommendations and safety stock buffers."}
        ]
    }
}
