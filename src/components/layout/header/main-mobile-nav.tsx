"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
}

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 z-50 w-full h-screen bg-white dark:bg-[#171F2E] border-t border-gray-200 dark:border-white/10 lg:hidden">
      <div className="flex h-full flex-col justify-between">

        {/* Navigation */}
        <div className="px-6 py-8 space-y-2">

          {navItems.map((item) => {

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-xl px-4 py-4 text-base font-medium transition-all duration-300",
                  active
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="border-t border-gray-200 dark:border-white/10 px-6 py-8">

          <p className="mb-5 text-center text-sm text-gray-500 dark:text-gray-400">
            Ready to build your next digital product?
          </p>

          <Link
            href="/contact"
            className="flex h-12 w-full items-center justify-center rounded-full bg-primary-500 text-white font-semibold transition hover:bg-primary-600"
          >
            Start Your Project
          </Link>

        </div>

      </div>
    </div>
  );
}