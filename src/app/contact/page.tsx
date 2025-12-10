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
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-text">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
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
            transition={{ delay: 0.2 }}
          >
            <div className="glass-panel p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h2>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
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
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <div
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${method.color}20` }}
                        >
                          <span style={{ color: method.color }}>
                            {method.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">
                            {method.label}
                          </p>
                          <p className="text-white font-medium group-hover:text-[var(--cyber-blue)] transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                        <div
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${method.color}20` }}
                        >
                          <span style={{ color: method.color }}>
                            {method.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">
                            {method.label}
                          </p>
                          <p className="text-white font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-panel p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <span className="text-gray-400 group-hover:text-[var(--cyber-blue)] transition-colors">
                      {social.icon}
                    </span>
                    <div>
                      <p className="text-white font-medium">{social.label}</p>
                      <p className="text-xs text-gray-500">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-panel p-6 md:p-8 h-full">
              <div className="h-full flex flex-col justify-center text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-blue-purple flex items-center justify-center">
                  <Send className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Let's Work Together
                </h2>

                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you need a frontend expert or a full-stack solution,
                  I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:alammohammedshabir@gmail.com?subject=Project%20Inquiry&body=Hi%20Mohammed,%0A%0AI'd%20like%20to%20discuss%20a%20project%20opportunity.%0A%0ABest%20regards"
                    className="block w-full py-4 px-6 rounded-full gradient-blue-purple text-white font-semibold hover:shadow-lg hover:shadow-[var(--cyber-blue)]/25 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                    className="block w-full py-4 px-6 rounded-full border border-[var(--cyber-green)]/50 text-[var(--cyber-green)] font-semibold hover:bg-[var(--cyber-green)]/10 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Message on WhatsApp
                    </span>
                  </motion.a>
                </div>

                {/* Availability */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-[var(--cyber-green)]">
                    <CheckCircle className="w-5 h-5" />
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
