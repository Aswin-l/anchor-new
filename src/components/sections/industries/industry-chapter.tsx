"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface IndustryProps {
  industry: {
    id: string;
    title: string;
    icon: any;
    challenge: string;
    perspective: string;
    solutions: string[];
    outcomes: string[];
  };
}

export default function IndustryChapter({
  industry,
}: IndustryProps) {
  const Icon = industry.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="relative py-32"
    >
      <div className="grid lg:grid-cols-[120px_1fr] gap-10">

        {/* LEFT TIMELINE */}

        <div className="relative hidden lg:flex justify-center">

          {/* Vertical Line */}

          <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-400 to-transparent" />

          {/* Animated Dot */}

          <motion.div
            whileInView={{
              scale: [0.7, 1.25, 1],
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative z-10 mt-8"
          >
            <div className="h-5 w-5 rounded-full bg-primary-500 shadow-[0_0_30px_rgba(59,130,246,.7)]" />

            <div className="absolute inset-0 animate-ping rounded-full bg-primary-400 opacity-30" />
          </motion.div>

        </div>

        {/* CONTENT */}

        <div>

          {/* Industry Number */}

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-500 font-bold tracking-[0.3em] text-sm uppercase"
          >
            Chapter {industry.id}
          </motion.span>

          {/* Heading */}

          <div className="mt-6 flex items-center gap-5">

            <div className="h-16 w-16 rounded-2xl bg-primary-500/10 flex items-center justify-center">

              <Icon className="h-8 w-8 text-primary-500" />

            </div>

            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              {industry.title}
            </h2>

          </div>

          {/* Intro */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600 dark:text-gray-400">
            Every industry comes with unique operational challenges,
            regulatory requirements, and customer expectations.
            Our engineering decisions are driven by business context
            rather than technology trends.
          </p>

          {/* Divider */}

          <div className="my-16 h-px bg-gradient-to-r from-primary-500/60 via-gray-300 dark:via-white/10 to-transparent" />

          {/* Business Challenge */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="text-primary-500 font-semibold uppercase tracking-[0.25em] text-xs">
              Business Challenge
            </span>

            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              Understanding the real business problem
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600 dark:text-gray-400 max-w-4xl">
              {industry.challenge}
            </p>

          </motion.div>

          {/* Perspective */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >

            <span className="text-primary-500 font-semibold uppercase tracking-[0.25em] text-xs">
              Engineering Perspective
            </span>

            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              How we approach the solution
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600 dark:text-gray-400 max-w-4xl">
              {industry.perspective}
            </p>

          </motion.div>

                    {/* Solutions & Outcomes */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-24 grid lg:grid-cols-2 gap-16"
          >
            {/* LEFT */}

            <div>

              <span className="text-primary-500 font-semibold uppercase tracking-[0.25em] text-xs">
                Solutions We Build
              </span>

              <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Digital capabilities
              </h3>

              <div className="mt-10 space-y-5">

                {industry.solutions.map((solution) => (

                  <motion.div
                    key={solution}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />

                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      {solution}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <span className="text-primary-500 font-semibold uppercase tracking-[0.25em] text-xs">
                Business Outcomes
              </span>

              <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Measurable impact
              </h3>

              <div className="mt-10 space-y-5">

                {industry.outcomes.map((outcome) => (

                  <motion.div
                    key={outcome}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4"
                  >

                    <ArrowRight className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />

                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      {outcome}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Bottom Divider */}

          <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

          {/* Small CTA */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-primary-500 font-semibold">
                Looking for a technology partner?
              </p>

              <h4 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                Let's discuss your {industry.title} product.
              </h4>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary-500 px-8 py-4 text-white font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105"
            >
              Talk to Our Team

              <ArrowRight className="w-5 h-5" />
            </Link>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}