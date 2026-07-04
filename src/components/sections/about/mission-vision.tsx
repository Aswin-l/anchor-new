"use client";

export default function MissionVision() {
  return (
    <section className="py-28 bg-gray-50 dark:bg-[#101828]">

      <div className="wrapper max-w-7xl">

        {/* Heading */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary-500">
            OUR FOUNDATION
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            We don't measure success by
            <br />
            delivering software.
          </h2>

        </div>

        {/* Statement */}

        <div className="mt-16 grid lg:grid-cols-12 gap-16">

          {/* Left */}

          <div className="lg:col-span-5">

            <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Mission
            </span>

            <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white leading-snug">
              Build technology that
              creates long-term value.
            </h3>

          </div>

          {/* Right */}

          <div className="lg:col-span-7">

            <p className="text-lg leading-9 text-gray-600 dark:text-gray-400">

              Every engagement starts with understanding the business,
              not choosing a technology stack. Our mission is to transform
              ambitious ideas into secure, scalable and maintainable digital
              products that continue delivering value as businesses grow.

            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="my-24 border-t border-gray-200 dark:border-white/10" />

        {/* Vision */}

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-5">

            <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Vision
            </span>

            <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white leading-snug">
              Become the engineering
              partner companies trust
              before they scale.
            </h3>

          </div>

          <div className="lg:col-span-7">

            <p className="text-lg leading-9 text-gray-600 dark:text-gray-400">

              We envision Anchor Techno Soft as more than a software development
              company. Our goal is to become a trusted product engineering partner,
              helping startups, SMEs and enterprises navigate technology with
              confidence—from the first prototype to large-scale digital platforms.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}