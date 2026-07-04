import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesCTA() {
  return (
    <section className="py-28 bg-gray-50 dark:bg-[#101828]">
      <div className="wrapper">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-primary-500 uppercase tracking-[0.25em] text-sm font-semibold">
            Let's Build Together
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Every business has unique challenges.
            <br />
            Your software should reflect that.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you're building a healthcare platform, fintech product,
            e-commerce solution, or something entirely new, we help turn complex
            ideas into scalable digital products with long-term business value.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary-500 px-8 py-4 text-white font-semibold hover:bg-primary-600 transition"
            >
              Start Your Project

              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 px-8 py-4 font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}