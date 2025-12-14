import "@fontsource/oswald/700.css";

const HeroTagline = () => {
  return (
    <div className="text-right">
      <h2 className="font-serif italic text-foreground text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
        <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Beyond
        </span>
        <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Visuals.
        </span>
        <span className="block opacity-0 animate-fade-in-up font-bold not-italic" style={{ animationDelay: "0.6s" }}>
          Built with
        </span>
        <span className="block opacity-0 animate-fade-in-up font-bold not-italic" style={{ animationDelay: "0.8s" }}>
          Vision.
        </span>
      </h2>
    </div>
  );
};

export default HeroTagline;
