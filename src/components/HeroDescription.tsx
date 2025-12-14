const HeroDescription = () => {
  return (
    <div className="max-w-md opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
        <span className="text-foreground font-medium">
          We build brands, websites, and digital experiences
        </span>{" "}
        <span className="text-hero-muted">
          with intention, clarity and care.
        </span>
      </p>
    </div>
  );
};

export default HeroDescription;
