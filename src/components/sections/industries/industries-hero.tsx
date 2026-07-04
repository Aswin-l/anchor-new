"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#171F2E] pt-28 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="wrapper relative z-10">

        <div className="max-w-5xl mx-auto text-center">

          {/* Label */}
          <span className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
            Industry Expertise
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">

            Every industry has
            <br />

            <span className="text-primary-500">
              different business problems.
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600 dark:text-gray-400">

            Building software starts with understanding how businesses operate.
            Before we design platforms, write code, or deploy infrastructure,
            we study workflows, operational challenges, and growth objectives to
            engineer systems that solve the right problems.

          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-white font-semibold transition hover:bg-primary-600"
            >
              Discuss Your Industry

              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/10 px-8 py-4 font-semibold text-gray-800 dark:text-white transition hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Explore Services
            </Link>

          </div>

        </div>

        {/* Trust Strip */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-b border-gray-200 dark:border-white/10 py-10 md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-500">
              6+
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Industries Served
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-500">
              Product
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Engineering Approach
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-500">
              Scalable
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Cloud Architecture
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-500">
              Long-Term
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Technology Partner
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}