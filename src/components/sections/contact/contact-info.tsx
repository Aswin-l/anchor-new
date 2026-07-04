"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ShieldCheck,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Business Email",
    value: "aswinkumar@anchortechnosoft.com",
    href: "mailto:aswinkumar@anchortechnosoft.com",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+91 63744 52131",
    href: "https://wa.me/916374452131",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tamil Nadu, India",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    value: "Mon – Sat • 10:00 AM – 7:00 PM (IST)",
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Confidential by Default",
    description:
      "Every discussion is handled with complete professionalism and confidentiality. We're happy to sign an NDA whenever required.",
  },
  {
    icon: Globe2,
    title: "Working Worldwide",
    description:
      "We collaborate with startups, SMEs and enterprises across different time zones using modern communication and agile workflows.",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-10">

      {/* Heading */}
      <div>

        <span className="inline-flex rounded-full bg-primary-100 dark:bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-600 dark:text-primary-400">
          Get in Touch
        </span>

        <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">
          Let's discuss your next digital product.
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8">
          Whether you have a clear product roadmap or just an early-stage idea,
          we're here to help you transform it into a scalable digital solution.
        </p>

      </div>

      {/* Contact Items */}
      <div className="space-y-5">

        {contactDetails.map((item) => {
          const Icon = item.icon;

          const content = (
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 transition-all duration-300 hover:border-primary-500/40 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-500/10">
                <Icon className="h-6 w-6 text-primary-500" />
              </div>

              <div className="flex-1">

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>

                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white break-all">
                  {item.value}
                </p>

              </div>

              {item.href && (
                <ArrowUpRight className="h-5 w-5 text-gray-400 transition group-hover:text-primary-500" />
              )}

            </div>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}

      </div>

      {/* Trust Section */}
      <div className="space-y-6 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Why founders choose Anchor Techno Soft
        </h3>

        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-4"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5" />
              </div>

              <div>

                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-white/80">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}