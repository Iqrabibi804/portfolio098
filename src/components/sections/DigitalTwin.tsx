"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ── Project ID map (leaf label → projects section project id) ──────────────
const leafToProjectId: Record<string, string> = {
  doctorconnect: "06",
  calculator:    "03",
  campus:        "02",
  hms:           "05",
  nexus:         "01",
  pipeline:      "04",
};

// ── Tree Data ─────────────────────────────────────────────────────────────────
const treeData = {
  root: {
    label: "IQRA BIBI",
    subtitle: "Software Engineer · Flutter · Web · AI",
    detail: "Building practical, production-grade software across mobile, web, and intelligent systems. Currently pursuing Software Engineering (Semester 7) at PAF-IAST with a CGPA of 3.18. Interned at PAC Kamra, Quantum Hashlink, Waiz Software House, and Technik Nest.",
  },
  branches: [
    {
      id: "mobile", label: "MOBILE", color: "#c8ff38",
      detail: "Cross-platform mobile apps with Flutter & Dart. Focused on clean architecture, offline-first design, and smooth UX.",
      leaves: [
        { id: "doctorconnect", label: "DoctorConnect", detail: "Patient-doctor communication app with role-based access & appointment booking. Built at Quantum Internship." },
        { id: "calculator",    label: "Multi-Calculator", detail: "15+ specialized calculators (BMI, scientific, finance). Offline-first Flutter app." },
      ],
    },
    {
      id: "web", label: "WEB", color: "#7766ff",
      detail: "Full-stack web platforms using PHP, Next.js, Node.js. From institutional systems to AI-integrated dashboards.",
      leaves: [
        { id: "campus", label: "Campus LMS", detail: "Complete LMS for students, teachers, and admins with attendance, grading & finance. Built at Waiz Internship." },
        { id: "hms",    label: "Hospital HMS", detail: "Healthcare system covering patients, doctors, appointments, billing and records." },
      ],
    },
    {
      id: "ai", label: "AI / ML", color: "#ff7755",
      detail: "AI-integrated features using Python, NLP, and LLM APIs to solve real engineering and security problems.",
      leaves: [
        { id: "nexus", label: "NexusAgent", detail: "AI-powered Web3 security platform. Wallet analysis, threat detection, and AI risk explanations. Hackathon project." },
      ],
    },
    {
      id: "devops", label: "DEVOPS", color: "#38d9ff",
      detail: "CI/CD pipelines, containerization, and cloud deployments on Vercel, Railway and Render.",
      leaves: [
        { id: "pipeline", label: "CI/CD Pipeline", detail: "End-to-end build, test, deploy pipeline with health monitoring and failure alerts." },
      ],
    },
    {
      id: "systems", label: "SYSTEMS", color: "#ffb338",
      detail: "Real-time systems and hardware-software interfaces from PAC Kamra internship.",
      leaves: [
        { id: "pac", label: "PAC Kamra", detail: "Pakistan Aeronautical Complex internship: real-time embedded systems, hardware testing, and IT infrastructure support." },
      ],
    },
  ],
};

// ── Detail Popup ───────────────────────────────────────────────────────────────
const DetailPanel = ({ text, onClose }: { text: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-3 w-64 sm:w-72 bg-[#0c100c] border border-white/10 rounded-xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
  >
    <button onClick={onClose} className="absolute top-3 right-3 text-muted/40 hover:text-accent text-xs">✕</button>
    <p className="text-[10px] sm:text-xs text-muted/80 leading-relaxed pr-4">{text}</p>
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0c100c] border-l border-t border-white/10" />
  </motion.div>
);

// ── Leaf node — navigates to project on click ─────────────────────────────────
const Leaf = ({ leaf, color }: { leaf: typeof treeData.branches[0]["leaves"][0]; color: string }) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const projectId = leafToProjectId[leaf.id];

  const goToProject = () => {
    // Scroll to projects section and open that project's accordion
    const section = document.getElementById("work");
    if (section) section.scrollIntoView({ behavior: "smooth" });

    // Dispatch a custom event so ProjectList can open the right accordion
    if (projectId) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("open-project", { detail: { id: projectId } }));
      }, 600);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-px h-5 bg-white/10" />
      <div className="flex flex-col items-center gap-1">
        {/* Clickable node → goes to project */}
        <button
          onClick={goToProject}
          className="group px-3 py-1.5 rounded-lg border text-[9px] sm:text-[10px] font-bold tracking-widest transition-all duration-300 hover:scale-105"
          style={{
            borderColor: `${color}40`,
            background: "rgba(255,255,255,0.02)",
            color: `${color}90`,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = color;
            (e.currentTarget as HTMLElement).style.color = color;
            (e.currentTarget as HTMLElement).style.background = `${color}18`;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 14px ${color}30`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
            (e.currentTarget as HTMLElement).style.color = `${color}90`;
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
          title="Click to view project details"
        >
          {leaf.label}
          <span className="ml-1 text-[7px] opacity-50">↗</span>
        </button>
        {/* Small detail toggle */}
        <button
          onClick={() => setDetailOpen(v => !v)}
          className="text-[6px] sm:text-[7px] font-mono tracking-widest text-white/20 hover:text-white/50 transition-colors"
        >
          {detailOpen ? "HIDE" : "INFO"}
        </button>
      </div>
      <AnimatePresence>
        {detailOpen && <DetailPanel text={leaf.detail} onClose={() => setDetailOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

// ── Branch ─────────────────────────────────────────────────────────────────────
const Branch = ({ branch, delay }: { branch: typeof treeData.branches[0]; delay: number }) => {
  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="w-px h-8 sm:h-10" style={{ background: `linear-gradient(to bottom, ${branch.color}50, ${branch.color}10)` }} />
      <div className="relative flex flex-col items-center">
        <button
          onClick={() => { setOpen(v => !v); setDetailOpen(false); }}
          className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border-2 font-bold tracking-[0.15em] text-[9px] sm:text-[11px] transition-all duration-300"
          style={{
            borderColor: open ? branch.color : `${branch.color}30`,
            background: open ? `${branch.color}15` : "rgba(10,12,10,0.8)",
            color: open ? branch.color : `${branch.color}70`,
            boxShadow: open ? `0 0 30px ${branch.color}20` : "none",
          }}
        >
          {branch.label} <span className="text-[7px] ml-1 opacity-50">{open ? "▲" : "▼"}</span>
        </button>
        <button
          onClick={() => setDetailOpen(v => !v)}
          className="mt-1.5 text-[7px] sm:text-[8px] font-mono tracking-widest text-white/20 hover:text-white/60 transition-colors"
        >
          {detailOpen ? "HIDE" : "WHAT IS THIS ↓"}
        </button>
        <AnimatePresence>
          {detailOpen && <DetailPanel text={branch.detail} onClose={() => setDetailOpen(false)} />}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center overflow-hidden"
          >
            <div className="w-px h-5 bg-white/10" />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {branch.leaves.map(leaf => (
                <Leaf key={leaf.id} leaf={leaf} color={branch.color} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Main ───────────────────────────────────────────────────────────────────────
export const DigitalTwin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootDetail, setRootDetail] = useState(false);

  return (
    <div id="digital-twin" className="w-full flex flex-col items-center py-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ── Collapsed: Ghibli avatar + brief intro ─────────────────────── */
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center gap-4 text-center max-w-xs"
          >
            {/* Avatar with pulse rings */}
            <button onClick={() => setIsOpen(true)} className="group relative">
              <span className="absolute inset-0 rounded-full bg-accent/10 animate-ping" />
              <span className="absolute -inset-3 rounded-full border border-accent/15 animate-pulse" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-all duration-500 shadow-[0_0_30px_rgba(200,255,56,0.12)] group-hover:shadow-[0_0_50px_rgba(200,255,56,0.28)]">
                <img src="/assets/ghibli-twin.jpg" alt="Digital Twin" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>

            {/* Brief intro text */}
            <div className="flex flex-col gap-1.5">
              <div className="text-[11px] sm:text-sm font-bold tracking-widest text-white/80">DIGITAL TWIN</div>
              <p className="text-[9px] sm:text-[10px] text-muted/60 leading-relaxed font-mono">
                An interactive map of my skills, domains, and projects. Click a domain to expand — click a project to jump to its full details.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(true)}
              className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-accent border border-accent/30 px-5 py-2 rounded-full hover:bg-accent/10 transition-all"
            >
              EXPLORE SYSTEM TREE ↗
            </motion.button>
          </motion.div>
        ) : (
          /* ── Expanded: Skill Tree ─────────────────────────────────────── */
          <motion.div
            key="open"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-5xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8 sm:mb-10">
              <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-muted/40 uppercase">
                DIGITAL TWIN / SYSTEM TREE · CLICK DOMAIN ↓ · CLICK PROJECT ↗
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[8px] sm:text-[9px] font-bold tracking-widest text-muted/50 hover:text-accent border border-white/10 hover:border-accent px-4 py-1.5 rounded-full transition-all"
              >
                ← COLLAPSE
              </button>
            </div>

            {/* Root node */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-accent/40 shadow-[0_0_20px_rgba(200,255,56,0.2)] flex-shrink-0">
                    <img src="/assets/ghibli-twin.jpg" alt="Digital Twin" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-black tracking-widest text-base sm:text-xl leading-tight">{treeData.root.label}</div>
                    <div className="text-accent text-[7px] sm:text-[9px] font-mono tracking-[0.18em] mt-0.5">{treeData.root.subtitle}</div>
                  </div>
                </div>
                <button
                  onClick={() => setRootDetail(v => !v)}
                  className="mt-2 text-[7px] sm:text-[8px] font-mono tracking-widest text-white/25 hover:text-accent/70 transition-colors"
                >
                  {rootDetail ? "HIDE SUMMARY" : "READ SUMMARY ↓"}
                </button>
                <AnimatePresence>
                  {rootDetail && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-3 max-w-md text-center"
                    >
                      <p className="text-[9px] sm:text-[10px] text-muted/65 leading-relaxed px-3">{treeData.root.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Trunk */}
              <motion.div
                initial={{ height: 0 }} animate={{ height: 40 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-px bg-gradient-to-b from-accent/40 to-accent/10"
              />
              {/* Horizontal bar */}
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-[94%] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent origin-center"
              />

              {/* Branches */}
              <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-14 w-full mt-0">
                {treeData.branches.map((branch, i) => (
                  <Branch key={branch.id} branch={branch} delay={0.6 + i * 0.1} />
                ))}
              </div>
            </div>

            {/* Hint */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center mt-8 text-[7px] sm:text-[8px] font-mono tracking-widest text-muted/25"
            >
              CLICK DOMAIN TO EXPAND · CLICK PROJECT ↗ TO VIEW FULL DETAILS · "WHAT IS THIS" FOR EXPLANATION
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
