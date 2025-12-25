import React, { Suspense } from "react";
import { Server, Layout, Database, ShieldAlert, LineChart, Globe, Lock, CreditCard } from "lucide-react";

// 1. Lazy Import
const ProjectArchitectureCard = React.lazy(() => import("@/components/ui/project-architecture-card"));

// 2. Updated Project Data
const projects = [
  // --- PROJECT 1: Customer Side (Blue Pine) ---
  {
    projectTitle: "Blue Pine Resort",
    architectureDescription: "Customer-facing booking engine with real-time room availability and secure payment gateways.",
    apiMethods: {
      first: "ROOMS",
      second: "BOOK",
      third: "AVAIL",
      fourth: "PAY",
    },
    techStack: {
      left: { text: "FastAPI", icon: Server },
      right: { text: "React", icon: Layout },
      center: "CLIENT",
    },
    lightColor: "#0ea5e9", // Sky Blue
    liveUrl: "https://blue-pine-website.onrender.com/",
  },

  // --- PROJECT 2: Admin Side (Blue Pine Admin) ---
  {
    projectTitle: "Blue Pine Admin",
    architectureDescription: "Back-office dashboard for managing reservations, room inventory, and revenue analytics.",
    apiMethods: {
      first: "STATS",
      second: "ROOMS",
      third: "USER",
      fourth: "LOGS",
    },
    techStack: {
      left: { text: "Supabase", icon: Database },
      right: { text: "React", icon: Lock },
      center: "ADMIN",
    },
    lightColor: "#f59e0b", // Amber/Orange for Admin
    liveUrl: "https://pine-blue-admin.onrender.com/",
  },

  // --- PROJECT 3: Transaction Risk (Existing) ---
  {
    projectTitle: "Risk Scoring AI",
    architectureDescription: "Rule-based fraud detection engine processing merchant transactions with detailed risk modals.",
    apiMethods: {
      first: "TXNS",
      second: "EVAL",
      third: "FLAG",
      fourth: "RISK",
    },
    techStack: {
      left: { text: "Node.js", icon: ShieldAlert },
      right: { text: "Supabase", icon: Database },
      center: "RISK",
    },
    lightColor: "#ef4444", // Red
    // Add live link if you have one, otherwise remove
    // liveUrl: "...", 
  },

  // --- PROJECT 4: Churn Prediction (Existing) ---
  {
    projectTitle: "Churn Prediction",
    architectureDescription: "LightGBM ML solution serving customer retention predictions via a responsive frontend.",
    apiMethods: {
      first: "DATA",
      second: "PRED",
      third: "TRAIN",
      fourth: "REP",
    },
    techStack: {
      left: { text: "Python", icon: LineChart },
      right: { text: "MongoDB", icon: Globe },
      center: "ML",
    },
    lightColor: "#8b5cf6", // Purple
  },
];

// 3. Loading Skeleton
const ProjectCardSkeleton = () => (
  <div className="flex h-[350px] w-full max-w-[500px] flex-col items-center justify-end pb-10">
    <div className="h-[150px] w-full rounded-lg border bg-neutral-100/5 animate-pulse" />
    <div className="absolute -bottom-8 h-[60px] w-[60px] rounded-full bg-neutral-100/5 animate-pulse" />
  </div>
);

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 text-center md:text-center">
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none uppercase">
            Selected <span className="text-accent">Works</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-20 place-items-center">
          {projects.map((project, index) => (
            <div key={index} className="w-full flex justify-center">
              <Suspense fallback={<ProjectCardSkeleton />}>
                <ProjectArchitectureCard {...project} />
              </Suspense>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcase;