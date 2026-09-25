/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary - Teal/Green from the 'G' in logo
        primary: {
          DEFAULT: "#009688",
          light: "#26A69A",
          dark: "#00796B",
        },
        // Secondary - Blue from the 'b' in logo
        secondary: {
          DEFAULT: "#1976D2",
          light: "#42A5F5",
          dark: "#0D47A1",
        },
        // Accent - Magenta/Purple from the globe
        accent: {
          DEFAULT: "#E91E63",
          light: "#F06292",
          dark: "#C2185B",
        },
        dark: "#1a1a1a",
        light: "#f8f9fa",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #009688 0%, #1976D2 100%)",
        "brand-gradient-hover":
          "linear-gradient(135deg, #00796B 0%, #0D47A1 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
