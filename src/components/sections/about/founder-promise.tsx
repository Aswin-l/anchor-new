"use client";

import { CheckCircle2 } from "lucide-react";

const promises = [
  "We recommend technology based on business value—not trends.",
  "We communicate honestly, even when conversations are difficult.",
  "We engineer for long-term maintainability, not short-term shortcuts.",
  "We treat your product as if we were building our own company.",
];

export default function FounderPromise() {
  return (
    <section className="py-28 bg-gray-50 dark:bg-[#101828]">

      <div className="wrapper">

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary-500">
            OUR PROMISE
          </span>

          <blockquote className="mt-8 text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">

            "We'll never recommend a technology
            because it's popular.

            <br />

            We'll recommend it because it's the
            right decision for your business."

          </blockquote>

          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">

            Every technical decision has business consequences.
            That's why we focus on performance, scalability,
            maintainability, and long-term product success—
            not hype.

          </p>

        </div>

        {/* Promise List */}

        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {promises.map((item) => (

            <div
              key={item}
              className="flex items-start gap-4"
            >

              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10">

                <CheckCircle2 className="h-5 w-5 text-primary-500" />

              </div>

              <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">

                {item}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Statement */}

        <div className="mt-24 border-t border-gray-200 dark:border-white/10 pt-14 text-center">

          <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-relaxed">

            Our success isn't measured by
            how many projects we complete.

            <br />

            It's measured by how confidently
            our clients can grow after launch.

          </p>

        </div>

      </div>

    </section>
  );
}