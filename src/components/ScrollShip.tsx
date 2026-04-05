"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const GoingSunnyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 drop-shadow-md transform transition-transform duration-300 hover:scale-110">
    <path d="M2,12 C2,12 5,16 12,16 C19,16 22,12 22,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12,16 V8" stroke="currentColor" strokeWidth="2"/>
    <path d="M8,8 L16,8 L12,4 L8,8 Z" fill="currentColor" className="text-red-500 dark:text-yellow-400"/>
    <path d="M12,4 V2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export function ScrollShip() {
  // By default, useScroll tracks the window viewport, eliminating the need for a container ref.
  const { scrollYProgress } = useScroll();
  const shipY = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);

  return (
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
  );
}