"use client";

import { motion } from "framer-motion";
import {
  User,
  Heart,
  Target,
  Lightbulb,
  Coffee,
  Gamepad2,
  BookOpen,
  Plane,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Quality First",
    description:
      "I believe in writing clean, maintainable code that stands the test of time.",
    color: "var(--cyber-blue)",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and so do I. Always exploring new tools and techniques.",
    color: "var(--cyber-purple)",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "User-Centric",
    description:
      "Every line of code I write is for the end user. Their experience is my priority.",
    color: "var(--cyber-green)",
  },
];

const interests = [
  { icon: <Coffee className="w-5 h-5" />, label: "Coffee Enthusiast" },
  { icon: <Gamepad2 className="w-5 h-5" />, label: "Gaming" },
  { icon: <BookOpen className="w-5 h-5" />, label: "Tech Blogs" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel" },
];

const timeline = [
  { year: "2018", event: "Started coding journey" },
  { year: "2020", event: "Joined KIA Motors as Frontend Developer" },
  { year: "2022", event: "Moved to Verizon, worked on enterprise solutions" },
  { year: "2024", event: "Joined Emirates NBD in Dubai, serving 5M+ users" },
];

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The person behind the code
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--cyber-blue)] via-[var(--cyber-purple)] to-[var(--cyber-green)] blur-lg opacity-50" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="/shabbir.jpg"
                  alt="Mohammed Shabir Alam"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Mohammed Shabir Alam
              </h2>
              <p className="text-[var(--cyber-blue)] font-medium mb-4">
                Senior Frontend Developer @ Emirates NBD
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate frontend developer with 6+ years of experience
                building scalable web applications. Currently based in Dubai,
                UAE, I specialize in creating secure, high-performance solutions
                for fintech and telecom industries.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in tech started with a curiosity for how things work
                on the web. Today, I'm privileged to build applications that
                serve millions of users while continuously learning and pushing
                the boundaries of what's possible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 text-center"
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <span style={{ color: value.color }}>{value.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 md:p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            My Journey
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold cyber-text mb-1">
                  {item.year}
                </div>
                <p className="text-sm text-gray-400 max-w-[150px]">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
