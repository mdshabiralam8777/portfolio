"use client";

import { motion } from "framer-motion";
import { Code, Shield, Zap, Database, Cpu, Globe } from "lucide-react";

const elements = [
  { icon: <Code className="w-5 h-5" />, color: "#00D4FF", delay: 0 },
  { icon: <Shield className="w-5 h-5" />, color: "#9D00FF", delay: 0.2 },
  { icon: <Zap className="w-5 h-5" />, color: "#00FF9D", delay: 0.4 },
  { icon: <Database className="w-5 h-5" />, color: "#FF00FF", delay: 0.6 },
  { icon: <Cpu className="w-5 h-5" />, color: "#FF6B00", delay: 0.8 },
  { icon: <Globe className="w-5 h-5" />, color: "#00D4FF", delay: 1 },
];

export function FloatingElements() {
  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ color: element.color }}
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
            ],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div
            className="p-3 rounded-xl backdrop-blur-sm border"
            style={{
              backgroundColor: `${element.color}10`,
              borderColor: `${element.color}30`,
            }}
          >
            {element.icon}
          </div>
        </motion.div>
      ))}
    </>
  );
}
