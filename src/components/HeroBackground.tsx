import heroEye from "@/assets/hero-eye.jpg";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40 z-10" />
      
      <div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe
    src="https://my.spline.design/liquidring-PGc8zQXZyDUpVFvWNgohNZnv" frameBorder="0" width="100%" height="100%"
    id="aura-spline"></iframe></div>
    </div>
  );
};

export default HeroBackground;
