"use client";

import { motion } from "framer-motion";
import { HakiChart } from "./HakiChart";

const SKILLS = [
  { category: "Conqueror (Data)", items: ["Python", "Pandas", "TensorFlow", "SQL", "R"] },
  { category: "Armament (Backend)", items: ["Node.js", "PostgreSQL", "Docker", "Redis", "Go"] },
  { category: "Observation (Frontend)", items: ["React", "Next.js", "Tailwind", "Framer Motion", "Figma"] },
];

export function SkillsSection() {
  return (
    <section className="relative w-full py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND (Clean - No Grids) */}
      <div className="absolute inset-0 bg-transparent transition-colors duration-500 -z-20" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT: THE CHART */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-center text-foreground transition-colors duration-500">
            COMBAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">STATS</span>
          </h2>
          <p className="text-sm font-mono text-muted-foreground mb-8 text-center max-w-xs transition-colors duration-500">
            [System Analysis: Power Levels calibrated via JKUAT Data]
          </p>
          
          <HakiChart />
        </motion.div>

        {/* RIGHT: THE CARDS */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="font-serif text-3xl font-bold mb-4 text-foreground transition-colors duration-500">
              The Arsenal
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg transition-colors duration-500">
              A balanced mix of logic and creativity. Just as a pirate needs Haki to survive the New World, 
              I use a robust full-stack toolbelt to build scalable applications.
            </p>
          </motion.div>

          {/* Skill Groups */}
          <div className="grid gap-6">
            {SKILLS.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 shadow-sm group"
              >
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-card-foreground">
                  <span className={`w-2 h-2 rounded-full ${
                    idx === 0 ? "bg-red-500" : idx === 1 ? "bg-purple-500" : "bg-yellow-500"
                  }`} />
                  {group.category}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-muted/80 text-muted-foreground border border-transparent group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}