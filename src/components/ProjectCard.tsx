"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Lock, Hammer } from "lucide-react";
import Image from "next/image";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  isDeployed: boolean;
  difficulty: "Rookie" | "Supernova" | "Emperor"; // Lore ranking
}

export function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  
  // Difficulty Color Mapping
  const difficultyColor = {
    Rookie: "bg-blue-500",
    Supernova: "bg-purple-500",
    Emperor: "bg-red-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative w-full h-full"
    >
      {/* CARD BODY */}
      <div className="relative h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl z-30">
        
        {/* 1. IMAGE AREA */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          {/* If Undeployed: Add Fog of War Blur */}
          <div className={`absolute inset-0 z-10 ${!project.isDeployed ? "backdrop-blur-[2px] bg-black/40" : ""}`} />
          
          {/* Project Image */}
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              project.isDeployed ? "group-hover:scale-110" : "grayscale"
            }`}
          />

          {/* STATUS BADGE */}
          <div className="absolute top-3 right-3 z-20">
            {!project.isDeployed ? (
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-yellow-900 bg-yellow-400 rounded-full shadow-lg">
                <Hammer size={12} /> UNDER CONSTRUCTION
              </span>
            ) : (
              <span className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${difficultyColor[project.difficulty]}`}>
                {project.difficulty}
              </span>
            )}
          </div>
        </div>

        {/* 2. CONTENT AREA */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-auto mb-6">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-[10px] uppercase font-mono border border-border rounded bg-muted/50 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 3. ACTION BUTTONS */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            {project.isDeployed ? (
              <>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                  <ExternalLink size={16} /> Visit Island
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                  <Github size={16} /> Logbook
                </a>
              </>
            ) : (
              <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-500 font-mono">
                <Lock size={14} /> 
                <span>Access Restricted (WIP)</span>
              </div>
            )}
          </div>
        </div>

        {/* HAKI GLOW EFFECT (On Hover) */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300 pointer-events-none" />
      
      </div>
    </motion.div>
  );
}