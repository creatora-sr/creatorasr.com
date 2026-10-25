import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import ChatTeaser from "@/components/ChatTeaser";

const services = [
  { title: "AI Video", desc: "Create stunning videos with the power of AI." },
  { title: "AI Agent Creation", desc: "Smart AI agents to automate your work, handle queries, manage leads and save time." },
  { title: "Content Creation", desc: "Engaging posts, reels, carousels and social media content that connects." },
  { title: "Video Editing", desc: "Professional editing for ads, reels, YouTube, events and more." },
  { title: "Poster", desc: "Eye-catching posters for promotions, events, offers and brand awareness." },
  { title: "Web Designing", desc: "Modern, responsive & user-friendly websites that build your brand." },
  { title: "Graphics", desc: "Logos, social media creatives, posters, flyers and more." },
  { title: "Banner", desc: "Attractive banners for websites, social media, WhatsApp and advertising." },
  { title: "Thumbnail", desc: "High-converting thumbnails that grab attention and boost your views." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm mb-4">
            CREATORA S.R
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Your Ideas <span className="grad-text">Our Creation</span>
            <br /> : <span className="grad-text">&quot;Powerful Digital Solution&quot;</span>
          </h1>
          <p className="mt-5 text-gray-300 text-lg">
            We combine creativity with AI to deliver stunning videos, smart agents, modern websites,
            and high-converting creatives that grow your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary flex items-center gap-2">
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn-outline">View Portfolio</Link>
            <Link href="/contact" className="btn-outline">Get in Touch</Link>
          </div>
          <div className="mt-8 flex gap-6 text-sm text-gray-400">
            <div><span className="text-white font-bold text-2xl">9+</span><br />Services</div>
            <div><span className="text-white font-bold text-2xl">100%</span><br />Satisfaction</div>
            <div><span className="text-white font-bold text-2xl">On-Time</span><br />Delivery</div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/hero.png"
            alt="CREATORA S.R — digital services showcase"
            width={560}
            height={420}
            style={{ width: "100%", maxWidth: "28rem", height: "auto" }}
            className="rounded-3xl shadow-2xl border border-white/10"
            priority
          />
        </div>
      </section>

      {/* AI Chat teaser */}
      <ChatTeaser />

      {/* Services */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-gray-400 mt-3">Everything you need to grow your brand digitally.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass p-6 hover:scale-[1.02] transition">
              <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/30 to-cyan-500/30 border border-white/10">
                <ServiceIcon name={s.title} size={56} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">View All Services</Link>
        </div>
      </section>

      {/* Why choose */}
      <section className="container py-16">
        <div className="glass p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose CREATORA S.R?</h2>
            <ul className="space-y-3 text-gray-300">
              {["Modern & responsive designs", "Clean & SEO-friendly code", "Fast loading & secure", "On-time delivery", "100% client satisfaction", "Affordable pricing", "Free revisions included"].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400" /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to grow your business?</h3>
            <p className="text-gray-400 mb-6">Let&apos;s build something powerful together.</p>
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Simple Pricing</h2>
          <p className="text-gray-400 mt-3">Choose the plan that fits your brand.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "STARTER", price: "₹4,999", period: "/month", tag: "Perfect for Creators & Small Businesses" },
            { name: "GROWTH", price: "₹9,999", period: "/month", tag: "More Reach. More Engagement. More Growth.", popular: true },
            { name: "PREMIUM", price: "₹17,999", period: "/month", tag: "Full Creative Power. All-in-One Solution." },
          ].map((p) => (
            <div key={p.name} className={`glass p-6 text-center ${p.popular ? "border-purple-500/50 scale-105" : ""}`}>
              {p.popular && <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">MOST POPULAR</span>}
              <h3 className="text-xl font-bold mt-3">{p.name}</h3>
              <div className="text-4xl font-extrabold mt-2">{p.price}<span className="text-base text-gray-400">{p.period}</span></div>
              <p className="text-gray-400 text-sm mt-2">{p.tag}</p>
              <Link href="/pricing" className="btn-primary mt-6 inline-block">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
