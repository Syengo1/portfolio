"use client";

import { motion } from "framer-motion";

export function DenDenMushi({ isRinging }: { isRinging: boolean }) {
  return (
    <div className="relative w-8 h-8">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* SHELL (Spiral) */}
        <motion.path
          d="M30,70 Q20,50 40,40 Q60,30 70,50 Q80,70 60,80 H40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* BODY */}
        <path
          d="M20,80 Q10,80 10,90 H90 Q90,80 80,80 Z"
          fill="currentColor"
          className="text-foreground"
        />

        {/* EYES (The Receiver) */}
        <motion.g
          animate={isRinging ? { rotate: [-10, 10, -10] } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 0.2 }}
          style={{ originX: "50%", originY: "80%" }}
        >
          <line x1="35" y1="40" x2="30" y2="20" stroke="currentColor" strokeWidth="4" />
          <line x1="65" y1="40" x2="70" y2="20" stroke="currentColor" strokeWidth="4" />
          <circle cx="30" cy="20" r="5" fill="currentColor" />
          <circle cx="70" cy="20" r="5" fill="currentColor" />
        </motion.g>

        {/* SOUND WAVES (Only when ringing) */}
        {isRinging && (
          <motion.path
            d="M80,20 Q90,10 100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        )}
      </svg>
    </div>
  );
}