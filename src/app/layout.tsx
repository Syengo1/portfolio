// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { EasterEggManager } from "@/components/EasterEggManager";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const siteUrl = "https://antonysyengo.vercel.app";

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

// 2. METADATA (SEO, Open Graph, Twitter & Favicon)
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Antony Syengo | Full-Stack Software Developer",
    template: "%s | Antony Syengo",
  },

  description:
    "Antony Syengo is a Nairobi-based Full-Stack Software Developer building web applications, Point-of-Sale (POS) platforms, and business systems with Next.js, TypeScript, Node.js, and PostgreSQL. Holds a BSc in Data Science and Analytics from JKUAT.",

  applicationName: "Antony Syengo Portfolio",

  keywords: [
    "Antony Syengo",
    "Full-Stack Software Developer Kenya",
    "Next.js Developer Nairobi",
    "TypeScript Developer",
    "POS System Developer Kenya",
    "M-Pesa Daraja API Integration",
    "JKUAT Data Science and Analytics",
  ],

  authors: [{ name: "Antony Syengo", url: siteUrl }],
  creator: "Antony Syengo",

  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Antony Syengo Portfolio",
    title: "Antony Syengo | Full-Stack Software Developer",
    description:
      "Explore Antony Syengo's production software projects, POS & SaaS business systems, M-Pesa integrations, and full-stack engineering experience.",
    locale: "en_KE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Antony Syengo — Full-Stack Software Developer Wanted Poster Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@syengoo",
    title: "Antony Syengo | Full-Stack Software Developer",
    description:
      "Production web applications, Point-of-Sale (POS) systems, and data-driven business software by Antony Syengo (BSc. Data Science & Analytics, JKUAT).",
    images: ["/opengraph-image"],
  },
};

// 3. STRUCTURED DATA (JSON-LD Person Schema for Search Engines)
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antony Syengo",
  url: siteUrl,
  jobTitle: "Full-Stack Software Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://www.linkedin.com/in/antony-syengo-202048242",
    "https://x.com/syengoo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background transition-colors duration-500" />
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              }}
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