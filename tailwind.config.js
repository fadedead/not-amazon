/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideOut: "slideOut 0.2s ease",
        slideIn: "slideIn 0.2s ease",
      },
      keyframes: {
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-10%)" },
          "20%": { transform: "translateX(-20%)" },
          "30%": { transform: "translateX(-30%)" },
          "40%": { transform: "translateX(-40%)" },
          "50%": { transform: "translateX(-50%)" },
          "60%": { transform: "translateX(-60%)" },
          "70%": { transform: "translateX(-70%)" },
          "80%": { transform: "translateX(-80%)" },
          "90%": { transform: "translateX(-90%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "10%": { transform: "translateX(-90%)" },
          "20%": { transform: "translateX(-80%)" },
          "30%": { transform: "translateX(-70%)" },
          "40%": { transform: "translateX(-60%)" },
          "50%": { transform: "translateX(-50%)" },
          "60%": { transform: "translateX(-40%)" },
          "70%": { transform: "translateX(-30%)" },
          "80%": { transform: "translateX(-20%)" },
          "90%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
