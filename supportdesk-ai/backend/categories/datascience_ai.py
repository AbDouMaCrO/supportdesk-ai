"""
Category: Data Science, AI & Analytics (40 Specialized Agent Teams)
"""

DATASCIENCE_AI_TEMPLATES: dict[str, dict] = {
    "data_analysis": {
        "name": "Data Analytics Agent",
        "category": "Data Science",
        "description": "Analyze raw numbers, CSV trends, and statistical insights.",
        "icon": "📈",
        "input_label": "Paste CSV data or metrics outline",
        "agents": [
            {"role": "Data Scientist", "goal": "Calculate statistical metrics, identify anomalies, growth patterns, and correlation vectors."},
            {"role": "Business Analyst", "goal": "Translate data findings into commercial insights, ROI impact, and recommendations for stakeholders."}
        ]
    },
    "pandas_data_cleaning_script": {
        "name": "Pandas Data Cleaning & Prep Script",
        "category": "Data Engineering",
        "description": "Generate Python Pandas scripts to clean, impute missing data, and format DataFrames.",
        "icon": "🐼",
        "input_label": "Describe dirty data issues (missing values, wrong types, duplicates) + column specs",
        "agents": [
            {"role": "Data Quality Auditor", "goal": "Identify missing data handling (drop vs mean/median/mode impute), date parsing, and type casting."},
            {"role": "Pandas Engineer", "goal": "Write executable Python script using pandas/numpy for data cleaning and validation."}
        ]
    },
    "machine_learning_model_builder": {
        "name": "Scikit-Learn ML Model Pipeline Generator",
        "category": "Machine Learning",
        "description": "Build Scikit-Learn classification, regression, or clustering pipelines.",
        "icon": "🤖",
        "input_label": "Target variable type (classification/regression), dataset description, and evaluation metric",
        "agents": [
            {"role": "ML Engineer Architect", "goal": "Select algorithm (RandomForest, XGBoost, LogisticRegression), feature scaling, and train-test split strategy."},
            {"role": "Scikit-Learn Developer", "goal": "Write Python script with Pipeline, StandardScaler, OneHotEncoder, cross-validation, and metrics report."}
        ]
    },
    "exploratory_data_analysis_eda": {
        "name": "Exploratory Data Analysis (EDA) Report",
        "category": "Data Science",
        "description": "Generate comprehensive EDA reports with Seaborn/Plotly visualization code.",
        "icon": "📊",
        "input_label": "Dataset topic, columns list, and goal of analysis",
        "agents": [
            {"role": "EDA Specialist", "goal": "Plan distribution plots, correlation heatmaps, boxplots for outliers, and categorical countplots."},
            {"role": "Data Visualization Engineer", "goal": "Write Python script generating 5 Seaborn/Plotly charts + markdown summary of distribution findings."}
        ]
    },
    "time_series_forecasting": {
        "name": "Time Series Forecasting (Prophet & ARIMA)",
        "category": "Predictive Analytics",
        "description": "Build Prophet or ARIMA time-series forecasting models for sales or demand.",
        "icon": "⏳",
        "input_label": "Time series metric (daily sales, website traffic) + forecast horizon (days/months)",
        "agents": [
            {"role": "Time Series Quantitative Analyst", "goal": "Analyze seasonality, trend decomposition, stationarity (ADF test), and holiday effects."},
            {"role": "Forecasting Engineer", "goal": "Write Python script using Prophet / statsmodels ARIMA with confidence interval plots."}
        ]
    },
    "prompt_engineering_optimizer": {
        "name": "LLM Prompt Engineering & Meta-Prompt Optimizer",
        "category": "AI Engineering",
        "description": "Refine raw LLM prompts into structured system prompts with few-shot examples.",
        "icon": "💬",
        "input_label": "Raw prompt or task goal you want to optimize",
        "agents": [
            {"role": "Prompt Engineer Architect", "goal": "Structure prompt with Persona, Context, Rules, Constraints, Output Format, and Edge-case handlers."},
            {"role": "Few-Shot Copywriter", "goal": "Output production-ready System Prompt + 3 input/output Few-Shot examples."}
        ]
    },
    "vector_database_embeddings": {
        "name": "Vector Database (Pinecone/Chroma) RAG Setup",
        "category": "AI Engineering",
        "description": "Generate Python code for embedding generation and vector database search.",
        "icon": "⚡",
        "input_label": "Document chunking strategy + target vector DB (Pinecone, ChromaDB, FAISS)",
        "agents": [
            {"role": "RAG Systems Architect", "goal": "Select chunk size (e.g. 500 tokens), overlap (50 tokens), embedding model (OpenAI text-embedding-3-small), and similarity metric (cosine)."},
            {"role": "Vector DB Developer", "goal": "Write Python script chunking text, generating embeddings, inserting to DB, and performing similarity query."}
        ]
    },
    "computer_vision_opencv": {
        "name": "OpenCV Computer Vision & Image Processing",
        "category": "Computer Vision",
        "description": "Write OpenCV Python scripts for object detection, cropping, and filtering.",
        "icon": "👁️",
        "input_label": "Image processing task (e.g. face detection, edge detection, color masking, OCR prep)",
        "agents": [
            {"role": "Computer Vision Engineer", "goal": "Identify image color space conversions (BGR to RGB/HSV), contour detection, thresholding, and bounding boxes."},
            {"role": "OpenCV Developer", "goal": "Write Python script using cv2 and numpy to process image and save annotated output."}
        ]
    },
    "nlp_sentiment_analysis": {
        "name": "NLP Sentiment & Aspect Extraction Agent",
        "category": "Natural Language Processing",
        "description": "Perform NLP sentiment classification and aspect-based sentiment analysis.",
        "icon": "📝",
        "input_label": "Paste text reviews, tweets, or survey feedback",
        "agents": [
            {"role": "NLP Research Scientist", "goal": "Extract sentiment polarity (Positive/Neutral/Negative), emotion intensity, and specific entity aspects."},
            {"role": "Sentiment Insights Writer", "goal": "Deliver Sentiment Analysis Report: Overall Sentiment Distribution, Top Positive Aspects, and Complaint Clusters."}
        ]
    },
    "deep_learning_pytorch_model": {
        "name": "PyTorch Neural Network Architecture Builder",
        "category": "Deep Learning",
        "description": "Write PyTorch nn.Module neural networks, training loops, and loss metrics.",
        "icon": "🔥",
        "input_label": "Input tensor dimensions, task type (image/text/tabular), and layer preferences",
        "agents": [
            {"role": "Deep Learning Architect", "goal": "Design layer architecture (Linear, Conv2d, LSTM), activation functions (ReLU), dropout regularization, and optimizer (Adam)."},
            {"role": "PyTorch Developer", "goal": "Write complete PyTorch nn.Module class + training/validation loop code snippet."}
        ]
    },
    "fine_tuning_dataset_prep": {
        "name": "LLM Fine-Tuning JSONL Dataset Creator",
        "category": "AI Engineering",
        "description": "Format raw instruction data into OpenAI/HuggingFace JSONL fine-tuning format.",
        "icon": "🔧",
        "input_label": "Instruction task + raw input-output pairs sample",
        "agents": [
            {"role": "AI Data Curation Specialist", "goal": "Ensure high diversity, clear system instructions, balanced dataset distribution, and zero data leakage."},
            {"role": "JSONL Format Engineer", "goal": "Write Python script formatting data into valid OpenAI messages JSONL schema (system, user, assistant)."}
        ]
    },
    "bigquery_sql_analytics": {
        "name": "BigQuery & Warehouse Analytics SQL Agent",
        "category": "Data Warehousing",
        "description": "Write Google BigQuery SQL using Window Functions, UNNEST, and CTEs.",
        "icon": "🔍",
        "input_label": "BigQuery table schema + analytics metric requirement (e.g. rolling 7-day active users)",
        "agents": [
            {"role": "BigQuery Data Architect", "goal": "Utilize BigQuery partition/cluster pruning, window functions (ROW_NUMBER, LAG, LEAD), and ARRAY/STRUCT UNNESTing."},
            {"role": "BigQuery SQL Developer", "goal": "Write optimized BigQuery SQL query + cost optimization tips."}
        ]
    },
    "ab_testing_statistical_significance": {
        "name": "A/B Test Statistical Significance Calculator",
        "category": "Data Science",
        "description": "Calculate A/B test p-values, confidence intervals, and sample sizes.",
        "icon": "🧪",
        "input_label": "Variant A & B visitors and conversions count + target confidence level (95%)",
        "agents": [
            {"role": "Biostatistician / Quantitative Researcher", "goal": "Calculate Chi-Square test or Two-Sample Z-Test, p-value, relative uplift %, and statistical power."},
            {"role": "A/B Testing Specialist", "goal": "Deliver A/B Test Results Summary: Significance reached (Yes/No), p-value result, and recommendation to ship vs iterate."}
        ]
    },
    "langchain_agent_tool_builder": {
        "name": "LangChain Custom Tool & Agent Generator",
        "category": "AI Engineering",
        "description": "Build custom LangChain @tool functions and StructuredTool instances.",
        "icon": "🦜",
        "input_label": "Tool requirement (e.g. weather API fetcher, database lookup, calculator)",
        "agents": [
            {"role": "LangChain Framework Architect", "goal": "Define Pydantic schema for tool arguments, docstring description for LLM router, and error handling."},
            {"role": "LangChain Developer", "goal": "Write Python script with @tool decorator + initialize agent with AgentExecutor."}
        ]
    },
    "feature_engineering_pipeline": {
        "name": "Feature Engineering & Selection Pipeline",
        "category": "Data Science",
        "description": "Create feature transformations, target encoding, and feature importance selection.",
        "icon": "⚙️",
        "input_label": "Raw dataset columns + target variable",
        "agents": [
            {"role": "Feature Engineering Specialist", "goal": "Design interaction terms, polynomial features, frequency encoding, date-part extraction, and feature selection (SHAP/Mutual Info)."},
            {"role": "Python Feature Engineer", "goal": "Write Python feature engineering script outputting transformed clean DataFrame."}
        ]
    }
}
