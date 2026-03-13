"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollFadeIn } from "@/lib/animations";

const highlights = [
  {
    stat: 240,
    suffix: " fps",
    label: "Spatial Rendering",
    desc: "Real-time volumetric rendering at cinematic frame rates, powered by our quantum-accelerated ray tracing pipeline.",
    align: "left" as const,
  },
  {
    stat: 128,
    suffix: "-qubit",
    label: "Quantum Processor",
    desc: "The industry's first consumer quantum processor, handling billions of spatial calculations simultaneously with zero thermal throttle.",
    align: "right" as const,
  },
  {
    stat: 180,
    suffix: "° FOV",
    label: "Immersive Display",
    desc: "Edge-to-edge retinal display at 8K per eye resolution. Content merges seamlessly with your natural field of view.",
    align: "left" as const,
  },
  {
    stat: 24,
    suffix: " hrs",
    label: "All-Day Battery",
    desc: "Solid-state graphene battery delivers over 24 hours of continuous spatial computing on a single charge.",
    align: "right" as const,
  },
];

export default function TechHighlights() {
  return (
    <section id="tech" className="section-spacing relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(77,124,255,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Numbers That{" "}
              <span className="text-gradient-gold">Defy Logic</span>
            </>
          }
        />

        <div className="space-y-24 md:space-y-32">
          {highlights.map((h, i) => (
            <HighlightRow key={i} {...h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightRow({
  stat,
  suffix,
  label,
  desc,
  align,
  index,
}: {
  stat: number;
  suffix: string;
  label: string;
  desc: string;
  align: "left" | "right";
  index: number;
}) {
  const ref = useScrollFadeIn({ y: 50 });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Stat */}
      <div data-animate className={`flex-shrink-0 ${align === "right" ? "md:text-right" : ""}`}>
        <div className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-bold text-gradient-blue">
          <AnimatedCounter target={stat} suffix={suffix} duration={2.5} />
        </div>
        <p className="text-nova-gray-400 text-sm tracking-widest uppercase mt-2">{label}</p>
      </div>

      {/* Divider */}
      <div
        data-animate
        className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-nova-blue/30 to-transparent"
      />

      {/* Description */}
      <div data-animate className="max-w-md">
        <p className="text-lg text-nova-gray-200 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
