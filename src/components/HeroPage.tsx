import HeroBackground from "./HeroBackground";
import BrandLogo from "./BrandLogo";
import AvailableStatus from "./AvailableStatus";
import HeroTagline from "./HeroTagline";
import HeroDescription from "./HeroDescription";

const HeroPage = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Layer - Always behind */}
      <HeroBackground />

      {/* Content Layer - Above background */}
      <div className="relative z-10 min-h-screen flex flex-col px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12">
        
        {/* Top Section - Logo and Status */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0">
          {/* Large Brand Logo - Desktop only, positioned top left */}
          <div className="hidden lg:block">
            <BrandLogo size="large" />
          </div>

          {/* Status and Time - Positioned at top center on desktop */}
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-24">
            <AvailableStatus />
          </div>
        </div>

        {/* Mobile Brand Logo */}
        <div className="lg:hidden mt-4">
          <BrandLogo size="large" className="text-center" />
        </div>

        {/* Middle/Right Section - Tagline */}
        <div className="flex-1 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="lg:mr-8 xl:mr-16">
            <HeroTagline />
          </div>
        </div>

        {/* Bottom Section - Description */}
        <div className="mt-auto pt-8">
          <HeroDescription />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
