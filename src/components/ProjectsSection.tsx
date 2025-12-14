"use client";

import { ProjectCard, ProjectType } from "./ProjectCard";

// ... (Your PROJECTS array remains here) ...
const PROJECTS: ProjectType[] = [
  {
    title: "Notsro",
    description: "Disclaimer: Not owned by Notsro!!!, Notsro is a modern website for a Nairobi-based premium fast-food brand, likely focused on pizza and casual dining. It emphasizes clean design and brand identity, serving as a simple promotional or landing page rather than a fully featured restaurant website.",
    image: "/notsro.png",
    techStack: ["React", "TailwindCss", "Vite", "Framer-Motion", "Supabase"],
    liveLink: "https://notsro.vercel.app/",
    //repoLink: "https://github.com", 
    isDeployed: true,
    difficulty: "Supernova",
  },
  {
    title: "DriveFlow",
    description: "A full-stack Car Rental Web App.",
    image: "/driveflow.png",
    techStack: ["Next.js", "Supabase", "Daraja API"],
    isDeployed: false,
    difficulty: "Emperor",
  },
  {
    title: "AmpTech",
    description: "A E-commerce Website. A testament to where the journey began.",
    image: "/amptech.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#",
    isDeployed: false,
    difficulty: "Rookie",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 md:px-12 relative">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        
        {/* SMART MASK: This div sits on top of the line and has the same color as the page background */}
        <div className="inline-block bg-background/95 backdrop-blur-sm px-8 py-6 rounded-3xl border border-border/40 shadow-sm">
            <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
              // The Logbook
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Grand Line</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              From simple scripts to "Emperor-level" full-stack applications. 
              Here lies the collection of islands I have charted.
            </p>
        </div>

      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}