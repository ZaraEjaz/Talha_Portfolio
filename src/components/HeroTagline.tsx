import "@fontsource/oswald/700.css";

const HeroTagline = () => {
  return (
    <div className="text-right">
      <h2 className="font-sans italic text-foreground text-3xl md:text-3xl lg:text-4xl xl:text-6xl leading-tight">
        <div className="flex flex-row md:flex-col gap-2">
        <span className="block opacity-0 animate-fade-in-up font-medium not-italic text-accent" style={{ animationDelay: "0.2s" }}>
          Beyond
        </span>
        <span className="block opacity-0 animate-fade-in-up font-medium not-italic text-accent" style={{ animationDelay: "0.4s" }}>
          Visuals
        </span>
        </div>
        <div className="flex flex-row md:flex-col gap-2">
        <span className="block opacity-0 animate-fade-in-up font-medium not-italic" style={{ animationDelay: "0.6s" }}>
          Built with
        </span>
        <span className="block opacity-0 animate-fade-in-up font-medium not-italic" style={{ animationDelay: "0.8s" }}>
           Vision.
        </span>
        </div>
      </h2>
    </div>
  );
};

export default HeroTagline;
