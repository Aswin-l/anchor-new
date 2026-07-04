"use client";

const features = [
  {
    title: "Engineering Excellence",
    desc: "We build scalable, production-grade systems using modern architecture and clean code practices.",
  },
  {
    title: "Fast Delivery",
    desc: "Agile development process ensures faster MVPs and quick go-to-market execution.",
  },
  {
    title: "Dedicated Team",
    desc: "You get a focused engineering team that works like your in-house product team.",
  },
  {
    title: "End-to-End Ownership",
    desc: "From idea to deployment, we take full responsibility of your product lifecycle.",
  },
];

export default function WhyChooseAnchor() {
  return (
    <section className="py-28 bg-white dark:bg-[#171F2E]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT - STICKY TITLE */}
          <div className="lg:sticky top-24 h-fit">
            <p className="text-primary-500 font-semibold tracking-widest uppercase">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mt-6 text-gray-900 dark:text-white leading-tight">
              We don’t just build software.
              <br />
              We build products that scale.
            </h2>

            <p className="mt-6 text-gray-500 dark:text-gray-400 leading-7">
              Anchor Techno Soft focuses on engineering-first execution,
              product thinking, and long-term scalability — not just delivery.
            </p>
          </div>

          {/* RIGHT - STORY FLOW */}
          <div className="space-y-24">

            {features.map((item, index) => (
              <div key={index} className="relative">

                {/* BIG BACK NUMBER */}
                <div className="absolute -left-10 top-0 text-[120px] font-bold text-gray-100 dark:text-white/5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-8 max-w-xl">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}