"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code,
  Shield,
  Zap,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "@/components/ui/Typewriter";
import { FloatingElements } from "@/components/effects/FloatingElements";
import { StatsCounter } from "@/components/ui/StatsCounter";

export default function Home() {
  const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Users Impacted", value: 5, suffix: "M+" },
    { label: "Projects Delivered", value: 50, suffix: "+" },
    { label: "Performance Gain", value: 70, suffix: "%" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mdshabiralam8777",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mohammed-shabir-alam-1014b6144/",
      label: "LinkedIn",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/971588093589",
      label: "WhatsApp",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:alammohammedshabir@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center lg:justify-start mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cyber-blue)]/10 border border-[var(--cyber-blue)]/30">
                  <Sparkles className="w-4 h-4 text-[var(--cyber-blue)]" />
                  <span className="text-sm text-[var(--cyber-blue)]">
                    Senior Frontend Developer
                  </span>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block text-white">Mohammed</span>
                <span className="block cyber-text">Shabir Alam</span>
              </h1>

              <div className="h-16 md:h-20 mb-8">
                <Typewriter
                  texts={[
                    "Building secure fintech applications",
                    "Creating scalable web solutions",
                    "Optimizing performance by 70%+",
                    "Serving 5M+ users worldwide",
                    "Transforming ideas into reality",
                  ]}
                  speed={50}
                  delay={2000}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-300"
                />
              </div>

              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                Specializing in{" "}
                <span className="font-semibold" style={{ color: "#ff0037ff" }}>
                  Angular
                </span>
                ,{" "}
                <span className="font-semibold" style={{ color: "#61DAFB" }}>
                  React
                </span>
                , and{" "}
                <span className="font-semibold" style={{ color: "#339933" }}>
                  Node.js
                </span>{" "}
                to deliver impactful solutions in{" "}
                <span className="font-semibold text-white">fintech</span> and{" "}
                <span className="font-semibold text-white">telecom</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                <motion.a
                  href="/contact"
                  className="group px-8 py-4 rounded-full gradient-blue-purple text-white font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[var(--cyber-blue)]/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/experience"
                  className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Experience
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--cyber-blue)]/50 transition-all"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px]">
                {/* Main floating card */}
                <div className="absolute inset-0 glass-panel p-8">
                  <div className="h-full flex flex-col justify-center">
                    {/* Tech stack floating icons */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-[var(--cyber-blue)]/10 border border-[var(--cyber-blue)]/30 flex items-center justify-center">
                          <Code className="w-8 h-8 text-[var(--cyber-blue)]" />
                        </div>
                        <span className="text-sm text-gray-300">
                          React/Angular
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-[var(--cyber-purple)]/10 border border-[var(--cyber-purple)]/30 flex items-center justify-center">
                          <Shield className="w-8 h-8 text-[var(--cyber-purple)]" />
                        </div>
                        <span className="text-sm text-gray-300">
                          Fintech Security
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-[var(--cyber-green)]/10 border border-[var(--cyber-green)]/30 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-[var(--cyber-green)]" />
                        </div>
                        <span className="text-sm text-gray-300">
                          Performance
                        </span>
                      </div>
                    </div>

                    {/* Current Role */}
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold mb-3 text-gray-300">
                        Currently at
                      </h3>
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
                          <Image
                            src="/emirates_nbd_logo.jpeg"
                            alt="Emirates NBD"
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-lg font-semibold text-white">
                          Emirates NBD
                        </span>
                        <span className="text-sm text-gray-400">
                          Dubai, UAE
                        </span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-xl bg-[var(--cyber-blue)]/10 border border-[var(--cyber-blue)]/20">
                        <div className="text-3xl font-bold text-[var(--cyber-blue)]">
                          5M+
                        </div>
                        <div className="text-sm text-gray-400">
                          Users Served
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-[var(--cyber-purple)]/10 border border-[var(--cyber-purple)]/20">
                        <div className="text-3xl font-bold text-[var(--cyber-purple)]">
                          800+
                        </div>
                        <div className="text-sm text-gray-400">
                          API Calls/Day
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <FloatingElements />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <StatsCounter
                    to={stat.value}
                    duration={2}
                    delay={index * 0.2}
                    className="text-4xl md:text-5xl font-bold cyber-text mb-2 block"
                    suffix={stat.suffix}
                  />
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 cyber-text">
              Explore My Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/experience">
                <motion.div
                  className="glass-panel p-8 h-full group cursor-pointer"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Briefcase className="w-12 h-12 text-[var(--cyber-blue)] mb-6" />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Experience
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Journey through Emirates NBD, Verizon, and KIA Motors with
                    detailed achievements and metrics.
                  </p>
                  <div className="flex items-center text-[var(--cyber-blue)] group-hover:gap-2 transition-all">
                    <span>View Timeline</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.div>
              </Link>

              <Link href="/projects">
                <motion.div
                  className="glass-panel p-8 h-full group cursor-pointer"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code className="w-12 h-12 text-[var(--cyber-purple)] mb-6" />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Projects
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Explore DevInsight, Strings Helmet Point, and other
                    innovative projects with live demos.
                  </p>
                  <div className="flex items-center text-[var(--cyber-purple)] group-hover:gap-2 transition-all">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.div>
              </Link>

              <Link href="/skills">
                <motion.div
                  className="glass-panel p-8 h-full group cursor-pointer"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-12 h-12 text-[var(--cyber-green)] mb-6" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Skills</h3>
                  <p className="text-gray-400 mb-4">
                    Interactive visualization of technical skills, frameworks,
                    and tools expertise.
                  </p>
                  <div className="flex items-center text-[var(--cyber-green)] group-hover:gap-2 transition-all">
                    <span>View Skills</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
