"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "alammohammedshabir@gmail.com",
    href: "mailto:alammohammedshabir@gmail.com",
    color: "var(--cyber-blue)",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+971 58 809 3589",
    href: "tel:+971588093589",
    color: "var(--cyber-purple)",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/971588093589",
    color: "var(--cyber-green)",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Dubai, UAE",
    href: null,
    color: "var(--cyber-orange)",
  },
];

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/mdshabiralam8777",
    username: "@mdshabiralam8777",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-shabir-alam-1014b6144/",
    username: "Mohammed Shabir Alam",
  },
];

export default function ContactPage() {
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
            Let's Connect
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-text tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project
            or opportunity.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="glass-panel p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full"></span>
                Contact Information
              </h2>

              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {contactMethods.map((method, index) => (
                  <motion.div key={method.label} variants={itemVariants}>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={
                          method.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          method.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-200 group"
                      >
                        <div
                          className="p-3 rounded-lg group-hover:scale-105 transition-transform duration-200"
                          style={{
                            backgroundColor: `${method.color}15`,
                            border: `1px solid ${method.color}20`,
                          }}
                        >
                          <span style={{ color: method.color }}>
                            {method.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-gray-500">
                            {method.label}
                          </p>
                          <p className="text-sm md:text-base text-white font-medium group-hover:text-[var(--cyber-blue)] transition-colors duration-200 truncate">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: `${method.color}15`,
                            border: `1px solid ${method.color}20`,
                          }}
                        >
                          <span style={{ color: method.color }}>
                            {method.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-gray-500">
                            {method.label}
                          </p>
                          <p className="text-sm md:text-base text-white font-medium truncate">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-panel p-6 md:p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[var(--cyber-purple)] to-[var(--cyber-blue)] rounded-full"></span>
                Connect With Me
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-200 group"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="text-gray-400 group-hover:text-[var(--cyber-blue)] transition-colors duration-200">
                      {social.icon}
                    </span>
                    <div>
                      <p className="text-white font-medium">{social.label}</p>
                      <p className="text-xs text-gray-500 hidden md:block">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="glass-panel p-6 md:p-8 h-full">
              <div className="h-full flex flex-col justify-center text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full gradient-blue-purple flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Send className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">
                  Let's Work Together
                </h2>

                <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you need a frontend expert or a full-stack solution,
                  I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:alammohammedshabir@gmail.com?subject=Project%20Inquiry&body=Hi%20Mohammed,%0A%0AI'd%20like%20to%20discuss%20a%20project%20opportunity.%0A%0ABest%20regards"
                    className="block w-full py-4 px-6 rounded-full gradient-blue-purple text-white font-semibold hover:shadow-lg hover:shadow-[var(--cyber-blue)]/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Send an Email
                    </span>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/971588093589?text=Hi%20Mohammed,%20I'd%20like%20to%20discuss%20a%20project%20opportunity."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 px-6 rounded-full border border-[var(--cyber-green)]/50 text-[var(--cyber-green)] font-semibold hover:bg-[var(--cyber-green)]/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Message on WhatsApp
                    </span>
                  </motion.a>
                </div>

                {/* Availability */}
                <div className="mt-8 pt-8 border-t border-white/[0.06]">
                  <div className="flex items-center justify-center gap-2 text-[var(--cyber-green)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cyber-green)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--cyber-green)]"></span>
                    </span>
                    <span className="font-medium">
                      Available for new projects
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-500 mt-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      Typically responds within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
