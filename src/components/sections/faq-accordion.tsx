"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
  // const faqItems: FAQItem[] = [
  //   {
  //     id: 1,
  //     question: "Do I get free updates?",
  //     answer:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus magna quis tellus euismod, eget pharetra leo mollis. Donec eget lacus non elit blandit pharetra vitae volutpat libero.",
  //   },
  //   {
  //     id: 2,
  //     question: 'What does the number of "Projects" refer to?',
  //     answer:
  //       'The number of "Projects" refers to the total number of separate workspaces you can create and manage within your account. Each project can have its own settings, team members, and resources.',
  //   },
  //   {
  //     id: 3,
  //     question: "Can I upgrade to a higher plan?",
  //     answer:
  //       "Yes, you can upgrade to a higher plan at any time. When you upgrade, you'll be charged the prorated difference for the remainder of your current billing cycle. Your new features will be available immediately after upgrading.",
  //   },
  //   {
  //     id: 4,
  //     question: 'What does "Unlimited Projects" mean?',
  //     answer:
  //       '"Unlimited Projects" means you can create as many projects as you need without any restrictions. This allows you to organize your work efficiently without worrying about hitting a project limit.',
  //   },
  //   {
  //     id: 5,
  //     question: "How can I add Open AI Key?",
  //     answer:
  //       'To add your OpenAI API key, go to your account settings and navigate to the "API Keys" section. Click on "Add New Key", paste your OpenAI API key, and save your changes. The key will be securely stored and used for all AI-powered features.',
  //   },
  // ];
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What software development services does Anchor Techno Soft offer?",
    answer:
      "We provide end-to-end software development services including web application development, mobile app development, UI/UX design, cloud solutions, AI integration, enterprise software, API development, and ongoing maintenance & support.",
  },
  {
    id: 2,
    question: "Which technologies do you specialize in?",
    answer:
      "Our team specializes in modern technologies including React, Next.js, Node.js, Flutter, Laravel, Python, .NET, AWS, Azure, Docker, Kubernetes, and modern databases to build secure and scalable applications.",
  },
  {
    id: 3,
    question: "Can you develop custom software for our business?",
    answer:
      "Yes. Every business has unique requirements. We design and develop custom software solutions tailored to your workflows, business goals, and future scalability requirements.",
  },
  {
    id: 4,
    question: "Do you provide maintenance and support after project delivery?",
    answer:
      "Absolutely. We offer continuous maintenance, performance optimization, security updates, cloud monitoring, bug fixes, and feature enhancements to ensure your software remains reliable and up to date.",
  },
  {
    id: 5,
    question: "How can I start a project with Anchor Techno Soft?",
    answer:
      "Simply contact us through our website or schedule a free consultation. We'll discuss your requirements, understand your business objectives, prepare a proposal, and guide you through every stage of the development process.",
  },
];
  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
       <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
              Frequently Asked Questions
            </h2>

            <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
              Have questions about our software development services? Here are some of
              the most common questions businesses ask before starting a project with
              Anchor Techno Soft.
            </p>
          </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
