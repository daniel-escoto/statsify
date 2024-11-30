/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          light: "#93c5fd", // Light blue
          DEFAULT: "#3b82f6", // Default blue
          dark: "#1e40af", // Dark blue
        },
        secondary: {
          light: "#fcd34d", // Light yellow
          DEFAULT: "#f59e0b", // Default yellow
          dark: "#b45309", // Dark yellow
        },
        neutral: {
          light: "#f9fafb", // Light gray
          DEFAULT: "#e5e7eb", // Neutral gray
          dark: "#374151", // Dark gray
        },
        accent: {
          light: "#6ee7b7", // Light green
          DEFAULT: "#10b981", // Default green
          dark: "#047857", // Dark green
        },
        background: "#111827", // Dark background
        foreground: "#f9fafb", // Light foreground
      },
    },
  },
  plugins: [],
};
