"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-screen flex items-center bg-[#050505] overflow-hidden"
    >
      {/* ── Deep ambient grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(119,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(119,102,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Purple radial halos */}
        <div className="absolute right-[-5%] top-[10%] w-[700px] h-[700px] rounded-full bg-[#7766ff]/6 blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-[#7766ff]/4 blur-[120px]" />
        {/* Scan line animation */}
        <div className="animate-scanline absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7766ff]/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16">

        {/* ── LEFT: Typography ── */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col gap-6"
        >
          {/* System label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#7766ff] animate-pulse shadow-[0_0_8px_#7766ff]" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#7766ff]/70 uppercase">
              001 // PORTFOLIO LOADED
            </span>
          </motion.div>

          {/* Name headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            {/* Vertical accent line */}
            <div className="absolute -left-5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#7766ff] via-[#7766ff]/60 to-transparent rounded-full" />
            <div className="absolute -left-[17px] top-1.5 w-3 h-3 rounded-full bg-[#7766ff] shadow-[0_0_20px_#7766ff,0_0_40px_#7766ff50]" />

            <h1 className="text-[clamp(3rem,6.5vw,5.8rem)] font-black text-white leading-[1.05] tracking-tight pl-4">
              Hi, I&apos;m{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #9d8fff 0%, #7766ff 40%, #c8b8ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Iqra Bibi
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7766ff] to-transparent rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* Role text */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/60 font-medium max-w-md leading-relaxed pl-4"
          >
            I develop{" "}
            <span className="text-[#9d8fff]">mobile apps</span>,{" "}
            <span className="text-[#9d8fff]">user interfaces</span> and{" "}
            <span className="text-[#9d8fff]">intelligent systems</span>
          </motion.p>

        {/* ── CTA buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 pl-4 pt-2"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(119,102,255,0.3)] hover:shadow-[0_0_45px_rgba(119,102,255,0.5)] hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #7766ff 0%, #5544cc 100%)",
              }}
            >
              <span className="relative z-10 text-white">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </a>
          </motion.div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-6 pl-4 pt-4 border-t border-white/5"
          >
            {[
              { label: "LOCATION", value: "Attock, PK" },
              { label: "STATUS", value: "Paid Internship", accent: true },
              { label: "FOCUS", value: "Sem 7 · SE" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-[8px] font-mono tracking-[0.3em] text-white/30 uppercase">{stat.label}</span>
                <span className={`text-[10px] font-bold tracking-wider ${stat.accent ? "text-[#7766ff]" : "text-white/70"}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: 3D Holographic Circle Photo Display ── */}
        <motion.div
          style={{ y: imageY }}
          className="relative w-full flex items-center justify-center perspective-1000"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-[320px] md:w-[360px] aspect-square rounded-full p-2.5 bg-gradient-to-tr from-[#7766ff] via-[#9d8fff]/40 to-[#5544cc] shadow-[0_0_60px_rgba(119,102,255,0.4)] group cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Ambient background glow ring */}
            <div className="absolute -inset-4 rounded-full bg-[#7766ff]/25 blur-2xl group-hover:bg-[#7766ff]/50 transition-all duration-700 pointer-events-none" />

            {/* Inner Circle Photo Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#08080c] border-2 border-[#7766ff]/60 shadow-inner">
              <Image
                src="/iqra.jpg"
                alt="Iqra Bibi — Software Engineer"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />

              {/* Holographic Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-[#7766ff]/10 opacity-50 pointer-events-none" />

              {/* Animated Vertical Light Sweep */}
              <motion.div
                animate={{ y: ["-100%", "250%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-[#7766ff]/25 to-transparent pointer-events-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>



      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-[8px] tracking-[0.4em] text-white/25 uppercase">Scroll</span>
        <div className="w-5 h-8 border border-[#7766ff]/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#7766ff]/60"
          />
        </div>
      </motion.div>

    </section>
  );
};

