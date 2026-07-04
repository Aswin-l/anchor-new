"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What services does Anchor Techno Soft provide?",
    a: "We provide web development, mobile apps, AI solutions, cloud engineering, and UI/UX design.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes, we specialize in startups and help build MVPs and scalable products from scratch.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on complexity, but most MVPs are delivered in 2–8 weeks.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we provide full maintenance, scaling, and support after deployment.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#101828]">
      <div className="wrapper max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left bg-white dark:bg-white/5"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.q}
                </span>

                <span className="text-xl text-gray-500">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="p-5 text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}