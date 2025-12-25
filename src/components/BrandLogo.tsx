import "@fontsource/oswald/700.css";
import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "small" | "medium";
}

const BrandLogo = ({ className = "", size = "medium" }: BrandLogoProps) => {
  if (size === "small") {
    return (
      <div className={`font-display font-bold tracking-tight ${className}`}>
        <span className="text-foreground text-xl md:text-2xl uppercase">TALHA</span>
        <sup className="text-foreground/100 text-xs align-top">®</sup>
      </div>
    );
  }

  return (
    <div className={`font-display font-bold tracking-tighter ${className}`}>
      <h1 className="text-foreground/100 text-[clamp(3rem,12vw,10rem)] leading-[0.85] uppercase">
        TALHA
        <sup className="text-foreground/100 text-[0.15em] align-top">®</sup>
      </h1>
    </div>
  );
};

export default BrandLogo;
