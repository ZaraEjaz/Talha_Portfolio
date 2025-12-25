"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
              DARC Technologies
            </h3>
            <p className="text-lg text-neutral-500 font-medium">
              Intern → Software Engineer
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              July 2025 - Present
            </p>
          </div>
          
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Spearheading full-stack development for production-grade solutions. 
            Transitioned from an intern to a core engineering role, creating scalable architectures.
          </p>

          <div className="flex flex-col gap-3">
            <ExperienceItem text="Developed and deployed full-stack web applications using React.js, FastAPI, and Node.js on cloud platforms." />
            <ExperienceItem text="Designed real-time dashboards, system architectures, and AI-powered chatbots." />
            <ExperienceItem text="Contributed to key projects like the Hotel Booking Management System and Transaction Risk Scoring Dashboard." />
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
             {["React", "FastAPI", "Node.js", "AI Integration", "Cloud Deployment"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-400">
                  {tag}
                </span>
             ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
              KNYSYS
            </h3>
            <p className="text-lg text-neutral-500 font-medium">
              Software Engineering Intern
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              2024
            </p>
          </div>
          
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Focused on enterprise resource planning (ERP) solutions and backend microservices.
          </p>

          <div className="flex flex-col gap-3">
            <ExperienceItem text="Customized and extended Odoo ERP modules to streamline business workflows and data management." />
            <ExperienceItem text="Developed and maintained lightweight backend services and RESTful APIs using Flask." />
            <ExperienceItem text="Collaborated on database optimization and system integration tasks." />
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
             {["Odoo ERP", "Flask", "Python", "PostgreSQL", "XML"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-400">
                  {tag}
                </span>
             ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="w-full bg-background relative overflow-hidden">
      <Timeline data={data} />
    </section>
  );
}

// Simple Helper Component for list items
const ExperienceItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
    <span className="text-neutral-400 text-sm md:text-base">{text}</span>
  </div>
);