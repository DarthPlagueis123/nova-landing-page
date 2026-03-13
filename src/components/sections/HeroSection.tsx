"use client";

import dynamic from "next/dynamic";
import GradientButton from "@/components/ui/GradientButton";
import { useScrollFadeIn } from "@/lib/animations";

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-nova-black" />,
});

export default function HeroSection() {
  const textRef = useScrollFadeIn({ y: 0, duration: 1.2 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(77,124,255,0.12),transparent)]" />

      {/* 3D Particle Field */}
      <ParticleField />

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          data-animate
          className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-nova-blue mb-6"
        >
          Introducing NOVA
        </p>

        <h1
          data-animate
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tighter mb-8"
        >
          The Future Has
          <br />
          <span className="text-gradient-blue">No Weight.</span>
        </h1>

        <p
          data-animate
          className="text-lg md:text-xl lg:text-2xl text-nova-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A next-generation spatial computing platform that redefines how you
          interact with digital space. Weightless. Boundless. Yours.
        </p>

        <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton size="lg">
            Experience NOVA
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </GradientButton>
          <button className="px-8 py-4 rounded-full border border-nova-border text-nova-gray-200 hover:border-nova-blue/30 hover:text-white transition-all duration-300 cursor-pointer">
            Watch the Film
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-nova-gray-400 animate-float">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-nova-gray-400 to-transparent" />
      </div>
    </section>
  );
}
