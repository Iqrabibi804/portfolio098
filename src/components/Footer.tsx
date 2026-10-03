"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#050505] border-t border-[#7766ff]/10 pt-16">
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(119,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(119,102,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* ── Gradient orb ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7766ff]/5 blur-[100px] rounded-full pointer-events-none" />
      {/* ── Top laser line ── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7766ff]/40 to-transparent" />

      {/* ── Main footer grid ── */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── CONTACT / LET'S WORK TOGETHER BANNER ── */}
        <div className="py-12 flex flex-col items-center border-b border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7766ff] animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-[#7766ff]/60 uppercase">09 // CONTACT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-4">
            Let&apos;s Work{" "}
            <span style={{ background: "linear-gradient(135deg, #9d8fff 0%, #7766ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Together
            </span>
          </h2>
          <p className="text-white/40 mb-10 max-w-lg text-center text-sm">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            <a href={`mailto:${siteConfig.email}`} className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#7766ff]/5 border border-[#7766ff]/15 hover:border-[#7766ff]/50 hover:bg-[#7766ff]/10 hover:shadow-[0_0_30px_rgba(119,102,255,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#7766ff]/15 flex items-center justify-center group-hover:bg-[#7766ff]/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9d8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">Email</span>
              <span className="text-[10px] font-mono text-white/30 tracking-tight">{siteConfig.email}</span>
            </a>
            <a href={`tel:${siteConfig.phone}`} className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#7766ff]/5 border border-[#7766ff]/15 hover:border-[#7766ff]/50 hover:bg-[#7766ff]/10 hover:shadow-[0_0_30px_rgba(119,102,255,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#7766ff]/15 flex items-center justify-center group-hover:bg-[#7766ff]/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9d8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">Phone</span>
              <span className="text-[10px] font-mono text-white/30 tracking-tight">{siteConfig.phone}</span>
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#7766ff]/5 border border-[#7766ff]/15 hover:border-[#7766ff]/50 hover:bg-[#7766ff]/10 hover:shadow-[0_0_30px_rgba(119,102,255,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#7766ff]/15 flex items-center justify-center group-hover:bg-[#7766ff]/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9d8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">LinkedIn</span>
              <span className="text-[10px] font-mono text-white/30 tracking-tight">Connect Profile</span>
            </a>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#7766ff]/5 border border-[#7766ff]/15 hover:border-[#7766ff]/50 hover:bg-[#7766ff]/10 hover:shadow-[0_0_30px_rgba(119,102,255,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#7766ff]/15 flex items-center justify-center group-hover:bg-[#7766ff]/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9d8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">GitHub</span>
              <span className="text-[10px] font-mono text-white/30 tracking-tight">Iqrabibi804</span>
            </a>
          </div>
        </div>

        {/* ── Middle row: Brand + Nav + Info ── */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/5">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl border border-[#7766ff]/40 flex items-center justify-center bg-[#7766ff]/10 group-hover:border-[#7766ff] transition-colors shadow-[0_0_15px_rgba(119,102,255,0.2)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7766ff] shadow-[0_0_10px_#7766ff]" />
              </div>
              <span className="font-black text-xl tracking-tighter text-white group-hover:text-[#9d8fff] transition-colors">
                IQRA BIBI
              </span>
            </button>
            <p className="text-[11px] text-white/40 leading-relaxed max-w-[240px]">
              Software Engineer · Flutter · Web · AI · PAF-IAST, Semester 7
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-col gap-3">
            <span className="text-[8px] font-mono tracking-[0.35em] text-white/30 uppercase mb-2">Navigation</span>
            {[
              { href: "#experience", label: "Experience" },
              { href: "#work", label: "Projects" },
              { href: "#process", label: "How I Build" },
              { href: "#languages", label: "Languages & Stack" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[11px] font-medium text-white/50 hover:text-[#9d8fff] tracking-widest uppercase transition-colors flex items-center gap-2 group"
              >
                <span className="w-3 h-[1px] bg-white/15 group-hover:bg-[#7766ff]/60 transition-colors" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Direct Info */}
          <div className="flex flex-col gap-3">
            <span className="text-[8px] font-mono tracking-[0.35em] text-white/30 uppercase mb-2">Location & Details</span>
            <div className="text-[11px] text-white/50 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7766ff]" />
              Attock, Pakistan
            </div>
            <div className="text-[11px] text-white/50 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7766ff]" />
              B.S. Software Engineering — Sem 7
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] text-white/30">© {year} IQRA BIBI</span>
            <span className="text-white/10">·</span>
            <span className="font-mono text-[9px] text-white/25">ATTOCK, PAKISTAN</span>
            <span className="text-white/10">·</span>
            <span className="font-mono text-[9px] text-white/25">BUILD: v3.2.0</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] text-white/20 tracking-widest">CRAFTED WITH PRECISION</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-[9px] font-bold tracking-[0.25em] text-[#7766ff]/70 hover:text-[#7766ff] transition-colors"
            >
              BACK TO TOP
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


