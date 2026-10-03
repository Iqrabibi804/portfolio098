"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const internshipDetails: Record<string, {
  highlight: string;
  tasks: string[];
  outcome: string;
}> = {
  "PAC": {
    highlight: "Government-level IT infrastructure at Pakistan Aeronautical Complex — one of Pakistan's most secure defence facilities.",
    tasks: [
      "Performed hands-on hardware testing and diagnostic troubleshooting across workstations and networked terminals",
      "Assisted in network infrastructure maintenance including LAN patching and system configuration",
      "Built a real-world software solution (Campus LMS) used by the institution's staff and students",
      "Gained exposure to enterprise-level IT security practices and SOP compliance within a defence environment",
    ],
    outcome: "Certificate issued by IT Center, PAC Kamra — June 15 to July 24, 2026",
  },
  "QUANTUM": {
    highlight: "Mobile-first product development across multiple live Flutter applications shipped to end users.",
    tasks: [
      "Built DoctorConnect — a role-based doctor-patient communication app with appointment scheduling",
      "Developed a Food Delivery application with real-time cart, ordering and tracking UI",
      "Shipped an Offline Multi-Calculator Suite (15+ calculators) with zero external dependencies",
      "Participated in full release cycles: testing, debugging, Play Store asset preparation, and deployment",
    ],
    outcome: "Certificate issued by Quantum Hashlink — Flutter Developer Internship, 2024",
  },
  "WAIZ": {
    highlight: "Full-stack web development for a software house serving institutional and corporate clients.",
    tasks: [
      "Architected and built a full Campus LMS with separate dashboards for Students, Teachers, Admins, HR and Accountants",
      "Implemented attendance tracking, course management, and grading modules with PHP & MySQL",
      "Developed and optimised client portfolio websites for SEO, performance and cross-browser compatibility",
      "Collaborated in a professional team environment following client feedback and revision cycles",
    ],
    outcome: "Certificate issued by Waiz Software House — Web Developer, 2024–2025",
  },
  "TECHNIK": {
    highlight: "Frontend engineering focused on responsive UI development and reusable component systems.",
    tasks: [
      "Built responsive web interfaces using HTML5, CSS3 and JavaScript across multiple client projects",
      "Developed reusable UI components and standardised styling patterns",
      "Improved mobile UX and cross-device consistency across the team's project portfolio",
      "Contributed to client deliverables under tight deadlines in a collaborative environment",
    ],
    outcome: "Certificate issued by Technik Nest — Frontend Developer, 2023–2024",
  },
};

const getDetailKey = (company: string): string | null => {
  if (company.includes("PAC")) return "PAC";
  if (company.includes("QUANTUM")) return "QUANTUM";
  if (company.includes("WAIZ")) return "WAIZ";
  if (company.includes("TECHNIK")) return "TECHNIK";
  return null;
};

const getFirstSentence = (text: string): string => {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
};

export const ExperienceTimeline = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="w-full relative">
      <div className="absolute left-3 md:left-[calc(50%-0.5px)] top-0 bottom-0 w-[1px] bg-white/8" />

      <div className="flex flex-col gap-10 md:gap-14">
        {siteConfig.experience.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          const isOpen = expanded === idx;
          const detailKey = getDetailKey(exp.company);
          const detail = detailKey ? internshipDetails[detailKey] : null;
          const summary = getFirstSentence(exp.description);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, type: "spring", bounce: 0.5 }}
                className={`absolute left-1 md:left-1/2 md:-translate-x-[3px] top-6 w-2.5 h-2.5 rounded-full z-10 transition-all duration-500 ${isOpen ? "bg-accent shadow-[0_0_15px_rgba(200,255,56,0.8)] scale-150" : "bg-white/20 shadow-none"}`}
              />

              <div className={`w-full pl-10 md:pl-0 md:w-[46%] ${isLeft ? "md:pr-14 md:text-left" : "md:pl-14"}`}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  className={`group relative overflow-hidden border rounded-xl p-5 md:p-6 transition-all duration-500 cursor-pointer
                    ${isOpen
                      ? "border-accent/40 bg-[#0c120c] shadow-[0_10px_40px_rgba(200,255,56,0.06)]"
                      : "border-white/[0.06] bg-surface/40 hover:border-accent/20 hover:bg-surface/80"
                    }`}
                >
                  <div className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine pointer-events-none" />

                  <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
                    <div className="text-accent text-[9px] md:text-[10px] font-mono tracking-widest bg-accent/10 px-2 py-0.5 rounded">
                      {exp.duration}
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className={`text-lg font-light leading-none ${isOpen ? "text-accent" : "text-muted/30 group-hover:text-accent/50"}`}
                    >
                      +
                    </motion.span>
                  </div>

                  <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors ${isOpen ? "text-accent" : "text-foreground"}`}>
                    {exp.role}
                  </h3>
                  <div className="text-muted text-[9px] uppercase tracking-widest mt-0.5 mb-3">
                    {exp.company}
                  </div>
                  
                  {/* Summary only when collapsed */}
                  {!isOpen && (
                    <p className="text-muted text-sm leading-relaxed">{summary}</p>
                  )}

                  {exp.tech && !isOpen && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tech.slice(0, 3).map((t) => (
                        <span key={t}
                          className="text-[9px] border border-white/10 px-2 py-0.5 rounded bg-background text-foreground/65">
                          {t}
                        </span>
                      ))}
                      {exp.tech.length > 3 && (
                        <span className="text-[8px] text-muted/40">+{exp.tech.length - 3}</span>
                      )}
                    </div>
                  )}

                  {/* Click hint */}
                  {!isOpen && (
                    <div className="mt-3 text-[8px] font-mono tracking-widest text-muted/30">
                      CLICK FOR MORE DETAILS →
                    </div>
                  )}
                </motion.div>

                {/* Expanded detail */}
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
                      <div className="border border-t-0 border-accent/20 rounded-b-xl bg-[#060906] px-5 md:px-6 py-5 flex flex-col gap-5">
                        {/* Full description */}
                        <p className="text-sm text-muted/90 leading-relaxed">{exp.description}</p>

                        {exp.tech && (
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tech.map((t) => (
                              <span key={t}
                                className="text-[9px] border border-white/10 px-2 py-0.5 rounded bg-background text-foreground/65">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        {detail && (
                          <>
                            <div className="border-l-2 border-accent/40 pl-4">
                              <p className="text-sm text-foreground/80 leading-relaxed italic">
                                {detail.highlight}
                              </p>
                            </div>

                            <div>
                              <div className="text-[9px] font-mono tracking-widest text-muted/50 uppercase mb-3">
                                RESPONSIBILITIES &amp; DELIVERABLES
                              </div>
                              <ul className="flex flex-col gap-2.5">
                                {detail.tasks.map((task, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="flex items-start gap-3 text-[11px] md:text-xs text-muted/85 leading-relaxed"
                                  >
                                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                                    <span>{task}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center gap-2 pt-1">
                              <div className="w-4 h-[1px] bg-accent/40" />
                              <span className="text-[9px] font-mono tracking-widest text-accent/70 uppercase">
                                {detail.outcome}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
