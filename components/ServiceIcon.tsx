"use client";
import Image from "next/image";

/**
 * ServiceIcon — renders the CODE-GENERATED service icons (PNG images),
 * one distinct image per service. Files live in /public/services/.
 * API: <ServiceIcon name="AI Video" size={32} />
 */
const iconMap: Record<string, { src: string; alt: string }> = {
  "AI Video": { src: "/services/icon-0.png", alt: "AI Video service icon (code generated)" },
  "AI Agent Creation": { src: "/services/icon-1.png", alt: "AI Agent Creation service icon (code generated)" },
  "Content Creation": { src: "/services/icon-2.png", alt: "Content Creation service icon (code generated)" },
  "Video Editing": { src: "/services/icon-3.png", alt: "Video Editing service icon (code generated)" },
  Poster: { src: "/services/icon-4.png", alt: "Poster design service icon (code generated)" },
  "Web Designing": { src: "/services/icon-5.png", alt: "Web Designing service icon (code generated)" },
  Graphics: { src: "/services/icon-6.png", alt: "Graphics design service icon (code generated)" },
  Banner: { src: "/services/icon-7.png", alt: "Banner design service icon (code generated)" },
  Thumbnail: { src: "/services/icon-8.png", alt: "Thumbnail design service icon (code generated)" },
};

export default function ServiceIcon({
  name,
  size = 40,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const icon = iconMap[name];
  if (!icon) return null;
  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
      className={className}
    />
  );
}
