import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "./HeroBackground";
import BrandLogo from "./BrandLogo";
import AvailableStatus from "./AvailableStatus";
import HeroTagline from "./HeroTagline";
import HeroDescription from "./HeroDescription";
import { ShinyButton } from "@/components/ui/shiny-button"; // Import the button

const HeroPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Animation values for the hero logo shrink effect
  // Start position: large logo in hero section
  // End position: matches navbar logo position (top-left, small)
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.15]);
  const logoX = useTransform(scrollY, [0, 300], [0, 4]); 
  const logoY = useTransform(scrollY, [0, 300], [0, 10]); 
  const logoOpacity = useTransform(scrollY, [250, 350], [1, 0]); 

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Layer - Always behind */}
      <HeroBackground />

      {/* TAGLINE - ABSOLUTE POSITIONED (Top Right) */}
      <div className="absolute top-40 md:top-32 right-0 z-20 pr-2 md:pr-10">
        <HeroTagline />
      </div>

      {/* Content Layer - Above background */}
      <div className="relative z-10 min-h-screen flex flex-col px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12">
        
        {/* MOBILE ONLY: Status Position (Under Navbar, Left Aligned) */}
        <div className="lg:hidden w-full pt-0 pb-4">
          <AvailableStatus />
        </div>

        {/* Top Section - Logo (DESKTOP ONLY) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0">
          {/* Large Brand Logo - Desktop only with scroll animation */}
          <motion.div 
            className="hidden lg:block fixed top-7 left-12 z-50 origin-top-left"
            style={{
              scale: logoScale,
              x: logoX,
              y: logoY,
              opacity: logoOpacity,
            }}
          >
            <BrandLogo size="medium" />
          </motion.div>

          {/* Placeholder to maintain layout space on Desktop */}
          <div className="hidden lg:block">
            <div className="opacity-0 pointer-events-none">
              <BrandLogo size="medium" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Description and CTA */}
        {/* mt-auto pushes this to the bottom. 
            We use flex-col on mobile (stacking) and flex-row on desktop (side-by-side) 
        */}
        <div className="mt-auto pt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Description Container */}
          <div className="flex-1">
             <HeroDescription />
          </div>

          {/* HIRE ME BUTTON 
             - w-full: Takes full width on mobile
             - lg:w-auto: Takes natural width on desktop
          */}
          <div className="w-full lg:w-auto animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <ShinyButton 
              className="w-full lg:w-auto uppercase tracking-wider" 
              onClick={() => console.log("Hire Me Clicked")}
            >
              Hire Me for Project
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;