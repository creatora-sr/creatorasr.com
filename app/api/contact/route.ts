import { NextResponse } from "next/server";
import { store, uid } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, service } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "name, email, message required" }, { status: 400 });
    }
    const inquiry = { id: uid(), name, email, phone: phone || null, message, service: service || null, status: "new", createdAt: new Date() };
    store.inquiries.unshift(inquiry);
    return NextResponse.json({ ok: true, id: inquiry.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to save inquiry" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(store.inquiries);
}
