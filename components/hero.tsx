export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl relative z-10 w-full">
        <div className="flex flex-col items-center gap-12">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-accent">
              <img
                src="./profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-5xl">
            <p className=" text-primary font-bold mb-6 tracking-widest uppercase text-sm animate-slide-up">
              Developer Designer Creator
            </p>
            <h1 className="text-display font-black mb-8 text-balance leading-none animate-slide-up">
              <span className="text-foreground">Build.</span>
              <br />
              <span className="text-gradient-primary animate-glow">
                Create.
              </span>
              <br />
              <span className="text-foreground">Innovate.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-slide-up font-light">
              I'm a{" "}
              <span className="text-primary font-semibold">
                Full-Stack Developer
              </span>{" "}
              passionate about crafting accessible, pixel-perfect digital
              experiences that blend thoughtful design with robust engineering.
            </p>
            <div>
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-primary/50"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all hover:scale-110"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
