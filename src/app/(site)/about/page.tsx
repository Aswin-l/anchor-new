import type { Metadata } from "next";
import AboutSection from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About | Anchor Techno Soft",
  description:
    "Anchor Techno Soft is a trusted product engineering partner helping startups, SMEs, and enterprises build scalable web applications, mobile apps, AI solutions, and cloud-native software.",
};

export default function AboutPage() {
  return <AboutSection />;
}