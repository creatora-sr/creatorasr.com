import { ExternalLink, ArrowRight, Globe } from "lucide-react";

const LIVE_PORTFOLIO = "https://creatora-sr.github.io/creatora-portfolio/";

const projects = [
  {
    category: "Tech & Computer Repair",
    name: "Divya Computers",
    desc: "Complete laptop repair, screen replacement, motherboard diagnostics and OS software installation platform.",
    url: "https://divya-computer-m27.github.io",
    domain: "divya-computer-m27.github.io",
  },
  {
    category: "AI Automation App",
    name: "SmartBiz AI",
    desc: "AI-driven business automation web app for lead management, smart chatbots and automated workflows.",
    url: "https://smartbiz-ai-d3aca.web.app",
    domain: "smartbiz-ai-d3aca.web.app",
  },
  {
    category: "Real Estate Portal",
    name: "Srishti Real Estate",
    desc: "Modern property portal featuring high-end property listings, interactive filter searches and direct buyer inquiries.",
    url: "https://srishti-real-estate.web.app",
    domain: "srishti-real-estate.web.app",
  },
  {
    category: "EdTech & YouTube",
    name: "Artist World S.R",
    desc: "Educational learning platform & content hub offering online art tutorials, practice sessions, offline workshops and YouTube integration.",
    url: "https://artistworldsr2027-max.github.io",
    domain: "artistworldsr2027-max.github.io",
  },
];

export const metadata = {
  title: "Portfolio | CREATORA S.R",
  description: "Featured client projects and live portfolio of CREATORA S.R.",
};

export default function Portfolio() {
  return (
    <>
      <section className="container pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold grad-text text-center mb-4">Portfolio</h1>
        <p className="text-gray-400 text-center mb-8">
          A glimpse of our creative work — click any project to visit the live website.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={LIVE_PORTFOLIO} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
            <Globe size={18} /> Open Full Portfolio Website
          </a>
          <a href="https://wa.me/917015804907" target="_blank" rel="noreferrer" className="btn-outline">
            Discuss Your Project
          </a>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="glass p-6 flex flex-col hover:scale-[1.02] transition">
              <span className="text-xs uppercase tracking-wide text-purple-300 mb-2">{p.category}</span>
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-gray-400 text-sm flex-1">{p.desc}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-xs text-gray-500 truncate">{p.domain}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cyan-300 flex items-center gap-1 shrink-0 hover:text-cyan-200"
                >
                  Visit Live Site <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Live Portfolio Website</h2>
          <p className="text-gray-400 text-sm mt-2">
            The complete portfolio, embedded right here. Prefer a full screen?{" "}
            <a href={LIVE_PORTFOLIO} target="_blank" rel="noreferrer" className="text-cyan-300 inline-flex items-center gap-1">
              Open in new tab <ArrowRight size={14} />
            </a>
          </p>
        </div>
        <div className="glass p-2 sm:p-3 overflow-hidden">
          <iframe
            src={LIVE_PORTFOLIO}
            title="CREATORA S.R Live Portfolio"
            loading="lazy"
            className="w-full h-[70vh] min-h-[520px] rounded-xl border border-white/10 bg-white/5"
          />
        </div>
      </section>

      <section className="container py-14">
        <div className="glass p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Like what you see?</h2>
          <p className="text-gray-400 mb-6">Let&apos;s build your next project together.</p>
          <a href="https://wa.me/917015804907" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
            Chat on WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
