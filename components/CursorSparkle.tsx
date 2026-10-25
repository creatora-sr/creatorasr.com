"use client";
import { useEffect, useRef } from "react";

export default function CursorSparkle() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Touch devices pe cursor effects off
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let lastX = mouseX;
    let lastY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";

      // Sparkle trail (distance-based)
      if (Math.hypot(mouseX - lastX, mouseY - lastY) > 7) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle-trail";
        sparkle.style.left = mouseX + "px";
        sparkle.style.top = mouseY + "px";
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
        lastX = mouseX;
        lastY = mouseY;
      }
    };

    // Ring smoothly follows with a lag (lerp)
    const follow = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      raf = requestAnimationFrame(follow);
    };

    // Buttons/links pe hover => ring bada ho jaye
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, input, select, textarea, [role=button]");
      ring.classList.toggle("cursor-ring--active", !!interactive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-sparkle" />
    </>
  );
}
