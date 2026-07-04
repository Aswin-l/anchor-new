import type { Metadata } from "next";

import ServicesSection from "@/components/sections/pricing";
import DevelopmentProcess from "@/components/sections/development-process";
import TechnologiesSection from "@/components/sections/technologies-marquee";
import IndustriesSection from "@/components/sections/services-industries";
import WhyChooseAnchor from "@/components/sections/why-choose";
import FAQSection from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services | Anchor Techno Soft",
  description:
    "Explore Anchor Techno Soft's software development services including web development, mobile apps, AI solutions, cloud services, UI/UX design, and custom software development.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <DevelopmentProcess />
      <TechnologiesSection />
      <IndustriesSection />
      <WhyChooseAnchor />
      <FAQSection />
      <FinalCTA />

    </>
  );
}