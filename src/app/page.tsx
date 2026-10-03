"use client";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ProjectList } from "@/components/sections/ProjectList";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { TechConstellation } from "@/components/sections/TechConstellation";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { DigitalTwin } from "@/components/sections/DigitalTwin";
import { About } from "@/components/sections/About";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative bg-[#050505] text-white">
      <Hero />
      <Marquee />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">02</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter mb-12">THE JOURNEY.</h2>
          <ExperienceTimeline />
        </div>
      </section>
      
      {/* ── WORK / PROJECTS ── */}
      <section id="work" className="py-20 md:py-28 border-t border-white/5 relative noise-bg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">03</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">SELECTED WORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter mb-8">WHAT I BUILD.</h2>
          <ProjectList />
        </div>
      </section>
      
      {/* ── CAPABILITIES + PROCESS ── */}
      <section id="process" className="py-20 md:py-28 border-t border-white/5 bg-surface/30 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(119,102,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(119,102,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">04</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">CAPABILITIES</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter mb-6">DOMAINS.</h2>
              <div className="flex flex-col gap-4">
                {siteConfig.services.map((s, i) => (
                  <div key={i} className="border-l-2 border-white/10 pl-4 hover:border-accent transition-colors group py-1">
                    <div className="text-[10px] font-mono text-muted group-hover:text-accent transition-colors">0{i + 1}</div>
                    <div className="text-sm font-bold tracking-widest uppercase">{s}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">05</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter mb-8">HOW I BUILD.</h2>
              <EngineeringProcess />
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="languages" className="py-20 md:py-28 border-t border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">06</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">THE STACK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter mb-4">LANGUAGES & TECH.</h2>
          <p className="text-sm text-muted mb-10 max-w-md">Tools are only interesting when they solve something.</p>
          <TechConstellation />
        </div>
      </section>

      {/* ── EDUCATION + CERTS ── */}
      <section id="education" className="py-20 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">07</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">EDUCATION</span>
              </div>
              <div className="border border-white/5 bg-surface/50 rounded-lg p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-xl font-bold tracking-tight mb-1">{siteConfig.education.degree}</h3>
                <div className="text-muted text-[10px] uppercase tracking-widest mb-4">{siteConfig.education.institution}</div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted">Timeline</span><span>{siteConfig.education.timeline}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Progress</span><span>{siteConfig.education.details}</span></div>
                  <div className="flex justify-between"><span className="text-muted">CGPA</span><span className="font-mono">{siteConfig.education.gpa}</span></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">08</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">CERTIFIED</span>
              </div>
              <div className="flex flex-col gap-4">
                {siteConfig.certifications.map((cert, i) => (
                  <div key={i} className="border border-white/5 bg-surface/50 rounded-lg p-5 hover:border-accent/30 transition-colors">
                    <h4 className="text-sm font-bold tracking-tight">{cert.title}</h4>
                    <span className="text-[10px] text-muted uppercase tracking-widest">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




