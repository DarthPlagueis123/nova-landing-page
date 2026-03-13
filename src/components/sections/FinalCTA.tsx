"use client";

import GradientButton from "@/components/ui/GradientButton";
import { useScrollFadeIn } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useScrollFadeIn({ y: 50 });

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Multi-layer radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(77,124,255,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,168,83,0.06),transparent_50%)]" />

      {/* Animated gradient ring */}
      <div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20 animate-pulse-glow"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(77,124,255,0.3), transparent, rgba(139,92,246,0.2), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div ref={ref} className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2
          data-animate
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
        >
          Ready to Leave
          <br />
          <span className="text-gradient-blue">Gravity Behind?</span>
        </h2>

        <p
          data-animate
          className="text-lg md:text-xl text-nova-gray-300 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Join the first wave of spatial pioneers. Your future self will thank you.
        </p>

        <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton size="lg">
            Get Started — It&apos;s Free
          </GradientButton>
          <GradientButton size="lg" variant="gold">
            Schedule a Demo
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
