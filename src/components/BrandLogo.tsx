import "@fontsource/oswald/700.css";

interface BrandLogoProps {
  className?: string;
  size?: "small" | "large";
}

const BrandLogo = ({ className = "", size = "large" }: BrandLogoProps) => {
  if (size === "small") {
    return (
      <div className={`font-display font-bold tracking-tight ${className}`}>
        <span className="text-foreground text-xl md:text-2xl">NAKULA</span>
        <sup className="text-foreground/60 text-xs ml-0.5">®</sup>
      </div>
    );
  }

  return (
    <div className={`font-display font-bold tracking-tight ${className}`}>
      <h1 className="text-foreground/30 text-[clamp(4rem,18vw,14rem)] leading-[0.85] uppercase">
        NAKULA
        <sup className="text-foreground/20 text-[0.15em] align-top ml-1">®</sup>
      </h1>
    </div>
  );
};

export default BrandLogo;
