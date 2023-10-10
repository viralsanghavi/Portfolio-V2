/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        subtle: "0 0 10px rgba(0,0,0,.09)",
      },
      colors: {
        bg: "#f9f9f9",
        high: "#147efb",
        details: "#767676",
      },
      backgroundColor: {
        bg: "#f9f9f9",
        high: "#147efb",
      },
      lineHeight: {
        sm: 1.2,
        md: 1.6,
      },
      screens: {
        laptop: "1536px",
      },
      keyframes: {
        morph: {
          "0%": {borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"},
          "50%": {borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%"},
          "100%": {borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"},
        },
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
      },
      borderRadius: {
        morph: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
    },
  },
  plugins: [],
};
