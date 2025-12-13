import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { EasterEggManager } from "@/components/EasterEggManager";

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
  description: "A world-class portfolio built for the Grand Line. Data Science, Engineering, and Design.",
  icons: {
    icon: "/icon.svg",
  },
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
          <EasterEggManager /> {/* Listens for Konami Code */}
          <Navbar />
          
          {/* --- GLOBAL BACKGROUND TEXTURES --- */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* Light Mode: Map Contours */}
            <div className="absolute inset-0 bg-[url('/map-pattern.svg')] opacity-[0.03] dark:opacity-0 transition-opacity duration-500 bg-repeat" />
            
            {/* Dark Mode: Stars/Constellations */}
            <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] [background-size:50px_50px] opacity-0 dark:opacity-[0.15] transition-opacity duration-500" />
          </div>

          {/* --- MAIN CONTENT STAGE --- */}
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}