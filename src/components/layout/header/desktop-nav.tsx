"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center rounded-full bg-gray-100 dark:bg-white/5 p-1">

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
              "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
              active
                ? "bg-white dark:bg-white/10 text-primary-500 shadow-sm"
                : "text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white"
            )}
          >
            {item.label}
          </Link>
        );
      })}

    </nav>
  );
}