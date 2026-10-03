"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const PageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [label, setLabel] = useState("LOADING");

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const custom = e as CustomEvent<{ label?: string }>;
      setLabel(custom.detail?.label || "LOADING");
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    };

    window.addEventListener("page-transition", handleTransition);
    return () => window.removeEventListener("page-transition", handleTransition);
  }, []);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center"
        >
          {/* Background */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-background/90 backdrop-blur-md origin-top"
          />

          {/* Scan line */}
          <motion.div
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-accent shadow-[0_0_20px_rgba(200,255,56,0.8)]" 
            style={{ position: "absolute" }}
          />

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center gap-3"
          >
            <div className="text-[10px] font-mono tracking-[0.3em] text-accent animate-pulse">
              {label}
            </div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
