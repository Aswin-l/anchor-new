"use client";

import { motion } from "framer-motion";
import CaseStudy from "./case-study";
import { caseStudies } from "./case-studies-data";

export default function CaseStudiesList() {
  return (
    <section className="relative bg-white dark:bg-[#171F2E] py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/5 blur-[150px]" />

      </div>

      <div className="wrapper relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="max-w-4xl"
        >

          <span className="uppercase tracking-[0.3em] text-primary-500 font-semibold text-sm">
            Selected Work
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Real engineering stories,
            <br />
            not just completed projects.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400">
            Every engagement is approached as a business challenge rather than a
            development task. These selected case studies demonstrate how
            thoughtful engineering decisions create scalable digital products
            prepared for long-term growth.
          </p>

        </motion.div>

        {/* List */}

        <div className="mt-32 space-y-32">

          {caseStudies.map((study) => (

            <CaseStudy
              key={study.id}
              study={study}
            />

          ))}

        </div>

      </div>

    </section>
  );
}