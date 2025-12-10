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
    const cleanup = type();
    return cleanup;
  }, [type]);

  return (
    <div className={`font-mono ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[3px] h-[1em] ml-1 bg-[var(--cyber-blue)] align-middle"
          />
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
