"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export const ExperienceTimeline = () => {
  return (
    <div className="w-full relative">
      <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
      
      <div className="flex flex-col gap-16">
        {siteConfig.experience.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div key={idx}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
              
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute left-1 md:left-1/2 md:-translate-x-1 top-1 w-2.5 h-2.5 rounded-full bg-accent z-10 shadow-[0_0_12px_var(--color-accent)]" />
              
              <div className={`w-full pl-10 md:pl-0 md:w-5/12 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <motion.div whileHover={{ x: isLeft ? -5 : 5 }} transition={{ duration: 0.3 }}
                  className="border border-white/5 bg-surface/50 rounded-lg p-5 hover:border-accent/30 transition-colors">
                  <div className="text-accent text-[10px] font-mono tracking-widest mb-2">{exp.duration}</div>
                  <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                  <div className="text-muted text-[10px] uppercase tracking-widest mt-1 mb-3">{exp.company}</div>
                  <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                  {exp.tech && (
                    <div className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.tech.map(t => (
                        <span key={t} className="text-[9px] border border-white/10 px-2 py-0.5 rounded bg-background text-foreground/70">{t}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
