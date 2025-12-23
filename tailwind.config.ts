import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        cave: {
          deep: "hsl(var(--cave-deep))",
          rock: "hsl(var(--cave-rock))",
          stone: "hsl(var(--cave-stone))",
        },
        torch: {
          glow: "hsl(var(--torch-glow))",
          warm: "hsl(var(--torch-warm))",
        },
        sandstone: "hsl(var(--sandstone))",
        ember: "hsl(var(--ember))",
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        greconian: ['Greconian', 'serif'],
        rimba: ['Rimba Andalas', 'sans-serif'],
        caprice: ['Caprice', 'serif'],
        quillstone: ['Quillstone', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bat-fly": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.2) translateZ(-500px)" 
          },
          "10%": { 
            opacity: "1" 
          },
          "80%": { 
            opacity: "1" 
          },
          "100%": { 
            opacity: "0", 
            transform: "scale(3) translateZ(200px) translateY(100px)" 
          },
        },
        "wing-flap": {
          "0%, 100%": { transform: "rotateY(0deg) scaleX(1)" },
          "50%": { transform: "rotateY(30deg) scaleX(0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "bat-fly": "bat-fly 5s ease-in-out forwards",
        "wing-flap-left": "wing-flap 0.15s ease-in-out infinite",
        "wing-flap-right": "wing-flap 0.15s ease-in-out infinite reverse",
      },
      backgroundImage: {
        "cave-gradient": "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--cave-deep)) 100%)",
        "torch-radial": "radial-gradient(ellipse at center, hsl(var(--torch-glow) / 0.3) 0%, transparent 70%)",
        "rock-texture": "linear-gradient(135deg, hsl(var(--cave-rock)) 0%, hsl(var(--background)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
