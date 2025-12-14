"use client";

import { Mail, Phone, MapPin, Linkedin, Globe, Printer, Github, ExternalLink, Award } from "lucide-react";
import Link from "next/link";
import { StrawHatToggle } from "@/components/StrawHatToggle";

export default function CVPage() {
  return (
    // LAYER 60: Covers the standard Navbar (z-50) entirely
    // FIX: Replaced hardcoded colors with 'bg-background' and 'text-foreground' to sync with globals.css
    <div className="fixed inset-0 z-[60] w-full h-full overflow-y-auto bg-background text-foreground transition-colors duration-500 print:static print:overflow-visible print:bg-white print:text-black">
      
      {/* 1. CONTROLS (Floating Toolbar) - Hidden when printing */}
      <div className="fixed top-6 right-6 z-[70] flex flex-col items-center gap-4 print:hidden">
        {/* Theme Toggle */}
        <div className="bg-card/80 backdrop-blur-md p-2 rounded-full shadow-xl border border-border">
          <StrawHatToggle />
        </div>
        
        {/* Print Button */}
        <button 
          onClick={() => window.print()}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center group relative"
          title="Print / Save PDF"
        >
          <Printer size={20} />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Save as PDF
          </span>
        </button>
        
        {/* Exit Button */}
        <Link 
          href="/"
          className="w-12 h-12 bg-card text-foreground rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center border border-border group relative"
        >
          <Globe size={20} />
          <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Return to Site
          </span>
        </Link>
      </div>

      {/* 2. BACKGROUND TEXTURES (Screen Only) - CLEAN FROSTED LOOK */}
        <div className="fixed inset-0 pointer-events-none print:hidden">
          {/* Just a clean, subtle gradient to support the global frosted look */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        </div>

      {/* 3. THE A4 PAPER CONTAINER */}
      <div className="relative min-h-screen py-12 px-4 flex justify-center print:p-0 print:m-0 print:block print:min-h-0">
        
        <div className="w-full max-w-[210mm] min-h-[297mm] bg-card text-card-foreground shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-border p-10 md:p-14 print:shadow-none print:border-none print:w-full print:max-w-none print:p-[40px] print:bg-white print:text-black transition-colors duration-500">
          
          {/* --- HEADER --- */}
          <header className="border-b-2 border-slate-900 dark:border-white/20 pb-8 mb-8 flex flex-col md:flex-row print:flex-row justify-between items-start print:border-black print:break-inside-avoid">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-tighter mb-2 text-foreground print:text-black">
                Antony <span className="text-blue-600 dark:text-blue-400 print:text-black">Syengo</span>
              </h1>
              <p className="text-lg font-mono font-bold text-muted-foreground tracking-[0.2em] uppercase print:text-slate-600">
                // Full-Stack Data Scientist
              </p>
            </div>
            
            <div className="flex flex-col gap-2 mt-6 md:mt-0 print:mt-0 text-sm font-medium text-muted-foreground print:text-slate-700 text-right print:text-right print:items-end">
              <div className="flex items-center justify-end gap-2">
                <span>Nairobi, Kenya</span>
                <MapPin size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </div>

              {/* PORTFOLIO LINK */}
              <a href="https://antony-syengo.vercel.app/" target="_blank" className="flex items-center justify-end gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <span className="font-bold">antony-syengo.vercel.app</span>
                <Globe size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </a>

              <a href="mailto:syengowork@gmail.com" className="flex items-center justify-end gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <span>syengowork@gmail.com</span>
                <Mail size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </a>
              <div className="flex items-center justify-end gap-2">
                <span>+254 114 513 647</span>
                <Phone size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </div>
              <Link href="https://linkedin.com/in/antony-syengo" target="_blank" className="flex items-center justify-end gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <span>linkedin.com/in/antony-syengo</span>
                <Linkedin size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </Link>
              <Link href="https://github.com/Syengo1" target="_blank" className="flex items-center justify-end gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <span>github.com/Syengo1</span>
                <Github size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </Link>
            </div>
          </header>

          {/* --- SUMMARY --- */}
          <section className="mb-8 print:break-inside-avoid">
            <h2 className="sr-only">Summary</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground print:text-slate-800">
              <span className="font-bold text-foreground print:text-black">Impact-driven Data Scientist & Engineer</span> with a unique ability to bridge the gap between complex statistical modeling and production-grade web applications. 
              Skilled in building scalable SaaS platforms using Next.js and deploying Computer Vision pipelines for real-world analysis. 
            </p>
          </section>

          {/* --- SKILLS GRID --- */}
          <section className="mb-8 p-5 bg-muted/30 rounded-xl border border-border print:bg-transparent print:border print:border-slate-300 print:p-2 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2 print:text-slate-600 print:border-slate-300">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2 print:text-black">
                  Data Intelligence
                </h3>
                <ul className="text-xs text-muted-foreground print:text-slate-700 space-y-1 font-medium">
                  <li>Python (Pandas, NumPy, Scikit-learn)</li>
                  <li>Computer Vision (YOLOv8, OpenCV)</li>
                  <li>Predictive Modeling & Time-Series</li>
                  <li>Data Visualization (Tableau, D3.js)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2 print:text-black">
                  Full-Stack Engineering
                </h3>
                <ul className="text-xs text-muted-foreground print:text-slate-700 space-y-1 font-medium">
                  <li>React / Next.js 14 (App Router)</li>
                  <li>TypeScript / Node.js API Design</li>
                  <li>Database Architecture (PostgreSQL/Supabase)</li>
                  <li>State Management (Zustand, Redux)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2 print:text-black">
                  DevOps & Infrastructure
                </h3>
                <ul className="text-xs text-muted-foreground print:text-slate-700 space-y-1 font-medium">
                  <li>CI/CD Pipelines (GitHub Actions)</li>
                  <li>Docker Containerization</li>
                  <li>Cloud Deployment (Vercel, AWS EC2)</li>
                  <li>Payment Integration (Daraja API)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- PROJECTS --- */}
          <section className="mb-8 print:break-inside-avoid">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-3 print:text-black">
              Personal Projects
              <span className="h-[1px] flex-grow bg-border print:bg-slate-300"></span>
            </h2>
            <div className="space-y-5">
              <div className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold text-foreground print:text-black">
                    Project Nostro <span className="text-xs font-normal text-muted-foreground ml-1 print:text-slate-600">| Full Stack Restaurant Management Web App</span>
                  </h3>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 print:text-black">2025</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-slate-800 space-y-1">
                  <li><strong>Architected</strong> a full-stack management system for a restaurant, including a staff panel <strong>99%</strong>.</li>
                  <li><strong>Integrated M-PESA Daraja API</strong> to enable real-time mobile payments and automated transaction reconciliation. (Not in the deployed version)</li>
                  <li><strong>Engineered</strong> an analytics dashboard to showcase orders, live reviews among others.</li>
                </ul>
              </div>
              <div className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold text-foreground print:text-black">
                    Driveflow <span className="text-xs font-normal text-muted-foreground ml-1 print:text-slate-600">| Car Rental System (Not yet Deployed)</span>
                  </h3>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 print:text-black">2025</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-slate-800 space-y-1">
                  <li><strong>Developed</strong> a real-time car rental system using <strong>Next.js, supabase</strong> and integrated SmileId and Daraja.</li>
                  <li><strong>Engineered</strong> a full admin control panel, to post their fleets, maintain them and run their business from their phone.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- EXPERIENCE --- */}
          <section className="mb-8 print:break-inside-avoid">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-3 print:text-black">
              Professional Experience
              <span className="h-[1px] flex-grow bg-border print:bg-slate-300"></span>
            </h2>
            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-border print:border-slate-300 print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-foreground print:text-black">IT Support Intern</h3>
                  <span className="text-xs font-mono text-muted-foreground print:text-black">The National Treasury | 2024</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-slate-800 space-y-1">
                  <li><strong>Orchestrated</strong> the secure migration of sensitive financial datasets, achieving <strong>100% data integrity</strong> during the transition.</li>
                  <li><strong>Deployed</strong> robust cybersecurity protocols across department workstations, mitigating potential malware threats.</li>
                  <li>Streamlined hardware maintenance schedules, resulting in a <strong>20% reduction</strong> in system downtime.</li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-border print:border-slate-300 print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-foreground print:text-black">Volunteer</h3>
                  <span className="text-xs font-mono text-muted-foreground print:text-black">Tuwakuze Africa | 2022</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-slate-800 space-y-1">
                  <li><strong>Designed</strong> high-impact visual assets using Adobe Illustrator, contributing to a <strong>30% increase</strong> in event turnout.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- EDUCATION & AWARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4 print:break-inside-avoid">
            <section className="print:break-inside-avoid">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-3 print:text-black">
                Education
                <span className="h-[1px] flex-grow bg-border print:bg-slate-300"></span>
              </h2>
              <div>
                <h3 className="font-bold text-foreground print:text-black">BSc. Data Science & Analytics</h3>
                <p className="text-sm text-muted-foreground print:text-slate-700">JKUAT</p>
                <p className="text-xs font-mono text-muted-foreground mt-1 print:text-slate-600">
                  Graduated: Dec 5, 2025
                </p>
              </div>
            </section>
            <section className="print:break-inside-avoid">
              {/* Optional Awards Section */}
            </section>
          </div>

          {/* --- REFERENCES --- */}
          <section className="mt-8 pt-8 border-t border-dashed border-border print:border-slate-300">
            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest">
              Excellent references available upon request
            </p>
          </section>

        </div>
      </div>

      {/* PERFECT PRINT STYLES */}
      <style jsx global>{`
        @media print {
          @page { 
            margin: 0; 
            size: auto; 
          }
          body { 
            background: white; 
            color: black; 
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Ensure links are readable */
          a {
            text-decoration: none;
            color: black;
          }
        }
      `}</style>
    </div>
  );
}