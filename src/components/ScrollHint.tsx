"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollHint() {
  const { scrollYProgress } = useScroll();
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div 
      style={{ opacity: scrollHintOpacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground animate-bounce hidden md:block pointer-events-none"
    >
      ↓ CHART COURSE ↓
    </motion.div>
  );
}