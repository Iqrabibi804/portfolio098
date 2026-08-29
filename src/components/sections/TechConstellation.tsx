"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const categories = Object.keys(siteConfig.skills) as Array<keyof typeof siteConfig.skills>;

const catLabels: Record<string, string> = {
  languages: "LANGUAGES", mobile: "MOBILE", web: "WEB", backend: "BACKEND",
  ai: "AI / ML", devops: "DEVOPS", databases: "DATABASES", tools: "TOOLS"
};

const catDescs: Record<string, string> = {
  languages: "Core programming languages I write production code in.",
  mobile: "Cross-platform mobile development ecosystem.",
  web: "Frontend technologies for modern web interfaces.",
  backend: "Server-side frameworks and runtime environments.",
  ai: "Machine learning and AI integration tools.",
  devops: "Deployment, CI/CD and infrastructure tooling.",
  databases: "Data persistence and ORM technologies.",
  tools: "Development environment and design tools."
};

const catEmojis: Record<string, string[]> = {
  languages: ["⚡", "🧬", "💻", "🔤"],
  mobile: ["📱", "🚀", "📲", "✨"],
  web: ["🌐", "🎨", "⚙️", "🖥️"],
  backend: ["🔧", "🏗️", "⚙️", "🛠️"],
  ai: ["🤖", "🧠", "📊", "🔬"],
  devops: ["🐳", "🔄", "☁️", "🚀"],
  databases: ["🗄️", "💾", "📦", "🔗"],
  tools: ["🛠️", "📐", "🎯", "🧰"]
};

// Map each skill to a relevant emoji
const skillIcons: Record<string, string> = {
  Dart: "🎯", Python: "🐍", JavaScript: "⚡", PHP: "🐘", HTML5: "🌐", CSS3: "🎨",
  SQL: "🗃️", TypeScript: "💎", Flutter: "📱", Provider: "🔄", setState: "⚙️",
  "Responsive UI": "📐", Bootstrap: "🅱️", "Next.js": "▲", "Tailwind CSS": "🌊",
  "REST API Integration": "🔗", "Node.js": "🟢", "Express.js": "🚂",
  "Spring Boot": "🍃", "Python Basics": "🐍", pandas: "🐼", NumPy: "🔢",
  "Claude AI Integration": "🤖", Git: "📝", GitHub: "🐙", "GitHub Actions": "🔄",
  Docker: "🐳", "CI/CD Pipelines": "♾️", Vercel: "▲", Railway: "🚂",
  MySQL: "🐬", "Firebase Firestore": "🔥", PostgreSQL: "🐘", "Prisma ORM": "💎",
  "VS Code": "💻", "Android Studio": "🤖", Postman: "📮", Figma: "🎨",
  "Spring Boot — Basic": "🍃",
};

export const TechConstellation = () => {
  const [active, setActive] = useState<keyof typeof siteConfig.skills>("languages");
  const emojis = catEmojis[active] || ["💻", "⚡", "🔧", "🚀"];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      {/* Category Nav */}
      <div className="w-full md:w-1/4 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`text-left text-[10px] uppercase tracking-widest font-bold py-3 px-4 md:px-0 whitespace-nowrap border-b md:border-b transition-all flex items-center gap-2 ${
              active === cat
                ? "text-accent border-accent"
                : "text-muted border-white/5 hover:text-foreground"
            }`}>
            <span className="text-sm">{catEmojis[cat]?.[0]}</span>
            {catLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="w-full md:w-3/4 relative bg-surface/50 border border-white/5 rounded-lg overflow-hidden min-h-[350px]">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,255,56,0.04)_0%,transparent_60%)] pointer-events-none" />

        {/* Floating animated emojis in background */}
        <AnimatePresence mode="wait">
          <motion.div key={active + "-bg"} className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {emojis.map((emoji, i) => (
              <motion.div key={i}
                className="absolute text-4xl md:text-6xl select-none opacity-[0.06]"
                style={{
                  left: `${20 + i * 22}%`,
                  top: `${15 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -15, 0, 10, 0],
                  rotate: [0, 5, -5, 3, 0],
                  scale: [1, 1.1, 1, 0.95, 1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.7,
                }}>
                {emoji}
              </motion.div>
            ))}
            {/* Extra large centered emoji */}
            <motion.div
              className="absolute text-[120px] md:text-[160px] select-none opacity-[0.03] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
              {emojis[0]}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5 h-full">

              {/* Category header */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{catEmojis[active]?.[0]}</span>
                <div>
                  <div className="text-lg font-bold tracking-tight">{catLabels[active]}</div>
                  <div className="text-xs text-muted">{catDescs[active]}</div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10" />

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {siteConfig.skills[active].map((skill, idx) => (
                  <motion.div key={skill}
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{
                      scale: 1.08,
                      borderColor: "rgba(200, 255, 56, 0.6)",
                      boxShadow: "0 0 20px rgba(200, 255, 56, 0.15)",
                      y: -3,
                    }}
                    className="px-5 py-3 border border-white/10 bg-background/80 backdrop-blur-sm rounded-xl text-sm font-medium tracking-wide hover:text-accent transition-colors cursor-crosshair flex items-center gap-2.5">
                    <span className="text-base">{skillIcons[skill] || "⚡"}</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-[10px] text-muted font-mono tracking-widest">
                  {siteConfig.skills[active].length} TECHNOLOGIES
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] text-muted font-mono tracking-widest">ACTIVE STACK</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
