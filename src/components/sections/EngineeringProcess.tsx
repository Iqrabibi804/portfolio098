"use client";

import { motion } from "framer-motion";

const stages = [
  { id: "01", title: "UNDERSTAND", desc: "Analyze the core problem, user needs, and system constraints before writing a single line of code." },
  { id: "02", title: "DESIGN", desc: "Architect the solution. Define data models, system flow, and the technical stack required." },
  { id: "03", title: "BUILD", desc: "Develop the application using clean, maintainable code and scalable patterns." },
  { id: "04", title: "TEST", desc: "Verify system integrity, security, and performance across all environments." },
  { id: "05", title: "DEPLOY", desc: "Ship to production with automated CI/CD pipelines and continuous monitoring." }
];

export const EngineeringProcess = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col relative group"
          >
            {/* Connection Line */}
            {idx !== stages.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-1/2 w-full h-[1px] bg-gradient-to-r from-accent/50 to-transparent z-0" />
            )}
            
            <div className="w-12 h-12 rounded-full border border-white/20 bg-surface flex items-center justify-center text-xs font-mono text-accent mb-6 z-10 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(200,255,56,0.3)] transition-all">
              {stage.id}
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">{stage.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{stage.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
