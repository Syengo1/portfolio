// src/components/Navbar.tsx
"use client";

import {
  Home,
  Code2,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const navItems = [
  {
    name: "Home",
    icon: Home,
    href: "/#home",
    target: "home",
  },
  {
    name: "Projects",
    icon: Code2,
    href: "/#projects",
    target: "projects",
  },
  {
    name: "Experience",
    icon: BriefcaseBusiness,
    href: "/#experience",
    target: "experience",
  },
  {
    name: "Contact",
    icon: Mail,
    href: "/#contact",
    target: "contact",
  },
] as const;

// REMOVED "about" to match your navItems
const sectionIds = ["projects", "experience", "contact"] as const;

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [activeTarget, setActiveTarget] = useState("home");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // FIX: Simply return early if not on the home page. 
    // We do NOT call setActiveTarget("") here to avoid the ESLint cascading render error.
    if (pathname !== "/") {
      return;
    }

    const updateActiveTarget = () => {
      const activationLine = window.innerHeight * 0.35;
      let currentTarget = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentTarget = id;
        }
      }

      setActiveTarget(currentTarget);
    };

    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          updateActiveTarget();
          rafRef.current = null;
        });
      }
    };

    updateActiveTarget();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  if (pathname === "/cv" || pathname.startsWith("/cv/")) {
    return null;
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay: 0.25, type: "spring", stiffness: 120 }
      }
      className="
        fixed z-50 left-1/2 -translate-x-1/2
        bottom-[calc(1rem+env(safe-area-inset-bottom))]
        md:bottom-auto md:top-6
        w-[96%] sm:w-auto max-w-[500px]
      "
    >
      <nav
        aria-label="Primary navigation"
        className="
          flex items-center justify-between sm:justify-center gap-1 sm:gap-2 w-full
          rounded-[2rem] md:rounded-full
          border border-border/50
          bg-background/85 backdrop-blur-xl
          p-1.5 md:p-2 shadow-2xl
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === "/" && activeTarget === item.target;

          return (
            <motion.div
              key={item.name}
              // flex-1 on mobile makes items distribute perfectly with zero overflow
              className="flex-1 sm:flex-none"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            >
              <Link
                href={item.href}
                aria-label={item.name}
                aria-current={
                  isActive ? (item.target === "home" ? "page" : "location") : undefined
                }
                className={`
                  flex w-full flex-col md:flex-row items-center justify-center 
                  gap-1 md:gap-2 rounded-2xl md:rounded-full
                  py-2 px-1 md:py-2.5 md:px-4
                  transition-colors duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                  }
                `}
              >
                {/* Fixed size to keep the vertical stack balanced on mobile */}
                <Icon className="w-[18px] h-[18px] md:w-5 md:h-5" aria-hidden="true" />

                {/* Text is tiny & bold on mobile, normal size on desktop */}
                <span className="text-[10px] md:text-sm font-bold md:font-medium leading-none tracking-wide md:tracking-normal">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
}