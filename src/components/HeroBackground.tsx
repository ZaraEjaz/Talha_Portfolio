import heroEye from "@/assets/hero-eye.jpg";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40 z-10" />
      
      {/* Background image */}
      <img
        src={heroEye}
        alt=""
        className="w-full h-full object-cover object-center opacity-80"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroBackground;
