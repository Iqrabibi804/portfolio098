"use client";

import { useGlobalState } from "@/components/providers/GlobalStateProvider";
import { useEffect, useState } from "react";

export const SystemStatusUI = () => {
  const { buildMode, setBuildMode } = useGlobalState();
  const [time, setTime] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
      setTick(t => t + 1);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── Build Mode architect HUD bar ── */}
      {buildMode && (
        <div
          className="fixed top-0 left-0 right-0 z-[9995] h-7 flex items-center justify-between px-6 font-mono text-[8px] tracking-[0.35em] text-[#7766ff]/70"
          style={{
            background: "linear-gradient(90deg, #0a0015 0%, #080012 50%, #0a0015 100%)",
            borderBottom: "1px solid rgba(119,102,255,0.25)",
          }}
        >
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7766ff] animate-pulse shadow-[0_0_6px_#7766ff]" />
            ◆ BUILD MODE // ARCHITECT OVERLAY // ALL SYSTEMS ACTIVE
          </span>
          <span className="text-[#7766ff]/40">
            {time} · TICK_{String(tick).padStart(4, "0")}
          </span>
        </div>
      )}

      {/* Bottom Left Status */}
      <div className={`fixed ${buildMode ? "bottom-12 left-6" : "bottom-12 left-6"} z-[90] hidden md:flex flex-col gap-1 text-[9px] font-mono tracking-widest pointer-events-none text-muted`}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7766ff] animate-pulse shadow-[0_0_4px_#7766ff]" />
          <span className="text-[#7766ff]/70">SYSTEM / ONLINE</span>
        </div>
        <div className="text-white/20">STATUS: ACTIVE</div>
        <div className="text-white/20">LOC: 31.54°N 72.35°E</div>
      </div>

      {/* Top Right Build Mode Toggle */}
      <div className={`fixed ${buildMode ? "top-[116px]" : "top-[88px]"} right-6 z-[90] hidden md:flex gap-4 items-center transition-all duration-300`}>
        <div className="text-[9px] font-mono tracking-widest text-white/20">{time}</div>
        <button
          onClick={() => setBuildMode(!buildMode)}
          className={`text-[9px] font-mono tracking-[0.2em] px-3 py-1.5 rounded-lg border transition-all duration-300 ${
            buildMode
              ? "border-[#7766ff] text-[#7766ff] bg-[#7766ff]/15 shadow-[0_0_15px_rgba(119,102,255,0.3)]"
              : "border-white/15 text-white/30 hover:border-[#7766ff]/40 hover:text-[#7766ff]/60"
          }`}
        >
          {buildMode ? "■ BUILD MODE: ON" : "□ BUILD MODE: OFF"}
        </button>
      </div>

      {/* Left Side Progress Tracker */}
      <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4 text-[9px] font-mono tracking-widest">
        {["HERO", "ABOUT", "EXPERIENCE", "STACK", "WORK", "PROCESS"].map((item, idx) => (
          <div
            key={item}
            className="flex items-center gap-4 text-white/15 hover:text-[#7766ff]/60 transition-colors cursor-pointer group"
            onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="group-hover:text-[#7766ff]/50 transition-colors">0{idx}</span>
            <div className="w-4 h-[1px] bg-current group-hover:w-6 transition-all duration-200" />
          </div>
        ))}
      </div>
    </>
  );
};
