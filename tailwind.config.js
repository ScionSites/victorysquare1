/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Premium charcoal + gold — finance-grade, trustworthy
        ink: {
          DEFAULT: "#0C0A09",
          900: "#1C1917",
          800: "#292524",
          700: "#44403C",
          600: "#57534E",
          500: "#78716C",
          400: "#A8A29E",
        },
        gold: {
          DEFAULT: "#CA8A04",
          light: "#E0B43A",
          dark: "#A16207",
          50: "#FBF6E9",
        },
        paper: {
          DEFAULT: "#FAFAF9",
          warm: "#F5F4F2",
        },
      },
      fontFamily: {
        // Quote family names so the digit in "Source Sans 3" stays valid in compiled CSS
        sans: ['"Source Sans 3"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Lexend"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(12,10,9,.04), 0 8px 24px -12px rgba(12,10,9,.12)",
        lift: "0 18px 50px -20px rgba(12,10,9,.35)",
        gold: "0 10px 30px -10px rgba(202,138,4,.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.16,1,.3,1) both",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
