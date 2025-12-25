"use client";

import { motion } from "framer-motion";

const techs = [
  "React",
  "Next.js",
  "FastAPI",
  "Python",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Azure",
  "Tailwind",
  "Supabase"
];

const TechTicker = () => {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Left/Right Fade Masks for seamless look */}
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max">
        {/* We duplicate the list to create the seamless infinite loop */}
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
};

const TickerContent = () => (
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: "-100%" }}
    transition={{
      duration: 20, // Adjust speed (higher = slower)
      ease: "linear",
      repeat: Infinity,
    }}
    className="flex gap-3 px-1.5"
  >
    {techs.map((tech, index) => (
      <div
        key={index}
        className="
          relative group cursor-default
          px-4 py-2 rounded-full 
          bg-neutral-100/5 border border-white/10 
          backdrop-blur-sm
          hover:bg-white/10 hover:border-white/20 
          transition-colors duration-300
        "
      >

        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground tracking-wide uppercase">
          {tech}
        </span>
      </div>
    ))}
  </motion.div>
);

export default TechTicker;