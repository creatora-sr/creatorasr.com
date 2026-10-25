# 📋 REQUIREMENTS DOCUMENT — CREATORA S.R Website

| Field | Value |
|---|---|
| Project | CREATORA S.R — Digital Agency Website |
| Tagline | `Your Ideas Our Creation : "Powerful Digital Solution"` |
| Tech Stack | React 19 + Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 |
| Format | ✅ React (functional components, hooks, reusable components) |
| Owner contact | +91 7015804907 / creatoras.r27@gmail.com |
| Version | 1.0 · Date: 25 Oct 2026 |
| Verification | ✅ **33/33 test cases PASSED** → `docs/TEST-CASES.md`, 19 screenshots → `docs/EVIDENCE/` |
| Domain name | ⏳ **Pending — client will share at final handover** |

---

## 1. Functional Requirements

| ID | Requirement | Status | Implemented In |
|---|---|---|---|
| FR-01 | Tagline reads exactly **Your Ideas Our Creation : "Powerful Digital Solution"** on all pages + browser title | ✅ | `app/page.tsx`, `components/Footer.tsx`, `app/about/page.tsx`, `app/layout.tsx`, `lib/gemini.ts`, `app/admin/settings/page.tsx` |
| FR-02 | Multi-page website: Home, About, Services, Pricing, Portfolio, Contact, FAQ, Privacy, Terms, Login, Register + Client & Admin areas | ✅ | `app/**/page.tsx` (29 routes) |
| FR-03 | **Code-generated images** for service icons (9 distinct PNGs, no emoji/stock) | ✅ | `public/services/icon-0.png … icon-8.png` via `components/ServiceIcon.tsx` |
| FR-04 | **Background animation on every page** (animated gradient + 40 floating particles) | ✅ | `components/AnimatedBackground.tsx` (global mount in `app/layout.tsx`) |
| FR-05 | **Cursor sparkling animation on every page** (cursor dot + sparkle trail) | ✅ | `components/CursorSparkle.tsx` (global mount) + `.sparkle-trail` CSS |
| FR-06 | **Subway-Surfer style game at the bottom of the website's last page** (Contact = last nav item) | ✅ | `components/SubwayRunner.tsx` → bottom of `app/contact/page.tsx` |
| FR-07 | **No online transaction on the website** — zero payment gateway | ✅ | `components/PaymentGuide.tsx`, `/pricing`, `/contact` (badge: "NO online transaction on this website") |
| FR-08 | Show **direct payment number** — "Payment ke liye yahan contact karein +91 7015804907" | ✅ | Footer, `/contact`, `/pricing`, PaymentGuide WhatsApp + Call buttons |
| FR-09 | **Step-by-step: where the form data goes** (4 steps) | ✅ | `components/PaymentGuide.tsx` → "How your enquiry form works" |
| FR-10 | **Step-by-step payment process** (6 steps) | ✅ | `components/PaymentGuide.tsx` → "Payment process — Step by Step" |
| FR-11 | Contact form saves enquiry & returns success/error | ✅ | `app/contact/page.tsx` → `POST /api/contact` → admin Inquiries |
| FR-12 | Pricing with Monthly/Yearly toggle, Add-ons, AI Agent plans | ✅ | `app/pricing/page.tsx` |
| FR-13 | AI chatbot assistant (Gemini) with company knowledge | ✅ | `components/ChatBot.tsx`, `lib/gemini.ts` |
| FR-14 | Floating WhatsApp quick-contact button | ✅ | `components/WhatsAppButton.tsx` |
| FR-15 | Admin dashboard: services, pricing, inquiries, clients, settings | ✅ | `app/admin/**` |
| FR-16 | Client area: services, invoices, support tickets | ✅ | `app/client/**` |
| FR-17 | Auth: register / login / protected routes | ✅ | `app/login`, `app/register`, `auth.ts`, `middleware.ts` |

## 2. Non-Functional Requirements

| ID | Requirement | Status | Evidence |
|---|---|---|---|
| NFR-01 | **Responsive** — mobile 360px, tablet 768px, desktop 1280px, no horizontal scroll | ✅ | TC-21…TC-26, screenshots `15/17/18/19` |
| NFR-02 | **React format** — functional components + hooks (`useState`, `useEffect`, `useRef`) | ✅ | all `components/*.tsx`, `app/**/page.tsx` |
| NFR-03 | **Professional organisation** — app / components / lib / public / docs separated | ✅ | structure below |
| NFR-04 | Quality gates: 0 TypeScript errors, production build OK, 0 lint problems | ✅ | TC-27 (`tsc`), TC-28 (`next build` exit 0), TC-29 (`eslint` exit 0) |
| NFR-05 | Accessibility: semantic headings, `alt` text on every image, keyboard-playable game (Space/Click/Tap) | ✅ | all `<img>` have alt; game controls |
| NFR-06 | Security: no card/UPI data stored, server-side form validation, secrets in `.env` | ✅ | `app/api/contact/route.ts`, `.env.example` |
| NFR-07 | Clean browser console (0 errors) | ✅ | TC console check |

## 3. Project structure

```
creatora/
├── app/                       # Pages (routes) + API endpoints
│   ├── page.tsx               # Home (hero, services, why-us, pricing teaser)
│   ├── about/ services/ pricing/ portfolio/ contact/ faq/
│   ├── privacy/ terms/ login/ register/
│   ├── admin/                 # Admin dashboard
│   ├── client/                # Client portal
│   └── api/                   # contact, auth, services, pricing, tickets, chat
├── components/                # Reusable React components
│   ├── AnimatedBackground.tsx # 🌌 background animation (all pages)
│   ├── CursorSparkle.tsx      # ✨ cursor sparkling animation (all pages)
│   ├── SubwayRunner.tsx       # 🎮 endless-runner game (bottom of last page)
│   ├── PaymentGuide.tsx       # 💳 step-by-step form + payment flow
│   ├── ServiceIcon.tsx        # 🎨 renders code-generated service icons
│   ├── Header / Footer / ChatBot / WhatsAppButton / ClientShell
├── lib/                       # db + Gemini AI helpers
├── public/
│   ├── services/icon-0…8.png  # 🎨 9 code-generated service icons
│   └── logo.png, hero.png
├── docs/                      # 📋 REQUIREMENTS.md · TEST-CASES.md · EVIDENCE/
└── README.md
```

## 4. Open item

| Item | Note |
|---|---|
| **Domain name** | Client said: *"DOMAIN NAME MAIN TUMHE LAST ME BTA DUNGA"* → to be filled at final handover. Once shared: update `app/layout.tsx` metadata, footer and `README.md`, then deploy. |
