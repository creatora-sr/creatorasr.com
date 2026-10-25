import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { store, uid } from "@/lib/db";

export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const tickets = store.tickets.filter((t) => t.userId === userId);
  return NextResponse.json(tickets);
}

export async function POST(req: Request) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { subject, message } = await req.json();
  if (!subject || !message) return NextResponse.json({ error: "subject, message required" }, { status: 400 });
  const t = { id: uid(), userId, subject, message, status: "open", createdAt: new Date(), updatedAt: new Date() };
  store.tickets.unshift(t);
  return NextResponse.json(t);
}

