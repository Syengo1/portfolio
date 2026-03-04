"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { StrawHatToggle } from "@/components/StrawHatToggle";
import { SkillsSection } from "@/components/SkillsSection"; 
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const GoingSunnyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 drop-shadow-md transform transition-transform duration-300 hover:scale-110">
    <path d="M2,12 C2,12 5,16 12,16 C19,16 22,12 22,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12,16 V8" stroke="currentColor" strokeWidth="2"/>
    <path d="M8,8 L16,8 L12,4 L8,8 Z" fill="currentColor" className="text-red-500 dark:text-yellow-400"/>
    <path d="M12,4 V2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const shipY = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  // Hints fades out after 10% scroll
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main ref={containerRef} className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-background transition-colors duration-500">
      
      <StrawHatToggle />

      {/* THE GRAND LINE (Background Layer) */}
      <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-800 to-transparent md:-translate-x-1/2 z-0 opacity-40 pointer-events-none">
        <motion.div 
          style={{ top: shipY }}
          className="absolute left-[-15px] z-10 text-foreground"
        >
          <div className="bg-background border border-border rounded-full p-1 shadow-sm">
             <GoingSunnyIcon />
          </div>
        </motion.div>
      </div>

      {/* HERO SECTION */}
      <div className="w-full max-w-7xl mx-auto z-20 mb-0 relative">
        <Hero />
        
        {/* CHART COURSE */}
        <motion.div 
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground animate-bounce hidden md:block"
        >
          ↓ CHART COURSE ↓
        </motion.div>
      </div>

      <div id="experience" className="w-full z-20">
        <ExperienceSection />
      </div>

      <div id="projects" className="w-full z-20">
        <ProjectsSection />
      </div>

      <div id="about" className="w-full z-20">
         <SkillsSection />
      </div>

      <div id="contact" className="w-full z-20">
        <ContactSection />
      </div>

      <div className="w-full z-20">
        <Footer />
      </div>
      
    </main>
  );
}