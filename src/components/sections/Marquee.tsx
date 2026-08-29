"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Marquee = () => {
  const words = ["SOFTWARE", "FLUTTER", "WEB", "AI", "SYSTEMS", "ENGINEERING", "MOBILE", "DEVOPS"];
  
  return (
    <div className="py-8 border-y border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, idx) => (
          <span key={idx} className="text-6xl md:text-8xl font-bold tracking-tighter text-white/[0.03] mx-8 select-none">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
