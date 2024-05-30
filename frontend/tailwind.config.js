/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1fcf5",
          100: "#defaea",
          200: "#c0f2d4",
          300: "#8ee7b4",
          400: "#55d38b",
          500: "#2aa760",
          600: "#219855",
          700: "#1d7845",
          800: "#1c5f39",
          900: "#194e31",
          950: "#082b19",
        },
      },
    },
  },
  plugins: [],
};
