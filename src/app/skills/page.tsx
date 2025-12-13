"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-text">
            Skills & Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built over 6+ years of professional
            development in fintech and telecom industries
          </p>
        </motion.div>
      </div>

      {/* All Skills Grid - All categories visible at once */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: category.color }}
                />
                <h2
                  className="text-xl font-bold"
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
        </div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white text-center">
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
