/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md1360: { max: "1360px" },
      md1000: { max: "1000px" },
      min760: { max: "760px" },
      min500: { max: "500px" },
    },
  },

  plugins: [],
};
