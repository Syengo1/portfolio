// src/components/WantedPoster.tsx
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { BountyCounter } from "./BountyCounter";

const PAPER_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`;

export function WantedPoster() {
  const [isAwakened, setIsAwakened] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // --- 3D PHYSICS ENGINE (Pointer / Mouse Only) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseY, [-0.5, 0.5], [0, 0.35]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    // Only apply 3D tilt for mouse pointers when reduced motion is off.
    // Touch devices scroll naturally without scroll-hijacking timers.
    if (prefersReducedMotion || e.pointerType !== "mouse") return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  function toggleAwakening() {
    setIsAwakened((prev) => !prev);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAwakening();
    }
  }

  return (
    <div className="flex items-center justify-center py-4 md:py-8 perspective-1000 w-full h-full">
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={isAwakened}
        aria-label="Antony Syengo Wanted Poster — Click or press Enter to toggle full-color Haki mode"
        style={
          prefersReducedMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={toggleAwakening}
        onKeyDown={handleKeyDown}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] aspect-[1/1.45] cursor-pointer group select-none focus:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[4px]"
      >
        {/* --- LAYER 1: PARCHMENT PAPER --- */}
        <div
          className="absolute inset-0 shadow-2xl overflow-hidden rounded-[3px] transition-shadow duration-300"
          style={{
            backgroundColor: "#F2E6D0",
            boxShadow: isAwakened
              ? "0 0 0 3px #a855f7, inset 0 0 60px rgba(62, 50, 40, 0.15)"
              : "inset 0 0 60px rgba(62, 50, 40, 0.15)",
          }}
        >
          <div className="absolute inset-0 bg-[#1a1c23] opacity-0 dark:opacity-100 transition-opacity duration-500 mix-blend-hard-light" />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-40 pointer-events-none"
            style={{ backgroundImage: PAPER_TEXTURE }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(60,40,20,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
        </div>

        {/* --- LAYER 2: POSTER CONTENT --- */}
        <div
          className="absolute inset-0 flex flex-col items-center px-[7%] py-[5.5%] z-10 text-[#2D241E] dark:text-[#d1d5db]"
          style={prefersReducedMotion ? undefined : { transform: "translateZ(22px)" }}
        >
          {/* HEADER */}
          <div className="w-full flex justify-center mb-1.5">
            <span
              aria-hidden="true"
              className="font-serif font-black tracking-[0.18em] leading-none scale-y-115 origin-bottom text-4xl sm:text-5xl md:text-[3.35rem]"
              style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.15)" }}
            >
              WANTED
            </span>
          </div>

          {/* PORTRAIT IMAGE */}
          <div className="w-full flex-1 flex flex-col relative mb-2 min-h-0">
            <div className="relative w-full flex-grow bg-[#B0A088] dark:bg-slate-700 p-[1.5%] shadow-inner rotate-[-0.4deg]">
              <div className="w-full h-full border-2 border-[#3E3228] dark:border-gray-500 relative overflow-hidden">
                <Image
                  src="/profile2.webp"
                  alt="Portrait of Antony Syengo, Full-Stack Software Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, 380px"
                  className={`object-cover transition-all duration-500 ${
                    isAwakened
                      ? "grayscale-0 contrast-100 scale-[1.02]"
                      : "grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-blue-500/15 mix-blend-overlay transition-opacity duration-300 ${
                    isAwakened ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>
            </div>

            {/* AVAILABILITY STAMP RIBBON */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[94%] flex justify-center z-20">
              <div className="bg-[#F2E6D0] dark:bg-[#232323] px-2.5 py-0.5 border-x-2 border-[#3E3228] dark:border-gray-500 shadow-sm">
                <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-[0.12em] uppercase whitespace-nowrap block">
                  AVAILABLE: FULL-TIME &amp; CONTRACT
                </span>
              </div>
            </div>
          </div>

          {/* NAME & ROLE */}
          <div className="w-full text-center mt-3 mb-1.5">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] uppercase font-black tracking-wide leading-[0.95]">
              <span className="block">
                ANTONY{" "}
                <span
                  className={`transition-colors duration-300 ${
                    isAwakened
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-[#8B0000] dark:text-[#ef4444]"
                  }`}
                >
                  &ldquo;D.&rdquo;
                </span>{" "}
                SYENGO
              </span>
            </h2>
            <p className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase opacity-80 mt-1">
              Full-Stack Software Developer
            </p>
          </div>

          {/* BOUNTY STRIP */}
          <div className="w-full border-t-2 border-b-2 border-[#3E3228] dark:border-gray-400 py-1 px-2 flex items-center justify-between gap-2 mt-auto mb-1.5 bg-[#F2E6D0]/60 dark:bg-black/25 backdrop-blur-[1px]">
            <div className="flex flex-col items-start leading-none">
              <span
                aria-hidden="true"
                className="font-serif text-lg sm:text-xl font-black"
                title="One Piece Berries (Fictional Bounty)"
              >
                ฿
              </span>
              <span className="text-[7px] font-mono uppercase tracking-wider opacity-75">
                BERRIES
              </span>
            </div>

            <div className="font-serif text-xl sm:text-2xl md:text-3xl font-black tracking-tight flex-grow text-right">
              <BountyCounter value={3000000000} />
            </div>

            <span aria-hidden="true" className="font-serif text-base font-bold opacity-80">
              -
            </span>
          </div>

          {/* FOOTER */}
          <div className="w-full flex justify-between items-end opacity-75 pt-0.5">
            <div className="flex flex-col text-[7px] sm:text-[8px] leading-tight font-mono max-w-[68%] text-left">
              <span>BSc. DATA SCIENCE &amp; ANALYTICS (JKUAT)</span>
              <span>WEB APPS · POS &amp; SAAS · NAIROBI</span>
            </div>
            <span className="font-serif font-bold text-sm sm:text-base tracking-widest leading-none">
              MARINE
            </span>
          </div>
        </div>

        {/* --- LAYER 3: HOLOGRAPHIC FOIL --- */}
        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-50 rounded-[3px]"
            style={{
              backgroundImage: `linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0.38) 45%, rgba(255, 255, 255, 0.0) 52%)`,
              backgroundPositionX: glareX,
              backgroundRepeat: "no-repeat",
              backgroundSize: "300% 300%",
              opacity: glareOpacity,
              mixBlendMode: "overlay",
            }}
          />
        )}

        <div className="absolute inset-0 shadow-[0_20px_50px_rgba(0,0,0,0.45)] -z-10 rounded-[3px]" />
      </motion.div>
    </div>
  );
}