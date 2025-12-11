"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Shabir consistently delivers high-quality code and brings innovative solutions to complex problems. His expertise in Angular and React is exceptional.",
    author: "Team Lead",
    role: "Emirates NBD",
    color: "var(--cyber-blue)",
  },
  {
    quote:
      "An outstanding developer who combines technical excellence with great communication skills. He's a valuable asset to any team.",
    author: "Senior Manager",
    role: "Verizon",
    color: "var(--cyber-purple)",
  },
  {
    quote:
      "Shabir's ability to optimize performance and deliver user-friendly interfaces made a significant impact on our projects.",
    author: "Project Manager",
    role: "KIA Motors",
    color: "var(--cyber-green)",
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 cyber-text">
            What People Say
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Feedback from colleagues and managers I've worked with
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 relative"
              >
                {/* Quote icon */}
                <div
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${testimonial.color}20` }}
                >
                  <Quote
                    className="w-5 h-5"
                    style={{ color: testimonial.color }}
                  />
                </div>

                {/* Quote text */}
                <p className="text-gray-300 mb-6 mt-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: `${testimonial.color}30` }}
                  >
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
