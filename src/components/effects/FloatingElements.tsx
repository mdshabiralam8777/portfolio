"use client";

import { motion } from "framer-motion";
import { Code, Shield, Zap, Database, Cpu, Globe } from "lucide-react";
import { useMemo } from "react";

const elements = [
  { icon: <Code className="w-5 h-5" />, color: "#00D4FF", delay: 0 },
  { icon: <Shield className="w-5 h-5" />, color: "#9D00FF", delay: 0.2 },
  { icon: <Zap className="w-5 h-5" />, color: "#00FF9D", delay: 0.4 },
  { icon: <Database className="w-5 h-5" />, color: "#FF00FF", delay: 0.6 },
  { icon: <Cpu className="w-5 h-5" />, color: "#FF6B00", delay: 0.8 },
  { icon: <Globe className="w-5 h-5" />, color: "#00D4FF", delay: 1 },
];

// Fixed positions to avoid hydration mismatch
const fixedPositions = [
  { x1: 80, y1: -60, x2: -40, y2: 70, x3: 60, y3: -80 },
  { x1: -70, y1: 50, x2: 80, y2: -30, x3: -50, y3: 60 },
  { x1: 40, y1: 80, x2: -60, y2: -50, x3: 70, y3: 40 },
  { x1: -50, y1: -70, x2: 50, y2: 80, x3: -80, y3: -30 },
  { x1: 90, y1: 20, x2: -30, y2: -60, x3: 40, y3: 90 },
  { x1: -80, y1: -40, x2: 70, y2: 50, x3: -60, y3: -70 },
];

export function FloatingElements() {
  return (
    <>
      {elements.map((element, index) => {
        const pos = fixedPositions[index];
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ color: element.color }}
            initial={{
              x: pos.x1,
              y: pos.y1,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [pos.x1, pos.x2, pos.x3],
              y: [pos.y1, pos.y2, pos.y3],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 5 + index * 0.5,
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
        );
      })}
    </>
  );
}
