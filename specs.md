# Project Master Specification: hamzalatif.com

## 1. AGENT INSTRUCTIONS (READ FIRST)

- **Role:** Senior Frontend Engineer & React Architect.
- **Input:**
  1. This Specification File (.md)
  2. Exported Code/JSON from Figma (Design Source)
- **Execution Goal:** Build a pixel-perfect, production-ready portfolio website for hamzalatif.com.

### Strict Directive:

- **Design:** Use the provided Figma code for visual styling (layout, spacing, colors, typography, component aesthetics).
- **Content & Logic:** Use this Markdown file for the actual text content, routing structure, feature logic, and pricing data.
- **Integration:** When building the ProductLogik and AI Compass pages, strictly adhere to the feature lists and pricing tiers defined below.
- **Images:** Use high-resolution placeholders. For the 'About' page hero, prepare the container for a "Studio Ghibli-style portrait" (do not generate the image, just the code).

---

## 2. TECH STACK & ARCHITECTURE

- **Framework:** React 18+ (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Mobile-first)
- **Routing:** React Router DOM (v6+)
- **Animation:** Framer Motion (for smooth transitions on pricing cards and feature reveals)
- **Icons:** Lucide React
- **Components:** Shadcn/UI (adapted for React/Vite)

### Recommended Folder Structure

```
src/
├── components/
│   ├── ui/               # Reusable primitives (buttons, cards)
│   ├── productlogik/     # Specific components (PricingTable, FeatureGrid)
│   ├── home/             # Hero, ValueProps
│   └── layout/           # Navbar, Footer
├── pages/
│   ├── Home.tsx          # Homepage
│   ├── About.tsx         # About Me (Professional Bio)
│   ├── Contact.tsx       # Contact Form
│   ├── projects/
│   │   ├── ProductLogik.tsx  # ProductLogik Deep Dive
│   │   └── AICompass.tsx     # AI Compass Case Study
│   └── blog/
│       ├── BlogIndex.tsx     # Blog Listing
│       └── BlogPost.tsx      # Blog Post Template
├── layouts/
│   └── MainLayout.tsx    # Wrapper with Navbar/Footer
├── lib/
│   └── utils.ts
├── App.tsx               # Route Definitions
└── main.tsx              # Entry Point
```

---

## 3. HOMEPAGE CONTENT

- **Page Component:** `src/pages/Home.tsx`

### Hero Section

- **Headline:** Architecting Intelligence. Defining Product Strategy.
- **Subheadline:** I bridge the gap between complex AI capabilities and strategic product execution. Founder of ProductLogik.
- **Primary CTA:** View ProductLogik (Link: `/projects/productlogik`)
- **Secondary CTA:** Read My Insights (Link: `/blog`)

### Value Proposition Grid

- **AI Strategy:** Translating LLM capabilities into viable business models.
- **Product Governance:** Building frameworks for ethical and scalable AI adoption.
- **Decision Intelligence:** Using data to remove bias from product roadmaps.

---

## 4. PROJECT: PRODUCTLOGIK (Deep Dive)

- **Page Component:** `src/pages/projects/ProductLogik.tsx`
- **Route:** `/projects/productlogik`
- **Tagline:** AI-powered Product Strategy & Decision Intelligence Platform for Product Teams.

### A. Core Features (The Foundation)

- Product idea scoring engine
- Value vs Effort modeling
- Risk classification logic
- Strategic alignment scoring
- Structured roadmap recommendation
- Explainable AI output layer

### B. New Feature Specs (The "Rocket" Expansion)

*Implement these as Feature Cards or Accordions.*

- **Advanced Evaluation Intelligence:** Custom scoring model builder, Multi-framework support (RICE, WSJF), Sensitivity analysis, Assumption tagging.
- **Roadmap Intelligence Layer:** AI-generated roadmap drafts, Capacity-aware prioritization, Dependency visualization, Scenario comparison (Q1 vs Q2).
- **Risk & Impact Modeling:** Risk categorization (Market/Tech/Reg/UX), Risk heatmaps, Revenue impact estimation.
- **Competitive & Market Context:** Competitor feature comparison matrix, Market gap detection, Trend tagging.
- **Explainability & Governance:** Decision breakdown panel, Stakeholder voting layer, Bias detection flags (overweighted factor alerts).
- **Collaboration & Workflow:** Team workspaces, Idea discussion threads, Jira integration, Export to roadmap tools.

### C. Pricing Tiers (Strict Data Structure)

*Use a 4-column pricing table.*

#### Starter
- **Target:** Individual PM
- **Key Features:** Idea scoring, Value vs Effort, Risk logic, Basic export. (Limit: 25 ideas/mo)
- **Positioning:** Structured AI prioritization tool.

#### Professional
- **Target:** Product Teams
- **Key Features:** Everything in Starter + Custom weights (RICE/WSJF), Sensitivity analysis, Basic AI roadmap, Jira integration, Team workspace (5 users).
- **Positioning:** AI-assisted product prioritization & planning system.

#### Business
- **Target:** Scale-ups
- **Key Features:** Everything in Professional + Capacity-aware planning, Scenario simulation, Risk heatmaps, Competitor matrix, Stakeholder voting.
- **Positioning:** AI-powered product decision intelligence platform.

#### Enterprise
- **Target:** Governance
- **Key Features:** Everything in Business + Custom model builder, Revenue impact estimation, Bias detection analytics, Audit trails, API access, White-labeled reports.
- **Positioning:** Product Governance & AI-Driven Decision Infrastructure.

---

## 5. PROJECT: AI COMPASS (Case Study)

- **Page Component:** `src/pages/projects/AICompass.tsx`
- **Route:** `/projects/ai-compass`
- **Header:** Navigating the complexity of Enterprise AI Implementation.

### System Diagram Structure (Visual Flowchart)

1. **Input:** Unstructured Enterprise Data + Market Trends.
2. **Processing:** Relevance Filtering (NLP) → Strategic Alignment Check (Vector DB).
3. **Decision Core:** Feasibility Engine (Tech Stack analysis) → ROI Predictor.
4. **Output:** Strategic Roadmap & Resource Allocation Plan.

---

## 6. ABOUT PAGE

- **Page Component:** `src/pages/About.tsx`
- **Route:** `/about`
- **Headline:** Building the Operating System for Modern Product Teams.

### Body Copy

> "With a background deeply rooted in software engineering and product strategy, I realized that the hardest part of product management wasn't building the feature—it was deciding what to build.
>
> I created hamzalatif.com and ProductLogik to solve the 'Black Box' problem of prioritization. My work focuses on stripping away the ambiguity of product roadmaps using Explainable AI. I don't just advocate for AI; I build systems that govern it.
>
> Currently, I am scaling ProductLogik to help product teams move from 'feature factories' to 'decision engines'."

---

## 7. BLOG STRATEGY (Initial Posts)

- **Page Component:** `src/pages/blog/BlogIndex.tsx`
- **Route:** `/blog`

### Post 1
- **Title:** The End of "Gut Feel" in Product Management
- **Concept:** How Sensitivity Analysis allows PMs to stress-test roadmaps before coding.

### Post 2
- **Title:** Why Your Roadmap Needs a Risk Heatmap
- **Concept:** Dimensional Risk Modeling (Market/Tech/Reg/UX) to avoid cliff edges.

### Post 3
- **Title:** Explainable AI: The Missing Link in Product Governance
- **Concept:** Trusting the score. Using "Glass Box" AI to detect bias in prioritization.

---

## 8. DEPLOYMENT CONFIGURATION

- **Platform:** Vercel / Netlify (Static Site)
- **Build Tool:** Vite
- **Repository:** GitHub
- **Env Vars:** `VITE_SITE_URL`, `VITE_ANALYTICS_ID`