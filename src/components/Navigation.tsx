"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#process", label: "What I Build" },
  { href: "#languages", label: "Languages" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const selector = href === "#contact" ? "footer" : href;
    const target = document.querySelector(selector);
    if (target) {
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  return (
    <>
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            [PORTFOLIO]
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-[9px] lg:text-[11px] font-mono uppercase tracking-widest text-muted/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-[#7766ff] animate-pulse shadow-[0_0_6px_#7766ff]" />
              <span className="font-mono text-[9px] tracking-widest text-[#7766ff]/60">AVAILABLE</span>
            </div>
            <a
              href="/Iqra_Bibi_CV.pdf"
              download="Iqra_Bibi_CV.pdf"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-[#7766ff]/40 text-[9px] font-bold tracking-[0.2em] text-[#9d8fff] hover:border-[#7766ff] hover:bg-[#7766ff]/10 hover:text-white hover:shadow-[0_0_15px_rgba(119,102,255,0.25)] transition-all duration-300 uppercase"
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              CV
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              className="w-6 h-[2px] bg-foreground"
            />
            <motion.div
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="w-6 h-[2px] bg-foreground"
            />
            <motion.div
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              className="w-6 h-[2px] bg-foreground"
            />
          </button>
        </div>
      </header>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-bold tracking-tight hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex items-center gap-2 text-xs text-muted mt-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

