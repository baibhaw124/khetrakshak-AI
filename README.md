# 🌾 KhetraShak AI

> **AI-powered early detection and management of crop diseases and pest infestations.**

KhetraShak AI is a full-stack agricultural decision-support platform designed to help farmers identify potential crop-health problems earlier and receive practical guidance through an easy-to-use web dashboard.

The platform combines a **React + Vite frontend**, a **FastAPI backend**, and a **machine-learning inference pipeline** for leaf validation, disease prediction, risk assessment, treatment recommendations, and prevention guidance.

## 🌱 The Problem

Crop diseases and pest-related problems can spread quickly when they are detected late. Farmers may also not have immediate access to agricultural experts when symptoms first appear.

KhetraShak AI provides a digital first layer of support by combining:

* 📷 AI-assisted crop image analysis
* 🍃 Plant leaf validation
* 🧠 Disease prediction
* ⚠️ Risk assessment
* 💊 Treatment recommendations
* 🛡️ Prevention guidance
* 🗺️ Risk visualization
* 🚨 Crop-health alerts
* 📊 Crop analytics
* 👨‍🌾 Farmer advisory information

### 🎯 Core Idea

```text
📷 Capture
     ↓
🍃 Validate
     ↓
🧠 Detect
     ↓
⚠️ Assess Risk
     ↓
💡 Recommend
     ↓
👨‍🌾 Support Farmers
```

> **Important:** KhetraShak AI is intended as a decision-support system. AI predictions should not be treated as a replacement for professional agricultural diagnosis or expert advice.

# ✨ Features

## 🔬 AI Crop Disease Detection

Farmers can upload a crop or plant-leaf image and send it to the KhetraShak AI analysis pipeline.

The system processes the image and can return:

* 🌾 Crop
* 🦠 Detected disease
* 🎯 Prediction confidence
* ⚠️ Risk level
* 📊 Risk score
* 🔎 Symptoms
* 📈 Severity
* 💊 Treatment recommendations
* 🛡️ Prevention guidance

### Detection Workflow

```text
📷 Upload Image
      ↓
✅ File Validation
      ↓
🍃 Leaf Validation
      ↓
🧠 Disease Prediction
      ↓
⚠️ Risk Assessment
      ↓
💊 Treatment Engine
      ↓
🛡️ Prevention Guidance
      ↓
📊 Result
```
# 🍃 Leaf Image Validation

KhetraShak AI includes a dedicated leaf-validation stage before disease prediction.

The backend checks whether the uploaded image is suitable for plant-leaf analysis.

If the uploaded image is not recognized as a valid leaf image, the system rejects the request and asks the user to upload a clear plant-leaf photograph.

This helps prevent irrelevant images from being directly processed by the disease-classification pipeline.

# ⚠️ Risk Assessment

After disease prediction, KhetraShak AI evaluates the detected condition and prediction confidence to generate a risk assessment.

The result can include:

* ⚠️ Risk level
* 📊 Risk score
* 💬 Risk message
* 📈 Severity information

This creates an additional decision-support layer instead of showing only a disease name.

# 💊 Treatment & Prevention Engine

The backend contains a treatment engine that generates disease-specific information based on:

* 🌾 Crop
* 🦠 Disease
* 📊 Severity

The response can include:

* 🔎 Symptoms
* 💊 Recommended actions
* 🌱 Crop-management recommendations
* 🛡️ Prevention practices

# 🗺️ Risk Map

The Risk Map provides a geographic visualization interface using:

* 🗺️ Leaflet
* 📍 React Leaflet

The interface is designed to communicate agricultural risk information such as:

* 📍 Field / zone
* 🌾 Crop
* 🦠 Detected condition
* ⚠️ Risk level
* 📊 Affected percentage

# 🚨 Alerts

The Alerts section provides a dedicated interface for communicating important crop-health events and risk conditions.

It is designed to give farmers a centralized location for monitoring potentially important agricultural events.

# 👨‍🌾 Farmer Advisory

KhetraShak AI includes a farmer-focused advisory interface.

The advisory section provides guidance around:

* 💧 Irrigation
* 🌱 Fertilizer
* 🦠 Disease monitoring
* 🌦️ Weather considerations
* ❤️ Crop health
* 🌐 Language preference

The current interface includes crop selections such as:

* 🍅 Tomato
* 🌾 Wheat
* 🍚 Rice
* 🥔 Potato

The interface also includes language selection for farmer accessibility.

# 📊 Crop Analytics

The Analytics dashboard provides visual indicators for crop and field health.

The interface includes concepts such as:

* 💚 Crop health
* 🦠 Disease risk
* 💧 Soil moisture
* 🌾 Yield potential
* 📈 Health trends
* ⚠️ Risk distribution
* 🔎 Field insights

> **Prototype Note:** Some analytics and dashboard indicators currently use demonstration data to illustrate the product experience.

# 🧠 System Architecture

KhetraShak AI is divided into two repositories.

```text
                    🌾 KHETRAKSHAK AI
                           │
             ┌─────────────┴─────────────┐
             │                           │
       🖥️ FRONTEND                  🧠 BACKEND + ML
       React + Vite                    FastAPI
             │                           │
             │       HTTP / REST         │
             └──────────────┬────────────┘
                            │
                     📷 Crop Image
                            │
                            ▼
                   🍃 Leaf Validation
                            │
                            ▼
                   🧠 Disease Prediction
                            │
                            ▼
                     ⚠️ Risk Assessment
                            │
                            ▼
                  💊 Treatment Engine
                            │
                            ▼
                    📊 JSON Response
                            │
                            ▼
                     🖥️ React Dashboard
```

# 🖥️ Frontend

## Repository

🔗 **KhetraShak AI Frontend**

https://github.com/baibhaw124/khetrakshak-AI

### Technology Stack

* ⚛️ React
* ⚡ Vite
* 🟨 JavaScript
* 📦 ES Modules
* 🎨 Tailwind CSS
* 🧭 React Router
* 🗺️ Leaflet
* 📍 React Leaflet
* 📊 Recharts

## 📁 Frontend Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── CropHealthStatus.jsx
│   ├── MainLayout.jsx
│   ├── RecentAlerts.jsx
│   ├── RiskMap.jsx
│   ├── sidebar.jsx
│   ├── statecard.jsx
│   └── topbar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── CropHealth.jsx
│   ├── DiseaseDetection.jsx
│   ├── RiskMap.jsx
│   ├── Alerts.jsx
│   ├── FarmerAdvisory.jsx
│   └── Analytics.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css

# 🧠 Backend & Machine Learning

## Repository

🔗 **KhetraShak AI Backend**

https://github.com/baibhaw124/Khetrakshak-backend

### Technology Stack

* 🐍 Python
* ⚡ FastAPI
* 🗄️ SQLAlchemy
* 🧠 TensorFlow / Keras
* 📊 NumPy
* 🐼 Pandas
* 🔬 scikit-learn
* 🖼️ Pillow
* 🐘 PostgreSQL support
* 🚀 Uvicorn


# 📁 Backend Structure

```text
app/
│
├── main.py
├── database.py
├── models.py
│
└── routers/
    └── disease.py
│
ml/
│
├── inference/
│   ├── leaf_validator.py
│   ├── predictor.py
│   ├── risk_assessment.py
│   └── treatment_engine.py
│
├── models/
│
└── training/
    ├── dataset_analyzer.py
    ├── prepare_dataset.py
    ├── train_efficientnet.py
    ├── evaluate_model.py
    └── ...
```

The backend also contains database models and infrastructure for agricultural entities such as farmers, fields, crops, and disease detections.


# 🔌 Disease Analysis API

The frontend communicates with the backend through the disease analysis endpoint:

```http
POST /disease/analyze
```

The image is sent as multipart form data.

### Frontend Example

```javascript
const formData = new FormData();

formData.append("file", selectedFile);

const response = await fetch(
    `${API_URL}/disease/analyze`,
    {
        method: "POST",
        body: formData,
    }
);

const data = await response.json();
```

### Backend Processing

```text
📷 Image Upload
       ↓
📁 File Validation
       ↓
🍃 Leaf Validation
       ↓
🧠 Disease Prediction
       ↓
⚠️ Risk Assessment
       ↓
💊 Treatment Recommendation
       ↓
🛡️ Prevention Guidance
       ↓
📊 JSON Response
```
# 🟨 JavaScript Implementation

KhetraShak AI uses JavaScript throughout the frontend application.

The project demonstrates several core JavaScript concepts, including:

* 📦 Modules
* ⚙️ Functions
* 🗂️ Arrays
* 🧱 Objects
* 🌐 Fetch API
* ⏳ Async/Await
* 🔄 React State
* 🎯 Event Handling
* 🧩 Component-based development

## 📦 ES Modules

The frontend is organized into reusable JavaScript/JSX modules.

Example:

```javascript
import Dashboard from "./pages/Dashboard";
import DiseaseDetection from "./pages/DiseaseDetection";
```

Components and pages are exported using:

```javascript
export default DiseaseDetection;
```

This allows the application to maintain a modular structure.

---

# ⚙️ JavaScript Functions

Functions are used throughout the project for:

* User interactions
* Image upload handling
* API communication
* State updates
* Data processing
* UI rendering

Example:

```javascript
const handleImageUpload = (event) => {
    // Process selected image
};
```

---

# 🗂️ Arrays & Objects

The project uses JavaScript objects and arrays to represent application data such as:

* 🌾 Crop information
* 👨‍🌾 Farmer advisory data
* 📊 Analytics data
* 🚨 Alerts
* 🦠 Disease results
* 💊 Recommendations

Example:

```javascript
const advisoryData = {
    Tomato: {
        health: "82%",
        status: "Healthy",
        irrigation: "Moderate irrigation recommended",
    },

    Wheat: {
        health: "91%",
        status: "Excellent",
    },
};
```

---

# 🌐 Fetch API

The disease detection workflow uses the browser's native `fetch()` API to communicate with the FastAPI backend.

Example:

```javascript
const response = await fetch(
    `${API_URL}/disease/analyze`,
    {
        method: "POST",
        body: formData,
    }
);
```

This connects the React frontend directly to the KhetraShak AI disease-analysis API.

---

# ⏳ Async / Await

The application uses asynchronous JavaScript for API operations.

Example:

```javascript
const analyzeImage = async () => {

    const response = await fetch(
        `${API_URL}/disease/analyze`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await response.json();

};
```

This allows the application to wait for the backend response without blocking the user interface.

---

# 🔄 React State Management

The application uses React state to manage dynamic UI information.

Example:

```javascript
const [analyzing, setAnalyzing] = useState(false);

const [result, setResult] = useState(null);
```

State is used for information such as:

* 📷 Uploaded image
* 📁 Selected file
* ⏳ Loading state
* 🧠 Disease result
* 🌾 Crop selection
* 🌐 Language selection
* 📊 Analytics information

---

# 🚀 Getting Started

## 1️⃣ Clone the Frontend

```bash
git clone https://github.com/baibhaw124/khetrakshak-AI.git
```

Move into the project:

```bash
cd khetrakshak-AI
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Backend URL

Create a `.env` file in the frontend project:

```env
VITE_API_URL=http://127.0.0.1:8000
```

For a deployed backend, replace this value with the deployed API URL.

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

# 🐍 Running the Backend

Clone the backend repository:

```bash
git clone https://github.com/baibhaw124/Khetrakshak-backend.git
```

Move into the backend:

```bash
cd Khetrakshak-backend
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv .venv
```

Activate:

```bash
.venv\Scripts\activate
```

### macOS / Linux

```bash
python3 -m venv .venv
```

Activate:

```bash
source .venv/bin/activate
```

---

## Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## Start FastAPI

```bash
uvicorn app.main:app --reload
```

The backend provides endpoints including:

```text
GET  /
GET  /health
POST /disease/analyze
```

---

# 🔐 Environment Variables

The frontend uses:

```env
VITE_API_URL=your_backend_api_url
```

### Security

Never commit sensitive information to GitHub.

Do not commit:

* ❌ API keys
* ❌ Passwords
* ❌ Database credentials
* ❌ Private tokens
* ❌ Secret keys
* ❌ Production credentials

Use environment variables instead.

---

# 🧪 Typical User Flow

```text
👨‍🌾 Farmer Opens KhetraShak AI
             ↓
📊 Dashboard
             ↓
🔬 Disease Detection
             ↓
📷 Upload Leaf Image
             ↓
⚡ Analyze Crop
             ↓
🍃 Leaf Validation
             ↓
🧠 AI Disease Prediction
             ↓
⚠️ Risk Assessment
             ↓
💊 Treatment Recommendations
             ↓
🛡️ Prevention Guidance
             ↓
📊 Result Displayed
```

---

# 🛠️ Technology Stack

| Layer                | Technology                  |
| -------------------- | --------------------------- |
| 🎨 Frontend          | React + Vite                |
| 🟨 Language          | JavaScript / ES Modules     |
| 🎨 Styling           | Tailwind CSS                |
| 🧭 Routing           | React Router                |
| 🗺️ Maps             | Leaflet + React Leaflet     |
| 📊 Charts            | Recharts                    |
| 🐍 Backend           | Python + FastAPI            |
| 🗄️ Database Layer   | SQLAlchemy                  |
| 🧠 Machine Learning  | TensorFlow / Keras          |
| 📊 Data / ML         | NumPy, Pandas, scikit-learn |
| 🖼️ Image Processing | Pillow                      |
| 🚀 Server            | Uvicorn                     |
| 🐘 Database Support  | PostgreSQL                  |

---

# 📊 Project Architecture Summary

| Layer              | Responsibility                 |
| ------------------ | ------------------------------ |
| 🖥️ React Frontend | User interface and interaction |
| 📷 Upload System   | Receives crop/leaf images      |
|                    |                                |

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
