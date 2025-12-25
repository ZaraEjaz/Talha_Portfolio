import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BrandLogo from "./BrandLogo";
import AvailableStatus from "./AvailableStatus";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // On desktop, fade in the navbar logo after scrolling past ~300px (hero section)
  const navLogoOpacity = useTransform(scrollY, [200, 400], [0, 1]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 py-4 md:py-6">
      <div className="flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="relative">
          {/* Mobile: Always visible */}
          <div className="md:hidden">
            <BrandLogo size="small" />
          </div>
          
          {/* Desktop: Fades in after scrolling past hero */}
          <motion.div 
            className="hidden md:block"
            style={{ opacity: navLogoOpacity }}
          >
            <BrandLogo size="small" />
          </motion.div>
        </div>

        {/* --- RIGHT SIDE ACTIONS --- */}
        <div className="flex items-center gap-3 md:gap-8">
          
          {/* DESKTOP ONLY: Available Status */}
          <div className="hidden lg:block transform scale-90 origin-right">
             <AvailableStatus />
          </div>

          {/* Let's Talk Button - UPDATED FOR GMAIL WEB */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Talhaahmed7412@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-2.5 bg-foreground text-background font-medium text-sm rounded-full hover:bg-foreground/90 transition-colors duration-200"
          >
            LET'S TALK
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-medium">
            <a href="#home" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" className="text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;