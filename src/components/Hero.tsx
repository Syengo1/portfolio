// src/components/Hero.tsx
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { WantedPoster } from "./WantedPoster";
import { Anchor, FileText, Database, Code, Mail } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

interface HakiTextProps {
  text: string;
  delay?: number;
  reducedMotion?: boolean;
}

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  ariaLabel?: string;
}

// Deterministic particle configurations (avoids post-mount useEffect state & hydration mismatch)
const HERO_PARTICLES = [
  { id: 0, initialX: 15, moveX: -45, rotation: 120, duration: 14, delay: 0, left: "12%" },
  { id: 1, initialX: 40, moveX: 60, rotation: 240, duration: 18, delay: 2, left: "28%" },
  { id: 2, initialX: 70, moveX: -30, rotation: 180, duration: 16, delay: 4, left: "46%" },
  { id: 3, initialX: 25, moveX: 50, rotation: 300, duration: 15, delay: 1, left: "64%" },
  { id: 4, initialX: 80, moveX: -55, rotation: 90, duration: 19, delay: 3, left: "78%" },
  { id: 5, initialX: 50, moveX: 35, rotation: 210, duration: 17, delay: 5, left: "88%" },
];

const HakiText = ({ text, delay = 0, reducedMotion = false }: HakiTextProps) => {
  return (
    <motion.span
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "backOut" }}
      className="inline-block relative cursor-default group select-none"
    >
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-primary pointer-events-none"
      >
        {text}
      </span>
    </motion.span>
  );
};

const MagneticCTA = ({
  href,
  children,
  variant = "primary",
  ariaLabel,
}: MagneticLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    "relative px-7 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden group cursor-pointer z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

  const variants = {
    primary:
      "bg-foreground text-background hover:shadow-[0_0_20px_rgba(var(--primary),0.45)]",
    secondary:
      "border-2 border-border bg-card/60 backdrop-blur-sm text-foreground hover:border-primary/60 hover:bg-muted",
    tertiary:
      "border border-border/70 bg-transparent text-muted-foreground hover:text-foreground hover:border-foreground/40",
  };

  const isInternalRoute = href.startsWith("/");

  if (isInternalRoute) {
    return (
      <motion.div
        style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      >
        <Link
          ref={ref}
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          aria-label={ariaLabel}
          className={`${baseStyles} ${variants[variant]}`}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
};

export function Hero() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 pt-24 pb-16 relative overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] blur-3xl" />

        {!prefersReducedMotion &&
          HERO_PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100, x: p.initialX }}
              animate={{
                opacity: [0, 0.25, 0],
                y: -160,
                x: p.moveX,
                rotate: p.rotation,
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
              className="absolute bottom-0 text-primary/20 text-3xl font-mono"
              style={{ left: p.left }}
            >
              {p.id % 2 === 0 ? <Code /> : <Database />}
            </motion.div>
          ))}
      </div>

      {/* LEFT SIDE: PROFESSIONAL POSITIONING & VALUE PROPOSITION */}
      <div className="flex-1 w-full max-w-2xl text-center lg:text-left z-10 relative">
        {/* Availability Badge */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider uppercase mb-4"
        >
          <span
            className={`w-2 h-2 rounded-full bg-emerald-500 ${
              prefersReducedMotion ? "" : "animate-pulse"
            }`}
          />
          <span>Available for Full-Time &amp; Contract Roles · Nairobi, KE</span>
        </motion.div>

        {/* Role Eyebrow */}
        <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          Full-Stack Software Developer · BSc. Data Science &amp; Analytics (JKUAT)
        </p>

        {/* Main Heading (Valid HTML phrasing elements inside h1) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[0.95] mb-6">
          <span className="block overflow-hidden">
            <HakiText text="Building" delay={0.05} reducedMotion={prefersReducedMotion} />{" "}
            <HakiText text="Logic," delay={0.15} reducedMotion={prefersReducedMotion} />
          </span>
          <span className="block overflow-hidden mt-2">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-[length:200%_auto] ${
                prefersReducedMotion ? "" : "animate-gradient-x"
              }`}
            >
              Crafting Soul.
            </span>
          </span>
        </h1>

        {/* Concrete Value Description */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-sans"
        >
          I design and build production{" "}
          <span className="text-foreground font-semibold">
            web applications, Point-of-Sale (POS) platforms, and business systems
          </span>{" "}
          using Next.js, TypeScript, Node.js, and PostgreSQL/Supabase. Backed by a{" "}
          <span className="text-foreground font-semibold">
            BSc in Data Science and Analytics from JKUAT
          </span>
          , I combine full-stack engineering with analytical problem-solving to ship software that runs real operations.
        </motion.p>

        {/* Calls to Action */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-3.5 justify-center lg:justify-start"
        >
          <MagneticCTA
            href="#projects"
            variant="primary"
            ariaLabel="Explore Software Engineering Projects"
          >
            <span>Explore Projects</span>
            <Anchor
              size={17}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </MagneticCTA>

          <MagneticCTA
            href="/cv"
            variant="secondary"
            ariaLabel="View Curriculum Vitae (CV)"
          >
            <span>View CV</span>
            <FileText
              size={17}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </MagneticCTA>

          <MagneticCTA
            href="#contact"
            variant="tertiary"
            ariaLabel="Scroll to Contact Section"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </MagneticCTA>
        </motion.div>
      </div>

      {/* RIGHT SIDE: WANTED POSTER */}
      <div className="flex-1 w-full flex items-center justify-center z-20">
        <div className="relative w-full flex justify-center">
          {/* Subtle Backlight Effect */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 bg-primary/15 blur-[80px] rounded-full scale-75 pointer-events-none ${
              prefersReducedMotion ? "" : "animate-pulse"
            }`}
          />
          <WantedPoster />
        </div>
      </div>
    </section>
  );
}