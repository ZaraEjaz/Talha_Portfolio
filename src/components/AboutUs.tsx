import React, { Suspense } from "react";
import "@fontsource/oswald/700.css";

// 1. Lazy load the components
const AboutHeading = React.lazy(() => import("./AboutHeading"));
const AboutDescription = React.lazy(() => import("./AboutDescription"));

// Loading placeholder to prevent layout shift
const LoadingSkeleton = () => (
  <div className="h-64 w-full animate-pulse bg-neutral-200/20 rounded-lg" />
);

const AboutUs = () => {
  return (
    <section 
      id="about" 
      className="relative z-10 w-full min-h-screen bg-background px-4 md:px-8 lg:px-12 py-20 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-20">
          
          {/* Left Side: Lazy Loaded */}
          <Suspense fallback={<LoadingSkeleton />}>
            <AboutHeading />
          </Suspense>

          {/* Right Side: Lazy Loaded */}
          <Suspense fallback={<LoadingSkeleton />}>
            <AboutDescription />
          </Suspense>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;