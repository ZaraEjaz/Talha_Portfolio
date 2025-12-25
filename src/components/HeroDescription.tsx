const HeroDescription = () => {
  return (
    <div className="max-w-3xl opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
      {/* ADDED: 'indent-12 md:indent-32' 
        - indent-12: Small indentation on mobile
        - md:indent-32: Large, dramatic indentation on desktop for that "cool" editorial look
      */}
      <p className="text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight indent-12 md:indent-32">
        <span className="text-foreground font-bold">
          I build brands, websites, and digital experiences
        </span>{" "}
        <span className="text-foreground/60 font-semibold">
          with intention, clarity and care.
        </span>
      </p>
    </div>
  );
};

export default HeroDescription;