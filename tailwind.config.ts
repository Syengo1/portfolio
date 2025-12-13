import type { Config } from "tailwindcss";

const config: Config = {
  // CRITICAL: Tells Tailwind to look for the "dark" class on the HTML tag
  // This connects with next-themes and your Straw Hat Toggle
  darkMode: "class", 

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. FONT MAPPING
      // These link to the variables we set up in layout.tsx
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"], // Used for WANTED text
      },

      // 2. COLOR MAPPING
      // These wrap your CSS variables in hsl() so they work with opacity modifiers
      // Example: bg-background/50 will work perfectly
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Lore colors
        rookie: {
          DEFAULT: "hsl(var(--rookie-bg))",
          foreground: "hsl(var(--rookie-text))",
        },
        supernova: {
          DEFAULT: "hsl(var(--supernova-bg))",
          foreground: "hsl(var(--supernova-text))",
        },
        emperor: {
          DEFAULT: "hsl(var(--emperor-bg))",
          foreground: "hsl(var(--emperor-text))",
        },
        wip: {
          DEFAULT: "hsl(var(--wip-bg))",
          foreground: "hsl(var(--wip-text))",
          icon: "hsl(var(--wip-icon))",
        },
        "hero-gradient-from": "hsl(var(--hero-gradient-from))",
        "hero-gradient-to": "hsl(var(--hero-gradient-to))",
        "hero-grid": "hsl(var(--hero-grid))",
      },
      
      // 3. BORDER RADIUS MAPPING
      // Optional: Matches standard shadcn/ui variables if you add them later
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;