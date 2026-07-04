"use client";

import { getCurrentYear } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0F172A] text-white">

      {/* Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 wrapper py-20">

        <div className="grid gap-16 lg:grid-cols-12">

          {/* LEFT */}
          <div className="lg:col-span-4">

            <Link href="/">
              <Image
                src="/images/logoImage.png"
                alt="Anchor Techno Soft"
                width={190}
                height={42}
              />
            </Link>

            <p className="mt-8 leading-8 text-gray-400">
              Anchor Techno Soft is a product engineering partner helping startups
              and growing businesses build scalable web, mobile, AI, and cloud
              solutions with strong architecture and execution quality.
            </p>

            <div className="mt-8 space-y-3 text-gray-400">

              <p className="flex items-center gap-2">
                <Globe size={16} /> Chennai, India
              </p>

              <p className="flex items-center gap-2">
                <Mail size={16} /> aswinkumar@anchortechnosoft.com
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 6374452131
              </p>

            </div>

          </div>

          {/* CENTER */}
          <div className="lg:col-span-5">

            <div className="grid grid-cols-2 gap-12">

              {/* Company */}
              <div>

                <h3 className="mb-6 text-lg font-semibold">Company</h3>

                <div className="space-y-4 text-gray-400">

                  <Link href="/about" className="block hover:text-white">
                    About
                  </Link>

                  <Link href="/services" className="block hover:text-white">
                    Services
                  </Link>

                  <Link href="/industries" className="block hover:text-white">
                    Industries
                  </Link>

                  <Link href="/case-studies" className="block hover:text-white">
                    Case Studies
                  </Link>

                  <Link href="/contact" className="block hover:text-white">
                    Contact
                  </Link>

                </div>

              </div>

              {/* Expertise */}
              <div>

                <h3 className="mb-6 text-lg font-semibold">Expertise</h3>

                <div className="space-y-4 text-gray-400">

                  <p>Product Engineering</p>
                  <p>Web Applications</p>
                  <p>Mobile Applications</p>
                  <p>AI Solutions</p>
                  <p>Cloud & DevOps</p>
                  <p>UI/UX Design</p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CTA */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

              <span className="text-primary-400 text-sm uppercase tracking-[0.3em]">
                Ready?
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Let's build your product
              </h3>

              <p className="mt-5 text-gray-400 leading-7">
                We help startups design scalable systems from day one.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold hover:bg-primary-600 transition"
              >
                Start Project
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">

          <p>© {getCurrentYear()} Anchor Techno Soft</p>

          <div className="flex gap-6 mt-4 md:mt-0">

           

            <a href="https://www.linkedin.com/company/anchor-techno-soft/" className="hover:text-white">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/anchortechnosoft?igsh=MWJwd2V6bDBpajlicQ==" className="hover:text-white">
              Instagram
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}