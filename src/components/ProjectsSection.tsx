"use client";

import { ProjectCard, ProjectType } from "./ProjectCard";

// ADDED "export" HERE so other files can access the data
export const PROJECTS: ProjectType[] = [

  {
    title: "Nairobi Streetwear",
    description: "NSwear is a Vertical SaaS Operating System designed to power the next generation of Kenyan fashion brands. By unifying E-Commerce and Point of Sale (POS) capabilities into a single robust platform, it eliminates the need for fragmented business tools. NSwear orchestrates the entire commerce lifecycle from real-time inventory synchronization and content management (CMS) to order processing and logistics delivering a flawless, scalable workflow for modern streetwear labels.",
    image: "/nsw.png",
    techStack: ["Next.js", "React", "Supabase", "Daraja API", "TypeScript", "TailwindCSS", "Framer-Motion", "Lucide React"],
    liveLink: "https://nswear.vercel.app/",
    isDeployed: true,
    difficulty: "Emperor",
  },
  {
    title: "Crack OS",
    description: "Crack OS is a Vertical SaaS Operating System engineered specifically for modern Quick Service Restaurants (QSRs). By fusing a hybrid Point of Sale (POS) and E-Commerce interface with a robust Business Management System (BMS), it replaces fragmented tools to manage the entire lifecycle of a food order from the customer's initial craving to the kitchen's final preparation. Built for scale, it delivers seamless Multi Branch Support, unifying realtime inventory and sales data across all physical locations into one flawless, synchronized workflow.",
    image: "/crack.png",
    techStack: ["Next.js", "React", "Supabase", "Daraja API", "TypeScript", "TailwindCSS", "Framer-Motion", "Lucide React"],
    liveLink: "https://crackngo.vercel.app/",
    isDeployed: true,
    difficulty: "Emperor",
  },
  {
    title: "Notsro",
    description: "Disclaimer: Not owned by Notsro!!!, Notsro is a modern website for a Nairobi-based premium fast-food brand, likely focused on pizza and casual dining. It emphasizes clean design and brand identity, serving as a simple promotional or landing page rather than a fully featured restaurant website.",
    image: "/notsro.png",
    techStack: ["React", "TailwindCss", "Vite", "Framer-Motion", "Supabase"],
    liveLink: "https://notsro.vercel.app/",
    isDeployed: true,
    difficulty: "Emperor",
  },
  {
    title: "DriveFlow",
    description: "Driveflow is a premium vehicle rental and fleet management platform that bridges the gap between a high-end consumer experience and robust operational control. It features a seamless booking engine with real-time availability, dynamic pricing, and integrated payments, backed by AI-powered identity verification to ensure security. For operators, the platform provides a comprehensive command center to track vehicle health, manage maintenance, and analyze financial performance, delivering a complete operating system for modern car rental businesses. Still in Development",
    image: "/driveflow.png",
    techStack: ["Next.js", "Supabase", "Daraja API"],
    isDeployed: true,
    liveLink: "https://driveflowltd.vercel.app/",
    difficulty: "Emperor",
  },
  {
    title: "AmpTech",
    description: "AmpTech Power Solutions is a sophisticated digital ecosystem engineered to bridge the gap between premium electrical hardware and professional technical services. This platform offers an immersive e-commerce experience tailored for the smart-home and renewable energy sectors, featuring curated catalogs with high-fidelity visual galleries and intuitive, category-driven navigation. The architecture prioritizes a frictionless user journey, transitioning seamlessly from product discovery to personalized engagement via a specialized Direct to Consultant checkout system. By integrating advanced shopping cart functionalities with preferred communication channels, the software maximizes conversion through immediate professional interaction. Complementing the storefront is a robust administrative suite providing real-time inventory control and streamlined content management, including automated image processing and dynamic stock tracking. Designed with a premium, mobile-first aesthetic, this platform is a strategic business tool engineered to scale operations and elevate tech-driven service delivery.",
    image: "/amptech.png",
    techStack: ["HTML", "CSS", "Vanilla JavaScript", "Node.js", "JWT", "MongoDB", "Mongoose", "Cloudinary", "Express.js"],
    liveLink: "https://amptech.onrender.com",
    repoLink: "#",
    isDeployed: true,
    difficulty: "Rookie",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 md:px-12 relative">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <div className="inline-block bg-background/95 backdrop-blur-sm px-8 py-6 rounded-3xl border border-border/40 shadow-sm">
            <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
              // The Logbook
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Grand Line</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              From simple scripts to \"Emperor-level\" full-stack applications. 
              Here lies the collection of islands I have charted.
            </p>
        </div>
      </div>

      {/* SMART PROJECTS LAYOUT (Centering Logic) */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 relative z-20">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

    </section>
  );
}