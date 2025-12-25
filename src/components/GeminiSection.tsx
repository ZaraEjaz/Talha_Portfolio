"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export const GeminiSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      // REMOVED: pt-40
      // KEPT: h-[400vh] to allow scrolling time
      className="h-[400vh] bg-black w-full rounded-md relative overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        title={
          <>
            <span className="text-accent">FULL STACK</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
              PRECISION
            </span>
          </>
        }
        description="Crafting production-grade applications with robust performance and data-driven logic."
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
};

export default GeminiSection;