"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Lock, Hammer, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  isDeployed: boolean;
 difficulty: "Rookie" | "Supernova" | "Emperor";
}

export function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = project.description.length > 120;

  // Difficulty Color Mapping
  const difficultyColor = {
    Rookie: "bg-blue-500",
    Supernova: "bg-purple-500",
    Emperor: "bg-red-500",
  };

  return (
    <motion.div
      layout 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative w-full h-full"
    >
      {/* CARD BODY */}
      {/* UPGRADE: Glassmorphism Logic 
         - Base: bg-card/40 + backdrop-blur-md (Frosted & Transparent)
         - Hover: bg-card/100 (Solid & Clear) 
         - Transition: Smooth 500ms ease-out
      */}
      <div className="
        relative h-full flex flex-col rounded-xl overflow-hidden
        border border-border/40 
        bg-card/40 dark:bg-card/30 backdrop-blur-md
        shadow-sm transition-all duration-500 ease-out
        
        hover:bg-card dark:hover:bg-card
        hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1
        z-30
      ">
        
        {/* 1. IMAGE AREA */}
        <div className="relative h-48 w-full overflow-hidden bg-muted/50">
          {/* If Undeployed: Add Fog of War Blur */}
          <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
            !project.isDeployed ? "backdrop-blur-[2px] bg-black/40" : "group-hover:bg-black/0"
          }`} />
          
          {/* Project Image */}
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              project.isDeployed ? "group-hover:scale-110" : "grayscale"
            }`}
          />

          {/* STATUS BADGE */}
          <div className="absolute top-3 right-3 z-20">
            {!project.isDeployed ? (
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-yellow-900 bg-yellow-400/90 backdrop-blur-sm rounded-full shadow-lg border border-yellow-500/50">
                <Hammer size={12} /> UNDER CONSTRUCTION
              </span>
            ) : (
              <span className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg backdrop-blur-md ${difficultyColor[project.difficulty]}`}>
                {project.difficulty}
              </span>
            )}
          </div>
        </div>

        {/* 2. CONTENT AREA */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <div className="mb-6 relative">
            <motion.div layout>
              <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-500 ${
                isExpanded ? "" : "line-clamp-3"
              }`}>
                {project.description}
              </p>
            </motion.div>
            
            {/* READ MORE TOGGLE */}
            {isLongDescription && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors focus:outline-none"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp size={12} /></>
                ) : (
                  <>Read More <ChevronDown size={12} /></>
                )}
              </button>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-auto mb-6">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 text-[10px] uppercase font-mono font-medium border border-border/50 rounded bg-background/50 text-muted-foreground group-hover:border-primary/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 3. ACTION BUTTONS */}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            {project.isDeployed ? (
              <>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-sm font-bold text-primary hover:underline hover:text-primary/80 transition-colors">
                  <ExternalLink size={16} /> Visit live site
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={16} /> Logbook
                </a>
              </>
            ) : (
              <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-500 font-mono opacity-80">
                <Lock size={14} /> 
                <span>Access Restricted (WIP)</span>
              </div>
            )}
          </div>
        </div>

        {/* HAKI GLOW EFFECT (On Hover) - Subtler and smoother */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-500 pointer-events-none" />
      
      </div>
    </motion.div>
  );
}