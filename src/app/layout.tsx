import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { EasterEggManager } from "@/components/EasterEggManager";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// 1. FONT SETUP
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});

// 2. METADATA (SEO)
export const metadata: Metadata = {
  title: "Antony Syengo | Full-Stack Data Scientist",
  description: "The professional portfolio of Antony Syengo, a Full-Stack Data Scientist bridging the gap between complex statistical modeling and production-grade web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* --- GLOBAL MANAGERS --- */}
          <EasterEggManager />
          <Navbar />
          
          {/* --- GLOBAL BACKGROUND (FROSTED GLASS EFFECT) --- */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* 1. Base Gradient: Subtle shift from top-left to bottom-right */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background transition-colors duration-500" />
            
            {/* 2. Ambient Orbs: Adds depth without messy grids */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />

            {/* 3. Frosted Noise Texture: Gives it the "Document" tactile feel */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")` }} 
            />
          </div>

          {/* --- MAIN CONTENT STAGE --- */}
          {children}
          
          <WhatsAppButton />

        </ThemeProvider>
      </body>
    </html>
  );
}