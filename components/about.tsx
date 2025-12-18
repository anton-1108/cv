export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-4xl">
        <div className="mb-12">
          <p className="text-accent font-bold mb-3 tracking-widest uppercase text-xs">
            Who I Am
          </p>
          <h2 className="text-6xl sm:text-7xl font-black text-gradient-accent mb-8">
            About
          </h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
          <p>
            I'm a developer passionate about{" "}
            <span>crafting accessible, pixel-perfect user interfaces</span>
            that blend thoughtful design with robust engineering. My favorite
            work lies at the intersection of design and development, creating
            experiences that not only look great but are meticulously built for
            performance and usability.
          </p>
          <p>
            Currently, I'm a <span>Junior Frontend Engineer</span> specializing
            in accessibility. I contribute to the creation and maintenance of UI
            components, ensuring our platform meets web accessibility standarts
            and best practices to deliver an inclusive user experience.
          </p>
          <p>
            In the past, I've had the opportunity to develop software across a
            variety of settings - from
            <span className="text-foreground font-semibold">
              advertising agencies
            </span>
            <span className="text-foreground font-semibold">
              large corporations
            </span>
            <span className="text-foreground font-semibold">startups</span>
            <span className="text-foreground font-semibold">
              small digital product studios
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
