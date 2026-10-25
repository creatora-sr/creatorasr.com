import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold grad-text">About CREATORA S.R</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Your Ideas Our Creation : &quot;Powerful Digital Solution&quot;
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image src="/logo.png" alt="CREATORA S.R logo" width={256} height={256} style={{ width: 256, height: 256 }} className="mx-auto rounded-full object-cover border-4 border-purple-500/40" />
        <div className="glass p-8">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            CREATORA S.R is a digital agency based in Hisar, Haryana, India. We help brands grow
            through AI-powered videos, smart AI agents, modern websites, and high-converting creatives.
            Our mission is to turn your ideas into powerful digital solutions.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            We combine creativity with technology to deliver on-time, high-quality work with
            100% client satisfaction and affordable pricing.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="glass p-4 text-center"><div className="text-2xl font-bold text-purple-400">9+</div><div className="text-gray-400">Services</div></div>
            <div className="glass p-4 text-center"><div className="text-2xl font-bold text-cyan-400">100%</div><div className="text-gray-400">Satisfaction</div></div>
            <div className="glass p-4 text-center"><div className="text-2xl font-bold text-pink-400">On-Time</div><div className="text-gray-400">Delivery</div></div>
            <div className="glass p-4 text-center"><div className="text-2xl font-bold text-green-400">Affordable</div><div className="text-gray-400">Pricing</div></div>
          </div>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Work With Us</Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Innovation", d: "We use AI and modern tech to deliver smarter solutions." },
            { t: "Quality", d: "Clean, SEO-friendly code and premium creatives." },
            { t: "Commitment", d: "On-time delivery and client satisfaction guaranteed." },
          ].map((v) => (
            <div key={v.t} className="glass p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{v.t}</h3>
              <p className="text-gray-400 text-sm">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
