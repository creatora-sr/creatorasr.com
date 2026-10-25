import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { question, history } = await req.json();
    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "question required" }, { status: 400 });
    }
    const answer = await askGemini(question, history || []);
    return NextResponse.json({ answer });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ answer: "Sorry, I couldn't process that. Please try again." }, { status: 200 });
  }
}
