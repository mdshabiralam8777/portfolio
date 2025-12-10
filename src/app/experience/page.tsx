"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const timelineData = [
  {
    id: "enbd",
    company: {
      name: "Emirates NBD",
      location: "Dubai, UAE",
      duration: "Jan 2024 – Present",
      color: "#E31837",
      logo: "/emirates_nbd_logo.jpeg",
    },
    role: {
      title: "Senior Frontend Developer",
      type: "Full-time",
    },
    stats: {
      usersImpacted: "5M+",
      performanceImprovement: "SAMA Compliant",
    },
    achievements: [
      {
        id: 1,
        text: "Resolved high-priority (P1/P2) production incidents, ensuring application stability and minimal downtime.",
        metrics: "Critical issues",
        impact: "99.9% uptime",
      },
      {
        id: 2,
        text: "Built DevInsight, an internal developer/QA portal centralizing tools and APIs, replacing Insomnia/external sites.",
        metrics: "800+ API calls/day",
        impact: "Saved engineering hours",
      },
      {
        id: 3,
        text: "Integrated TravellerPass UI into ENBD apps from scratch, using React as a WebView for both iOS and Android.",
        metrics: "Cross-platform",
        impact: "Enhanced customer access",
      },
      {
        id: 4,
        text: "Delivered critical UIs—Quick Pay, Pay Bills, Sadad Pay, Account Finder—aligned with SAMA standards.",
        metrics: "5M+ users",
        impact: "Trusted Device implementation",
      },
      {
        id: 5,
        text: "Supported KSA digital migration and launch, delivering mobile-like features post SAMA approval.",
        metrics: "Regional expansion",
        impact: "KSA market launch",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "WebView",
      "Jest",
    ],
  },
  {
    id: "verizon",
    company: {
      name: "Verizon",
      location: "Hyderabad, India",
      duration: "Mar 2022 – Dec 2023",
      color: "#EE0000",
      logo: "/verizon_logo.jpeg",
    },
    role: {
      title: "Frontend Developer",
      type: "Full-time",
    },
    stats: {
      usersImpacted: "Enterprise",
      performanceImprovement: "70% reduction",
    },
    achievements: [
      {
        id: 1,
        text: "Implemented a custom UI tracking system for vendor order states with dynamic horizontal and vertical graph layouts.",
        metrics: "Complex workflows",
        impact: "Improved visualization",
      },
      {
        id: 2,
        text: "Developed the Order Milestones flow for Dynamic Network Manager (DNM) portal, enabling real-time tracking.",
        metrics: "Multi-step orders",
        impact: "Customer transparency",
      },
      {
        id: 3,
        text: 'Built the "Report an Issue" feature from scratch, allowing users to capture/upload screenshots and attach files.',
        metrics: "60% reduction",
        impact: "Fewer support calls",
      },
      {
        id: 4,
        text: "Improved performance by consolidating 60+ API calls and implementing advanced caching.",
        metrics: "70% server load reduction",
        impact: "Faster response times",
      },
      {
        id: 5,
        text: "Modernized existing UIs through micro-frontend migration and feature enhancements.",
        metrics: "Scalability improved",
        impact: "Better maintainability",
      },
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Microfrontends",
      "REST APIs",
      "Jest",
    ],
  },
  {
    id: "kia",
    company: {
      name: "KIA Motors",
      location: "Kolkata, India",
      duration: "Aug 2020 – Mar 2022",
      color: "#BB162B",
      logo: "/Kia_Motor_logo.jpeg",
    },
    role: {
      title: "Frontend Developer",
      type: "Full-time",
    },
    stats: {
      usersImpacted: "Europe market",
      performanceImprovement: "AEM Integration",
    },
    achievements: [
      {
        id: 1,
        text: "Implemented the car selection module in Angular integrated with AEM for KIA Motors Europe's web platform.",
        metrics: "European market",
        impact: "Dynamic model features",
      },
      {
        id: 2,
        text: "Built responsive UI components enabling users to view model-specific features and details dynamically.",
        metrics: "Cross-browser",
        impact: "Enhanced UX",
      },
    ],
    technologies: ["Angular", "TypeScript", "AEM", "SASS", "REST APIs"],
  },
];

export default function ExperiencePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = timelineData[activeIndex];

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-text">
            Career Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            5+ years of transforming complex challenges into elegant, scalable
            solutions at leading companies
          </p>
        </motion.div>
      </div>

      {/* Experience Details */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {timelineData.map((entry, index) => (
              <motion.button
                key={entry.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all ${
                  index === activeIndex
                    ? "glass-panel border-[var(--cyber-blue)]/30"
                    : "bg-white/5 hover:bg-white/10 border border-transparent"
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                      <Image
                        src={entry.company.logo}
                        alt={entry.company.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">
                        {entry.company.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {entry.role.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3" />
                        {entry.company.duration}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`transition-all ${
                      index === activeIndex
                        ? "text-[var(--cyber-blue)]"
                        : "text-gray-500"
                    }`}
                  >
                    {index === activeIndex ? (
                      <div className="w-2 h-2 rounded-full bg-[var(--cyber-blue)] animate-pulse" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Quick stats */}
                {entry.stats && (
                  <div className="flex items-center gap-4 mt-4">
                    {entry.stats.usersImpacted && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[var(--cyber-blue)]" />
                        <span className="text-sm text-gray-300">
                          {entry.stats.usersImpacted}
                        </span>
                      </div>
                    )}
                    {entry.stats.performanceImprovement && (
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[var(--cyber-purple)]" />
                        <span className="text-sm text-gray-300">
                          {entry.stats.performanceImprovement}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Current Company Card */}
          <motion.div
            key={activeEntry.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 glass-panel p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden bg-white">
                    <Image
                      src={activeEntry.company.logo}
                      alt={activeEntry.company.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {activeEntry.role.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {activeEntry.company.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {activeEntry.company.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300">
                  {activeEntry.company.name} • {activeEntry.role.type}
                </p>
              </div>

              {activeEntry.stats && (
                <div className="flex gap-3">
                  {activeEntry.stats.usersImpacted && (
                    <div className="text-center p-3 rounded-lg bg-[var(--cyber-blue)]/10">
                      <Users className="w-5 h-5 text-[var(--cyber-blue)] mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">
                        {activeEntry.stats.usersImpacted}
                      </div>
                    </div>
                  )}
                  {activeEntry.stats.performanceImprovement && (
                    <div className="text-center p-3 rounded-lg bg-[var(--cyber-purple)]/10">
                      <Zap className="w-5 h-5 text-[var(--cyber-purple)] mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">
                        {activeEntry.stats.performanceImprovement}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Key Achievements
              </h3>
              {activeEntry.achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-[var(--cyber-blue)]/20 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--cyber-blue)]" />
                  </div>
                  <div>
                    <p className="text-gray-200">{achievement.text}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {achievement.metrics && (
                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--cyber-blue)]/20 text-[var(--cyber-blue)]">
                          📊 {achievement.metrics}
                        </span>
                      )}
                      {achievement.impact && (
                        <span className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-400">
                          💡 {achievement.impact}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeEntry.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--cyber-blue)]/10 to-[var(--cyber-purple)]/10 text-[var(--cyber-blue)] border border-[var(--cyber-blue)]/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
