"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function BountyCounter({ value = 3000000000 }: { value?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // 1. Set initial value to 0
  const motionValue = useMotionValue(0);
  
  // 2. Define the physics (Stiffness = speed, Damping = friction)
  const springValue = useSpring(motionValue, { 
    stiffness: 40, 
    damping: 15,
    mass: 1 
  });

  useEffect(() => {
    // 3. Trigger the animation to the target value on mount
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    // 4. Listen to the changes and update the DOM text directly
    // This bypasses React render cycles for maximum performance
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with commas (e.g. 3,000,000)
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span 
      ref={ref} 
      className="font-serif text-3xl tracking-widest flex-grow text-right tabular-nums"
    >
      0
    </span>
  );
}