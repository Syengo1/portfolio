"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, MapPin } from "lucide-react";

// --- THE LOGBOOK DATA ---
const HISTORY = [
  {
    date: "2025 - Present",
    title: "Full-Stack Developer & Data Scientist",
    location: "Nairobi, Kenya (Freelance / Contract)",
    description: "Building scalable web apps for SMEs using Next.js & Supabase. Integrating M-PESA Daraja APIs and deploying predictive models for local businesses.",
    icon: <Code size={20} />,
    type: "work"
  },
  {
    date: "2025",
    title: "Graduated: Data Science & Analytics",
    location: "JKUAT",
    description: "Mastered the foundations of Machine Learning, Statistical Modeling, and Python. Capstone project involved Computer Vision for traffic analysis.",
    icon: <GraduationCap size={20} />,
    type: "education"
  },
  {
    date: "2024",
    title: "Intern",
    location: "The National Treasury, Kenya",
    description: "Honed and Perfected my skills.",
    icon: <Briefcase size={20} />,
    type: "work"
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="w-full py-24 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Voyage Log</span>
        </h2>
        <p className="text-muted-foreground font-mono text-sm">
          [Tracking Route: JKUAT to The New World]
        </p>
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto relative px-4 md:px-0">
        
        {/* --- THE GRAND LINE (Vertical Line) --- */}
        {/* Gray Background Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2" />
        
        {/* Animated Progress Line (Blue/Purple) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 -translate-x-1/2 z-10"
        />

        {/* --- TIMELINE NODES --- */}
        <div className="space-y-12 md:space-y-24">
          {HISTORY.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. CONTENT CARD */}
                <div className="flex-1 w-full pl-16 md:pl-0">
                  <div className={`bg-card border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors relative group
                    ${isEven ? "md:text-right" : "md:text-left"}
                  `}>
                    {/* Date Badge */}
                    <span className="inline-block px-3 py-1 bg-muted rounded text-xs font-mono mb-3 text-muted-foreground">
                      {item.date}
                    </span>
                    
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${isEven ? "md:justify-end" : ""}`}>
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                    {/* Arrow pointing to center */}
                    <div className={`absolute top-8 w-4 h-4 bg-card border-t border-r border-border transform rotate-45 
                      ${isEven ? "left-[-9px] md:right-[-9px] md:left-auto border-l-0 border-b-0" : "left-[-9px] border-b border-l border-t-0 border-r-0 md:border-t md:border-r md:border-b-0 md:border-l-0 md:right-[-9px] md:left-auto"}
                    `} />
                  </div>
                </div>

                {/* 2. CENTER ICON NODE */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-background border-4 border-border flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                {/* 3. EMPTY SPACER (For alignment) */}
                <div className="flex-1 hidden md:block" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}