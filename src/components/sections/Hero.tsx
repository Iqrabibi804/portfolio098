"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { DigitalCore } from "@/components/3d/DigitalCore";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DigitalCore />

      <div className="container mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-end pb-24 z-10 pt-32">
        <div className="flex flex-col gap-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-1"
          >
            <div className="text-xl md:text-2xl font-bold tracking-widest text-foreground mb-2">IQRA BIBI</div>
            <div className="flex flex-col gap-1 text-xs md:text-sm text-accent tracking-widest font-mono uppercase">
              {siteConfig.roles.slice(1).map((role, idx) => (
                <span key={idx}>{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[clamp(4rem,10vw,11rem)] font-bold leading-[0.85] tracking-tighter"
          >
            BUILDING<br />
            DIGITAL<br />
            SYSTEMS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted max-w-xl leading-relaxed"
          >
            I build practical software across mobile, web, AI and intelligent systems.
          </motion.p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-16 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-right text-xs tracking-widest uppercase"
          >
            <div className="text-muted">LOCATION</div>
            <div>ATT0CK, PAKISTAN<br />→ BUILDING GLOBALLY</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-4 text-xs tracking-widest text-muted"
          >
            <span style={{ writingMode: 'vertical-rl' }}>SCROLL TO EXPLORE</span>
            <span className="animate-bounce">↓</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
