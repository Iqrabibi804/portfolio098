"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold tracking-widest text-lg">
            [{siteConfig.name}]
          </span>
          <span className="text-muted text-sm mt-2">
            {siteConfig.roles.join(" / ")}
          </span>
        </div>
        
        <div className="flex gap-6">
          {Object.entries(siteConfig.socials).map(([name, url]) => (
            <Link 
              key={name}
              href={url}
              className="text-muted hover:text-foreground uppercase text-sm tracking-widest transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <span className="text-muted text-sm">
            © {new Date().getFullYear()}
          </span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm tracking-widest hover:text-accent transition-colors flex items-center gap-2"
          >
            BACK TO TOP <span className="text-accent">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
