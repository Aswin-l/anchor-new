"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#171F2E] py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[140px]" />
      </div>

      <div className="wrapper">
        <div className="mx-auto max-w-5xl text-center">

          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-500"
          >
            Selected Case Studies
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-7xl"
          >
            Engineering products
            <br />
            that create
            <span className="text-primary-500"> measurable business impact.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600 dark:text-gray-400"
          >
            Every engagement begins with understanding the business challenge,
            not just the technical requirements. These case studies illustrate
            how thoughtful engineering decisions translate into scalable
            products, operational efficiency, and long-term business value.
          </motion.p>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              "Product Engineering",
              "Scalable Architecture",
              "Business-First Thinking",
              "Startup & Enterprise",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-200 dark:border-white/10 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-4 font-semibold text-white transition hover:bg-primary-600"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Bottom Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-sm tracking-wide text-gray-500 dark:text-gray-500"
          >
            Some projects are presented in an anonymized format to respect client confidentiality.
          </motion.p>

        </div>
      </div>
    </section>
  );
}