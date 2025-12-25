import { motion } from "framer-motion";
import TechTicker from "./TechTicker"; // Import the new component

const AboutDescription = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="flex flex-col justify-center space-y-8"
    >
      <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80">
        I am a Full Stack Software Engineer bridging the gap between 
        intuitive design and robust architecture. Specializing in 
        <span className="text-foreground font-medium"> React, Next.js, and FastAPI</span>, 
        I build scalable systems that transform complex data into seamless experiences.
      </p>
      <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80">
        From real-time analytics dashboards to AI-integrated backends, 
        I don't just solve problems—I create production-grade solutions 
        designed to perform and endure.
      </p>
      
      {/* REPLACED BUTTON WITH TECH TICKER */}
      <div className="pt-6">
         <div className="text-xs font-bold text-foreground/40 mb-4 tracking-widest uppercase">
            Technologies I Work With
         </div>
         <div className="-ml-4 w-[110%]"> {/* Slightly wider to break grid constraint */}
            <TechTicker />
         </div>
      </div>
    </motion.div>
  );
};

export default AboutDescription;