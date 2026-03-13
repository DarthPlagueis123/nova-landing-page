"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { useScrollFadeIn } from "@/lib/animations";

const plans = [
  {
    name: "Explorer",
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: "Perfect for curious minds ready to enter the spatial frontier.",
    features: [
      "Basic spatial rendering",
      "2 hours daily compute",
      "Community support",
      "5GB spatial storage",
      "Standard FOV mode",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    desc: "For professionals who demand spatial computing without limits.",
    features: [
      "Full volumetric rendering",
      "Unlimited compute",
      "Priority support (24/7)",
      "500GB spatial storage",
      "180° immersive FOV",
      "Quantum core access",
      "Neural interface beta",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 159,
    desc: "The complete NOVA platform for teams changing the world.",
    features: [
      "Everything in Pro",
      "Unlimited spatial storage",
      "Dedicated quantum allocation",
      "Custom neural models",
      "SSO & admin console",
      "99.999% SLA",
      "On-site deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const gridRef = useScrollFadeIn({ stagger: 0.15 });

  return (
    <section id="pricing" className="section-spacing relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(77,124,255,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Invest in the{" "}
              <span className="text-gradient-blue">Future</span>
            </>
          }
          description="Simple, transparent pricing. No hidden fees. Cancel anytime."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm ${!yearly ? "text-white" : "text-nova-gray-400"}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
              yearly ? "bg-nova-blue" : "bg-nova-gray-400/30"
            }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                yearly ? "translate-x-7.5" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-sm ${yearly ? "text-white" : "text-nova-gray-400"}`}>
            Yearly{" "}
            <span className="text-nova-blue text-xs font-medium ml-1">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <div
              data-animate
              key={i}
              className={`
                rounded-2xl p-8 transition-all duration-500
                ${
                  plan.highlighted
                    ? "glass-strong border-nova-blue/30 shadow-[0_0_60px_rgba(77,124,255,0.15)] scale-[1.02] md:scale-105"
                    : "glass hover:border-nova-blue/15"
                }
              `}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold tracking-widest uppercase text-nova-blue mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-nova-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className="mb-8">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-nova-gray-400 text-sm ml-1">
                  {plan.monthlyPrice > 0 ? "/mo" : ""}
                </span>
              </div>

              <GradientButton
                variant={plan.highlighted ? "blue" : "gold"}
                className="w-full mb-8"
              >
                {plan.cta}
              </GradientButton>

              <ul className="space-y-3">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-nova-gray-200">
                    <svg
                      className="w-4 h-4 text-nova-blue flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
