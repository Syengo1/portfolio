"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useRef } from "react";
import { BountyCounter } from "./BountyCounter";

const PAPER_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`;

export function WantedPoster() {
  // --- STATE & REFS ---
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isActive, setIsActive] = useState(false); // Tracks if "Physics Mode" is ON
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- 3D PHYSICS ENGINE ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseY, [-0.5, 0.5], [0, 0.4]);

  // --- MOUSE HANDLERS (Desktop) ---
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  // --- TOUCH HANDLERS (Mobile Logic) ---
  
  // 1. START: Start the "Long Press" timer
  function handleTouchStart() {
    timerRef.current = setTimeout(() => {
      setIsActive(true); // Unlock physics after 500ms
      // Haptic feedback if supported
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(50);
    }, 500);
  }

  // 2. MOVE: Only tilt if "Active" (Long Pressed)
  function handleTouchMove(e: React.TouchEvent) {
    if (!isActive) return; // If not active, let the page scroll!

    // If active, prevent scrolling so we can tilt
    // Note: We can't strictly e.preventDefault() in React passive events, 
    // but the 'touch-action-none' class handles this CSS-side.
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    x.set((touch.clientX - left) / width - 0.5);
    y.set((touch.clientY - top) / height - 0.5);
  }

  // 3. END: Cancel everything
  function handleTouchEnd() {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    if (!isActive) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }

    setIsActive(false);
    x.set(0); 
    y.set(0);
  }

  return (
    <div className="flex items-center justify-center py-10 perspective-1000 w-full h-full">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        
        // DESKTOP EVENTS
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        
        // MOBILE EVENTS
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: isActive ? 1.05 : 1, // Visual feedback: scale up when active
        }}
        transition={{ duration: 0.8, type: "spring" }}
    
        className={`relative w-[320px] md:w-[380px] aspect-[1/1.45] cursor-pointer group select-none ${
          isActive ? "z-50" : ""
        }`}
      >
        
        {/* --- LAYER 1: THE PAPER --- */}
        <div 
          className="absolute inset-0 shadow-2xl overflow-hidden rounded-[2px]"
          style={{ 
            backgroundColor: "#F2E6D0", 
            boxShadow: isActive 
              ? "0 0 0 4px #a855f7, inset 0 0 60px rgba(62, 50, 40, 0.15)" 
              : "inset 0 0 60px rgba(62, 50, 40, 0.15)" 
          }}
        >
          <div className="absolute inset-0 bg-[#1a1c23] opacity-0 dark:opacity-100 transition-opacity duration-500 mix-blend-hard-light" />
          <div className="absolute inset-0 mix-blend-multiply opacity-40 pointer-events-none" style={{ backgroundImage: PAPER_TEXTURE }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(60,40,20,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
        </div>

        {/* --- LAYER 2: CONTENT --- */}
        <div 
          className="absolute inset-0 flex flex-col items-center px-[8%] py-[6%] z-10 text-[#2D241E] dark:text-[#d1d5db]"
          style={{ transform: "translateZ(25px)" }}
        >
          {/* HEADER */}
          <div className="w-full flex justify-center mb-[2%]">
            <h2 className="font-serif font-black tracking-[0.2em] leading-none scale-y-125 origin-bottom" style={{ fontSize: "clamp(2rem, 13cqw, 4rem)", textShadow: "2px 2px 0px rgba(0,0,0,0.15)" }}>
              WANTED
            </h2>
          </div>

          {/* IMAGE */}
          <div className="w-full flex-1 flex flex-col relative mb-[2%]">
             <div className="relative w-full flex-grow bg-[#B0A088] dark:bg-slate-700 p-[1.5%] shadow-inner rotate-[-0.5deg]">
                <div className="w-full h-full border-[2px] border-[#3E3228] dark:border-gray-500 relative overflow-hidden">
                   <img 
                     src=/*"https://api.dicebear.com/7.x/avataaars/svg?seed=Antony&backgroundColor=transparent" */ "/profile2.png"
                     alt="Profile" 
                     className={`w-full h-full object-cover transition-all duration-500 ${
                        showEasterEgg ? "grayscale-0 contrast-100" : "grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                     }`}
                   />
                   <div className={`absolute inset-0 bg-blue-500/20 mix-blend-overlay transition-opacity duration-200 ${
                      showEasterEgg ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                   }`} />
                </div>
             </div>
             
             {/* "Hold to Interact */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: isActive ? 0 : 1 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-white bg-black/50 px-2 py-1 rounded md:hidden pointer-events-none"
             >
               Hold&tilt
             </motion.div>

             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%] flex justify-center z-20">
                <div className="bg-[#F2E6D0] dark:bg-[#232323] px-3 border-x-2 border-[#3E3228] dark:border-gray-500 shadow-sm">
                   <span className="font-serif font-black text-[0.65rem] md:text-xs tracking-[0.2em] uppercase whitespace-nowrap block transform scale-y-90 pt-1">
                     (HIRED OR CONTRACT)
                   </span>
                </div>
             </div>
          </div>

          {/* NAME */}
          <div className="w-full text-center mt-4 mb-2">
            <h3 className="font-serif text-3xl md:text-4xl uppercase font-black tracking-wide leading-[0.9]">
               ANTONY <span className={`transition-colors duration-300 ${showEasterEgg ? "text-blue-500" : "text-[#8B0000] dark:text-[#ef4444]"}`}>"D."</span>
            </h3>
            <h3 className="font-serif text-3xl md:text-4xl uppercase font-black tracking-wide leading-[0.9]">
               SYENGO
            </h3>
          </div>

          {/* BOUNTY */}
          <div className="w-[112%] -ml-[6%] border-t-[3px] border-b-[3px] border-[#3E3228] dark:border-gray-400 py-1 px-4 flex items-center justify-between mt-auto mb-2 bg-[#F2E6D0]/50 dark:bg-black/20 backdrop-blur-[1px]">
            <span className="font-serif text-2xl font-bold translate-y-[2px]">฿</span>
            <div className="font-serif text-3xl md:text-4xl font-black tracking-tighter">
               <BountyCounter value={3000000000} />
            </div>
            <span className="text-xl font-bold opacity-0">-</span>
          </div>

          {/* FOOTER */}
          <div className="w-full flex justify-between items-end opacity-60">
             <div className="flex flex-col text-[0.4rem] leading-tight font-mono max-w-[60%] text-left">
                <span>KONO SAKUHIN WA FICTION DET...</span>
                <span>JKUAT DATA SCIENCE DIVISION</span>
             </div>
             <span className="font-serif font-bold text-lg tracking-widest">MARINE</span>
          </div>
        </div>

        {/* --- LAYER 3: HOLOGRAPHIC FOIL --- */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-50 rounded-[2px]"
          style={{
            backgroundImage: `linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.0) 50%)`,
            backgroundPositionX: glareX,
            backgroundRepeat: "no-repeat",
            backgroundSize: "300% 300%",
            opacity: glareOpacity,
            mixBlendMode: "overlay"
          }}
        />
        <div className="absolute inset-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] -z-10 rounded-[2px]" />

      </motion.div>
    </div>
  );
}