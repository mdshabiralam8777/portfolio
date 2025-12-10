"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Code,
  Sparkles,
  Mail,
  Download,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
  {
    name: "Experience",
    path: "/experience",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { name: "Projects", path: "/projects", icon: <Code className="w-4 h-4" /> },
  { name: "Skills", path: "/skills", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:block w-[90%] max-w-6xl"
      >
        <motion.div
          className="glass-panel px-8 py-4"
          style={{ backgroundColor: "rgba(10, 10, 15, 0.9)" }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-10 h-10 rounded-full gradient-blue-purple flex items-center justify-center">
                  <span className="text-lg font-bold text-white">MS</span>
                </div>
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg cyber-text">
                  Mohammed Shabir Alam
                </h1>
                <p className="text-xs text-gray-400">
                  Senior Frontend Developer
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="relative group"
                  >
                    <motion.div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        isActive
                          ? "text-[var(--cyber-blue)]"
                          : "text-gray-400 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.icon}
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-2 right-2 h-0.5 gradient-blue-purple rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </Link>
                );
              })}

              {/* CTA Button */}
              <motion.a
                href="/Mohammed_Shabir_Alam__CV_Latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2 rounded-full gradient-blue-purple text-white font-medium text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--cyber-blue)]/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
      >
        <div className="glass-panel px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-blue-purple flex items-center justify-center">
                <span className="text-lg font-bold text-white">MS</span>
              </div>
              <div>
                <h1 className="font-bold text-sm cyber-text">M. Shabir Alam</h1>
                <p className="text-xs text-gray-400">Senior Frontend Dev</p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 p-4 overflow-hidden rounded-2xl border border-white/10"
              style={{
                background: "rgba(10, 10, 15, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-[var(--cyber-blue)]/20 to-[var(--cyber-purple)]/20 text-[var(--cyber-blue)]"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </motion.div>
                    </Link>
                  );
                })}

                <motion.a
                  href="/Mohammed_Shabir_Alam__CV_Latest.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg gradient-blue-purple text-white font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
