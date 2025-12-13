"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { WantedPoster } from "./WantedPoster";
import { Anchor, Download, Database, Code } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// --- HAKI TEXT COMPONENT ---
const HakiText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "backOut" }}
      className="inline-block relative cursor-default group"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-primary select-none pointer-events-none">
        {text}
      </span>
    </motion.span>
  );
};

// --- MAGNETIC BUTTON ---
const MagneticButton = ({ children, onClick, variant = "primary" }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-300 overflow-hidden group cursor-pointer z-50";
  const variants = {
    primary: "bg-foreground text-background hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]",
    secondary: "border-2 border-border text-foreground hover:bg-muted"
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${baseStyles} ${variant === "primary" ? variants.primary : variants.secondary}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// --- TYPES FOR PARTICLES ---
type Particle = {
  id: number;
  initialX: number;
  moveX: number;
  rotation: number;
  duration: number;
  delay: number;
  left: string;
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(6)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      moveX: Math.random() * 200 - 100,
      rotation: Math.random() * 360,
      duration: 10 + Math.random() * 10,
      delay: i * 2,
      left: `${10 + Math.random() * 80}%`
    }));
    setParticles(generatedParticles);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end start"] 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [1, 1, 0]);

  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Antony_Syengo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // UPDATED: 'min-h-[110vh]' for height, 'pb-40' for extra bottom spacing
    <section ref={containerRef} className="min-h-[110vh] w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-12 pt-40 pb-40 relative overflow-visible perspective-1000">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] blur-3xl" />
        
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 100, x: p.initialX }}
            animate={{ 
              opacity: [0, 0.3, 0], 
              y: -100, 
              x: p.moveX,
              rotate: p.rotation 
            }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            className="absolute bottom-0 text-primary/20 text-4xl font-mono"
            style={{ left: p.left }}
          >
            {p.id % 2 === 0 ? <Code /> : <Database />}
          </motion.div>
        ))}
      </div>

      {/* LEFT SIDE: TEXT (Updated Z-Index to 50 to ensure clickability) */}
      <motion.div 
        style={{ y, opacity }} 
        className="flex-1 w-full max-w-2xl text-center md:text-left z-50 mb-16 md:mb-0 relative"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          System Status: Online
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[0.9] mb-8">
          <div className="overflow-hidden">
            <HakiText text="Building" delay={0.1} /> <HakiText text="Logic," delay={0.2} />
          </div>
          <div className="overflow-hidden mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 animate-gradient-x bg-[length:200%_auto]">
              Crafting Soul.
            </span>
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 font-sans"
        >
          I bridge the gap between <span className="text-foreground font-bold">complex algorithms</span> (Data) 
          and <span className="text-foreground font-bold">beautiful design</span> (Frontend). 
          Synthesizing data at JKUAT to build the future of the Kenyan web.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <MagneticButton onClick={scrollToProjects} variant="primary">
            <span>Set Sail (Projects)</span>
            <Anchor size={18} className="group-hover:rotate-45 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </MagneticButton>
          
          <MagneticButton onClick={handleDownload} variant="secondary">
            <span>View Bounty (CV)</span>
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: POSTER */}
      <div className="flex-1 w-full flex items-center justify-center z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse" />
          <WantedPoster />
        </div>
      </div>

    </section>
  );
}