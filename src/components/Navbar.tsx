"use client";

import { Home, User, Code, PenTool, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "/" },
  { name: "Projects", icon: <Code size={20} />, href: "#projects" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();


  if (pathname === "/cv") {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      className="fixed z-50 
        bottom-6 left-1/2 -translate-x-1/2  /* Mobile: Bottom Center */
        md:top-6 md:bottom-auto             /* Desktop: Top Center */
      "
    >
      <nav className="flex items-center gap-1 px-2 py-2 rounded-full 
        bg-background/80 backdrop-blur-lg border border-border shadow-2xl
      ">
        {navItems.map((item) => {
          // Check if active (simple logic for now)
          const isActive = pathname === item.href; 

          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                className={`relative px-4 py-3 rounded-full flex items-center justify-center transition-colors
                  ${isActive 
                    ? "text-primary-foreground bg-primary" 
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/10"
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {/* Tooltip for Desktop only */}
                <span className="sr-only md:not-sr-only md:ml-2 md:text-sm font-medium hidden md:block">
                   {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}