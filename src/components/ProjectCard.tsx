// src/components/ProjectCard.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Lock,
  Hammer,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { ProjectType } from "@/types/project";

export type { ProjectType };

export function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasValidRepo = Boolean(project.repoLink && project.repoLink !== "#");

  const statusStyles: Record<ProjectType["status"], string> = {
    "live-client":
      "bg-emerald-600/95 text-white border-emerald-400/50",
    "live-app":
      "bg-blue-600/95 text-white border-blue-400/50",
    "in-development":
      "bg-amber-500/95 text-slate-950 border-amber-300/60",
    concept:
      "bg-purple-600/95 text-white border-purple-400/50",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      className="group relative w-full h-full"
    >
      <div
        className="
          relative h-full flex flex-col rounded-xl overflow-hidden
          border border-border/50
          bg-card/50 dark:bg-card/35 backdrop-blur-md
          shadow-sm transition-all duration-500 ease-out
          hover:bg-card dark:hover:bg-card
          hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1
          z-30
        "
      >
        {/* 1. IMAGE AREA */}
        <div className="relative h-48 w-full overflow-hidden bg-muted/50">
          <div
            className={`absolute inset-0 z-10 transition-colors duration-500 ${
              !project.isDeployed ? "backdrop-blur-[2px] bg-black/40" : "group-hover:bg-black/0"
            }`}
          />

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              project.isDeployed ? "group-hover:scale-105" : "grayscale"
            }`}
          />

          {/* CATEGORY PILL (Top Left) */}
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold bg-background/90 text-foreground backdrop-blur-md rounded-md border border-border/60 shadow-sm">
              <Layers size={11} className="text-primary" />
              {project.category}
            </span>
          </div>

          {/* STATUS BADGE (Top Right) */}
          <div className="absolute top-3 right-3 z-20">
            {!project.isDeployed ? (
              <span className="flex items-center gap-1 px-3 py-1 text-[11px] font-bold text-yellow-950 bg-yellow-400/95 backdrop-blur-sm rounded-full shadow-lg border border-yellow-500/50">
                <Hammer size={12} /> WIP
              </span>
            ) : (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full shadow-lg backdrop-blur-md border ${
                  statusStyles[project.status]
                }`}
              >
                {project.status === "in-development" ? (
                  <Hammer size={11} />
                ) : project.status === "concept" ? (
                  <Sparkles size={11} />
                ) : (
                  <CheckCircle2 size={11} />
                )}
                {project.statusLabel}
              </span>
            )}
          </div>
        </div>

        {/* 2. CONTENT AREA */}
        <div className="flex flex-col flex-grow p-6">
          <div className="mb-3">
            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-primary/90 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Concise Summary */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {isExpanded ? project.description : project.summary}
          </p>

          {/* EXPANDABLE ENGINEERING BREAKDOWN */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden mb-4"
              >
                <div className="pt-3 border-t border-border/60 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-muted-foreground font-mono">
                    <span>ROLE:</span>
                    <span className="text-foreground font-semibold">{project.role}</span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Key Engineering Highlights:
                    </span>
                    <ul className="space-y-1.5 text-muted-foreground">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-snug">
                          <span className="text-primary mt-1 text-[10px]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand / Collapse Trigger */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-5 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors focus:outline-none self-start cursor-pointer"
          >
            {isExpanded ? (
              <>
                Hide Technical Breakdown <ChevronUp size={13} />
              </>
            ) : (
              <>
                View Technical Breakdown <ChevronDown size={13} />
              </>
            )}
          </button>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
            {(isExpanded ? project.techStack : project.coreTech).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] font-mono font-medium border border-border/60 rounded bg-background/60 text-muted-foreground group-hover:border-primary/25 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {!isExpanded && project.techStack.length > project.coreTech.length && (
              <span className="px-2 py-1 text-[10px] font-mono text-muted-foreground/70">
                +{project.techStack.length - project.coreTech.length} more
              </span>
            )}
          </div>

          {/* 3. ACTION BUTTONS */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
            {project.isDeployed && project.liveLink ? (
              <div className="flex items-center gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={15} />
                  <span>
                    {project.status === "in-development" ? "View Live Preview" : "Visit Live Site"}
                  </span>
                </a>

                {hasValidRepo && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={15} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-500 font-mono opacity-80">
                <Lock size={14} />
                <span>Access Restricted (WIP)</span>
              </div>
            )}

            {project.displayUrl && (
              <span className="text-[11px] font-mono text-muted-foreground/70 truncate max-w-[130px] hidden sm:inline">
                {project.displayUrl}
              </span>
            )}
          </div>
        </div>

        {/* HAKI GLOW EFFECT (On Hover) */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}