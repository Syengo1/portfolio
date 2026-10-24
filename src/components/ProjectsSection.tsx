// src/components/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/projects";
import { ProjectCategory } from "@/types/project";

// Re-export PROJECTS for backward compatibility across the app
export { PROJECTS };

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "SaaS & POS",
  "E-Commerce & Web",
  "Client & NGO",
  "Fleet & Operations",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="w-full py-24 px-4 md:px-12 relative">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
        <div className="inline-block bg-background/95 backdrop-blur-sm px-8 py-6 rounded-3xl border border-border/40 shadow-sm">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
            {"// The Logbook — Engineering Portfolio"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Grand Line
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Production business platforms, Point-of-Sale (POS) systems, M-Pesa integrations, and
            full-stack web applications engineered for real-world operations.
          </p>

          {/* CATEGORY FILTER BAR */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SMART PROJECTS LAYOUT */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 relative z-20">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}