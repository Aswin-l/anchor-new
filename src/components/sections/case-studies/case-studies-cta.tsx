"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary-500/10 blur-[120px]" />

      </div>

      <div className="wrapper relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="uppercase tracking-[0.3em] text-primary-400 font-semibold text-sm">
            Let's Build Together
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-white">
            Your next successful
            <br />
            case study
            <span className="text-primary-400"> starts here.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Every product begins with a conversation. Whether you're validating
            a startup idea, modernizing an existing platform, or scaling your
            engineering capabilities, we're ready to help you build with
            confidence.
          </p>

          {/* Trust Strip */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

            {[
              "Response within 24 hours",
              "Product-first engineering",
              "Scalable architecture",
              "Long-term partnership",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300"
              >
                {item}
              </span>
            ))}

          </div>

          {/* CTA */}

          <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-600"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="https://wa.me/916374452131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
            >
              <MessageCircle className="h-5 w-5" />

              Chat on WhatsApp
            </a>

          </div>

          {/* Bottom Quote */}

          <div className="mt-20 border-t border-white/10 pt-10">

            <p className="mx-auto max-w-2xl text-lg italic leading-8 text-gray-400">
              "Great software isn't measured by the number of features it has —
              it's measured by the business value it continues to create."
            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-primary-400">
              Anchor Techno Soft
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}