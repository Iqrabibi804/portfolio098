"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  label: string;
}

export const SectionLabel = ({ number, label }: SectionLabelProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4 mb-6"
  >
    <span className="text-accent font-mono text-xs tracking-widest">{number}</span>
    <div className="w-12 h-[1px] bg-accent/50" />
    <span className="text-xs tracking-[0.3em] text-muted uppercase">{label}</span>
  </motion.div>
);

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedHeading = ({ children, className = "" }: AnimatedHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`text-4xl md:text-6xl font-bold leading-none tracking-tighter ${className}`}
  >
    {children}
  </motion.h2>
);

export const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>
);

export const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-accent/30 rounded-full"
        style={{ left: `${15 + i * 15}%`, top: `${10 + i * 12}%` }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}
  </div>
);
