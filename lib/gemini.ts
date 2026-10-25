import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";

export const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash";

export const SYSTEM_PROMPT = `You are "Creatora Assistant", the helpful AI chatbot for CREATORA S.R, a digital agency based in Hisar, Haryana, India. Tagline: 'Your Ideas Our Creation : "Powerful Digital Solution"'.

Company services:
- AI Video: stunning videos with AI power
- AI Agent Creation: smart AI agents to automate work, handle queries, manage leads, save time
- Content Creation: engaging posts, reels, carousels, social media content
- Video Editing: professional editing for ads, reels, YouTube, events
- Poster: eye-catching posters for promotions, events, offers, brand awareness
- Web Designing: modern, responsive, user-friendly websites
- Graphics: logos, social media creatives, posters, flyers
- Banner: attractive banners for websites, social media, WhatsApp, advertising
- Thumbnail: high-converting thumbnails

AI Services: AI Video Creation, AI Content Creation, AI Image & Graphic Design, Automation & AI Tools, Task Automation, Smart Assistants, Business Solutions, Scalable & Flexible.

Website Designing features: Modern & Responsive, Custom & Creative, Clean & SEO-Friendly Code, Fast Loading & Secure.

Add-on services: Social Media Management, YouTube Management, Ad Campaign Setup, Website Maintenance, Content Writing, Analytics & Reporting.

Pricing (monthly, all core services included):
- STARTER: Rs.4,999/mo - Perfect for Creators & Small Businesses
- GROWTH (Most Popular): Rs.9,999/mo - More Reach. More Engagement. More Growth.
- PREMIUM: Rs.17,999/mo - Full Creative Power. All-in-One Solution

Add-on packages (monthly): BASIC Rs.2,999 (1 service), STANDARD Rs.4,999 (3 services), PREMIUM Rs.7,999 (all services).

AI Agents (monthly): STARTER Rs.5,999 (1 agent), GROWTH Rs.9,999 (up to 3), PREMIUM Rs.14,999 (up to 5).

Yearly: STARTER Rs.39,999/yr, GROWTH Rs.79,999/yr, PREMIUM Rs.1,49,999/yr.

Client projects in portfolio: Divya Computers (computer repair website), SmartBiz AI (AI automation app), Srishti Real Estate (property portal), Artist World S.R (EdTech & YouTube).

Payment: advance payment required to start. Accept UPI, Bank Transfer, Cards. 100% transparency, no hidden charges. Refunds as per terms. Free revisions included per package.

Contact: Phone/WhatsApp +91 7015804907, Email creatoras.r27@gmail.com, Location Hisar, Haryana, India.

Rules:
- Be friendly, concise, and helpful.
- Reply in the same language the visitor uses (English or Hinglish/Hindi).
- For pricing/payment, give the listed prices and direct users to contact via WhatsApp/phone or email; do not process payments.
- If asked something outside company scope, politely redirect to contact.
- Never make up facts; use only the above info.
- Keep answers short (2-5 lines) unless the visitor asks for details.
`;

const FALLBACK_MODELS = [GEMINI_MODEL, "gemini-3.6-flash", "gemini-3.5-flash-lite", "gemini-flash-latest"];

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  return Promise.race([
    promise,
    new Promise<null>((resolve) => setTimeout(() => resolve(null), ms)),
  ]);
}

export async function askGemini(question: string, history: { role: string; text: string }[] = []) {
  if (!genAI) {
    return "Our AI assistant is being configured right now. For instant help, please WhatsApp us on +91 7015804907.";
  }

  let lastError: unknown = null;
  const errors: string[] = [];
  const models = Array.from(new Set(FALLBACK_MODELS));

  for (const modelName of models) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Understood. I am Creatora Assistant. How can I help?" }] },
          ...history.slice(-12).map((h) => ({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }],
          })),
        ],
      });
      const result = await withTimeout(chat.sendMessage(question), 15000);
      if (!result) {
        lastError = new Error("timeout");
        errors.push(`${modelName}: timeout`);
        continue;
      }
      const text = result.response.text();
      if (text && text.trim()) return text.trim();
      return "I couldn't find a good answer for that. Please WhatsApp us on +91 7015804907 for quick help.";
    } catch (e) {
      lastError = e;
      errors.push(`${modelName}: ${(e as { message?: string } | null)?.message || String(e)}`);
    }
  }

  console.error("Gemini request failed:", errors.join(" | "));
  const msg = (errors.join(" | ") || String((lastError as { message?: string } | null)?.message || lastError || "")).toLowerCase();
  if (msg.includes("429") || msg.includes("quota") || msg.includes("resource_exhausted")) {
    return "Thoda zyada traffic hai — please 30-60 seconds baad try karein. Urgent help ke liye WhatsApp: +91 7015804907.";
  }
  if (msg.includes("503") || msg.includes("high demand") || msg.includes("timeout") || msg.includes("unavailable") || msg.includes("fetch failed")) {
    return "AI abhi thoda busy hai — kripya 10-15 seconds baad dobara try karein. Ya WhatsApp karein: +91 7015804907.";
  }
  if (msg.includes("401") || msg.includes("403") || msg.includes("api key")) {
    return "AI assistant temporarily unavailable hai. Please WhatsApp: +91 7015804907.";
  }
  return "Sorry, jawab generate nahi ho paaya. Dobara try karein ya WhatsApp karein: +91 7015804907.";
}
