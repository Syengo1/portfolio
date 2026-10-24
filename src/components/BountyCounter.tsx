// src/components/BountyCounter.tsx
"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

export function BountyCounter({ value = 3000000000 }: { value?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 45,
    damping: 18,
    mass: 1,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.textContent = NUMBER_FORMATTER.format(value);
      }
      return;
    }

    // Start from 0 on client mount and spring up to target value
    if (ref.current) {
      ref.current.textContent = "0";
    }
    motionValue.set(value);
  }, [motionValue, value, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = NUMBER_FORMATTER.format(Math.floor(latest));
      }
    });

    return () => unsubscribe();
  }, [springValue, prefersReducedMotion]);

  const formattedFinalValue = NUMBER_FORMATTER.format(value);

  return (
    <>
      <span className="sr-only">
        Fictional One Piece bounty: {formattedFinalValue} Berries
      </span>
      <span
        ref={ref}
        aria-hidden="true"
        className="font-serif tracking-tight flex-grow text-right tabular-nums"
      >
        {formattedFinalValue}
      </span>
    </>
  );
}