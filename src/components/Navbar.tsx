import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 py-4 md:py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <BrandLogo size="small" />

        {/* Right side actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Let's Talk Button */}
          <button className="px-4 md:px-6 py-2 md:py-2.5 bg-foreground text-background font-medium text-sm rounded-full hover:bg-foreground/90 transition-colors duration-200">
            LET'S TALK
          </button>

          {/* Hamburger Menu */}
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-medium">
            <a href="#work" className="text-foreground hover:text-accent transition-colors">Work</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
