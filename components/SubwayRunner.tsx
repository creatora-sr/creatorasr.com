"use client";
import { useEffect, useRef, useState } from "react";

export default function SubwayRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [over, setOver] = useState(false);
  const stateRef = useRef({ y: 0, vy: 0, obstacles: [] as { x: number; w: number; h: number }[], coins: [] as { x: number; y: number }[], score: 0, speed: 4, running: true, frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const ground = H - 40;
    const player = { x: 60, w: 30, h: 40 };
    const s = stateRef.current;
    s.y = ground - player.h;
    s.running = true;

    const jump = () => {
      if (!s.running) {
        // restart
        s.obstacles = [];
        s.coins = [];
        s.score = 0;
        s.speed = 4;
        s.y = ground - player.h;
        s.vy = 0;
        s.running = true;
        setOver(false);
        setScore(0);
        return;
      }
      if (s.y >= ground - player.h - 1) s.vy = -12;
    };

    const onKey = (e: KeyboardEvent) => { if (e.code === "Space") { e.preventDefault(); jump(); } };
    const onClick = () => jump();
    window.addEventListener("keydown", onKey);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onClick);

    let raf = 0;
    const loop = () => {
      if (!s.running) { raf = requestAnimationFrame(loop); return; }
      s.frame++;
      // physics
      s.vy += 0.6;
      s.y += s.vy;
      if (s.y > ground - player.h) { s.y = ground - player.h; s.vy = 0; }
      // spawn obstacles
      if (s.frame % 90 === 0) {
        const h = 30 + Math.random() * 30;
        s.obstacles.push({ x: W, w: 20, h });
      }
      if (s.frame % 60 === 0) {
        s.coins.push({ x: W, y: ground - 60 - Math.random() * 40 });
      }
      // move
      s.obstacles.forEach((o) => (o.x -= s.speed));
      s.coins.forEach((c) => (c.x -= s.speed));
      s.obstacles = s.obstacles.filter((o) => o.x + o.w > 0);
      s.coins = s.coins.filter((c) => c.x + 10 > 0);
      // collisions
      for (const o of s.obstacles) {
        if (player.x < o.x + o.w && player.x + player.w > o.x && s.y + player.h > ground - o.h) {
          s.running = false;
          setOver(true);
          setBest((b) => Math.max(b, Math.floor(s.score)));
        }
      }
      for (let i = s.coins.length - 1; i >= 0; i--) {
        const c = s.coins[i];
        if (Math.hypot(player.x + player.w / 2 - c.x, s.y + player.h / 2 - c.y) < 20) {
          s.score += 10;
          s.coins.splice(i, 1);
          setScore(s.score);
        }
      }
      s.score += 0.1;
      if (s.frame % 10 === 0) setScore(Math.floor(s.score));
      s.speed = 4 + s.score / 200;

      // draw
      ctx.clearRect(0, 0, W, H);
      // sky gradient
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#1a0a2e");
      g.addColorStop(1, "#0a0a1a");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      // ground
      ctx.fillStyle = "#2a2a3e";
      ctx.fillRect(0, ground, W, H - ground);
      ctx.fillStyle = "#7c3aed";
      ctx.fillRect(0, ground, W, 3);
      // player — standing boy (replaces the old box)
      const bx = player.x;
      const by = s.y;
      const cx = bx + player.w / 2;
      const airborne = s.y < ground - player.h - 1;
      const swing = airborne ? 2 : Math.sin(s.frame * 0.35) * 4;

      // shadow under the boy
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.ellipse(cx, ground + 3, 13, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // legs (jeans)
      const legL = cx - 8 + swing;
      const legR = cx + 2 - swing;
      ctx.fillStyle = "#2563eb";
      ctx.fillRect(legL, by + 24, 6, 12);
      ctx.fillRect(legR, by + 24, 6, 12);
      // shoes
      ctx.fillStyle = "#111827";
      ctx.fillRect(legL - 1, by + 36, 8, 4);
      ctx.fillRect(legR - 1, by + 36, 8, 4);

      // t-shirt (torso)
      ctx.fillStyle = "#7c3aed";
      ctx.fillRect(cx - 8, by + 13, 16, 12);
      // arms (skin)
      ctx.fillStyle = "#fcd9b8";
      ctx.fillRect(cx - 12, by + 14 - swing, 4, 11);
      ctx.fillRect(cx + 8, by + 14 + swing, 4, 11);

      // head (skin)
      ctx.fillStyle = "#fcd9b8";
      ctx.beginPath();
      ctx.arc(cx, by + 7, 6, 0, Math.PI * 2);
      ctx.fill();
      // hair
      ctx.fillStyle = "#3b2412";
      ctx.beginPath();
      ctx.arc(cx, by + 6, 6.2, Math.PI, 0);
      ctx.fill();
      ctx.fillRect(cx - 6.2, by + 5, 12.4, 2);
      // eye + smile (facing right)
      ctx.fillStyle = "#1f2937";
      ctx.fillRect(cx + 2, by + 6, 1.6, 2.2);
      ctx.strokeStyle = "#b45309";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx + 2, by + 9, 2, 0.2, Math.PI - 0.4);
      ctx.stroke();
      // obstacles
      ctx.fillStyle = "#ef4444";
      s.obstacles.forEach((o) => ctx.fillRect(o.x, ground - o.h, o.w, o.h));
      // coins
      ctx.fillStyle = "#fbbf24";
      s.coins.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });
      // score
      ctx.fillStyle = "#fff";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText(`Score: ${Math.floor(s.score)}`, 16, 28);

      if (!s.running) {
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 32px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", W / 2, H / 2 - 20);
        ctx.font = "16px sans-serif";
        ctx.fillText("Click / Tap / Space to restart", W / 2, H / 2 + 20);
        ctx.textAlign = "left";
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onClick);
    };
  }, []);

  return (
    <div className="glass p-6 text-center">
      <h2 className="text-2xl font-bold mb-2 grad-text">Subway Runner Game</h2>
      <p className="text-gray-400 text-sm mb-4">Jump over obstacles, collect coins. Space / Click / Tap to jump.</p>
      <canvas ref={canvasRef} width={600} height={300} className="mx-auto rounded-lg border border-white/10 max-w-full" />
      <div className="mt-3 text-sm text-gray-400">Score: {score} | Best: {best}</div>
      {over && <p className="text-red-400 text-sm mt-2">Game Over! Click canvas to restart.</p>}
    </div>
  );
}
