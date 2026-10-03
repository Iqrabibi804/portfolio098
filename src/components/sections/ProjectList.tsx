"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const allCategories = ["ALL", "AI / WEB3 SECURITY", "FULL-STACK SYSTEM", "MOBILE", "DEVOPS", "FULL-STACK"];

export const ProjectList = () => {
  const [filter, setFilter]       = useState("ALL");
  const [expanded, setExpanded]   = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail?.id) {
        setFilter("ALL");
        setExpanded(customEvent.detail.id);
      }
    };
    window.addEventListener("open-project", handler);
    return () => window.removeEventListener("open-project", handler);
  }, []);

  const filtered = siteConfig.projects.filter(
    (p) => filter === "ALL" || p.category === filter
  );

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <div className="w-full flex flex-col gap-8 relative">
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2.5 relative z-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all
              ${filter === cat
                ? "bg-foreground text-background"
                : "border border-white/10 text-muted hover:border-accent hover:text-accent"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project list — accordion cards */}
      <motion.div layout className="flex flex-col gap-3 w-full relative z-10">
        <AnimatePresence>
          {filtered.map((project, idx) => {
            const isOpen = expanded === project.id;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* ── Collapsed Row (always visible) ── */}
                <motion.button
                  layout
                  onClick={() => toggle(project.id)}
                  className={`w-full group flex items-center justify-between gap-4 px-5 md:px-7 py-4 md:py-5 rounded-xl border transition-all duration-300 text-left
                    ${isOpen
                      ? "border-accent/40 bg-[#0c0f0a]"
                      : "border-white/[0.06] bg-surface/40 hover:border-white/15 hover:bg-surface/70"
                    }`}
                >
                  {/* Left: index + title + category */}
                  <div className="flex items-center gap-4 md:gap-6 min-w-0">
                    <span className="text-[10px] font-mono tracking-widest text-muted/60 shrink-0">
                      {project.id}
                    </span>
                    <div className="min-w-0">
                      <h3 className={`text-sm md:text-base font-bold tracking-tight truncate transition-colors
                        ${isOpen ? "text-accent" : "text-foreground group-hover:text-white"}`}>
                        {project.title}
                      </h3>
                      <div className="text-[9px] font-mono tracking-widest text-muted/60 uppercase mt-0.5 truncate">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Right: tech pills (visible on desktop when closed) + chevron */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden md:flex gap-1.5 flex-wrap justify-end max-w-[280px]">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t}
                          className="text-[8px] font-mono border border-white/10 px-2 py-0.5 rounded text-muted/70 bg-background/50">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[8px] font-mono text-muted/40">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    {/* Chevron */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`text-lg font-light leading-none transition-colors ${isOpen ? "text-accent" : "text-muted/40 group-hover:text-white/60"}`}
                    >
                      +
                    </motion.span>
                  </div>
                </motion.button>

                {/* ── Expanded Detail Panel ── */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="border border-t-0 border-accent/20 rounded-b-xl bg-[#080b08] px-5 md:px-7 py-5 md:py-6 flex flex-col md:flex-row gap-6 md:gap-10">

                        {/* Description + features */}
                        <div className="flex-1 flex flex-col gap-4">
                          <p className="text-sm text-muted/90 leading-relaxed max-w-xl">
                            {project.description}
                          </p>

                          {project.features && project.features.length > 0 && (
                            <div>
                              <div className="text-[9px] font-mono tracking-widest text-muted/50 uppercase mb-2">
                                KEY CAPABILITIES
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.features.map((f) => (
                                  <span key={f}
                                    className="text-[9px] font-medium border border-white/8 px-3 py-1 rounded-full bg-white/[0.03] text-foreground/75 uppercase tracking-wider">
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Mobile tech pills */}
                          <div className="flex flex-wrap gap-1.5 md:hidden">
                            {project.tech.map((t) => (
                              <span key={t}
                                className="text-[8px] font-mono border border-white/10 px-2 py-0.5 rounded text-muted/70 bg-background/50">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links + full tech on desktop */}
                        <div className="flex flex-col gap-4 md:min-w-[200px]">
                          {/* Full tech stack on desktop */}
                          <div className="hidden md:block">
                            <div className="text-[9px] font-mono tracking-widest text-muted/50 uppercase mb-2">
                              FULL STACK
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t) => (
                                <span key={t}
                                  className="text-[8px] font-mono border border-white/10 px-2 py-0.5 rounded text-muted/70 bg-background/50">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action links */}
                          <div className="flex gap-3 flex-wrap">
                            {project.liveUrl && project.liveUrl !== "#" && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[9px] font-bold tracking-widest border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-background transition-all"
                              >
                                LIVE DEMO ↗
                              </a>
                            )}
                            {project.sourceUrl && project.sourceUrl !== "#" && (
                              <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[9px] font-bold tracking-widest border border-white/20 text-muted/80 px-4 py-2 rounded-lg hover:border-white hover:text-white transition-all"
                              >
                                SOURCE ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
