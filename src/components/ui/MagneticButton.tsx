"use client";

import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export const MagneticButton = ({ children, href, onClick, variant = "primary", className = "", external }: MagneticButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-foreground text-background hover:shadow-[0_0_30px_rgba(200,255,56,0.3)] hover:scale-105",
    outline: "border border-accent text-accent hover:bg-accent hover:text-background hover:scale-105",
    ghost: "text-muted hover:text-accent",
  };

  const inner = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return <button onClick={onClick}>{inner}</button>;
};
