"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// CONFIGURATION
const STATS = [
  { label: "Data Science", value: 95, color: "#ef4444" }, // Red (Conqueror)
  { label: "Backend", value: 85, color: "#a855f7" },      // Purple (Armament)
  { label: "UI / UX", value: 90, color: "#eab308" },      // Gold (Observation)
  { label: "DevOps", value: 75, color: "#22c55e" },       // Green
  { label: "Math/Stats", value: 90, color: "#3b82f6" },   // Blue
];

const NUM_SIDES = STATS.length;
const MAX_VALUE = 100;
const RADIUS = 120;

export function HakiChart() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / NUM_SIDES - Math.PI / 2;
    const x = Math.cos(angle) * (value / MAX_VALUE) * RADIUS;
    const y = Math.sin(angle) * (value / MAX_VALUE) * RADIUS;
    return { x, y };
  };

  const pathData = STATS.map((stat, i) => {
    const { x, y } = getPoint(i, stat.value);
    return `${i === 0 ? "M" : "L"} ${x},${y}`;
  }).join(" ") + " Z";

  return (
    <div className="relative flex items-center justify-center w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
      
      {/* SVG CANVAS */}
      <svg viewBox="-150 -150 300 300" className="w-full h-full overflow-visible">
        
        {/* 1. BACKGROUND GRID (Adapts to Theme) */}
        {/* Light Mode: Subtle Grey | Dark Mode: Subtle White */}
        {[20, 40, 60, 80, 100].map((level, j) => (
          <path
            key={j}
            d={STATS.map((_, i) => {
              const { x, y } = getPoint(i, level);
              return `${i === 0 ? "M" : "L"} ${x},${y}`;
            }).join(" ") + " Z"}
            fill="none"
            stroke="currentColor" 
            className="text-gray-300 dark:text-gray-700 transition-colors duration-500"
            strokeWidth={1}
          />
        ))}

        {/* 2. AXIS LINES */}
        {STATS.map((_, i) => {
          const { x, y } = getPoint(i, 100);
          return (
            <line
              key={i}
              x1={0} y1={0}
              x2={x} y2={y}
              stroke="currentColor"
              className="text-gray-300 dark:text-gray-700 transition-colors duration-500"
              strokeWidth={1}
            />
          );
        })}

        {/* 3. THE HAKI POLYGON (Glowing) */}
        <motion.path
          d={pathData}
          initial={{ pathLength: 0, opacity: 0, scale: 0 }}
          whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          // LIGHT: Ocean Blue fill | DARK: Haki Purple fill
          className="fill-blue-500/20 stroke-blue-500 dark:fill-purple-500/20 dark:stroke-purple-500 transition-colors duration-500"
          strokeWidth={3}
          style={{
             filter: "drop-shadow(0px 0px 8px rgba(var(--primary), 0.5))"
          }}
        />

        {/* 4. INTERACTIVE POINTS */}
        {STATS.map((stat, i) => {
          const { x, y } = getPoint(i, stat.value);
          const isHovered = hoveredStat === i;

          return (
            <g key={i} onMouseEnter={() => setHoveredStat(i)} onMouseLeave={() => setHoveredStat(null)}>
              {/* Hit Area */}
              <circle cx={x} cy={y} r={20} fill="transparent" className="cursor-pointer" />
              
              {/* Visible Dot */}
              <motion.circle
                cx={x}
                cy={y}
                r={isHovered ? 6 : 4}
                fill={stat.color}
                className="cursor-pointer"
                animate={{ scale: isHovered ? 1.5 : 1 }}
              />
              
              {/* Label (Adapts to Theme) */}
              <motion.text
                x={x * 1.2}
                y={y * 1.2}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="text-[10px] uppercase font-bold tracking-widest fill-gray-700 dark:fill-gray-300 transition-colors duration-500"
                animate={{ 
                    opacity: isHovered ? 1 : 0.6,
                    scale: isHovered ? 1.1 : 1
                }}
              >
                {stat.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}