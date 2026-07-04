import Image from "next/image";
import { CORE_FEATURES } from "./data";

export function CoreFeatures() {
  return (
    <section className="py-30 bg-gray-50 dark:bg-white/1 px-5">
      <div className="max-w-[72rem] mx-auto">

        <div className="mb-14 text-center">

          <span className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-500">
            OUR EXPERTISE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-800 dark:text-white md:text-5xl max-w-4xl mx-auto leading-tight">
            Delivering End-to-End Digital Solutions for Modern Businesses
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-500 dark:text-gray-400">
            Anchor Techno Soft partners with startups, growing businesses, and
            enterprises to design, develop, and scale innovative digital
            products. We combine engineering excellence with modern technologies
            to build secure, scalable, and high-performing software solutions
            that accelerate business growth.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {CORE_FEATURES.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-8">
                <Image
                  src={feature.iconUrl}
                  alt={feature.title}
                  width={52}
                  height={52}
                />
              </div>

              <h3 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}