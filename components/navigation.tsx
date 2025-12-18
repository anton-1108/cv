"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-border/30 glass-morphism p-10 hidden lg:flex flex-col justify-between">
      <div>
        <h1 className="text-5xl font-black mb-3 text-gradient-primary">
          Anton
        </h1>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2 font-bold">
          Front End
        </p>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-12 font-bold">
          Engineer
        </p>

        <ul className="space-y-6">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-xs font-bold transition-all tracking-widest ${
                  activeSection === id
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-primary hover:scale-105"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
        >
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
        >
          <Twitter className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
        >
          <Mail className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </nav>
  );
}
