import type { Metadata } from "next";
import CaseStudiesSection from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Selected Case Studies | Anchor Techno Soft",
  description:
    "Explore how Anchor Techno Soft approaches product engineering through real-world case studies across healthcare, fintech, e-commerce, education, manufacturing, and real estate.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesSection />;
}