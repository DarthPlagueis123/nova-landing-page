"use client";

import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";

const InteractiveOrb = dynamic(() => import("@/components/three/InteractiveOrb"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-nova-blue/10 animate-pulse-glow" />
    </div>
  ),
});

export default function InteractiveDemo() {
  return (
    <section
      id="demo"
      className="section-spacing relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(77,124,255,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Interactive"
          title={
            <>
              Feel the <span className="text-gradient-blue">Dimension</span>
            </>
          }
          description="Move your cursor across the scene. NOVA responds to every gesture with fluid, organic intelligence."
        />

        {/* 3D Orb Scene */}
        <div className="relative">
          <InteractiveOrb />

          {/* Info panel */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-strong rounded-2xl px-8 py-4 flex gap-8 text-sm">
            <div className="text-center">
              <div className="text-nova-blue font-semibold text-lg">240</div>
              <div className="text-nova-gray-400">FPS</div>
            </div>
            <div className="w-px bg-nova-border" />
            <div className="text-center">
              <div className="text-nova-blue font-semibold text-lg">0.3ms</div>
              <div className="text-nova-gray-400">Latency</div>
            </div>
            <div className="w-px bg-nova-border" />
            <div className="text-center">
              <div className="text-nova-blue font-semibold text-lg">8K</div>
              <div className="text-nova-gray-400">Per Eye</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
