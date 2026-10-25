import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";

const services = [
  { title: "AI Video", desc: "Create stunning videos with the power of AI.", cat: "AI" },
  { title: "AI Agent Creation", desc: "Smart AI agents to automate your work, handle queries, manage leads and save time.", cat: "AI" },
  { title: "Content Creation", desc: "Engaging posts, reels, carousels and social media content that connects with your audience.", cat: "Content" },
  { title: "Video Editing", desc: "Professional editing for ads, reels, YouTube, events and more. Smooth, creative and impactful.", cat: "Content" },
  { title: "Poster", desc: "Eye-catching posters for promotions, events, offers and brand awareness.", cat: "Design" },
  { title: "Web Designing", desc: "Modern, responsive & user-friendly websites that build your brand and bring more customers.", cat: "Web" },
  { title: "Graphics", desc: "Logos, social media creatives, posters, flyers, and more - designed to make your brand stand out.", cat: "Design" },
  { title: "Banner", desc: "Attractive banners for websites, social media, WhatsApp and advertising.", cat: "Design" },
  { title: "Thumbnail", desc: "High-converting thumbnails that grab attention and boost your views.", cat: "Design" },
];

const aiServices = [
  "AI Video Creation - Ideas to engaging videos",
  "AI Content Creation - Blogs, captions, social media & more",
  "AI Image & Graphic Design - Posters, banners, thumbnails & more",
  "Automation & AI Tools - Save time, work smarter",
  "Task Automation - Handles repetitive work",
  "Smart Assistants - Chat, research, schedule & more",
  "Business Solutions - Built for your specific needs",
  "Scalable & Flexible - Grows with your goals",
];

const webFeatures = [
  "Modern & Responsive Design - Looks great on all devices",
  "Custom & Creative Designs - Unique designs for your brand",
  "Clean & SEO Friendly Code - Better visibility, higher reach",
  "Fast Loading & Secure - Smooth performance, trusted security",
];

const addons = [
  "Social Media Management",
  "YouTube Management",
  "Ad Campaign Setup",
  "Website Maintenance",
  "Content Writing",
  "Analytics & Reporting",
];

export default function Services() {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold grad-text">Our Services</h1>
        <p className="text-gray-400 mt-3">Everything you need to grow your brand digitally.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="glass p-6 hover:scale-[1.02] transition">
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/30 to-cyan-500/30 border border-white/10">
              <ServiceIcon name={s.title} size={56} />
            </div>
            <span className="text-xs text-purple-300">{s.cat}</span>
            <h3 className="text-xl font-semibold mt-1 mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="glass p-8">
          <h2 className="text-2xl font-bold mb-4">AI Services</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {aiServices.map((a) => (
              <li key={a} className="flex items-start gap-2"><span className="text-purple-400">▸</span> {a}</li>
            ))}
          </ul>
        </div>
        <div className="glass p-8">
          <h2 className="text-2xl font-bold mb-4">Website Designing</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {webFeatures.map((w) => (
              <li key={w} className="flex items-start gap-2"><span className="text-cyan-400">▸</span> {w}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-2">Add-on Services</h3>
          <div className="flex flex-wrap gap-2">
            {addons.map((a) => (
              <span key={a} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">{a}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/pricing" className="btn-primary">View Pricing</Link>
      </div>
    </section>
  );
}
