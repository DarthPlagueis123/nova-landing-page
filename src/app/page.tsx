"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProductExperience from "@/components/sections/ProductExperience";
import FeaturesSection from "@/components/sections/FeaturesSection";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import TechHighlights from "@/components/sections/TechHighlights";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductExperience />
        <FeaturesSection />
        <InteractiveDemo />
        <TechHighlights />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
