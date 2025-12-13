"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function StrawHatToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleToggle = () => {
    setIsAnimating(true);
    setTheme(isDark ? "light" : "dark");
    // Reset the "DON!!" animation after it plays
    setTimeout(() => setIsAnimating(false), 600);
  };

  // --- ANIMATION VARIANTS (The "Coding Skills" Flex) ---
  const hatVariants = {
    light: {
      rotate: 0,
      scale: 1,
      filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
    },
    dark: {
      rotate: 360,
      scale: 1.1,
      filter: "drop-shadow(0px 0px 15px #9333ea)", // Purple Haki Glow
    },
    tap: {
      scale: 0.8, // Rubber compression
      rotate: -15,
    },
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        onClick={handleToggle}
        className="relative group focus:outline-none"
        aria-label="Toggle Theme"
        whileHover={{ scale: 1.1 }}
        whileTap="tap"
        animate={isDark ? "dark" : "light"}
        variants={hatVariants}
      >
        <div className="w-14 h-14 relative">
          
          {/* THE MANGA EFFECT: "DON!!" Text Popup */}
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -20, y: 10 }}
                animate={{ opacity: 1, scale: 1.5, x: -40, y: -20 }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                className="absolute top-0 right-full whitespace-nowrap pointer-events-none"
              >
                <span className="font-black italic text-3xl text-gray-900 dark:text-white stroke-2 tracking-tighter" 
                      style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}>
                  GUMO!!
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* THE STRAW HAT SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* 1. Hat Dome */}
            <motion.path
              d="M50 25 C30 25 25 45 25 55 L75 55 C75 45 70 25 50 25 Z"
              fill={isDark ? "#374151" : "#FACC15"} // Dark Grey vs Straw Yellow
              stroke={isDark ? "#9333ea" : "#854D0E"} // Purple vs Brown
              strokeWidth="3"
              animate={{
                fill: isDark ? "#1f2937" : "#FACC15",
                stroke: isDark ? "#A855F7" : "#854D0E"
              }}
            />
            
            {/* 2. Red Ribbon (Luffy's Trademark) */}
            <motion.rect
              x="25"
              y="50"
              width="50"
              height="10"
              fill="#EF4444"
              animate={{
                fill: isDark ? "#991b1b" : "#EF4444" // Darkens in Haki mode
              }}
            />

            {/* 3. Hat Brim */}
            <motion.path
              d="M10 60 C10 55 90 55 90 60 C90 70 10 70 10 60 Z"
              fill={isDark ? "#374151" : "#FACC15"}
              stroke={isDark ? "#9333ea" : "#854D0E"}
              strokeWidth="3"
              animate={{
                fill: isDark ? "#1f2937" : "#FACC15",
                stroke: isDark ? "#A855F7" : "#854D0E"
              }}
            />

            {/* 4. Haki "Lightning" Particles (Only in Dark Mode) */}
            {isDark && (
              <>
                <motion.path
                  d="M20 40 L30 30 L25 20"
                  stroke="#A855F7"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                />
                <motion.path
                  d="M80 40 L70 30 L75 20"
                  stroke="#A855F7"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.5, repeatType: "reverse" }}
                />
              </>
            )}
          </svg>
        </div>
      </motion.button>
    </div>
  );
}