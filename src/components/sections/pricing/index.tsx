'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites, enterprise portals, SaaS platforms, and scalable web applications built with modern technologies.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for Android and iOS using Flutter and React Native.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, user-centric interfaces designed to enhance user experience and maximize conversions.',
    icon: '🎨',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Cloud architecture, deployment, migration, and infrastructure management using AWS, Azure, and GCP.',
    icon: '☁️',
  },
  {
    title: 'AI Solutions',
    description:
      'AI-powered chatbots, automation, machine learning integrations, and intelligent business solutions.',
    icon: '🤖',
  },
  {
    title: 'Custom Software',
    description:
      'Tailor-made enterprise software, CRM, ERP, and business management systems built for your organization.',
    icon: '⚙️',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-28 bg-gray-50 dark:bg-[#171F2E]">
      <div className="wrapper">

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 font-medium text-sm mb-5">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Building Digital Solutions That Drive Business Growth
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            Anchor Techno Soft delivers innovative software development
            services that help startups, SMEs, and enterprises transform ideas
            into scalable digital products.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium transition"
            >
              Start Your Project
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-xl transition duration-300"
            >

              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}