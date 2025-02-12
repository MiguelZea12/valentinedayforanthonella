/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#17c3b2",
        secondary: "#f4f4f4",
        dark: "#092635",
        accent: "#00A896",
        light: "#E0FBFC",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 1.5s infinite",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
