import type { Metadata } from "next";
import IndustriesSection from "@/components/sections/industries";

export const metadata: Metadata = {
  title: "Industries | Anchor Techno Soft",
  description:
    "Explore how Anchor Techno Soft engineers scalable software solutions for Healthcare, FinTech, E-Commerce, Education, Manufacturing, and Real Estate businesses.",
};

export default function IndustriesPage() {
  return <IndustriesSection />;
}