import bcrypt from "bcryptjs";

export type Role = "ADMIN" | "CLIENT";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  service?: string | null;
  status: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string | null;
  price?: string | null;
  category?: string | null;
  order: number;
  createdAt: Date;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline?: string | null;
  features: string;
  popular: boolean;
  category: string;
  order: number;
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  plan: string;
  amount: string;
  status: string;
  createdAt: Date;
}

export interface Ticket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Store {
  users: User[];
  inquiries: Inquiry[];
  services: Service[];
  pricingPlans: PricingPlan[];
  orders: Order[];
  tickets: Ticket[];
}

const globalStore = globalThis as unknown as { __creatora_store?: Store };

function makeId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function seedAdmin(store: Store) {
  if (!store.users.find((u) => u.email === "admin@creatora.com")) {
    store.users.push({
      id: makeId(),
      name: "Admin",
      email: "admin@creatora.com",
      password: bcrypt.hashSync("Creatora@Admin#2026", 10),
      role: "ADMIN",
      createdAt: new Date(),
    });
  }
}

export const store: Store =
  globalStore.__creatora_store ??
  (() => {
    const s: Store = { users: [], inquiries: [], services: [], pricingPlans: [], orders: [], tickets: [] };
    seedAdmin(s);
    globalStore.__creatora_store = s;
    return s;
  })();

export const uid = makeId;

export function findUserByEmail(email: string) {
  return store.users.find((u) => u.email === email);
}

export function findUserById(id: string) {
  return store.users.find((u) => u.id === id);
}
