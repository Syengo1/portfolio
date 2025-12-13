"use client";

import { Mail, Phone, MapPin, Linkedin, Globe, Download, ExternalLink, Printer } from "lucide-react";
import Link from "next/link";
import { StrawHatToggle } from "@/components/StrawHatToggle";

export default function CVPage() {
  return (
    // LAYER 60: Covers the standard Navbar (z-50) entirely
    <div className="fixed inset-0 z-[60] w-full h-full overflow-y-auto bg-neutral-100 dark:bg-[#0a0a0a] transition-colors duration-500">
      
      {/* 1. CONTROLS (Floating Toolbar) */}
<div className="fixed top-6 right-6 z-[70] flex flex-col items-center gap-4 print:hidden">
  {/* Theme Toggle */}
  <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-2 rounded-full shadow-xl border border-slate-200 dark:border-white/10">
    <StrawHatToggle />
  </div>
  
  {/* Print Button */}
  <button 
    onClick={() => window.print()}
    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center group relative"
    title="Print / Save PDF"
  >
    <Printer size={20} />
    
    {/* Tooltip on Hover */}
    <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
      Save as PDF
    </span>
  </button>
  
  {/* Back to Home Button (Optional but helpful) */}
  <Link 
    href="/"
    className="w-12 h-12 bg-white dark:bg-neutral-800 text-slate-600 dark:text-slate-300 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center border border-slate-200 dark:border-white/10 group relative"
  >
    <Globe size={20} />
    <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
      Exit CV
    </span>
  </Link>
</div>

      {/* 2. BACKGROUND TEXTURES (Screen Only) */}
      <div className="fixed inset-0 pointer-events-none print:hidden">
        {/* Light Mode: Subtle Paper Grain */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 dark:opacity-0 transition-opacity" />
        {/* Dark Mode: Digital Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 dark:opacity-100 transition-opacity" />
      </div>

      {/* 3. THE A4 PAPER CONTAINER */}
      <div className="relative min-h-screen py-12 px-4 flex justify-center print:p-0 print:m-0">
        
        <div className="w-full max-w-[210mm] min-h-[297mm] bg-white dark:bg-[#111] text-slate-800 dark:text-slate-300 shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:border dark:border-white/10 p-10 md:p-14 print:shadow-none print:border-none print:w-full print:max-w-none print:p-0 print:bg-white print:text-black transition-colors duration-500">
          
          {/* --- HEADER --- */}
          <header className="border-b-2 border-slate-900 dark:border-white/20 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start print:border-black">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-tighter mb-2 text-slate-900 dark:text-white print:text-black">
                Antony <span className="text-blue-600 dark:text-blue-400 print:text-black">Syengo</span>
              </h1>
              <p className="text-lg font-mono font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase print:text-slate-600">
                // Full-Stack Data Scientist
              </p>
            </div>
            
            <div className="flex flex-col gap-2 mt-6 md:mt-0 text-sm font-medium text-slate-600 dark:text-slate-400 print:text-slate-700 text-right">
              <div className="flex items-center justify-end gap-2">
                <span>Nairobi, Kenya</span>
                <MapPin size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </div>
              <a href="mailto:antonysyengo1@gmail.com" className="flex items-center justify-end gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <span>antonysyengo1@gmail.com</span>
                <Mail size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </a>
              <div className="flex items-center justify-end gap-2">
                <span>+254 114 513 647</span>
                <Phone size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </div>
              <Link href="#" className="flex items-center justify-end gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                <span>linkedin.com/in/antony-syengo</span>
                <Linkedin size={14} className="text-blue-600 dark:text-blue-400 print:text-black" />
              </Link>
            </div>
          </header>

          {/* --- SUMMARY --- */}
          <section className="mb-10">
            <h2 className="sr-only">Summary</h2>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-800">
              <span className="text-4xl float-left mr-2 font-serif font-bold text-slate-900 dark:text-white print:text-black">V</span>
              ersatile <strong>Data Scientist & Full-Stack Engineer</strong>. I bridge the gap between complex machine learning algorithms and intuitive user interfaces. Graduating from <strong>JKUAT</strong> with a strong foundation in statistical modeling and computer vision. Proven track record of building scalable web applications for the Kenyan ecosystem, deploying production-ready solutions like <strong>SaaS inventory platforms</strong> and <strong>traffic analysis systems</strong>.
            </p>
          </section>

          {/* --- SKILLS GRID --- */}
          <section className="mb-10 p-6 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 print:bg-transparent print:border print:border-slate-200 print:p-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 border-b border-slate-200 dark:border-white/10 pb-2 print:text-slate-600 print:border-slate-300">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Skill Column 1 */}
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 print:text-black">
                  <span className="w-2 h-2 bg-red-500 rounded-full print:hidden" /> 
                  Data Science
                </h3>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
                  <li>Python (Pandas, NumPy)</li>
                  <li>Machine Learning (Scikit)</li>
                  <li>Computer Vision (OpenCV)</li>
                  <li>Data Viz (D3.js, Tableau)</li>
                </ul>
              </div>

              {/* Skill Column 2 */}
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 print:text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full print:hidden" />
                  Full-Stack Web
                </h3>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
                  <li>React / Next.js 14</li>
                  <li>TypeScript / Node.js</li>
                  <li>Supabase / PostgreSQL</li>
                  <li>Tailwind CSS / Framer</li>
                </ul>
              </div>

              {/* Skill Column 3 */}
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 print:text-black">
                  <span className="w-2 h-2 bg-purple-500 rounded-full print:hidden" />
                  DevOps & Tools
                </h3>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
                  <li>Git / GitHub Actions</li>
                  <li>Docker / AWS Basics</li>
                  <li>Figma / Adobe Illustrator</li>
                  <li>M-PESA Daraja API</li>
                </ul>
              </div>

            </div>
          </section>

          {/* --- PROJECTS --- */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 print:text-black">
              Key Projects
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-white/10 print:bg-slate-300"></span>
            </h2>
            
            <div className="space-y-6">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">
                    Project Onyx <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2 print:text-slate-600">(Flagship SaaS)</span>
                  </h3>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 print:text-black">2024 - Present</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 print:text-slate-800">
                  Developed a full-stack inventory management system for Kenyan SMEs. Integrated <strong>M-PESA Daraja API</strong> for real-time payment processing and built a predictive analytics dashboard to forecast stock depletion rates using Python time-series models.
                </p>
                <div className="flex gap-2">
                  {['Next.js', 'Supabase', 'Python', 'M-PESA'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded print:border print:border-slate-300 print:bg-transparent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">
                    Nairobi Traffic Viz
                  </h3>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 print:text-black">2023</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 print:text-slate-800">
                  Built a computer vision pipeline capable of analyzing CCTV footage to estimate traffic density. Processed video feeds using <strong>OpenCV</strong> and YOLOv8, visualizing congestion hotspots on an interactive Mapbox frontend.
                </p>
              </div>
            </div>
          </section>

          {/* --- EXPERIENCE --- */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 print:text-black">
              Experience
              <span className="h-[1px] flex-grow bg-slate-200 dark:bg-white/10 print:bg-slate-300"></span>
            </h2>

            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-slate-200 dark:border-white/10 print:border-slate-300">
                <h3 className="font-bold text-slate-900 dark:text-white print:text-black">IT Support Intern</h3>
                <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-2 print:text-slate-600">The National Treasury | 2023</p>
                <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 print:text-slate-800">
                  <li>Reduced system downtime by 20% through proactive hardware maintenance.</li>
                  <li>Assisted in the migration of sensitive financial data, ensuring 100% integrity.</li>
                  <li>Implemented new cybersecurity protocols for department workstations.</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-slate-200 dark:border-white/10 print:border-slate-300">
                <h3 className="font-bold text-slate-900 dark:text-white print:text-black">Tech Volunteer</h3>
                <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-2 print:text-slate-600">Tuwakuze Africa | 2022</p>
                <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 print:text-slate-800">
                  <li>Lead digital literacy workshops for over 50 community members.</li>
                  <li>Designed marketing assets using Adobe Illustrator that increased event turnout by 30%.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- EDUCATION & REF --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4">
            <section>
              <h2 className="text-lg font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2 print:text-black print:border-slate-300">
                Education
              </h2>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white print:text-black">BSc. Data Science</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">JKUAT (Graduating 2025)</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 italic print:text-slate-600">
                  Awards: President's Award (Silver)
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/10 pb-2 print:text-black print:border-slate-300">
                References
              </h2>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2 print:text-slate-800">
                <p>
                  <strong className="block text-slate-900 dark:text-white print:text-black">Dr. James Mbao</strong>
                  HOD, JKUAT Karen Campus<br/>
                  <span className="font-mono text-xs">+254 712 011 062</span>
                </p>
                <p>
                  <strong className="block text-slate-900 dark:text-white print:text-black">Joseph Muya Mani</strong>
                  Founder, Tuwakuze Africa<br/>
                  <span className="font-mono text-xs">0741 887 744</span>
                </p>
              </div>
            </section>
          </div>

        </div>
      </div>

      {/* PRINT STYLES (Force white background, remove shadows) */}
      <style jsx global>{`
        @media print {
          @page { margin: 0; }
          body { background: white; color: black; }
          .print-hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}