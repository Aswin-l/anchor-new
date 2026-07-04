"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-28 bg-white dark:bg-[#171F2E]">

      <div className="wrapper">

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-500">
            Ready to Build?
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">

            Let's build software
            <br />

            that grows with
            <span className="text-primary-500"> your business.</span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">

            Whether you're validating a startup idea,
            modernizing an existing platform,
            or scaling an enterprise product,
            we'd love to understand your goals and explore
            how we can help.

          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-primary-600 hover:scale-105"
            >
              Start Your Project

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 px-8 py-4 font-semibold text-gray-800 dark:text-white transition hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Explore Services
            </Link>

          </div>

          {/* Bottom Trust */}

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">

            <span>✓ Transparent Communication</span>

            <span>✓ Long-Term Partnership</span>

            <span>✓ Engineering Excellence</span>

            <span>✓ Global Collaboration</span>

          </div>

        </div>

      </div>

    </section>
  );
}