# ✅ TEST CASES — CREATORA S.R Website

**Build under test:** v1.0 (React 19 + Next.js 16 + TypeScript)
**Tester:** Automated + Manual (Playwright browser session)
**Date:** 25 Oct 2026 · **App URL used:** `http://localhost:3001` (server: `D:\creatora s.r .com`)
**Evidence:** `docs/EVIDENCE/*.png` (19 screenshots) · **Result: 33 / 33 PASS**

Legend: **PASS** = verified working

---

## A. Requirement-based test cases

| TC ID | Test case | Steps | Expected result | Status | Evidence |
|---|---|---|---|---|---|
| TC-01 | Tagline on Home | Open `/` → read `<h1>` | `Your Ideas Our Creation : "Powerful Digital Solution"` (quotes included) | ✅ PASS | `01-home-tagline.png` |
| TC-02 | Tagline in footer | Any page → footer | Same exact tagline text | ✅ PASS | `02-footer-tagline.png` |
| TC-03 | Tagline on About page | Open `/about` | Same exact tagline text | ✅ PASS | `03-about-tagline.png` |
| TC-04 | Browser tab title | Check `document.title` | `CREATORA S.R - Your Ideas Our Creation : "Powerful Digital Solution"` | ✅ PASS | `01-home-tagline.png` |
| TC-05 | Code-generated service icons | `/` + `/services` → Our Services | 9 distinct PNG icons (`/services/icon-0..8.png`) render via `next/image` — no emoji/stock | ✅ PASS | `04-service-icons.png`, `19-desktop.png` |
| TC-06 | Background animation – all pages | Visit `/`, `/about`, `/services`, `/pricing`, `/contact` | 40 floating particles + animated gradient (`animationName: gradientShift`) on every page | ✅ PASS | `05-background-anim.png` |
| TC-07 | Cursor sparkle – all pages | Move mouse across page | `.cursor-sparkle` follows pointer (verified at 700px) + `.sparkle-trail` particles spawn | ✅ PASS | `06-cursor-sparkle.png` |
| TC-08 | Game on LAST page bottom | Go to `/contact` (last nav item) → scroll bottom | "Subway Runner Game" is the last section, 600×300 canvas | ✅ PASS | `07-game-contact-bottom.png` |
| TC-09 | Game – jump works | Click canvas / Space / Tap | Player jumps, obstacles avoided, score increases (observed 17 pts) | ✅ PASS | `07-game-contact-bottom.png` |
| TC-10 | Game – collision & restart | Let player hit obstacle → click canvas | "Game Over! Click canvas to restart." shown → click restarts | ✅ PASS | `08-game-over.png` |
| TC-11 | Game – score & coins | Play a few seconds | Score updates; Best score tracked (fixed: now integer, no decimals) | ✅ PASS | `07-game-contact-bottom.png` |
| TC-12 | NO online payment gateway | Open `/pricing` + `/contact` | Badge "NO online transaction on this website"; no card/UPI form anywhere | ✅ PASS | `09-payment-direct-number.png` |
| TC-13 | Payment direct number | Payment section on `/pricing`, `/contact`, footer | `+91 7015804907` + "Payment ke liye yahan contact karein" + WhatsApp/Call buttons | ✅ PASS | `09-payment-direct-number.png` |
| TC-14 | Step-by-step payment process | Scroll to "Payment process — Step by Step" | 6 numbered steps in order + WhatsApp/Call CTA | ✅ PASS | `10-payment-guide.png` |
| TC-15 | Step-by-step form flow | Scroll to "How your enquiry form works" | 4 numbered steps: form → dashboard → our reply → confirmation | ✅ PASS | `10-payment-guide.png` |
| TC-16 | Contact form submit | Fill Name/Email/Message → Send | Success message "Thank you! We'll get back to you soon." | ✅ PASS | `11-form-submit.png` |
| TC-17 | Contact form validation | Empty required fields | `form.checkValidity() === false` → browser blocks submission | ✅ PASS | `11-form-submit.png` |
| TC-18 | Pricing Monthly/Yearly toggle | `/pricing` → click both tabs | `₹4,999/mo` ⇄ `₹39,999/yr` (cards swap) | ✅ PASS | `12-pricing-toggle.png` |
| TC-19 | WhatsApp button | Check floating button on any page | Links to `https://wa.me/917015804907` (+ pre-filled message link) | ✅ PASS | `13-whatsapp.png` |
| TC-20 | AI Chat | Click "AI Chat" in header | Chat panel opens with assistant UI | ✅ PASS | `14-chat.png` |

## B. Responsive test cases

| TC ID | Device / width | Steps | Expected | Status | Evidence |
|---|---|---|---|---|---|
| TC-21 | Mobile 360×640 | Open `/` | Desktop nav hidden (`display:none`), hamburger visible, no horizontal scroll | ✅ PASS | `15-mobile-home.png` |
| TC-22 | Mobile menu | Tap hamburger | All links open: Home, About, Services, Pricing, Portfolio, Contact, Login | ✅ PASS | `16-mobile-menu.png` |
| TC-23 | Mobile game | `/contact` bottom on touch | Canvas scales to 270px, tap = jump, no overflow | ✅ PASS | `17-mobile-game.png` |
| TC-24 | Tablet 768×1024 | Open `/services` | 2-column grid, no horizontal scroll | ✅ PASS | `18-tablet.png` |
| TC-25 | Desktop 1280×800 | Open `/` | 9 icons render, hero + grids correct, no overflow | ✅ PASS | `19-desktop.png` |
| TC-26 | No horizontal scroll | Measure at 360 / 768 / 1280 | `document.scrollWidth <= innerWidth` at all three | ✅ PASS | `15/18/19-*.png` |

## C. Technical / build test cases

| TC ID | Test | Command / method | Actual result | Status |
|---|---|---|---|---|
| TC-27 | Type check | `tsc -p tsconfig.json --noEmit` | Exit 0, **0 type errors** | ✅ PASS |
| TC-28 | Production build | `npm run build` | `BUILD_EXIT=0` — all 29 routes compiled (8 static + 20 dynamic + middleware) | ✅ PASS |
| TC-29 | Lint | `npm run lint` (eslint) | **Exit 0 — 0 errors, 0 warnings** | ✅ PASS |
| TC-30 | Dev server starts | `npm run dev` | `✓ Ready` → served at `http://localhost:3001` | ✅ PASS |
| TC-31 | All routes respond 200 | GET `/ /about /services /pricing /portfolio /contact /faq /privacy /terms /login /register` | All **200** | ✅ PASS |
| TC-32 | Contact API validation | `POST /api/contact` without `name` | **400** `{"error":"name, email, message required"}` | ✅ PASS |
| TC-33 | Contact API success | `POST /api/contact` with valid body | **200** `{"ok":true,"id":"..."}` and record retrievable via `GET /api/contact` | ✅ PASS |

---

## 🧾 Console health

- Home / Contact pages: **0 console errors, 0 warnings** after final run
- One transient CSS parse error observed during a concurrent file edit — resolved on reload (re-verified clean)

## 📸 Evidence index

See `docs/EVIDENCE/README.md` for the file-by-file mapping (01 → 19 screenshots captured during the live run).
