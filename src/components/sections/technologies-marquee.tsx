"use client";

import {
  Code,
  Cloud,
  Database,
  Cpu,
  Smartphone,
  Server,
  Layers,
  Shield,
} from "lucide-react";

const techRow1 = [
  { icon: Code, name: "React" },
  { icon: Layers, name: "Next.js" },
  { icon: Server, name: "Node.js" },
  { icon: Smartphone, name: "Flutter" },
  { icon: Cloud, name: "AWS" },
  { icon: Shield, name: "Docker" },
];

const techRow2 = [
  { icon: Code, name: "TypeScript" },
  { icon: Database, name: "MongoDB" },
  { icon: Cloud, name: "Azure" },
  { icon: Cpu, name: "Python" },
  { icon: Server, name: "Express" },
  { icon: Layers, name: "GraphQL" },
];

function Marquee({
  items,
  direction = "left",
}: {
  items: { icon: any; name: string }[];
  direction?: "left" | "right";
}) {
  const IconList = [...items, ...items];

  return (
    <div className="overflow-hidden w-full relative">
      <div
        className={`flex w-max gap-10 ${
          direction === "left" ? "animate-scroll" : "animate-scroll-reverse"
        }`}
      >
        {IconList.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 whitespace-nowrap"
            >
              <Icon className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-[#101828]" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-[#101828]" />

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function TechnologiesMarquee() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#101828]">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Technologies We Work With
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Modern engineering stack for scalable digital products.
        </p>
      </div>

      <div className="space-y-6">
        <Marquee items={techRow1} direction="left" />
        <Marquee items={techRow2} direction="right" />
      </div>

      <div className="text-center mt-14">
        <button className="px-6 py-3 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-full">
          Discuss Your Tech Stack
        </button>
      </div>
    </section>
  );
}