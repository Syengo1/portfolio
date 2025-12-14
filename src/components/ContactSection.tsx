"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram, Smartphone } from "lucide-react";
import { DenDenMushi } from "./DenDenMushi"; // Import your custom snail
import { useState } from "react";

// TIKTOK ICON (Custom SVG since Lucide doesn't have it)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function ContactSection() {
  const [isRinging, setIsRinging] = useState(false);
  const [showPuru, setShowPuru] = useState(false);

  const handlePhoneClick = () => {
    setShowPuru(true);
    // Simulate copying or calling action
    navigator.clipboard.writeText("+254 114 513 647");
    setTimeout(() => setShowPuru(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-24 px-4 relative overflow-hidden bg-background transition-colors duration-500">
      
      {/* 1. DYNAMIC BACKGROUND MAP */}
      {/* Light Mode: Blueprint Grid | Dark Mode: Digital Rain/Matrix dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-border p-1 rounded-xl shadow-2xl overflow-hidden transition-colors duration-500"
        >
          
          {/* TERMINAL HEADER BAR */}
          <div className="bg-muted px-4 py-3 flex items-center justify-between border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
            </div>
            
            <div className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              {/* Conditional Text based on Theme (handled via CSS variables usually, but simple text switch here works too) */}
              <span>SIGNAL_STRENGTH: 100%</span>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="p-8 md:p-12 text-center bg-background/50 backdrop-blur-sm">
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Request an <span className="text-primary font-bold">Alliance</span>
            </h2>
            
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg leading-relaxed">
              Whether you need a Navigator (Data Scientist) or a Shipwright (Full-Stack Dev), 
              my transponder snail is always listening.
            </p>

            {/* --- ACTION GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              
              {/* 1. EMAIL BUTTON (Primary Action) */}
              <a href="mailto:syengowork@gmail.com" className="group relative px-6 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3">
                <Mail size={20} />
                <span>Send Dispatch</span>
                {/* Haki Glow on Hover */}
                <div className="absolute inset-0 rounded-lg ring-2 ring-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* 2. TRANSPONDER SNAIL (Phone) */}
              <button 
                onClick={handlePhoneClick}
                onMouseEnter={() => setIsRinging(true)}
                onMouseLeave={() => setIsRinging(false)}
                className="group relative px-6 py-4 border-2 border-border bg-card text-foreground font-bold rounded-lg hover:border-primary transition-all shadow-sm flex items-center justify-center gap-3"
              >
                <DenDenMushi isRinging={isRinging} />
                <span className="font-mono tracking-wider">+254 114 513 647</span>
                
                {/* "PURU PURU" Easter Egg */}
                <AnimatePresence>
                  {showPuru && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -40, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap z-50 shadow-xl"
                    >
                      *PURU PURU PURU* (Copied!)
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* --- SOCIAL LINKS (Bounty Poster Style) --- */}
            <div className="mt-12 flex flex-col items-center">
              <span className="text-xs font-mono text-muted-foreground mb-4 tracking-[0.2em] uppercase">
                Find me on the Sea
              </span>
              
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/Syengo1", label: "GitHub" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/antony-syengo-202048242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
                  { icon: <Twitter size={20} />, href: "https://x.com/syengoo", label: "X (Twitter)" },
                  { icon: <Instagram size={20} />, href: "https://www.instagram.com/_sye.ngo_/", label: "Instagram" },
                  { icon: <TikTokIcon size={20} />, href: "https://www.tiktok.com/@.env.local?_r=1&_t=ZM-929sC7uHSdI", label: "TikTok" },
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="p-3 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 group relative"
                    aria-label={social.label}
                  >
                    {social.icon}
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-primary">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* FOOTER METADATA */}
            <div className="mt-12 pt-6 border-t border-border flex justify-between text-[10px] font-mono text-muted-foreground opacity-60">
              <span>CIPHER POL: NO RECORD</span>
              <span>ID: JKUAT-DS-2023</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}