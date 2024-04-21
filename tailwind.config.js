/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    dropShadow: {
      "2xl": "0 20px 13px rgba(251 ,191 ,36, 0.25)",
    },
  },
  plugins: [],
};

