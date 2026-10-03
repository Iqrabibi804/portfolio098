"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden bg-[#030405]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Animated Picture */}
          <div className="col-span-1 lg:col-span-5 relative group flex justify-center py-10">
            <motion.div 
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[85%] max-w-[320px] aspect-square relative"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 rounded-full border-2 border-dashed border-accent/20 pointer-events-none"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full border border-white/10 pointer-events-none"
              />

              <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_60px_rgba(200,255,56,0.08)] border border-accent/20 bg-[#080a08]">
                <Image 
                  src="/assets/avatar.png" 
                  alt="Iqra Bibi - Software Engineer" 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 border border-white/5 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_3px] opacity-40 pointer-events-none" />
              </div>
              
              <div className="absolute -bottom-2 -left-6 text-[9px] font-mono text-accent tracking-widest bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-accent/30 shadow-lg pointer-events-none z-10">
                SYSTEM / PROFILE
              </div>
              <div className="absolute top-8 -right-4 text-[8px] font-mono text-white/60 tracking-widest pointer-events-none bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md z-10 border border-white/10">
                31.54°N 72.35°E
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4"
            >
              <span className="text-accent font-mono text-xs tracking-widest">01</span>
              <div className="w-10 h-[1px] bg-accent/50" />
              <span className="text-[10px] tracking-[0.3em] text-muted uppercase">ABOUT</span>
            </motion.div>
            
            <div style={{ perspective: "1000px" }}>
              <motion.h2 
                initial={{ opacity: 0, rotateX: 60, y: 40 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter mb-2"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "bottom center",
                  color: "#f3f4ef",
                  textShadow: "0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 0px 20px rgba(200,255,56,0.15)"
                }}
              >
                IQRA BIBI
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] uppercase leading-relaxed font-mono"
              >
                Flutter Developer <span className="text-accent/50">·</span> Web Developer <span className="text-accent/50">·</span> Software Engineer
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-xl text-foreground/80 max-w-xl leading-relaxed mt-2"
            >
              I build practical software architectures and responsive experiences across <span className="text-accent font-bold">mobile</span>, <span className="text-accent font-bold">web</span>, and <span className="text-accent font-bold">intelligent systems</span>.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-4 mt-6"
            >
              {["MOBILE", "WEB", "AI", "FULL-STACK", "SYSTEMS", "DEVOPS"].map((d, i) => (
                <motion.div 
                  key={d} 
                  whileHover={{ scale: 1.05, color: "#c8ff38" }}
                  className="flex items-center gap-2 cursor-default transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 shadow-[0_0_8px_rgba(200,255,56,0.5)]" />
                  <span className="text-[9px] md:text-[10px] tracking-widest font-bold uppercase">{d}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
