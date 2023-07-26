/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3f85e0",
          400: "#65a2f1",
          500: "#3f85e0",
          900: "#1d3557",
        },
        secondary: {
          DEFAULT: "#f4f4f4",
          500: "#f4f4f4",
        },
      },
    },
  },
  plugins: [],
};
