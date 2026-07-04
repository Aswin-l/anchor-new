"use client";

const principles = [
  {
    number: "01",
    title: "Understand the Business",
    description:
      "Every successful product starts with understanding the business problem—not choosing a technology stack. We align engineering decisions with your business goals from day one.",
  },
  {
    number: "02",
    title: "Design for Scale",
    description:
      "We build architectures that can support future growth, additional features, increasing users, and evolving business requirements without expensive rewrites.",
  },
  {
    number: "03",
    title: "Build with Clarity",
    description:
      "Readable code, modern engineering practices, and maintainable systems make future development faster, safer, and more predictable.",
  },
  {
    number: "04",
    title: "Deliver Transparently",
    description:
      "You always know what's being built, why it's being built, and what comes next. Clear communication is part of our engineering process.",
  },
  {
    number: "05",
    title: "Stay Beyond Launch",
    description:
      "Launching is only the beginning. We continue supporting optimization, performance improvements, and future product evolution.",
  },
];

export default function HowWeThink() {
  return (
    <section className="py-28 bg-white dark:bg-[#171F2E]">

      <div className="wrapper">

        {/* Header */}

        <div className="max-w-3xl">

          <span className="text-primary-500 uppercase tracking-[0.25em] text-sm font-semibold">
            HOW WE THINK
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Great software starts long before development begins.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Our engineering process is built around solving business problems,
            reducing technical risk, and creating software that continues to
            perform as your company grows.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-24 max-w-5xl mx-auto">

          {principles.map((item, index) => (
            <div
              key={item.number}
              className="relative grid md:grid-cols-[120px_1fr] gap-10 pb-16 last:pb-0"
            >

              {/* Vertical Line */}

              {index !== principles.length - 1 && (
                <div className="absolute left-[38px] top-16 h-full w-px bg-gray-200 dark:bg-white/10" />
              )}

              {/* Number */}

              <div className="relative">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-500 text-white text-2xl font-bold shadow-lg">

                  {item.number}

                </div>

              </div>

              {/* Content */}

              <div className="pt-2">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">

                  {item.title}

                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl">

                  {item.description}

                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}