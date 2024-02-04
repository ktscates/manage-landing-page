/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFF0EC",
        dark: "#1D1E25",
        navy: "#242D52",
        orange: "#F3603C",
        background: "#FAFAFA",
        input: "#8D8D8D",
        onHover: "#F98F75",
      },
      fontFamily: {
        primary: "'Be Vietnam Pro', sans-serif",
      },
    },
  },
  plugins: [],
};