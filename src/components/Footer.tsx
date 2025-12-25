"use client";

import React from "react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Side: Brand & Role */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight">
              Talha Ahmed
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-md">
              Software Engineer | Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Building scalable digital experiences with precision and care.
            </p>
          </div>

          {/* Right Side: Contact Links */}
          <div className="flex flex-col md:items-end gap-4">
            <a 
              href="mailto:Talhaahmed7412@gmail.com" 
              className="group flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-lg">Talhaahmed7412@gmail.com</span>
            </a>
            
            <a 
              href="tel:+923122055123" 
              className="group flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-lg">+92-3122055123</span>
            </a>

            <div className="flex gap-4 mt-4">
              <SocialButton 
                href="https://www.linkedin.com/in/talha-ahmed-a3666428b" 
                icon={Linkedin} 
                label="LinkedIn"
              />
              <SocialButton 
                href="https://github.com/Talhaahmed74" 
                icon={Github} 
                label="GitHub"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/40 uppercase tracking-wider">
          <p>© {currentYear} Talha Ahmed. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

// Helper Component for Social Icons
const SocialButton = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group"
  >
    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
      {label}
    </span>
    <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </a>
);