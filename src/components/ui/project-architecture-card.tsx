"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, LucideIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Custom DB Icon (Memoized) ---
const DatabaseIcon = React.memo(({ x = "0", y = "0" }: { x: string; y: string }) => (
  <svg x={x} y={y} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
));
DatabaseIcon.displayName = "DatabaseIcon";

// --- Props Interface ---
export interface ProjectArchitectureProps {
  className?: string;
  projectTitle: string;
  architectureDescription: string;
  apiMethods: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  techStack: {
    left: { text: string; icon: LucideIcon };
    right: { text: string; icon: LucideIcon };
    center: string;
  };
  lightColor?: string;
  liveUrl?: string; // NEW: Optional link for live project
}

const ProjectArchitectureCard = ({
  className,
  projectTitle,
  architectureDescription,
  apiMethods,
  techStack,
  lightColor = "#00A6F5",
  liveUrl,
}: ProjectArchitectureProps) => {
  
  const gradientId = useMemo(() => `db-blue-grad-${projectTitle.replace(/\s/g, '')}`, [projectTitle]);

  return (
    <div className={cn("relative flex h-[350px] w-full max-w-[500px] flex-col items-center select-none group", className)}>
      
      {/* --- SVG LAYER --- */}
      <svg className="h-full sm:w-full text-muted" width="100%" height="100%" viewBox="0 0 200 100">
        <g stroke="currentColor" fill="none" strokeWidth="0.4" strokeDasharray="100 100" pathLength="100">
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />
        </g>

        {[1, 2, 3, 4].map((i) => (
          <g key={i} mask={`url(#db-mask-${i})`}>
            <circle className={`database db-light-${i}`} cx="0" cy="0" r="12" fill={`url(#${gradientId})`} />
          </g>
        ))}

        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          <MethodBadge x="14" width="34" label={apiMethods.first} />
          <MethodBadge x="60" width="34" label={apiMethods.second} />
          <MethodBadge x="108" width="34" label={apiMethods.third} />
          <MethodBadge x="150" width="40" label={apiMethods.fourth} />
        </g>

        <defs>
          <mask id="db-mask-1"><path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <mask id="db-mask-2"><path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <mask id="db-mask-3"><path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <mask id="db-mask-4"><path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <radialGradient id={gradientId} fx="1">
            <stop offset="0%" stopColor={lightColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {/* --- HTML CONTENT OVERLAY --- */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* Glow Shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/20 blur-xl transform-gpu transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
        
        {/* Project Title Tag */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 sm:-top-4 sm:py-1.5 shadow-lg">
          <SparklesIcon className="size-3 text-yellow-400 mr-2" />
          <span className="text-[10px] text-white font-medium tracking-wide uppercase">
            {projectTitle}
          </span>
        </div>

        {/* NEW: View Live Project Button (Top Right) */}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute -top-3 right-0 lg:-right-6 z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#101112]/90 px-3 py-1 text-[10px] text-white hover:bg-accent hover:border-accent transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>Live System</span>
            <ExternalLink className="size-3" />
          </a>
        )}

        {/* Center Tech Circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-[#141516] font-bold text-xs text-white shadow-xl">
          {techStack.center}
        </div>

        {/* Main Card Content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm shadow-md transition-colors duration-300 group-hover:border-accent/30">
          
          {/* Tech Stack Left */}
          <div className="absolute bottom-8 left-8 lg:left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 text-white">
            <techStack.left.icon className="size-3.5 text-blue-400" />
            <span>{techStack.left.text}</span>
          </div>

          {/* Tech Stack Right */}
          <div className="absolute bottom-8 right-8 lg:right-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 text-white">
            <techStack.right.icon className="size-3.5 text-green-400" />
            <span>{techStack.right.text}</span>
          </div>

          {/* Architecture Description */}
          <div className="absolute top-12 text-xs text-muted-foreground max-w-[220px] text-center px-2 leading-relaxed">
            {architectureDescription}
          </div>

          {/* Ripple Circles */}
          <RippleCircles />
        </div>
      </div>
    </div>
  );
};

// --- Sub-components (Memoized) ---

const MethodBadge = React.memo(({ x, width, label }: { x: string; width: string; label: string }) => (
  <g>
    <rect fill="#18181B" x={x} y="5" width={width} height="10" rx="5"></rect>
    <DatabaseIcon x={(parseInt(x) + 4).toString()} y="7.5"></DatabaseIcon>
    <text x={(parseInt(x) + 14).toString()} y="12" fill="white" stroke="none" fontSize="5" fontWeight="500">
      {label}
    </text>
  </g>
));
MethodBadge.displayName = "MethodBadge";

const RippleCircles = React.memo(() => (
  <>
    {[100, 145, 190, 235].map((size, i) => (
      <motion.div
        key={size}
        className={`absolute rounded-full border-t bg-accent/5`}
        style={{ width: size, height: size, bottom: -size/2, willChange: "transform" }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
      />
    ))}
  </>
));
RippleCircles.displayName = "RippleCircles";

export default React.memo(ProjectArchitectureCard);