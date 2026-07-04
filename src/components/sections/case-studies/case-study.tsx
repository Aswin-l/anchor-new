"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CaseStudyProps {
  study: {
    id: string;
    icon: any;
    industry: string;
    title: string;
    overview: string;
    challenge: string;
    strategy: string;
    solution: string[];
    outcomes: string[];
    technologies: string[];
  };
}

export default function CaseStudy({ study }: CaseStudyProps) {
  const Icon = study.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-32"
    >
      <div className="grid lg:grid-cols-[120px_1fr] gap-10">

        {/* LEFT TIMELINE */}

        <div className="relative hidden lg:flex justify-center">

          {/* Vertical Line */}

          <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-400 to-transparent" />

          {/* Active Dot */}

          <motion.div
            whileInView={{
              scale: [0.8, 1.3, 1],
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative mt-8 z-10"
          >

            <div className="w-5 h-5 rounded-full bg-primary-500 shadow-[0_0_30px_rgba(59,130,246,.7)]" />

            <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-30" />

          </motion.div>

        </div>

        {/* CONTENT */}

        <div>

          {/* Chapter */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >

            <span className="uppercase tracking-[0.35em] text-primary-500 font-semibold text-sm">
              Case Study {study.id}
            </span>

          </motion.div>

          {/* Heading */}

          <div className="mt-8 flex items-center gap-6">

            <div className="h-16 w-16 rounded-2xl bg-primary-500/10 flex items-center justify-center">

              <Icon className="w-8 h-8 text-primary-500" />

            </div>

            <div>

              <p className="uppercase tracking-[0.25em] text-sm text-gray-500">
                {study.industry}
              </p>

              <h2 className="mt-2 text-5xl font-bold text-gray-900 dark:text-white">
                {study.title}
              </h2>

            </div>

          </div>

          {/* Intro */}

          <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-600 dark:text-gray-400">
            {study.overview}
          </p>

          {/* Divider */}

          <div className="my-16 h-px bg-gradient-to-r from-primary-500/50 via-gray-300 dark:via-white/10 to-transparent" />

          {/* Business Challenge */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >

            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary-500">
              Business Challenge
            </span>

            <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
              Understanding the problem before writing code
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-600 dark:text-gray-400">
              {study.challenge}
            </p>

          </motion.div>

          {/* Divider */}

          <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />
                    {/* Engineering Strategy */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >

            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary-500">
              Engineering Strategy
            </span>

            <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
              Designing for long-term scalability
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-600 dark:text-gray-400">
              {study.strategy}
            </p>

          </motion.div>

          {/* Solutions + Outcomes */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-24 grid lg:grid-cols-2 gap-20"
          >

            {/* LEFT */}

            <div>

              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary-500">
                Solution Delivered
              </span>

              <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Key capabilities
              </h3>

              <div className="mt-10 space-y-6">

                {study.solution.map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle2 className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
                      {item}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary-500">
                Business Outcomes
              </span>

              <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Expected impact
              </h3>

              <div className="mt-10 space-y-6">

                {study.outcomes.map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4"
                  >

                    <ArrowRight className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
                      {item}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Divider */}

          <div className="mt-24 h-px bg-gradient-to-r from-primary-500/40 via-gray-300 dark:via-white/10 to-transparent" />
                    {/* Technology Stack */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >

            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary-500">
              Technology Stack
            </span>

            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              Built with modern engineering tools
            </h3>

            <div className="mt-10 flex flex-wrap gap-4">

              {study.technologies.map((tech, index) => (

                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                  className="rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </motion.span>

              ))}

            </div>

          </motion.div>

          {/* Why It Matters */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/10 p-10"
          >

            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary-500">
              Why It Matters
            </span>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-600 dark:text-gray-400">
              Every engineering decision influences product growth, customer
              experience, and long-term maintainability. Our goal is not simply
              to deliver software, but to create systems that continue to support
              business success as organizations evolve.
            </p>

          </motion.div>

          {/* Bottom CTA */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex flex-col gap-8 border-t border-gray-200 pt-12 dark:border-white/10 md:flex-row md:items-center md:justify-between"
          >

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
                Ready to build something similar?
              </p>

              <h4 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                Let's discuss your next product.
              </h4>

            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-600"
            >
              Start a Conversation

              <ArrowRight className="h-5 w-5" />
            </a>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}