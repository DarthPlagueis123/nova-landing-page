"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !orbRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1,
        },
      });

      // Orb scale + rotate
      tl.fromTo(
        orbRef.current,
        { scale: 0.5, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1 }
      );

      // Cycle through text blocks
      textRefs.current.forEach((textEl, i) => {
        if (!textEl) return;
        const startTime = 1 + i * 1.2;
        tl.fromTo(
          textEl,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.5 },
          startTime
        );
        if (i < textRefs.current.length - 1) {
          tl.to(textEl, { opacity: 0, y: -40, duration: 0.4 }, startTime + 0.8);
        }
      });

      // Final orb pulse
      tl.to(orbRef.current, { scale: 1.1, duration: 0.5 });
      tl.to(orbRef.current, { scale: 1, duration: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textBlocks = [
    {
      title: "See Beyond the Screen",
      desc: "NOVA dissolves the boundary between digital and physical, creating a spatial canvas that extends in every direction.",
    },
    {
      title: "Touch the Intangible",
      desc: "Haptic feedback that feels real. Interact with volumetric content as naturally as you handle objects in the physical world.",
    },
    {
      title: "Think at the Speed of Light",
      desc: "Quantum-accelerated processing delivers zero-latency spatial rendering. Your thoughts become reality in real time.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nova-black"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]" />

      {/* CSS Gradient Orb */}
      <div
        ref={orbRef}
        className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(77,124,255,0.5), rgba(139,92,246,0.3) 40%, rgba(77,124,255,0.1) 70%, transparent)",
          boxShadow:
            "0 0 80px rgba(77,124,255,0.3), 0 0 160px rgba(139,92,246,0.15), inset 0 0 60px rgba(77,124,255,0.2)",
          filter: "blur(1px)",
        }}
      />

      {/* Text blocks (overlaid absolutely, cycled by GSAP) */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {textBlocks.map((block, i) => (
          <div
            key={i}
            ref={(el) => { textRefs.current[i] = el; }}
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
          >
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              {block.title}
            </h3>
            <p className="text-lg md:text-xl text-nova-gray-300 leading-relaxed max-w-xl">
              {block.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
