"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { StrawHatToggle } from "@/components/StrawHatToggle"; // Import the Toggle

export default function NotFound() {
  return (
    // FIX: 'fixed inset-0 z-[60]' places this page ON TOP of the Navbar (z-50)
    <div className="fixed inset-0 z-[60] w-full h-full flex flex-col items-center justify-center bg-[#F2E6D0] dark:bg-[#1a1c23] overflow-hidden text-center p-4">
      
      {/* 1. THEME TOGGLE (Added so users aren't stuck) */}
      <div className="absolute top-4 right-4 z-[70]">
        <StrawHatToggle />
      </div>

      {/* 2. BACKGROUND MAP TEXTURE */}
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/e6/6b/81/e66b819660c1d63c5093766696cb8d70.png')] opacity-10 bg-cover bg-center mix-blend-multiply dark:mix-blend-overlay pointer-events-none" />

      {/* 3. ZORO'S PATH */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full">
          <motion.path
            d="M 100 100 Q 400 50 600 300 T 900 100 T 1200 400"
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            strokeDasharray="20 20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          />
        </svg>
      </div>

      {/* 4. ZORO IMAGE CONTAINER */}
      <motion.div 
        className="relative z-10 mb-8"
        initial={{ rotate: -10, x: -50 }}
        animate={{ rotate: 10, x: 50 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "mirror", 
          duration: 2, 
          ease: "easeInOut" 
        }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
           <img 
             src="data:image/jpeg;base64,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" 
             alt="Zoro Lost"
             className="w-full h-full object-contain drop-shadow-2xl"
           />
           
           {/* Question Mark Bubble */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ 
               repeat: Infinity, 
               duration: 1, 
               ease: "easeInOut" 
             }}
             className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg border-2 border-green-500"
           >
             ?
           </motion.div>
        </div>
      </motion.div>

      {/* 5. TEXT CONTENT */}
      <div className="z-10 bg-[#F2E6D0]/90 dark:bg-[#1a1c23]/90 p-8 rounded-lg border-2 border-[#3E3228] dark:border-gray-600 shadow-xl backdrop-blur-sm max-w-lg">
        <h1 className="font-serif text-5xl font-bold text-[#3E3228] dark:text-white mb-2">
          404: LOST?
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-mono">
          "Oi... I think the One Piece is in the other direction. <br/>
          Even I don't know where we are."
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-[#22c55e] text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors mx-auto"
          >
            <ArrowLeft size={20} />
            Back to the Ship (Home)
          </motion.button>
        </Link>
      </div>

    </div>
  );
}