'use client';

import type React from 'react';
import { useState } from 'react';
import Link from "next/link";
import {
  CodeGeneratorIcon,
  EmailGeneratorIcon,
  ImageGeneratorIcon,
  VideoGeneratorIcon,
  TextGeneratorIcon,
} from '@/icons/icons';

import Image from 'next/image';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  lightImage: string;
  darkImage: string;
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState('web');

  const tabs: Tab[] = [
    {
      id: 'web',
      label: 'Web Development',
      icon: <CodeGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-1.jpeg',
      darkImage: '/images/tab-image/tab-image-1-dark.jpeg',
      title: 'High-performance Web Applications',
      description:
        'We build scalable, fast, and secure web applications using Next.js, React, and modern backend systems tailored for business growth.',
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
      icon: <ImageGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-2.jpeg',
      darkImage: '/images/tab-image/tab-image-2-dark.jpeg',
      title: 'Cross-platform Mobile Apps',
      description:
        'We develop Android & iOS apps using Flutter and React Native with smooth UI, performance, and scalable architecture.',
    },
    {
      id: 'cloud',
      label: 'Cloud Solutions',
      icon: <VideoGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-3.jpeg',
      darkImage: '/images/tab-image/tab-image-3-dark.jpeg',
      title: 'Cloud Infrastructure & Deployment',
      description:
        'Deploy and scale your applications on AWS, Azure, and GCP with secure, optimized cloud architecture.',
    },
    {
      id: 'ai',
      label: 'AI Automation',
      icon: <TextGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-4.jpeg',
      darkImage: '/images/tab-image/tab-image-4-dark.jpeg',
      title: 'AI & Business Automation',
      description:
        'We integrate AI solutions, chatbots, and automation systems to improve efficiency and reduce manual work.',
    },
    {
      id: 'design',
      label: 'UI/UX Design',
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      lightImage: '/images/tab-image/tab-image-5.jpeg',
      darkImage: '/images/tab-image/tab-image-5-dark.jpeg',
      title: 'Modern UI/UX Design',
      description:
        'We design clean, user-focused interfaces that improve engagement and drive conversions for your business.',
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-14 md:py-28 dark:bg-dark-primary">
      <div className="wrapper">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-gray-800 dark:text-white/90 text-3xl md:text-title-lg">
            Our Core Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            End-to-end digital engineering services that help startups and enterprises build, scale, and grow faster.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">

          {/* TAB NAVIGATION */}
          <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative">
            <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition rounded-full ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT - FIXED (ONLY ONE IMAGE RENDERED) */}
          <div className="p-6 tab-img-bg overflow-hidden rounded-4xl mt-8">
            <div className="p-3 tab-img-overlay">

              <Image
                src={currentTab.lightImage}
                alt={currentTab.label}
                width={936}
                height={535}
                className="w-full rounded-2xl block dark:hidden"
                priority
              />

              <Image
                src={currentTab.darkImage}
                alt={currentTab.label}
                width={936}
                height={535}
                className="w-full rounded-2xl hidden dark:block"
                priority
              />

            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
              {currentTab.title}
            </h2>

            <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
              {currentTab.description}
            </p>

            <Link
                                    href="/contact"
                                    className="font-medium inline-block text-sm text-white rounded-full bg-primary-500 hover:bg-primary-600 transition py-3 px-6"
                                  >
                                    Book a Free Consultation
                                  </Link>
          </div>

        </div>
      </div>
    </section>
  );
}