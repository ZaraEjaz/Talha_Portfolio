import HeroPage from "@/components/HeroPage";
import AboutUs from "@/components/AboutUs"; // Import the new component
import Navbar from "@/components/Navbar";
import GeminiSection from "@/components/GeminiSection";
import Projects from "@/components/ProjectShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative w-full">
      <Navbar />

      {/* HERO SECTION WRAPPER 
         1. sticky top-0: Keeps the hero attached to the top of the viewport
         2. h-screen: Forces it to be full height
         3. -z-10: Keeps it behind the content that follows
      */}
      <div className="sticky top-0 h-screen w-full -z-10">
        <HeroPage />
      </div>
{/* 2. GEMINI EFFECT SECTION 
          This will scroll naturally. Because it has h-[400vh], 
          it will take a moment to scroll through, allowing the animation to play.
          We add z-20 to ensure it covers the Hero as you scroll down.
      */}
      <div className="relative z-20 bg-black">
        <GeminiSection />
      </div>
      {/* ABOUT SECTION 
         Because this has a background color and z-index (defined in the component above),
         it will naturally scroll UP and cover the sticky hero.
      */}
      <AboutUs />
      <Projects/>
      <ExperienceSection />
      <TechStack />
      <Footer />
      

    </main>
  );
};

export default Index;