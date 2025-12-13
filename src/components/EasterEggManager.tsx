"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function EasterEggManager() {
  const { setTheme } = useTheme();
  const [gear5Active, setGear5Active] = useState(false);
  const [drumPulse, setDrumPulse] = useState(false);

  // KONAMI CODE SEQUENCE
  const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
    "b", "a"
  ];
  const [inputHistory, setInputHistory] = useState<string[]>([]);

  useEffect(() => {
    // 1. ZORO CONSOLE LOG
    if (Math.random() > 0.9) {
      console.log("%c⚔️ Zoro: Oi, do you know where the Navbar is? I think I took a wrong turn at the database.", "color: #22c55e; font-weight: bold; font-size: 14px;");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // 2. THE WILL OF D
      if (e.key.toLowerCase() === "d") {
        setDrumPulse(true);
        setTimeout(() => setDrumPulse(false), 600);
      }

      // 3. KONAMI CODE LOGIC
      setInputHistory((prev) => {
        const newHistory = [...prev, e.key];
        if (newHistory.length > KONAMI_CODE.length) {
          newHistory.shift();
        }
        
        if (JSON.stringify(newHistory) === JSON.stringify(KONAMI_CODE)) {
          triggerGear5();
        }
        return newHistory;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputHistory]);

  const triggerGear5 = () => {
    setGear5Active(true);
    setTimeout(() => setGear5Active(false), 4000); 
  };

  return (
    <>
      {/* GEAR 5 IMAGE OVERLAY */}
      <AnimatePresence>
        {gear5Active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-sm pointer-events-none"
          >
            {/* The Image Container */}
            <motion.div 
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ 
                scale: [1, 1.2, 1], 
                rotate: [-5, 5, -5],
                y: [0, -20, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.5, 
                ease: "easeInOut", // FIX: Changed from 'spring' to 'easeInOut'
              }}
              className="relative w-[300px] h-[1080px] md:w-[1920px] md:h-[500px]"
            >
              <img 
                src="\lufffy.png"
              />
              
              <div className="absolute -bottom-10 right-0 font-black text-6xl md:text-8xl text-red-600 tracking-tighter rotate-[-15deg]">
                DON!!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DRUMS PULSE */}
      <AnimatePresence>
        {drumPulse && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5, borderWidth: "50px" }}
            animate={{ scale: 2, opacity: 0, borderWidth: "0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Standard ease works best here
            className="fixed inset-0 z-50 pointer-events-none border-white rounded-full"
            style={{ left: "50%", top: "50%", width: 0, height: 0, x: "-50%", y: "-50%" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}