import { NextResponse } from "next/server";
import { store, uid } from "@/lib/db";

export async function GET() {
  return NextResponse.json(store.services);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description, icon, price, category } = body;
  if (!title || !description) return NextResponse.json({ error: "title, description required" }, { status: 400 });
  const s = { id: uid(), title, description, icon: icon || null, price: price || null, category: category || null, order: store.services.length, createdAt: new Date() };
  store.services.push(s);
  return NextResponse.json(s);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  store.services = store.services.filter((s) => s.id !== id);
  return NextResponse.json({ ok: true });
}
