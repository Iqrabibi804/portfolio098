"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalState } from "@/components/providers/GlobalStateProvider";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { cursorState } = useGlobalState();

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const labels = {
    default: "",
    project: "VIEW",
    tech: "EXPLORE",
    link: "OPEN ↗",
    image: "ZOOM",
    build: "SYSTEM"
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: cursorState === "default" ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <AnimatePresence>
        {cursorState !== "default" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x: mousePosition.x - 40, y: mousePosition.y - 40 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            className="fixed top-0 left-0 w-20 h-20 rounded-full border border-accent bg-background/80 backdrop-blur-sm pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-bold tracking-widest text-accent shadow-[0_0_20px_rgba(200,255,56,0.2)]"
          >
            {labels[cursorState]}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
