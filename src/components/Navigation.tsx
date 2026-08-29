"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (logoClicks >= 5) {
      alert("SYSTEM MODE ENABLED");
      // Could enable a context or body class for system mode here
      setTimeout(() => setLogoClicks(0), 5000);
    }
  }, [logoClicks]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="font-bold text-lg tracking-tighter uppercase cursor-pointer"
          onClick={() => setLogoClicks(c => c + 1)}
        >
          [{siteConfig.name}]
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#work" className="hover:text-accent transition-colors">WORK</Link>
          <Link href="#about" className="hover:text-accent transition-colors">ABOUT</Link>
          <Link href="#experience" className="hover:text-accent transition-colors">EXPERIENCE</Link>
          <Link href="#stack" className="hover:text-accent transition-colors">STACK</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">CONTACT</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2 text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>
    </header>
  );
};
