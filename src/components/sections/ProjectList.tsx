"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const allCategories = ["ALL", "AI / WEB3 SECURITY", "FULL-STACK SYSTEM", "MOBILE", "DEVOPS", "FULL-STACK"];

export const ProjectList = () => {
  const [filter, setFilter] = useState("ALL");
  const filtered = siteConfig.projects.filter(p => filter === "ALL" || p.category === filter);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {allCategories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${filter === cat ? "bg-foreground text-background" : "border border-white/10 text-muted hover:border-accent hover:text-accent"}`}>
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-col gap-16 w-full">
        <AnimatePresence>
          {filtered.map((project, idx) => (
            <motion.div layout key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="w-full group">
              
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                  <div>
                    <div className="text-accent text-[10px] font-mono tracking-widest mb-1">PROJECT {project.id} — {project.category}</div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">{project.title}</h3>
                    {project.subtitle && <div className="text-[10px] uppercase tracking-widest text-foreground/70 font-bold border-l-2 border-accent pl-3 mt-2">{project.subtitle}</div>}
                  </div>
                  <div className="flex gap-3 text-[10px] font-bold tracking-widest">
                    {project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent border border-accent px-4 py-2 rounded-full hover:bg-accent hover:text-background transition-all">LIVE DEMO ↗</a>}
                    {project.sourceUrl !== "#" && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-muted border border-white/20 px-4 py-2 rounded-full hover:text-white hover:border-white transition-all">GITHUB ↗</a>}
                  </div>
                </div>

                {/* Visual */}
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}
                  className="relative w-full h-[35vh] md:h-[55vh] rounded-lg overflow-hidden border border-white/10 bg-[#0a0c10] group-hover:border-accent/30 transition-colors shadow-xl">
                  
                  {project.title === "NEXUSAGENT" && <NexusVisual />}
                  {project.title === "CAMPUS LMS" && <LMSVisual />}
                  {project.title === "DEVOPS BUILD & MONITOR PIPELINE" && <DevOpsVisual />}
                  {["OFFLINE MULTI-CALCULATOR SUITE", "DOCTORCONNECT"].includes(project.title) && <MobileVisual title={project.title} />}
                  {project.title === "HOSPITAL MANAGEMENT SYSTEM" && <HospitalVisual />}
                </motion.div>

                {/* Bottom info */}
                <div className="flex flex-col md:flex-row gap-3 justify-between items-start">
                  <p className="text-sm text-muted max-w-xl leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 justify-end shrink-0">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-widest text-foreground/60 border border-white/10 px-2 py-0.5 rounded bg-surface">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

/* ── NexusAgent Security Dashboard ── */
const NexusVisual = () => (
  <div className="absolute inset-0 flex flex-col p-4 md:p-6 gap-3 bg-[#080b0e]">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
    <div className="flex justify-between items-center border-b border-white/10 pb-3 relative z-10">
      <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /><span className="text-[10px] font-mono text-white/40 tracking-widest">THREAT DETECTED</span></div>
      <div className="text-[10px] font-mono text-accent">RISK SCORE: <span className="text-lg font-bold">98</span>/100</div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 relative z-10">
      <div className="md:col-span-2 border border-white/5 bg-white/[0.02] rounded-lg p-4 flex flex-col justify-between">
        <div className="flex items-center gap-3 text-[10px] font-mono text-muted mb-4">
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="text-white">WALLET</motion.span> →
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="text-white">RISK ANALYSIS</motion.span> →
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="text-accent">AI EXPLANATION</motion.span> →
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} className="text-red-500">DEFENSIVE ACTION</motion.span>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] text-muted uppercase tracking-widest">Claude AI Analysis</div>
          <div className="text-xs md:text-sm leading-relaxed border-l-2 border-accent pl-3 text-foreground/80">&quot;Critical: This smart contract contains an unverified self-destruct function and requests unlimited token approval. Strongly indicates a potential rug pull.&quot;</div>
        </div>
      </div>
      <div className="border border-white/5 bg-white/[0.02] rounded-lg p-4 flex flex-col gap-3">
        <div className="text-[10px] text-muted uppercase tracking-widest">Active Threats</div>
        {[{ t: "PHISHING", c: "red" }, { t: "RUG PULL", c: "orange" }, { t: "MALICIOUS APPROVAL", c: "yellow" }, { t: "SUSPICIOUS ACTIVITY", c: "purple" }].map(({ t, c }) => (
          <motion.div key={t} whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            className={`bg-${c}-500/10 text-${c}-500 border border-${c}-500/30 px-3 py-1.5 rounded text-[10px] tracking-widest cursor-pointer transition-all`}>{t}</motion.div>
        ))}
        <button className="mt-auto w-full bg-red-500/90 hover:bg-red-500 text-white text-[10px] font-bold tracking-widest py-2.5 rounded transition-colors">EMERGENCY REVOKE</button>
      </div>
    </div>
  </div>
);

/* ── Campus LMS Dashboard ── */
const LMSVisual = () => (
  <div className="absolute inset-0 bg-[#0f1115] p-4 md:p-6 flex flex-col gap-3">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="text-sm font-bold tracking-widest">PAF-IAST LMS</div>
      <div className="flex gap-4 text-[10px] text-muted">{["Student Portal", "Teachers", "Admin", "HR"].map(t => <span key={t} className="hover:text-white transition-colors cursor-pointer">{t}</span>)}</div>
    </div>
    <div className="grid grid-cols-4 gap-3 flex-1">
      {[{ label: "Attendance", val: "85%", span: 1 }, { label: "Active Courses", val: "6", span: 1 }, { label: "CGPA", val: "3.18", span: 1 }, { label: "Students", val: "340", span: 1 }].map(item => (
        <div key={item.label} className={`col-span-${item.span} border border-white/5 rounded-lg p-3 bg-white/[0.02] flex flex-col justify-between`}>
          <div className="text-[10px] text-muted uppercase tracking-widest">{item.label}</div>
          <div className="text-2xl font-bold">{item.val}</div>
        </div>
      ))}
      <div className="col-span-4 border border-white/5 rounded-lg p-4 bg-white/[0.02]">
        <div className="text-[10px] text-muted uppercase tracking-widest mb-3">Course Progress</div>
        <div className="space-y-2">
          {[{ n: "Software Engineering", p: 85 }, { n: "Database Systems", p: 70 }, { n: "AI Fundamentals", p: 60 }].map(c => (
            <div key={c.n} className="flex items-center gap-3">
              <span className="text-xs text-muted w-40 truncate">{c.n}</span>
              <div className="flex-1 h-1.5 bg-white/10 rounded overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: `${c.p}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-accent rounded" /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── DevOps Pipeline ── */
const DevOpsVisual = () => (
  <div className="absolute inset-0 bg-[#050608] p-8 flex flex-col items-center justify-center font-mono">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 relative z-10">
      {[{ n: "CODE", icon: "{ }", c: "accent" }, { n: "BUILD", icon: "⚙", c: "accent" }, { n: "TEST", icon: "✓", c: "accent" }, { n: "DEPLOY", icon: "▲", c: "green-500" }, { n: "MONITOR", icon: "◉", c: "blue-500" }].map((s, i) => (
        <div key={s.n} className="flex items-center gap-4">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`flex flex-col items-center gap-2`}>
            <div className={`w-12 h-12 rounded-lg border border-${s.c}/50 bg-${s.c}/10 flex items-center justify-center text-sm text-${s.c}`}>{s.icon}</div>
            <span className={`text-[10px] tracking-widest text-${s.c}`}>{s.n}</span>
          </motion.div>
          {i < 4 && <div className="hidden md:block w-8 md:w-12 h-[1px] bg-accent/50" />}
        </div>
      ))}
    </div>
    <div className="absolute bottom-6 right-6 text-[10px] text-muted border border-white/10 px-4 py-2 rounded bg-white/[0.02]"><span className="text-green-500">●</span> All systems operational</div>
  </div>
);

/* ── Mobile App Visual ── */
const MobileVisual = ({ title }: { title: string }) => (
  <div className="absolute inset-0 bg-[#111] flex items-center justify-center gap-6 overflow-hidden">
    <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="w-[180px] h-[360px] border-[3px] border-white/20 rounded-[2rem] bg-black relative shadow-2xl z-10">
      <div className="absolute top-0 w-full h-5 flex justify-center"><div className="w-14 h-3 bg-white/20 rounded-b-lg" /></div>
      <div className="mt-10 p-3 text-[10px]">
        {title === "DOCTORCONNECT" ? (
          <div className="flex flex-col gap-3">
            <div className="text-sm font-bold">Appointments</div>
            <div className="bg-accent/20 border border-accent/30 p-2.5 rounded-xl text-accent text-[10px]">Dr. Smith — 10:00 AM</div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-[10px]">Dr. Allen — 2:00 PM</div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-[10px]">Dr. Khan — 4:30 PM</div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="text-right text-2xl font-mono text-accent mb-3">3.14159</div>
            <div className="grid grid-cols-4 gap-1.5">
              {["C", "÷", "×", "⌫", "7", "8", "9", "−", "4", "5", "6", "+", "1", "2", "3", "=", "±", "0", ".", "%"].map((k, i) => (
                <div key={i} className={`aspect-square flex items-center justify-center rounded-lg text-[10px] ${["C", "÷", "×", "⌫", "−", "+", "=", "%"].includes(k) ? "bg-accent/20 text-accent" : "bg-white/10"}`}>{k}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  </div>
);

/* ── Hospital Dashboard ── */
const HospitalVisual = () => (
  <div className="absolute inset-0 bg-[#0e1014] p-4 md:p-6 flex flex-col gap-3">
    <div className="flex justify-between border-b border-white/10 pb-3">
      <div className="text-sm font-bold tracking-widest">HMS Dashboard</div>
      <div className="flex gap-3 text-[10px] text-muted">{["Patients", "Doctors", "Billing"].map(t => <span key={t}>{t}</span>)}</div>
    </div>
    <div className="grid grid-cols-3 gap-3 flex-1">
      {[{ l: "Patients", v: "124" }, { l: "Appointments", v: "38" }, { l: "Doctors", v: "15" }].map(i => (
        <div key={i.l} className="border border-white/5 rounded-lg p-3 bg-white/[0.02]">
          <div className="text-[10px] text-muted uppercase">{i.l}</div>
          <div className="text-xl font-bold mt-1">{i.v}</div>
        </div>
      ))}
      <div className="col-span-3 border border-white/5 rounded-lg p-4 bg-white/[0.02]">
        <div className="text-[10px] text-muted uppercase mb-3">Today&apos;s Schedule</div>
        {["09:00 — Cardiology Check", "11:30 — Lab Results Review", "14:00 — Surgery Prep"].map(s => (
          <div key={s} className="text-xs text-foreground/70 py-1.5 border-b border-white/5 last:border-0">{s}</div>
        ))}
      </div>
    </div>
  </div>
);
