import "@fontsource/oswald/700.css";
import { motion } from "framer-motion";
import { TextRoll } from "@/components/ui/text-roll"; // Import the new component

const AboutHeading = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-display font-bold uppercase leading-[0.9]"
    >
      {/* BLOCK 1 */}
      <div className="text-[clamp(3rem,6vw,6rem)] text-foreground mb-4">
        {/* Line 1: I DON'T JUST */}
        <div className="overflow-hidden">
          <TextRoll className="text-foreground">
            I DON'T JUST
          </TextRoll>
        </div>
        
        {/* Line 2: WRITE CODE. */}
        <div className="overflow-hidden">
          <TextRoll className="text-foreground/50">
            WRITE CODE.
          </TextRoll>
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="text-[clamp(3rem,6vw,6rem)] text-foreground">
        {/* Line 1: I ENGINEER */}
        <div className="overflow-hidden">
          <TextRoll className="text-foreground">
            I ENGINEER
          </TextRoll>
        </div>

        {/* Line 2: IMPACT. */}
        <div className="overflow-hidden">
          <TextRoll className="text-accent">
            IMPACT.
          </TextRoll>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutHeading;