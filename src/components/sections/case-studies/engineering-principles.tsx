"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Business Before Technology",
    description:
      "Every engagement begins by understanding the business model, customer journey, operational challenges, and growth objectives. Technology is selected only after the problem is clearly defined.",
  },
  {
    number: "02",
    title: "Engineering for the Next Stage",
    description:
      "We architect systems that remain maintainable as products evolve. Scalability, security, and performance are considered from the very first sprint instead of becoming expensive future fixes.",
  },
  {
    number: "03",
    title: "Outcomes Over Output",
    description:
      "Shipping features is not success. Success is measured by adoption, operational efficiency, customer experience, and long-term business impact created by every engineering decision.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section className="relative bg-gray-50 dark:bg-[#101828] py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-primary-500/10 blur-[160px]" />

      </div>

      <div className="wrapper relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >

          <span className="uppercase tracking-[0.3em] text-primary-500 font-semibold text-sm">
            Our Engineering Philosophy
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Every successful product
            <br />
            begins with
            <span className="text-primary-500"> better decisions.</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400 max-w-3xl">
            We believe software should solve business problems—not create new
            ones. Every product we build follows a consistent engineering
            philosophy that prioritizes clarity, scalability, and measurable
            business value.
          </p>

        </motion.div>

        {/* Principles */}

        <div className="mt-28 space-y-28">

          {principles.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-[180px_1fr] gap-10 items-start"
            >

              {/* Large Number */}

              <div>

                <div className="text-7xl md:text-8xl font-black text-primary-500/15 select-none">
                  {item.number}
                </div>

              </div>

              {/* Content */}

              <div>

                <div className="border-l-2 border-primary-500 pl-8">

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400 max-w-4xl">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}