// src/app/cv/page.tsx
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Printer,
  ExternalLink,
  Sun,
  Moon,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { PROJECTS, PROFILE_DATA } from "@/data/projects";

type CvFocusMode = "fullstack" | "data" | "it-support";

const FOCUS_PROFILES: Record<
  CvFocusMode,
  {
    label: string;
    headline: string;
    subheadline: string;
    summary: string;
  }
> = {
  fullstack: {
    label: "Full-Stack Dev",
    headline: "Full-Stack Software Developer",
    subheadline: "Web Applications · Business & POS Systems · Data-Driven Solutions",
    summary:
      "Full-Stack Software Developer with a Bachelor of Science in Data Science and Analytics from Jomo Kenyatta University of Agriculture and Technology (JKUAT). Experienced in designing, building, and deploying responsive web applications and multi-tenant business software using Next.js, React, TypeScript, Node.js, and PostgreSQL/Supabase. Proven track record of delivering e-commerce platforms, Point-of-Sale (POS) systems, M-Pesa Daraja payment integrations, and NGO web portals, complemented by enterprise IT support experience at The National Treasury.",
  },
  data: {
    label: "Data & Analytics",
    headline: "Data Analyst & Full-Stack Software Developer",
    subheadline: "Data Science & Analytics · Database Architecture · Business Intelligence",
    summary:
      "Data Science and Analytics graduate (BSc, Jomo Kenyatta University of Agriculture and Technology — JKUAT) with strong full-stack software engineering capabilities. Skilled in Python, SQL, statistical modeling, machine learning, and relational database design (PostgreSQL, Supabase), alongside building production web applications and transactional POS systems that capture, structure, and operationalize business data.",
  },
  "it-support": {
    label: "IT & Systems Support",
    headline: "IT Support Specialist & Software Developer",
    subheadline: "Systems Administration · Technical Troubleshooting · Enterprise Web Systems",
    summary:
      "IT Support Technician and Software Developer holding a Bachelor of Science in Data Science and Analytics from Jomo Kenyatta University of Agriculture and Technology (JKUAT). Hands-on government enterprise IT support experience gained at The National Treasury (Nairobi CBD), troubleshooting workstation hardware, operating systems, network connectivity, and office software, combined with strong full-stack web application and database development skills.",
  },
};

const SKILL_GROUPS = [
  {
    category: "Frontend Engineering",
    skills: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    category: "Backend, APIs & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "MongoDB (Mongoose)",
      "RESTful API Design",
      "M-Pesa Daraja API",
      "JWT Authentication",
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL & Relational Modeling",
      "Statistical Analysis",
      "Data Cleaning & Visualization",
      "Computer Vision (OpenCV)",
    ],
  },
  {
    category: "DevOps, Tooling & IT Systems",
    skills: [
      "Git & GitHub",
      "Docker",
      "Vercel & Render Deployment",
      "Cloudinary",
      "Workstation & OS Troubleshooting",
      "Hardware & LAN Diagnostics",
    ],
  },
];

export default function CVPage() {
  const { setTheme } = useTheme();
  const [focusMode, setFocusMode] = useState<CvFocusMode>("fullstack");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const activeProfile = FOCUS_PROFILES[focusMode];

  const displayedProjects = [...PROJECTS]
    .filter((p) => (showAllProjects ? true : p.featuredOnCv))
    .sort((a, b) => a.cvOrder - b.cvOrder);

  return (
    <div className="fixed inset-0 z-[60] w-full h-full overflow-y-auto bg-slate-100 dark:bg-slate-950 text-foreground transition-colors duration-300 print:static print:overflow-visible print:bg-white print:text-black">
      
      {/* WRAPPER: Handles centering the toolbar and the CV paper together */}
      <div className="relative min-h-screen py-10 px-3 sm:px-6 flex flex-col items-center print:p-0 print:m-0 print:block print:min-h-0">
        
        {/* 1. CENTRALLY ALIGNED & FLOATING TOOLBAR (Hidden in Print) */}
        {/* sticky top-4/6 enables floating. pointer-events-none lets you click CV text through the gaps! */}
        <div className="sticky top-4 sm:top-6 w-full max-w-[210mm] flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 print:hidden z-[70] pointer-events-none">
          
          {/* Role Focus Switcher */}
          {/* pointer-events-auto restores clicking for the buttons. Perfect Glass styling applied here. */}
          <div className="pointer-events-auto bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg p-1.5 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 flex flex-wrap items-center justify-center gap-1 w-full lg:w-auto transition-colors duration-300">
            <span className="px-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground hidden sm:inline-flex items-center gap-1 whitespace-nowrap">
              <SlidersHorizontal size={11} />
              CV Focus:
            </span>
            {(Object.keys(FOCUS_PROFILES) as CvFocusMode[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFocusMode(key)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  focusMode === key
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                }`}
              >
                {FOCUS_PROFILES[key].label}
              </button>
            ))}
          </div>

          {/* Project Count Toggle + Action Buttons */}
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-3 h-10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg text-foreground text-xs font-mono font-medium rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Toggle between Top 5 Selected Projects and All 8 Projects"
            >
              <Layers size={14} className="text-blue-600 dark:text-blue-400" />
              <span>{showAllProjects ? "Showing: All (8)" : "Showing: Top (5)"}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => {
                const isCurrentlyDark = document.documentElement.classList.contains("dark");
                setTheme(isCurrentlyDark ? "light" : "dark");
              }}
              aria-label="Toggle CV Theme"
              title="Toggle Light / Dark Mode"
              className="w-10 h-10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg text-foreground rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500 transition-all flex items-center justify-center cursor-pointer shrink-0"
            >
              <Sun size={17} className="hidden dark:block text-amber-400" />
              <Moon size={17} className="block dark:hidden" />
            </button>

            {/* Print / Save as PDF Button */}
            <button
              type="button"
              onClick={() => window.print()}
              aria-label="Print or Save CV as PDF"
              title="Print / Save as PDF"
              className="px-4 h-10 bg-blue-600/90 backdrop-blur-lg hover:bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shrink-0 border border-blue-500/50"
            >
              <Printer size={16} />
              {/* Hide "Save as PDF" text on very small screens to prevent wrapping */}
              <span className="hidden sm:inline">Save as PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            {/* Return to Portfolio */}
            <Link
              href="/"
              aria-label="Return to Portfolio Website"
              title="Return to Portfolio"
              className="w-10 h-10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg text-foreground rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500 transition-all flex items-center justify-center shrink-0"
            >
              <Globe size={17} />
            </Link>
          </div>
        </div>

        {/* 2. A4 DOCUMENT CONTAINER */}
        <article
          className="
            w-full max-w-[210mm] min-h-[297mm]
            bg-white dark:bg-slate-900
            text-slate-900 dark:text-slate-100
            shadow-2xl border border-slate-200 dark:border-slate-800
            p-8 sm:p-12 md:p-14
            print:shadow-none print:border-none print:w-full print:max-w-none print:p-0 print:bg-white print:text-black
            transition-colors duration-300
          "
        >
          {/* ================= 01. HEADER ================= */}
          <header className="border-b-2 border-slate-900 dark:border-slate-700 print:border-slate-900 pb-5 mb-6 flex flex-col md:flex-row print:flex-row justify-between items-start gap-4 print:break-inside-avoid">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-black uppercase tracking-tight text-slate-900 dark:text-white print:text-black">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-blue-700 dark:text-blue-400 print:text-slate-900 mt-1">
                {activeProfile.headline}
              </p>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 print:text-slate-700 mt-0.5">
                {activeProfile.subheadline}
              </p>
            </div>

            <div className="flex flex-col gap-1 text-xs font-medium text-slate-700 dark:text-slate-300 print:text-slate-800 md:text-right print:text-right md:items-end print:items-end">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-blue-600 dark:text-blue-400 print:text-black shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={13} className="text-blue-600 dark:text-blue-400 print:text-black shrink-0" />
                <span>{PROFILE_DATA.email}</span>
              </a>
              <a
                href={`tel:${PROFILE_DATA.phone.split(" ").join("")}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone size={13} className="text-blue-600 dark:text-blue-400 print:text-black shrink-0" />
                <span>{PROFILE_DATA.phone}</span>
              </a>
              <a
                href={PROFILE_DATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
              >
                <Globe size={13} className="text-blue-600 dark:text-blue-400 print:text-black shrink-0" />
                <span>{PROFILE_DATA.portfolioDisplay}</span>
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={13} className="text-blue-600 dark:text-blue-400 print:text-black shrink-0" />
                <span>{PROFILE_DATA.linkedinDisplay}</span>
              </a>
            </div>
          </header>

          {/* ================= 02. PROFESSIONAL SUMMARY ================= */}
          <section className="mb-6 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 print:text-black mb-2 flex items-center gap-2">
              <span>Professional Summary</span>
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800 print:bg-slate-300" />
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-800">
              {activeProfile.summary}
            </p>
          </section>

          {/* ================= 03. TECHNICAL SKILLS ================= */}
          <section className="mb-6 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 print:text-black mb-3 flex items-center gap-2">
              <span>Technical Skills</span>
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800 print:bg-slate-300" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="leading-snug">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">
                    {group.category}:{" "}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                    {group.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ================= 04. PROFESSIONAL EXPERIENCE ================= */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 print:text-black mb-3 flex items-center gap-2">
              <span>Professional Experience</span>
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800 print:bg-slate-300" />
            </h2>

            <div className="space-y-4">
              {/* Role 1: Freelance Software Developer */}
              <div className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                    Full-Stack Software Developer (Freelance & Independent Systems)
                  </h3>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 print:text-slate-700">
                    Nairobi, Kenya | 2025 – Present
                  </span>
                </div>
                <ul className="mt-1.5 list-disc list-outside ml-4 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-1 leading-relaxed">
                  <li>
                    Design, build, and deploy full-stack web applications and vertical business systems for retail, hospitality, and nonprofit clients using <strong>Next.js, React, TypeScript, Node.js, and Supabase/PostgreSQL</strong>.
                  </li>
                  <li>
                    Deliver end-to-end e-commerce and Point-of-Sale (POS) workflows featuring real-time inventory synchronization, role-based admin dashboards, and automated <strong>M-Pesa Daraja API</strong> mobile payments.
                  </li>
                  <li>
                    Developed and launched the official web platform for{" "}
                    <a
                      href="https://maactionaid.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-700 dark:text-blue-400 print:text-black hover:underline"
                    >
                      Maasai Action Aid Initiative (maactionaid.org)
                    </a>
                    , implementing responsive accessibility, technical SEO, and donor inquiry workflows.
                  </li>
                </ul>
              </div>

              {/* Role 2: The National Treasury */}
              <div className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                    IT Support / Technician Attachee (Industrial Attachment)
                  </h3>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 print:text-slate-700">
                    The National Treasury — Nairobi CBD, Kenya | 2024
                  </span>
                </div>
                <ul className="mt-1.5 list-disc list-outside ml-4 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-1 leading-relaxed">
                  <li>
                    Provided first-line technical support to ministry staff across departments, diagnosing and resolving hardware, operating system, and office software issues.
                  </li>
                  <li>
                    Configured, updated, and maintained desktop workstations, peripheral devices, and printers while assisting with local area network (LAN) connectivity troubleshooting.
                  </li>
                  <li>
                    Supported routine preventive hardware maintenance, system updates, and secure workstation configuration in line with public-sector ICT procedures.
                  </li>
                  <li>
                    Documented support tasks and escalated complex network or enterprise infrastructure incidents to senior ICT officers for timely resolution.
                  </li>
                </ul>
              </div>

              {/* Role 3: Tuwakuze Africa */}
              <div className="print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                    Digital & Graphic Design Volunteer
                  </h3>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 print:text-slate-700">
                    Tuwakuze Africa | 2022
                  </span>
                </div>
                <ul className="mt-1.5 list-disc list-outside ml-4 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-1 leading-relaxed">
                  <li>
                    Designed digital communication and promotional graphics using Adobe Illustrator to support community outreach campaigns and organizational events.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ================= 05. SELECTED SOFTWARE PROJECTS ================= */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 print:text-black mb-3 flex items-center gap-2">
              <span>Selected Software Engineering Projects</span>
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800 print:bg-slate-300" />
            </h2>

            <div className="space-y-4">
              {displayedProjects.map((project) => (
                <div key={project.id} className="print:break-inside-avoid">
                  <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-700">
                        — {project.subtitle}
                      </span>
                    </div>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-blue-700 dark:text-blue-400 print:text-slate-800 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{project.displayUrl || project.liveLink}</span>
                        <ExternalLink size={11} className="print:hidden" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed mt-1">
                    {project.cvSummary}
                  </p>

                  <ul className="mt-1 list-disc list-outside ml-4 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-0.5 leading-snug">
                    {project.highlights.slice(0, 2).map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <p className="mt-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 print:text-slate-700">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">
                      Tech Stack:
                    </span>{" "}
                    {project.coreTech.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= 06. EDUCATION ================= */}
          <section className="print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 print:text-black mb-3 flex items-center gap-2">
              <span>Education</span>
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800 print:bg-slate-300" />
            </h2>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                  {PROFILE_DATA.education.degree}
                </h3>
                <p className="text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-300 print:text-slate-800">
                  {PROFILE_DATA.education.institution}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 print:text-slate-700 mt-0.5 sm:mt-0">
                Graduated: {PROFILE_DATA.education.graduated}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 mt-1 leading-relaxed">
              {PROFILE_DATA.education.highlights}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}