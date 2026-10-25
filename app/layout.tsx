import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSparkle from "@/components/CursorSparkle";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: 'CREATORA S.R - Your Ideas Our Creation : "Powerful Digital Solution"',
  description:
    "CREATORA S.R - Digital agency offering AI Video, AI Agents, Content Creation, Video Editing, Web Designing, Graphics, Posters, Banners, Thumbnails and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Tailwind v4 browser build — loaded before hydration (site-wide styling) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="beforeInteractive"
        />
        <AnimatedBackground />
        <CursorSparkle />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
