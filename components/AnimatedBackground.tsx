"use client";
import { useEffect } from "react";

export default function AnimatedBackground() {
  useEffect(() => {
    // generate particles
    const container = document.getElementById("particles");
    if (!container) return;
    container.innerHTML = "";
    const count = 40;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 8 + Math.random() * 12 + "s";
      p.style.animationDelay = Math.random() * 10 + "s";
      p.style.background = Math.random() > 0.5 ? "rgba(124,58,237,0.6)" : "rgba(6,182,212,0.6)";
      container.appendChild(p);
    }
  }, []);
  return (
    <>
      <div className="bg-animated">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>
      <div id="particles" className="particles" />
      <div className="bg-watermark" aria-hidden="true">
        <span className="float-anim">CREATORA S.R</span>
        <span className="sparkle" style={{ top: "15%", left: "8%" }}>✦</span>
        <span className="sparkle" style={{ top: "70%", right: "10%" }}>✦</span>
        <span className="sparkle" style={{ top: "30%", left: "26%" }}>✦</span>
      </div>
    </>
  );
}
