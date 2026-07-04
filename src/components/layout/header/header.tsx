"use client";

import { CloseIcon, MenuIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MainMobileNav from "./main-mobile-nav";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#171F2E]/80">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">

          {/* Logo */}

          <div className="flex items-center">

            <Link href="/" className="flex items-center">

              <Image
                src="/images/logoImage.png"
                alt="Anchor Techno Soft"
                width={180}
                height={34}
                className="block dark:hidden"
                priority
              />

              <Image
                src="/images/logoImage.png"
                alt="Anchor Techno Soft"
                width={180}
                height={34}
                className="hidden dark:block"
                priority
              />

            </Link>

          </div>

          {/* Desktop Navigation */}

          <DesktopNav />

          {/* Right */}

          <div className="flex items-center justify-self-end gap-4">

            <ThemeToggle />

            {/* Mobile */}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-white lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* CTA */}

            <Link
              href="/contact"
              className="hidden h-11 items-center rounded-full bg-primary-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-600 lg:inline-flex"
            >
              Start Your Project
            </Link>

          </div>

        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}