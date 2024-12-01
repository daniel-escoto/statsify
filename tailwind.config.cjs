/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          light: "#d8b4fe",
          DEFAULT: "#a855f7",
          dark: "#7e22ce",
        },
        secondary: {
          light: "#f3e8ff",
          DEFAULT: "#c084fc",
          dark: "#9333ea",
        },
        neutral: {
          light: "#f4f4f7",
          DEFAULT: "#9ca3af",
          dark: "#4b5563",
        },
        accent: {
          light: "#c3bfff",
          DEFAULT: "#8b5cf6",
          dark: "#5b21b6",
        },
        error: {
          light: "#ffe4e6",
          DEFAULT: "#f87171",
          dark: "#b91c1c",
        },
        background: {
          light: "#ffffff",
          DEFAULT: "#faf5ff",
          dark: "#1e1b29",
        },
        foreground: {
          light: "#333333",
          DEFAULT: "#292524",
          dark: "#d1cfe4",
        },
        highlight: {
          light: "#e8dffe",
          DEFAULT: "#a855f7",
          dark: "#7e22ce",
        },
      },
    },
  },
  plugins: [],
};
