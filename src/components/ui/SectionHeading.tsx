"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const ref = useScrollFadeIn();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div ref={ref} className={`max-w-3xl mb-16 md:mb-20 ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          data-animate
          className="text-sm font-medium tracking-[0.2em] uppercase text-nova-blue mb-4"
        >
          {eyebrow}
        </p>
      )}
      <h2
        data-animate
        className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
      >
        {title}
      </h2>
      {description && (
        <p data-animate className="mt-6 text-lg md:text-xl text-nova-gray-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
