"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "Response within 24 hours",
  "Free project consultation",
  "NDA-friendly discussions",
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden dark:bg-white/1 pt-28 pb-20">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[120px]" />
      </div>

      <div className="wrapper relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-500/30 bg-primary-50 dark:bg-primary-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Let's Talk About Your Next Product
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Every successful product
            <br />
            starts with a{" "}
            <span className="text-primary-500">
              conversation.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Whether you're building a startup MVP, scaling an existing platform,
            or modernizing enterprise software, our team is ready to help you
            move from idea to execution with confidence.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-7 py-3 text-white font-medium transition-all duration-300 hover:bg-primary-600 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="https://wa.me/916374452131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 px-7 py-3 font-medium text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Trust Points */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">

            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <CheckCircle2 className="h-5 w-5 text-primary-500" />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}