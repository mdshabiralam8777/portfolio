"use client";

import { motion, AnimatePresence } from "framer-motion";
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
      "Angular",
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
      "React",
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
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "AEM",
      "SASS",
      "REST APIs",
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ExperiencePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = timelineData[activeIndex];

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <motion.span
            className="inline-block text-sm font-medium tracking-widest text-[var(--cyber-blue)] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional Experience
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-text tracking-tight">
            Career Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            6+ years of transforming complex challenges into elegant, scalable
            solutions at leading companies
          </p>
        </motion.div>
      </div>

      {/* Experience Details */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Timeline Navigation */}
          <motion.div
            className="lg:col-span-1 space-y-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {timelineData.map((entry, index) => (
              <motion.button
                key={entry.id}
                variants={itemVariants}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                  index === activeIndex
                    ? "glass-panel border-[var(--cyber-blue)]/40 shadow-[0_0_20px_rgba(0,243,255,0.08)]"
                    : "bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/10"
                }`}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white transition-shadow duration-300 ${
                        index === activeIndex ? "shadow-lg" : ""
                      }`}
                    >
                      <Image
                        src={entry.company.logo}
                        alt={entry.company.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold transition-colors duration-200 ${
                          index === activeIndex ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {entry.company.name}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-200 ${
                          index === activeIndex
                            ? "text-[var(--cyber-blue)]"
                            : "text-gray-500"
                        }`}
                      >
                        {entry.role.title}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{entry.company.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    {index === activeIndex ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cyber-blue)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--cyber-blue)]"></span>
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </div>

                {/* Quick stats */}
                {entry.stats && (
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/[0.04]">
                    {entry.stats.usersImpacted && (
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[var(--cyber-blue)]" />
                        <span className="text-xs font-medium text-gray-400">
                          {entry.stats.usersImpacted}
                        </span>
                      </div>
                    )}
                    {entry.stats.performanceImprovement && (
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[var(--cyber-purple)]" />
                        <span className="text-xs font-medium text-gray-400">
                          {entry.stats.performanceImprovement}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Current Company Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEntry.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-2 glass-panel p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden bg-white shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Image
                        src={activeEntry.company.logo}
                        alt={activeEntry.company.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {activeEntry.role.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400 mt-2 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {activeEntry.company.duration}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {activeEntry.company.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">
                    {activeEntry.company.name} · {activeEntry.role.type}
                  </p>
                </div>

                {activeEntry.stats && (
                  <div className="flex gap-3">
                    {activeEntry.stats.usersImpacted && (
                      <motion.div
                        className="text-center p-4 rounded-xl bg-[var(--cyber-blue)]/10 border border-[var(--cyber-blue)]/10 min-w-[80px]"
                        whileHover={{ y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Users className="w-5 h-5 text-[var(--cyber-blue)] mx-auto mb-1.5" />
                        <div className="text-sm font-bold text-white">
                          {activeEntry.stats.usersImpacted}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                          Users
                        </div>
                      </motion.div>
                    )}
                    {activeEntry.stats.performanceImprovement && (
                      <motion.div
                        className="text-center p-4 rounded-xl bg-[var(--cyber-purple)]/10 border border-[var(--cyber-purple)]/10 min-w-[80px]"
                        whileHover={{ y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Zap className="w-5 h-5 text-[var(--cyber-purple)] mx-auto mb-1.5" />
                        <div className="text-sm font-bold text-white">
                          {activeEntry.stats.performanceImprovement}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                          Impact
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full"></span>
                  Key Achievements
                </h3>
                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={activeEntry.id + "-achievements"}
                >
                  {activeEntry.achievements.map((achievement, idx) => (
                    <motion.div
                      key={achievement.id}
                      variants={itemVariants}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-200"
                    >
                      <div className="p-2 rounded-lg bg-[var(--cyber-blue)]/15 mt-0.5 group-hover:bg-[var(--cyber-blue)]/25 transition-colors duration-200">
                        <CheckCircle2 className="w-4 h-4 text-[var(--cyber-blue)]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 leading-relaxed text-[15px]">
                          {achievement.text}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {achievement.metrics && (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--cyber-blue)]/10 text-[var(--cyber-blue)] border border-[var(--cyber-blue)]/15">
                              📊 {achievement.metrics}
                            </span>
                          )}
                          {achievement.impact && (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                              💡 {achievement.impact}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-[var(--cyber-purple)] to-[var(--cyber-blue)] rounded-full"></span>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeEntry.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                      whileHover={{ y: -2, transition: { duration: 0.15 } }}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.08] text-sm font-medium hover:border-[var(--cyber-blue)]/30 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
