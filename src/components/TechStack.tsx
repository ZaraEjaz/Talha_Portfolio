"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Database, 
  Server, 
  Code2, 
  Cloud, 
  Layout, 
  Terminal, 
  Globe, 
  Cpu 
} from "lucide-react";

// --- 1. CONFIGURATION ---
const techStack = [
  { name: "React.js", icon: Layout, color: "#61DAFB" },
  { name: "Next.js", icon: Globe, color: "#ffffff" },
  { name: "FastAPI", icon: Server, color: "#009688" },
  { name: "Python", icon: Code2, color: "#3776AB" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "Azure", icon: Cloud, color: "#0078D4" },
  { name: "TypeScript", icon: Terminal, color: "#3178C6" },
  { name: "Node.js", icon: Cpu, color: "#339933" },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative w-full py-32 overflow-hidden bg-background">
      {/* Background Grid Pattern for Depth */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      {/* Radial Gradient overlay to fade grid at edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none uppercase tracking-tight"
          >
            Tech <span className="text-accent">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-4 text-base md:text-lg max-w-xl mx-auto"
          >
            The modern toolkit I use to build scalable, production-grade applications.
          </motion.p>
        </div>

        {/* Icons Container */}
        <div className="relative w-full flex items-center justify-center">
          <FloatingIcons />
        </div>

      </div>
    </section>
  );
}

const FloatingIcons = () => {
  return (
    <div className="relative w-full max-w-6xl h-48 md:h-64 flex items-center justify-center">
      
      {/* --- CENTRAL BEAM (Clean Version) --- */}
      {/* Just a subtle white line, no moving colors or heavy glows */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full z-0" />
      
      {/* --- ICONS GRID --- */}
      <div className="relative z-20 grid grid-cols-4 md:grid-cols-8 gap-x-4 gap-y-12 md:gap-8 w-full place-items-center">
        {techStack.map((tech, index) => (
          <TechItem key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

const TechItem = ({ tech, index }: { tech: typeof techStack[0], index: number }) => {
  const isEven = index % 2 === 0;
  const yOffset = isEven ? -20 : 20; 

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset + 20 }}
      whileInView={{ opacity: 1, y: yOffset }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05, 
        ease: "backOut" 
      }}
      className="relative group flex flex-col items-center justify-center"
    >
      {/* Vertical Connecting Line */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: Math.abs(yOffset) + 16, opacity: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
        className={cn(
          "absolute w-px bg-gradient-to-b from-white/5 to-white/20",
          yOffset < 0 ? "top-full" : "bottom-full origin-bottom"
        )}
      />

      {/* ICON CIRCLE */}
      <div className="relative">
        <div
          className={cn(
            "relative flex items-center justify-center",
            "w-16 h-16 md:w-20 md:h-20 rounded-full",
            "bg-neutral-900/90 border border-white/10",
            "shadow-lg backdrop-blur-sm",
            "group-hover:border-white/30 group-hover:bg-neutral-800",
            "transition-all duration-300 ease-out z-20"
          )}
        >
          {/* Subtle Inner Tint on Hover */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: tech.color }}
          />
          
          <tech.icon 
            className="w-7 h-7 md:w-9 md:h-9 text-neutral-400 transition-colors duration-300 relative z-10"
          />
          
          {/* Colorize Icon on Hover */}
          <style jsx>{`
            .group:hover .lucide {
              color: ${tech.color} !important;
              filter: drop-shadow(0 0 5px ${tech.color}40);
            }
          `}</style>
        </div>

        {/* Tooltip Label */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none">
          <div className="px-3 py-1 rounded bg-neutral-800 border border-white/10 text-[10px] md:text-xs font-medium tracking-wide uppercase text-white shadow-lg whitespace-nowrap">
            {tech.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
};