"use client";

import { industries } from "./industry-data";
import IndustryChapter from "./industry-chapter";

export default function IndustryTimeline() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#171F2E]">
      <div className="wrapper relative">

        {/* Background Decoration */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent hidden lg:block" />

        {industries.map((industry) => (
          <IndustryChapter
            key={industry.id}
            industry={industry}
          />
        ))}

      </div>
    </section>
  );
}