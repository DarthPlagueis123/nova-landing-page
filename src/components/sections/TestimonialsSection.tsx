"use client";

import { useRef, useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "NOVA didn't just change how we work — it changed how we think about work. Our design team went from 2D wireframes to spatial prototypes overnight.",
    name: "Elena Vasquez",
    title: "VP of Design",
    company: "Aether Industries",
  },
  {
    quote: "The latency is zero. Not low — zero. I've been building VR for 12 years and this is the first time the technology disappeared completely.",
    name: "James Osei",
    title: "CTO",
    company: "Meridian Labs",
  },
  {
    quote: "We replaced our entire server room with three NOVA units. The quantum core handles our ML training in a fraction of the time.",
    name: "Dr. Sarah Kim",
    title: "Head of AI Research",
    company: "Cortex Dynamics",
  },
  {
    quote: "My students can now walk through a human cell, rotate DNA in their hands, and see chemical bonds form in real time. Education will never be the same.",
    name: "Prof. Marco Rossi",
    title: "Chair of Biology",
    company: "MIT",
  },
  {
    quote: "The security architecture is flawless. Post-quantum encryption, biometric auth, zero-knowledge proofs — all built in from day one.",
    name: "Ayumi Tanaka",
    title: "CISO",
    company: "Global Shield Corp",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollSpeed = 0.5;

    function tick() {
      if (!el || isPaused) {
        animationId = requestAnimationFrame(tick);
        return;
      }

      el.scrollLeft += scrollSpeed;

      // Loop
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(tick);
    }

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="testimonials" className="section-spacing relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              Trusted by{" "}
              <span className="text-gradient-blue">Visionaries</span>
            </>
          }
        />
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-nova-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-nova-black to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-hidden px-8"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Duplicate for infinite loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[380px] md:w-[440px]">
              <GlassCard hover={false} className="h-full flex flex-col justify-between">
                <p className="text-nova-gray-200 leading-relaxed mb-8 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-nova-gray-400 text-sm">
                    {t.title}, {t.company}
                  </p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
