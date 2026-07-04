export default function DevelopmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your business goals, requirements, and project vision before starting development.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We define the technology stack, project roadmap, milestones, and delivery timeline.",
    },
    {
      number: "03",
      title: "UI / UX Design",
      description:
        "Our designers create modern, intuitive interfaces that provide an exceptional user experience.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our engineers develop secure, scalable, and high-performance web and mobile applications.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Every feature is tested for functionality, security, performance, and compatibility.",
    },
    {
      number: "06",
      title: "Deployment & Support",
      description:
        "We deploy your solution successfully and provide ongoing maintenance and technical support.",
    },
  ];

  return (
    <section className="py-16 md:py-28 dark:bg-white/1 px-5">
      <div className="wrapper">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-20">

          <span className="text-primary-500 font-semibold uppercase tracking-widest">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
            How We Turn Your Ideas Into Reality
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8">
            Our proven software development process ensures every project is
            delivered on time, within budget, and with exceptional quality.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary-500/20 -translate-x-1/2"></div>

          <div className="space-y-16">

            {steps.map((step, index) => (

              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Content */}

                <div className="md:w-1/2 px-6">

                  <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

                    <span className="text-primary-500 text-sm font-semibold">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                      {step.description}
                    </p>

                  </div>

                </div>

                {/* Circle */}

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary-500 text-white items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="md:w-1/2"></div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}