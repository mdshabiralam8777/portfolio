# **Portfolio Website Implementation: Phase 2**

## **🌐 Complete Site Structure Implementation**

### **1. Next.js 14 Project Setup**

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --no-eslint
cd portfolio

# Install dependencies
npm install @react-three/fiber @react-three/drei three @types/three
npm install framer-motion gsap @types/gsap lucide-react
npm install @react-spring/web use-gesture clsx tailwind-merge
npm install @nextui-org/react @vercel/analytics
npm install sharp @types/sharp
```

### **2. Tailwind Configuration with Glass Effects**

```javascript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7ff",
          100: "#b3e0ff",
          200: "#80c9ff",
          300: "#4db2ff",
          400: "#1a9bff",
          500: "#0084e6",
          600: "#006db3",
          700: "#005680",
          800: "#003f4d",
          900: "#00281a",
        },
        cyber: {
          blue: "#00D4FF",
          purple: "#9D00FF",
          green: "#00FF9D",
          pink: "#FF00FF",
          orange: "#FF6B00",
        },
        glass: {
          dark: "rgba(15, 23, 42, 0.7)",
          light: "rgba(255, 255, 255, 0.1)",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        scan: "scan 3s linear infinite",
        neon: "neon 1.5s ease-in-out infinite alternate",
        orbit: "orbit 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        neon: {
          "0%": {
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00D4FF, 0 0 20px #00D4FF, 0 0 25px #00D4FF",
          },
          "100%": {
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00D4FF, 0 0 40px #00D4FF, 0 0 50px #00D4FF",
          },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(150px) rotate(-360deg)",
          },
        },
      },
      backdropBlur: {
        glass: "20px",
        strong: "40px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-grid": `linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
        "gradient-cyber":
          "linear-gradient(135deg, #00D4FF 0%, #9D00FF 50%, #00FF9D 100%)",
        "gradient-glass": `linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 50%,
          rgba(255, 255, 255, 0.025) 100%
        )`,
      },
    },
  },
  plugins: [],
};
export default config;
```

### **3. Global Styles with Glassmorphism**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --glass: 0 0% 100% / 0.1;
    --neon-blue: 190 100% 50%;
    --neon-purple: 276 100% 50%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-black text-white;
    background: radial-gradient(ellipse at top, #0a0a0f 0%, #000000 100%);
    overflow-x: hidden;
  }
}

@layer components {
  .glass-panel {
    @apply backdrop-blur-glass bg-glass-dark border border-white/10 rounded-2xl;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.025) 100%
    );
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .glass-panel::before {
    content: "";
    @apply absolute inset-0 rounded-2xl -z-10;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 212, 255, 0.2),
      transparent
    );
    margin: -1px;
  }

  .cyber-text {
    @apply font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green bg-clip-text text-transparent;
    background-size: 200% auto;
    animation: shimmer 2s linear infinite;
  }

  .hologram-effect {
    position: relative;
  }

  .hologram-effect::after {
    content: "";
    @apply absolute inset-0 rounded-2xl pointer-events-none;
    background: linear-gradient(
      0deg,
      transparent 0%,
      rgba(0, 212, 255, 0.1) 50%,
      transparent 100%
    );
    animation: scan 3s linear infinite;
  }

  .particle-bg {
    background-image: radial-gradient(
        circle at 20% 30%,
        rgba(0, 212, 255, 0.1) 0%,
        transparent 50%
      ), radial-gradient(
        circle at 80% 70%,
        rgba(157, 0, 255, 0.1) 0%,
        transparent 50%
      ), radial-gradient(circle at 40% 80%, rgba(0, 255, 157, 0.1) 0%, transparent
          50%);
  }

  .grid-bg {
    background-image: linear-gradient(
        rgba(0, 212, 255, 0.1) 1px,
        transparent 1px
      ), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  @apply bg-black;
}

::-webkit-scrollbar-thumb {
  @apply bg-gradient-to-b from-cyber-blue to-cyber-purple rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply from-cyber-purple to-cyber-green;
}
```

### **4. App Layout with Providers**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/layout/Navigation";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Mohammed Shabir Alam | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 5+ years experience creating secure, scalable web applications in fintech and telecom.",
  keywords: [
    "Frontend Developer",
    "React",
    "Angular",
    "TypeScript",
    "Fintech",
    "Dubai",
    "Senior Developer",
  ],
  authors: [{ name: "Mohammed Shabir Alam" }],
  creator: "Mohammed Shabir Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shabiralam.com",
    title: "Mohammed Shabir Alam | Senior Frontend Developer",
    description:
      "Transforming complex challenges into elegant, scalable solutions",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Shabir Alam | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in fintech and telecom",
    images: ["/twitter-image.png"],
    creator: "@shabiralam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        <ParticleBackground />
        <Providers>
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
```

### **5. Providers Configuration**

```tsx
// src/app/providers.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
```

### **6. Navigation Component**

```tsx
// src/components/layout/Navigation.tsx
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
  User,
  Mail,
  Sparkles,
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
  { name: "About", path: "/about", icon: <User className="w-4 h-4" /> },
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

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:block ${
          scrolled ? "w-[90%]" : "w-[80%]"
        }`}
      >
        <motion.div
          className="glass-panel px-8 py-4"
          animate={{
            backdropFilter: scrolled ? "blur(40px)" : "blur(20px)",
            backgroundColor: scrolled
              ? "rgba(10, 10, 15, 0.8)"
              : "rgba(10, 10, 15, 0.5)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                  <span className="text-lg font-bold">MS</span>
                </div>
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  Mohammed Shabir Alam
                </h1>
                <p className="text-xs text-gray-400">
                  Senior Frontend Developer
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
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
                          ? "text-cyber-blue"
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
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                        initial={false}
                      />
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </Link>
                );
              })}

              {/* CTA Button */}
              <motion.a
                href="/Mohammed_Shabir_Alam_Latest_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium hover:shadow-lg hover:shadow-cyber-blue/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
      >
        <div className="glass-panel px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                <span className="text-lg font-bold">MS</span>
              </div>
              <div>
                <h1 className="font-bold text-sm bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  M. Shabir Alam
                </h1>
                <p className="text-xs text-gray-400">Senior Frontend Dev</p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-panel mt-2 p-4"
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
                            ? "bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 text-cyber-blue"
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
                  href="/Mohammed_Shabir_Alam_Latest_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
```

### **7. Particle Background Component**

```tsx
// src/components/effects/ParticleBackground.tsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particle = ({ position, size, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

      // Floating animation
      meshRef.current.position.y =
        position[1] +
        Math.sin(state.clock.getElapsedTime() + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

const Particles = () => {
  const particles = useMemo(() => {
    const count = 100;
    const positions = [];
    const colors = [
      new THREE.Color("#00D4FF"),
      new THREE.Color("#9D00FF"),
      new THREE.Color("#00FF9D"),
      new THREE.Color("#FF00FF"),
    ];

    for (let i = 0; i < count; i++) {
      positions.push([
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
      ]);
    }

    return positions;
  }, []);

  return (
    <>
      {particles.map((pos, i) => (
        <Particle
          key={i}
          position={pos as [number, number, number]}
          size={Math.random() * 0.5 + 0.1}
          color={
            i % 4 === 0
              ? "#00D4FF"
              : i % 4 === 1
              ? "#9D00FF"
              : i % 4 === 2
              ? "#00FF9D"
              : "#FF00FF"
          }
        />
      ))}
    </>
  );
};

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
      </Canvas>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10" />
    </div>
  );
}
```

### **8. Home Page Hero Section**

```tsx
// src/app/page.tsx
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
  Twitter,
  Mail,
} from "lucide-react";
import Link from "next/link";
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
      href: "https://github.com/shabiralam",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/shabiralam",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/shabiralam",
      label: "Twitter",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:alammohammedshahir@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyber-blue" />
                <span className="text-sm text-cyber-blue">
                  Senior Frontend Developer
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Mohammed</span>
                <span className="block cyber-text">Shabir Alam</span>
              </h1>

              <div className="h-20 mb-8">
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
                  className="text-2xl md:text-3xl text-gray-300"
                />
              </div>

              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Specializing in{" "}
                <span className="text-cyber-blue font-semibold">Angular</span>,{" "}
                <span className="text-cyber-purple font-semibold">React</span>,
                and{" "}
                <span className="text-cyber-green font-semibold">Node.js</span>{" "}
                to deliver impactful solutions in{" "}
                <span className="font-semibold">fintech</span> and{" "}
                <span className="font-semibold">telecom</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  href="/contact"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/experience"
                  className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Experience
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-blue/50 transition-all group"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - 3D/Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px]">
                {/* Main floating card */}
                <div className="absolute inset-0 glass-panel p-8">
                  <div className="h-full flex flex-col justify-center">
                    {/* Tech stack floating icons */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/5 border border-cyber-blue/30 flex items-center justify-center">
                          <Code className="w-8 h-8 text-cyber-blue" />
                        </div>
                        <span className="text-sm text-gray-300">
                          React/Angular
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyber-purple/20 to-cyber-purple/5 border border-cyber-purple/30 flex items-center justify-center">
                          <Shield className="w-8 h-8 text-cyber-purple" />
                        </div>
                        <span className="text-sm text-gray-300">
                          Fintech Security
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyber-green/20 to-cyber-green/5 border border-cyber-green/30 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-cyber-green" />
                        </div>
                        <span className="text-sm text-gray-300">
                          Performance
                        </span>
                      </div>
                    </div>

                    {/* Current Role */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Currently at</h3>
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">EN</span>
                        </div>
                        <span className="text-lg font-semibold">
                          Emirates NBD
                        </span>
                        <span className="text-sm text-gray-400">
                          Dubai, UAE
                        </span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyber-blue/10 to-transparent border border-cyber-blue/20">
                        <div className="text-3xl font-bold text-cyber-blue">
                          5M+
                        </div>
                        <div className="text-sm text-gray-400">
                          Users Served
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyber-purple/10 to-transparent border border-cyber-purple/20">
                        <div className="text-3xl font-bold text-cyber-purple">
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
      <section className="py-20">
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
                    from={0}
                    to={stat.value}
                    duration={2}
                    delay={index * 0.3}
                    className="text-4xl md:text-5xl font-bold cyber-text mb-2"
                    suffix={stat.suffix}
                  />
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 cyber-text">
              Explore My Work
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/experience">
                <motion.div
                  className="glass-panel p-8 h-full group cursor-pointer"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Briefcase className="w-12 h-12 text-cyber-blue mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Experience</h3>
                  <p className="text-gray-400 mb-4">
                    Journey through Emirates NBD, Verizon, and KIA Motors with
                    detailed achievements and metrics.
                  </p>
                  <div className="flex items-center text-cyber-blue group-hover:gap-2 transition-all">
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
                  <Code className="w-12 h-12 text-cyber-purple mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Projects</h3>
                  <p className="text-gray-400 mb-4">
                    Explore DevInsight, Strings Helmet Point, and other
                    innovative projects with live demos.
                  </p>
                  <div className="flex items-center text-cyber-purple group-hover:gap-2 transition-all">
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
                  <Sparkles className="w-12 h-12 text-cyber-green mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Skills</h3>
                  <p className="text-gray-400 mb-4">
                    Interactive visualization of technical skills, frameworks,
                    and tools expertise.
                  </p>
                  <div className="flex items-center text-cyber-green group-hover:gap-2 transition-all">
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
```

### **9. UI Components**

#### **Typewriter Component**

```tsx
// src/components/ui/Typewriter.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({
  texts,
  speed = 50,
  delay = 2000,
  className = "",
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const type = useCallback(() => {
    if (isPaused) return;

    const fullText = texts[currentTextIndex];

    if (!isDeleting && currentText === fullText) {
      // Pause at the end of typing
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return;
    }

    if (isDeleting && currentText === "") {
      // Move to next text when deleted
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1);
          } else {
            return fullText.substring(0, prev.length + 1);
          }
        });
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    speed,
    delay,
  ]);

  useEffect(() => {
    const timeout = type();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [type]);

  return (
    <div className={`font-mono ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="inline-block"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-6 ml-1 bg-cyber-blue"
          />
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
```

#### **Stats Counter Component**

```tsx
// src/components/ui/StatsCounter.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface StatsCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function StatsCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
}: StatsCounterProps) {
  const [isInView, setIsInView] = useState(false);

  const spring = useSpring(from, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(spring, (value) => {
    return prefix + Math.floor(value) + suffix;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return <motion.span className={className}>{displayValue}</motion.span>;
}
```

#### **Floating Elements Component**

```tsx
// src/components/effects/FloatingElements.tsx
"use client";

import { motion } from "framer-motion";
import {
  React as ReactIcon,
  Angular,
  Nodejs,
  Typescript,
  Database,
  Cpu,
} from "lucide-react";

export function FloatingElements() {
  const elements = [
    {
      icon: <ReactIcon className="w-6 h-6" />,
      color: "text-cyan-400",
      delay: 0,
    },
    {
      icon: <Angular className="w-6 h-6" />,
      color: "text-red-400",
      delay: 0.2,
    },
    {
      icon: <Nodejs className="w-6 h-6" />,
      color: "text-green-400",
      delay: 0.4,
    },
    {
      icon: <Typescript className="w-6 h-6" />,
      color: "text-blue-400",
      delay: 0.6,
    },
    {
      icon: <Database className="w-6 h-6" />,
      color: "text-yellow-400",
      delay: 0.8,
    },
    { icon: <Cpu className="w-6 h-6" />, color: "text-purple-400", delay: 1 },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color}`}
          initial={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="p-3 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
            {element.icon}
          </div>
        </motion.div>
      ))}
    </>
  );
}
```

### **10. Experience Page (Timeline Implementation)**

```tsx
// src/app/experience/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  Zap,
  TrendingUp,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Timeline3D } from "@/components/timeline/Timeline3D";
import { timelineData } from "@/components/timeline/utils/timelineData";
import { useState } from "react";

export default function ExperiencePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = timelineData[activeIndex];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text">
            Career Journey
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            5+ years of transforming complex challenges into elegant, scalable
            solutions at leading companies
          </p>
        </motion.div>
      </div>

      {/* 3D Timeline */}
      <div className="container mx-auto px-4 mb-20">
        <div className="h-[60vh] rounded-2xl overflow-hidden border border-cyber-blue/20">
          <Timeline3D activeIndex={activeIndex} onNodeClick={setActiveIndex} />
        </div>
      </div>

      {/* Experience Details */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Company Card */}
          <motion.div
            key={activeEntry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${activeEntry.company.color}20`,
                    }}
                  >
                    <Briefcase
                      className="w-8 h-8"
                      style={{ color: activeEntry.company.color }}
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">
                      {activeEntry.role.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-400 mt-2">
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

                <p className="text-gray-300 mb-6">
                  {activeEntry.company.name} • {activeEntry.role.type}
                </p>
              </div>

              {activeEntry.stats && (
                <div className="hidden md:block">
                  <div className="grid grid-cols-2 gap-3">
                    {activeEntry.stats.usersImpacted && (
                      <div className="text-center p-3 rounded-lg bg-cyber-blue/10">
                        <Users className="w-5 h-5 text-cyber-blue mx-auto mb-1" />
                        <div className="text-lg font-bold">
                          {activeEntry.stats.usersImpacted}
                        </div>
                      </div>
                    )}
                    {activeEntry.stats.performanceImprovement && (
                      <div className="text-center p-3 rounded-lg bg-cyber-purple/10">
                        <Zap className="w-5 h-5 text-cyber-purple mx-auto mb-1" />
                        <div className="text-lg font-bold">
                          {activeEntry.stats.performanceImprovement}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              {activeEntry.achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-cyber-blue/20 mt-1">
                    <ChevronRight className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-gray-200">{achievement.text}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {achievement.metrics && (
                        <span className="text-xs px-2 py-1 rounded-full bg-cyber-blue/20 text-cyber-blue">
                          📊 {achievement.metrics}
                        </span>
                      )}
                      {achievement.impact && (
                        <span className="text-xs px-2 py-1 rounded-full bg-cyber-purple/20 text-cyber-purple">
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
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {activeEntry.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 text-cyber-blue border border-cyber-blue/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Navigation */}
          <div className="space-y-4">
            {timelineData.map((entry, index) => (
              <motion.button
                key={entry.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  index === activeIndex
                    ? "glass-panel border-cyber-blue/30"
                    : "bg-white/5 hover:bg-white/10 border border-transparent"
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor:
                          index === activeIndex
                            ? `${entry.company.color}30`
                            : `${entry.company.color}10`,
                      }}
                    >
                      <Briefcase
                        className="w-6 h-6"
                        style={{
                          color:
                            index === activeIndex
                              ? entry.company.color
                              : `${entry.company.color}80`,
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{entry.company.name}</h3>
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
                        ? "text-cyber-blue"
                        : "text-gray-500"
                    }`}
                  >
                    {index === activeIndex ? (
                      <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
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
                        <Users className="w-4 h-4 text-cyber-blue" />
                        <span className="text-sm">
                          {entry.stats.usersImpacted}
                        </span>
                      </div>
                    )}
                    {entry.stats.performanceImprovement && (
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-cyber-purple" />
                        <span className="text-sm">
                          {entry.stats.performanceImprovement}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### **11. API Routes Setup (Backend)**

#### **Contact Form API**

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone, company } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const client = await MongoClient.connect(mongoUri);
    const db = client.db(dbName);

    const contactData = {
      name,
      email,
      phone,
      company,
      message,
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent"),
      createdAt: new Date(),
      status: "pending",
    };

    await db.collection("contacts").insertOne(contactData);
    await client.close();

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>`
                : ""
            }
            ${
              company
                ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Time:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for contacting Mohammed Shabir Alam",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out. I have received your message and will get back to you within 24-48 hours.</p>
          <p>In the meantime, you can:</p>
          <ul>
            <li>Check out my <a href="https://shabiralam.com/experience">Experience</a></li>
            <li>View my <a href="https://shabiralam.com/projects">Projects</a></li>
            <li>Download my <a href="https://shabiralam.com/Mohammed_Shabir_Alam_Latest_CV.pdf">CV</a></li>
          </ul>
          <p>Best regards,</p>
          <p><strong>Mohammed Shabir Alam</strong><br/>
          Senior Frontend Developer<br/>
          Dubai, UAE</p>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
```

#### **Visitor Analytics API**

```typescript
// src/app/api/analytics/route.ts
import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

export async function POST(request: NextRequest) {
  try {
    const { type, page, referrer, userAgent, screen } = await request.json();
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    const client = await MongoClient.connect(mongoUri);
    const db = client.db(dbName);

    const analyticsData = {
      type,
      page,
      ip,
      referrer,
      userAgent,
      screen,
      timestamp: new Date(),
    };

    await db.collection("analytics").insertOne(analyticsData);
    await client.close();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: "Failed to log analytics" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await MongoClient.connect(mongoUri);
    const db = client.db(dbName);

    // Get visitor count
    const visitors = await db
      .collection("analytics")
      .distinct("ip", { type: "pageview" });

    // Get page views
    const pageViews = await db
      .collection("analytics")
      .countDocuments({ type: "pageview" });

    // Get today's views
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayViews = await db.collection("analytics").countDocuments({
      type: "pageview",
      timestamp: { $gte: today },
    });

    await client.close();

    return NextResponse.json({
      totalVisitors: visitors.length,
      totalPageViews: pageViews,
      todayViews,
    });
  } catch (error) {
    console.error("Analytics fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
```

### **12. Environment Configuration**

```env
# .env.local
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB=portfolio_db

# Email SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@shabiralam.com
SMTP_TO=alammohammedshahir@gmail.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXXX

# Next.js
NEXTAUTH_URL=https://shabiralam.com
NEXTAUTH_SECRET=your-secret-key-here
```

### **13. Package.json Scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "seed": "ts-node scripts/seed.ts",
    "export": "next export",
    "analyze": "ANALYZE=true next build",
    "deploy": "vercel --prod"
  }
}
```

### **14. Deployment Configuration**

#### **vercel.json**

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "SMTP_USER": "@smtp_user",
    "SMTP_PASS": "@smtp_pass"
  },
  "regions": ["dub1"],
  "functions": {
    "app/api/**/*.js": {
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

#### **next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
```

## **🚀 Deployment Checklist**

### **Phase 1: Development Setup**

- [ ] Initialize Next.js project with TypeScript
- [ ] Install and configure dependencies
- [ ] Set up Tailwind with glass effects
- [ ] Create base layout and navigation
- [ ] Implement ParticleBackground

### **Phase 2: Core Pages**

- [ ] Complete Home page with hero section
- [ ] Implement Experience page with 3D timeline
- [ ] Build Projects showcase
- [ ] Create Skills visualization
- [ ] Build Contact page with form

### **Phase 3: Advanced Features**

- [ ] Set up MongoDB connection
- [ ] Implement API routes
- [ ] Add analytics tracking
- [ ] Configure email notifications
- [ ] Add SEO optimizations

### **Phase 4: Polish & Performance**

- [ ] Optimize images and assets
- [ ] Implement code splitting
- [ ] Add loading states
- [ ] Test accessibility
- [ ] Optimize for mobile

### **Phase 5: Deployment**

- [ ] Configure environment variables
- [ ] Set up Vercel project
- [ ] Connect custom domain
- [ ] Implement SSL/TLS
- [ ] Set up monitoring

## **📊 Performance Targets**

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Page Size: < 200kb

## **🔧 Development Commands**

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint and format
npm run lint
npm run format

# Type checking
npm run type-check

# Deploy to Vercel
vercel
vercel --prod
```

## **🎯 Next Steps**

1. **Set up the development environment** with the commands above
2. **Create the file structure** as specified
3. **Implement each component** one by one
4. **Test locally** after each major component
5. **Deploy to Vercel** for staging
6. **Add custom domain** and SSL
7. **Monitor performance** and analytics

The implementation is modular and follows best practices for a production-ready portfolio. Each component is designed to be reusable, performant, and visually stunning with the glassmorphism effects you requested.

Would you like me to continue with:

1. Projects page implementation
2. Skills visualization component
3. Contact form with validation
4. Backend API implementation details
5. SEO optimization strategies

Let me know which part you'd like to focus on next!
