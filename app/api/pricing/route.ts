import { NextResponse } from "next/server";
import { store, uid } from "@/lib/db";

export async function GET() {
  return NextResponse.json(store.pricingPlans);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, price, period, tagline, features, popular, category } = body;
  if (!name || !price) return NextResponse.json({ error: "name, price required" }, { status: 400 });
  const p = { id: uid(), name, price, period: period || "month", tagline: tagline || null, features: features || "", popular: !!popular, category: category || "monthly", order: store.pricingPlans.length, createdAt: new Date() };
  store.pricingPlans.push(p);
  return NextResponse.json(p);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  store.pricingPlans = store.pricingPlans.filter((p) => p.id !== id);
  return NextResponse.json({ ok: true });
}
