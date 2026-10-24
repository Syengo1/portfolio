// src/app/page.tsx
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { StrawHatToggle } from "@/components/StrawHatToggle";
import { ScrollShip } from "@/components/ScrollShip";
import { ScrollHint } from "@/components/ScrollHint";

// --- DYNAMIC IMPORTS (CODE SPLITTING) ---
const ExperienceSection = dynamic(() =>
  import("@/components/ExperienceSection").then((mod) => mod.ExperienceSection)
);
const ProjectsSection = dynamic(() =>
  import("@/components/ProjectsSection").then((mod) => mod.ProjectsSection)
);
const SkillsSection = dynamic(() =>
  import("@/components/SkillsSection").then((mod) => mod.SkillsSection)
);
const ContactSection = dynamic(() =>
  import("@/components/ContactSection").then((mod) => mod.ContactSection)
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer)
);

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-background transition-colors duration-500">
      {/* GLOBAL CONTROLS */}
      <StrawHatToggle />

      {/* BACKGROUND SCROLL TRACKER */}
      <ScrollShip />

      {/* HERO SECTION (Static Import - Instant Load) */}
      <div className="w-full max-w-7xl mx-auto z-20 mb-0 relative">
        <Hero />
        <ScrollHint />
      </div>

      {/* BELOW THE FOLD (Child sections already own #projects, #experience, #contact IDs) */}
      <div className="w-full z-20">
        <ProjectsSection />
      </div>

      <div className="w-full z-20">
        <ExperienceSection />
      </div>

      <div id="about" className="w-full z-20">
        <SkillsSection />
      </div>

      <div className="w-full z-20">
        <ContactSection />
      </div>

      <div className="w-full z-20">
        <Footer />
      </div>
    </main>
  );
}