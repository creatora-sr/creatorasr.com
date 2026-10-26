# 🎨 CREATORA S.R — Digital Creative Agency Website

> **Your Ideas Our Creation : "Powerful Digital Solution"**

[![Live Website](https://img.shields.io/badge/🌐_LIVE-creatorasr.vercel.app-000000?style=for-the-badge)](https://creatorasr.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)

A modern, fully responsive and production-ready website for **CREATORA S.R** — a digital creative agency offering AI Videos, AI Agents, Web Design, Video Editing, Graphics, Posters, Banners, Thumbnails & Content Creation.

**🚀 Live:** https://creatorasr.vercel.app · **🧪 Test report:** [LIVE_TEST_REPORT.md](LIVE_TEST_REPORT.md) (15/16 pass)

![Banner](public/hero.png)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌌 **Animated Background** | Aurora orbs, floating particles, gradient shift & watermark on every page |
| ✨ **Cursor FX** | Smooth-follow cursor ring + sparkle trail (auto-disabled on touch) |
| 🎮 **Subway Runner Game** | A playable canvas game (jump, coins, score) at the bottom of the site |
| 💬 **AI Chatbot** | Gemini-powered assistant to greet and guide visitors |
| 📇 **Enquiry Form** | Leads flow into the built-in Admin Dashboard |
| 💳 **No-Gateway Payments** | Direct WhatsApp/Call based payment flow (no online transaction) |
| 📱 **Fully Responsive** | Mobile, tablet & desktop — hamburger menu, adaptive grids |
| ⚡ **Performance-first** | Next.js 16 App Router, optimized assets, clean console |

## 📄 Pages

Home · About · Services · Pricing · Portfolio · FAQ · Contact · Privacy · Terms · Client Login/Register · **Admin Dashboard**

## 🧰 Tech Stack

![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)

## 🚀 Run Locally

```bash
npm install
npm run dev          # → http://localhost:3000
npm run build        # production build
npm start            # production server
```

> Windows tip: keep the project in a **folder path without spaces** (e.g. `C:\creatora`) to avoid tooling issues. If Turbopack native bindings are unavailable on your machine, run the dev server with `next dev --webpack`.

## 🔐 Environment

Copy `.env.example` → `.env.local` and fill:

| Key | Purpose |
|-----|---------|
| `GEMINI_API_KEY` | Gemini AI chatbot ([free key](https://aistudio.google.com/apikey)) |
| `NEXTAUTH_SECRET` | Random secret for auth |
| `NEXTAUTH_URL` | `http://localhost:3000` (or your domain) |

The demo runs on an in-memory store. For production persistence, connect PostgreSQL (Neon/Supabase) and swap `lib/db.ts`.

## 💳 Payment Policy

**No payment gateway is integrated.** Clients contact the team directly:

- 📱 **+91 7015804907** (WhatsApp / Call)
- ✉️ creatoras.r27@gmail.com
- Payments via UPI / Bank Transfer / Cards — coordinated directly, receipts shared on completion.

## 📁 Admin

The included **Admin Dashboard** manages inquiries, clients, tickets & content. Credentials are kept **out of this repository** (see the private owner files). Seed defaults live in `lib/db.ts` — change the password before deploying.

## 🌐 Domain

**Live now on Vercel (free tier):** https://creatorasr.vercel.app · Custom domain **creatorasr.com** will be connected later — no code changes required.

## 📞 Contact

**CREATORA S.R**, Hisar, Haryana, India 🇮🇳
📱 +91 7015804907 · ✉️ creatoras.r27@gmail.com · 🌐 creatorasr.com *(coming soon)*

---

© 2026 CREATORA S.R. All rights reserved.
