"use client";

import { useState } from "react";

const industries = [
  {
    title: "Healthcare",
    icon: "🏥",
    description:
      "Secure healthcare software, telemedicine platforms, hospital management systems and patient engagement solutions.",
    services: [
      "Hospital Management",
      "Telemedicine",
      "Patient Portal",
      "Healthcare CRM",
    ],
  },
  {
    title: "FinTech",
    icon: "💳",
    description:
      "Scalable fintech platforms including digital banking, payment gateways and financial automation.",
    services: [
      "Payment Gateway",
      "Digital Banking",
      "Wallet Apps",
      "Investment Platform",
    ],
  },
  {
    title: "E-Commerce",
    icon: "🛒",
    description:
      "Modern ecommerce platforms that increase conversions and simplify operations.",
    services: ["Online Store", "Marketplace", "POS System", "Inventory"],
  },
  {
    title: "Education",
    icon: "🎓",
    description:
      "Learning platforms for schools, universities and training companies.",
    services: ["LMS", "Student Portal", "Online Exams", "Virtual Classroom"],
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    description:
      "Automation software that improves production efficiency and operations.",
    services: ["ERP", "Production", "Inventory", "Supply Chain"],
  },
  {
    title: "Real Estate",
    icon: "🏢",
    description:
      "Property management platforms and real estate digital solutions.",
    services: ["Property Portal", "CRM", "Booking", "Lead Management"],
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 dark:bg-white/1 px-5">
      <div className="wrapper">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[4px] text-primary-500 font-semibold">
            Industries
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
            Industries We Empower
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            We create software solutions tailored to different industries,
            helping businesses innovate, automate and grow faster.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-5">
            {industries.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`w-full text-left border-b pb-5 transition-all duration-300 group ${
                    isActive
                      ? "border-primary-500"
                      : "border-gray-200 dark:border-white/10"
                  }`}
                >
                  <div className="flex justify-between items-center">

                    <h3
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-primary-500"
                          : "text-gray-800 dark:text-white group-hover:text-primary-500"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "translate-x-2 text-primary-500"
                          : "text-gray-400 group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>

                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT */}
          <div
            className="rounded-[32px] border border-gray-200 dark:border-white/10 
            bg-gray-50 dark:bg-white/5 p-10 min-h-[480px] flex flex-col justify-center
            transition-all duration-500"
          >

            {/* ICON */}
            <div className="text-7xl mb-8 transition-all duration-500">
              {industries[active].icon}
            </div>

            {/* TITLE */}
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-5 transition-all duration-300">
              {industries[active].title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8 transition-all duration-300">
              {industries[active].description}
            </p>

            {/* SERVICES */}
            <div className="grid grid-cols-2 gap-4">
              {industries[active].services.map((service) => (
                <div
                  key={service}
                  className="rounded-xl bg-white dark:bg-white/10 px-4 py-3 
                  font-medium text-gray-700 dark:text-white 
                  transition hover:scale-[1.02]"
                >
                  ✓ {service}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}