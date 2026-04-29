# Projects Tech Stack Overview

This document provides a breakdown of the technology stacks used across the various projects in the `D:\SpicedProjects\Projects\` directory.

---

## 1. ShopmanagementToolSystem
A PHP-based monolithic application or toolset, primarily relying on Composer for dependency management.

**Core Stack:**
- **Language:** PHP 8.1
- **Templating:** Smarty (^4.3.0)
- **Database/ORM:** Doctrine DBAL (^2.10)
- **UI Framework:** AdminLTE (~3.2)
- **HTTP/API Layer:** Guzzle (^6.5), HTTP Interop
- **Other Utilities:** PHPMailer, Monolog (logging), PhpSpreadsheet, phpseclib

---

## 2. ai-compass
A full-stack application leveraging modern React on the frontend and Python for data or AI-driven backend services.

**Frontend (`ai-compass-web`):**
- **Framework:** Next.js (16.1.4)
- **UI Library:** React (19.2.3)
- **Styling:** Tailwind CSS (v4)
- **Components:** Radix UI primitives, Recharts (data visualization)
- **Animation:** Framer Motion

**Backend/Root:**
- **Language:** Python
- **Database:** PostgreSQL (based on `schema.sql` and `postgres_backup.sql` backups)

---

## 3. hamzalatif_portfolio
Your personal portfolio website, built as a modern Single Page Application (SPA).

**Core Stack:**
- **Build Tool:** Vite (^6.0.1)
- **UI Library:** React (18.3.1), TypeScript
- **Styling:** Tailwind CSS (v4), Emotion
- **Component Libraries:** Material UI (MUI v6), Radix UI
- **Routing:** React Router (v7)
- **Animation & Visuals:** Framer Motion (motion), Embla Carousel, React Slick

---

## 4. hetavideo
A scalable monorepo application handling video services, configured using Turborepo and pnpm workspaces. 

**Frontend (`apps/web`):**
- **Framework:** Next.js (^15.3.0) with App Router
- **UI Library:** React (^19.0.0), TypeScript
- **Styling:** Tailwind CSS (v4.1.12)
- **Components:** Radix UI, Material UI (v7.3.5)
- **Authentication/Database:** Supabase SSR & Supabase JS
- **Other Utilities:** Framer Motion, Recharts, Jose (JWT processing), Resend (emails)

---

## 5. productlogik
A split full-stack application explicitly separated into frontend and backend directories.

**Frontend (`frontend`):**
- **Build Tool:** Vite (^7.2.4)
- **UI Library:** React (^19.2.0), TypeScript
- **Styling:** Tailwind CSS (v3.4.17)
- **Components:** Radix UI primitives
- **Routing:** React Router (^7.13.0)

**Backend (`backend`):**
- **Framework:** FastAPI (Python)
- **Server:** Uvicorn / Gunicorn
- **Database:** PostgreSQL (psycopg2-binary), SQLAlchemy
- **AI Integrations:** Google GenAI, OpenAI
- **Other Utilities:** Resend (email services), Stripe, Pydantic, Pandas

---

## 6. teleres_wordpress_template
A WordPress theme project.

**Stack:**
- **Framework:** WordPress
- **Theme/Details:** EV Enterprise Theme 

---

## 7. themeforest-cD2CZjns-energox-ev-charging-station-wordpress-theme
A commercial WordPress theme folder.

**Stack:**
- **Framework:** WordPress
- **Theme/Details:** EnergoX EV Charging Station Theme
