import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { store, uid, findUserByEmail } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ error: "email, password required" }, { status: 400 });
    if (findUserByEmail(email)) return NextResponse.json({ error: "User already exists" }, { status: 400 });
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: uid(), name: name || email, email, password: hashed, role: "CLIENT" as const, createdAt: new Date() };
    store.users.push(user);
    return NextResponse.json({ ok: true, id: user.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
