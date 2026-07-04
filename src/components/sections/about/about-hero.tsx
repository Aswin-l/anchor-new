"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustItems = [
  "Scalable Software Engineering",
  "Startup & Enterprise Focus",
  "Long-Term Technology Partner",
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#171F2E] pt-28 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[140px]" />
      </div>

      <div className="wrapper relative z-10">

        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-500/30 bg-primary-50 dark:bg-primary-500/10 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />

            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Product Engineering Partner
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">

            Engineering products
            <br />

            <span className="text-primary-500">
              businesses can rely on.
            </span>

          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600 dark:text-gray-400">

            Anchor Techno Soft partners with startups, SMEs, and enterprises to
            build scalable web applications, mobile apps, AI-powered solutions,
            and cloud-native software engineered for long-term business growth.

          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-7 py-3 text-white font-medium transition-all duration-300 hover:bg-primary-600 hover:scale-105"
            >
              Start Your Project

              <ArrowRight className="ml-2 h-5 w-5" />

            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 px-7 py-3 font-medium text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Explore Services
            </Link>

          </div>

          {/* Trust */}

          <div className="mt-14 flex flex-wrap justify-center gap-8">

            {trustItems.map((item) => (

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

        {/* Bottom Numbers */}

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-primary-500">
              50+
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Projects Delivered
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-4xl font-bold text-primary-500">
              98%
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Client Satisfaction
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-4xl font-bold text-primary-500">
              24/7
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Technical Support
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-4xl font-bold text-primary-500">
              Global
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Remote Collaboration
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}