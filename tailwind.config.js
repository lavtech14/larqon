/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#161616",
          dark: "#0F0F0F",
          light: "#1F1F1F",
        },
        slate: {
          DEFAULT: "#222222",
          dark: "#1A1A1A",
          light: "#2D2D2D",
        },
        gold: {
          light: "#E2CFAD",
          DEFAULT: "#C8A96B",
          dark: "#B19154",
          soft: "rgba(200, 169, 107, 0.15)",
        },
        warmWhite: {
          DEFAULT: "#F5F5F5",
          dark: "#E5E5E5",
        },
        mutedGray: "#A8A8A8",
        accentBlue: {
          light: "#80AEFF",
          DEFAULT: "#4F8CFF",
          dark: "#1F5CFF",
          glow: "rgba(79, 140, 255, 0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(200, 169, 107, 0.2)',
        'blue-glow': '0 0 30px rgba(79, 140, 255, 0.25)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glass-gold': '0 8px 32px 0 rgba(200, 169, 107, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(200, 169, 107, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(200, 169, 107, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
