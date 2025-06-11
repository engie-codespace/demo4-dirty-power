/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899", // Tailwind's pink-500
        secondary: "#3A7CA5",
        accent: "#F39C12",
        light: "#F5F5F5",
        dark: "#333333",
      },
    },
  },
  plugins: [],
}
