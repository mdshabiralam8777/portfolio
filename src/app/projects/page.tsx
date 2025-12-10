"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Server,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "devinsight",
    title: "DevInsight",
    subtitle: "Internal Developer Portal",
    description:
      "A full-stack internal platform for Emirates NBD to investigate and debug issues across UAT environments, now widely adopted by multiple teams.",
    features: [
      "Unified search and detail panels for customer, product, device, and account information",
      "Dynamic data exploration with clickable tables and drill-down panels",
      "Integrated utilities: API testing, encoding/decoding, diagramming",
      "Multi-entity theming and one-pane experience",
    ],
    stats: {
      primary: "800+",
      primaryLabel: "API Calls/Day",
      secondary: "Multi-team",
      secondaryLabel: "Adoption",
    },
    technologies: ["React", "Node.js", "REST APIs", "TypeScript"],
    links: {
      github: "https://github.com/mdshabiralam8777/DevInsight",
    },
    color: "var(--cyber-blue)",
    featured: true,
  },
  {
    id: "strings-helmet",
    title: "Strings Helmet Point",
    subtitle: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform using MERN Stack featuring a responsive admin dashboard for inventory management with secure payment integration.",
    features: [
      "Responsive admin dashboard for inventory management",
      "Secure PhonePe Payment Gateway (SHA256/OAuth)",
      "Automated Nodemailer system for order confirmations",
      "Context API for persistent cart state",
      "Code splitting and React hooks optimization",
    ],
    stats: {
      primary: "Live",
      primaryLabel: "Production",
      secondary: "MERN",
      secondaryLabel: "Full Stack",
    },
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "PhonePe",
      "Cloudinary",
    ],
    links: {
      live: "https://www.stringshelmetpoint.co.in/",
    },
    color: "var(--cyber-purple)",
    featured: true,
  },
  {
    id: "webmonitor-hub",
    title: "WebMonitor-Hub",
    subtitle: "Website Monitoring Tool",
    description:
      "A MEAN-stack application that enables companies to monitor and update the status of their production websites with secure JWT authentication.",
    features: [
      "Real-time website status monitoring",
      "Secure JWT authentication with verified email access",
      "Centralized dashboard for multiple websites",
      "Company admin access controls",
    ],
    stats: {
      primary: "Ongoing",
      primaryLabel: "Development",
      secondary: "MEAN",
      secondaryLabel: "Stack",
    },
    technologies: ["Angular", "Node.js", "MongoDB", "Express", "JWT"],
    links: {
      github: "https://github.com/mdshabiralam8777/WebMonitor-Hub",
    },
    color: "var(--cyber-green)",
    featured: false,
  },
  {
    id: "cinemapedia",
    title: "Cinemapedia",
    subtitle: "Movie Database App",
    description:
      "An Angular application for browsing movie details, trailers, and merchandise with advanced filtering and search capabilities.",
    features: [
      "Movie details, trailers, and merchandise browsing",
      "Language-genre sorting and advanced filtering",
      "TMDB API integration",
      "Order tracking system with email notifications",
    ],
    stats: {
      primary: "TMDB",
      primaryLabel: "API Integration",
      secondary: "Angular",
      secondaryLabel: "Framework",
    },
    technologies: ["Angular", "TypeScript", "TMDB API", "SCSS"],
    links: {
      github: "https://github.com/mdshabiralam8777/CinemaPedia",
    },
    color: "var(--cyber-orange)",
    featured: false,
  },
];

export default function ProjectsPage() {
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
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions built with modern technologies, from internal
            developer tools to production e-commerce platforms
          </p>
        </motion.div>
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-8 text-white flex items-center gap-2"
        >
          <Star className="w-6 h-6 text-[var(--cyber-blue)]" />
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 md:p-8 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor: `${project.color}15`,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      <Code
                        className="w-4 h-4"
                        style={{ color: project.color }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: project.color }}
                      >
                        {project.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    <div
                      className="text-2xl font-bold"
                      style={{ color: project.color }}
                    >
                      {project.stats.primary}
                    </div>
                    <div className="text-sm text-gray-400">
                      {project.stats.primaryLabel}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">
                      {project.stats.secondary}
                    </div>
                    <div className="text-sm text-gray-400">
                      {project.stats.secondaryLabel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <ArrowRight
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: project.color }}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-white flex items-center gap-2"
        >
          <Globe className="w-6 h-6 text-[var(--cyber-green)]" />
          Other Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 group hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs bg-white/5 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
