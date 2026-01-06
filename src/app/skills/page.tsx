"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    color: "var(--cyber-blue)",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Angular", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Redux/RxJS", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    color: "var(--cyber-purple)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "WebSockets", level: 78 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    id: "testing",
    name: "Testing & Quality",
    color: "var(--cyber-green)",
    skills: [
      { name: "Jest", level: 85 },
      { name: "Jasmine", level: 82 },
      { name: "Playwright", level: 75 },
      { name: "Lighthouse", level: 88 },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    color: "var(--cyber-orange)",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Jenkins (CI/CD)", level: 78 },
      { name: "Postman", level: 90 },
      { name: "Swagger", level: 85 },
    ],
  },
  {
    id: "other",
    name: "Other Skills",
    color: "var(--cyber-pink)",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Performance Optimization", level: 90 },
      { name: "Microfrontends", level: 82 },
      { name: "Responsive Design", level: 95 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
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
            Technical Expertise
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-text tracking-tight">
            Skills & Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built over 6+ years of professional
            development in fintech and telecom industries
          </p>
        </motion.div>
      </div>

      {/* All Skills Grid - All categories visible at once */}
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="glass-panel p-6"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: category.color }}
                  ></span>
                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ backgroundColor: category.color }}
                  ></span>
                </span>
                <h2
                  className="text-lg font-semibold"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h2>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-white text-center flex items-center justify-center gap-3">
            <span className="w-1 h-6 bg-gradient-to-b from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full"></span>
            Certifications & Achievements
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://www.credly.com/badges/1a236f11-4b18-410d-8456-ec6723743376"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 } as const}
              className="glass-panel p-6 text-center block cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--cyber-blue)]/20 flex items-center justify-center">
                <span className="text-2xl">🏅</span>
              </div>
              <h3 className="font-bold text-white mb-2">
                SAFe® 5 Practitioner
              </h3>
              <p className="text-sm text-gray-400">Scaled Agile, Inc.</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7396193721341550592/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 } as const}
              className="glass-panel p-6 text-center block cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--cyber-green)]/20 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-white mb-2">On-the-Spot Award</h3>
              <p className="text-sm text-gray-400">Emirates NBD - DevInsight</p>
            </motion.a>

            <motion.a
              href="https://www.udemy.com/certificate/UC-8d695f0e-a858-4845-a3e7-8c3716ae20e1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 } as const}
              className="glass-panel p-6 text-center block cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--cyber-purple)]/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[var(--cyber-purple)]" />
              </div>
              <h3 className="font-bold text-white mb-2">
                Angular Complete Guide
              </h3>
              <p className="text-sm text-gray-400">Udemy - 2025 Edition</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
