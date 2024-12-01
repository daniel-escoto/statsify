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
          light: "#d8b4fe", // Light lavender (hover, highlights)
          DEFAULT: "#a855f7", // Default purple (buttons, links)
          dark: "#7e22ce", // Dark purple (active, focus)
        },
        secondary: {
          light: "#e9d5ff", // Pale purple (backgrounds, highlights)
          DEFAULT: "#c084fc", // Light purple for secondary accents
          dark: "#9333ea", // Vibrant purple for focus states
        },
        neutral: {
          light: "#faf9fc", // Bright white with a hint of purple-gray
          DEFAULT: "#e4e1f0", // Subtle purple-gray for borders/inactive states
          dark: "#6b7280", // Neutral gray for light mode text
        },
        accent: {
          light: "#d1c7ff", // Light lavender-blue (success, accents)
          DEFAULT: "#8b5cf6", // Muted lavender accent
          dark: "#5b21b6", // Rich purple-blue accent for focus
        },
        error: {
          light: "#ffe4e6", // Soft pink (error highlights)
          DEFAULT: "#f87171", // Bright red for destructive actions
          dark: "#b91c1c", // Dark red for focus states
        },
        background: {
          light: "#fdfcff", // Crisp white with a lavender tint
          DEFAULT: "#faf5ff", // Subtle lavender-gray for light mode
          dark: "#1e1b29", // Unchanged dark mode
        },
        foreground: {
          light: "#292524", // Rich black for light mode text
          DEFAULT: "#e4dfff", // Light gray-lavender for dark mode text
          dark: "#d1cfe4", // Subtle text in dark mode
        },
        highlight: {
          light: "#e0d7ff", // Light purple for hover states
          DEFAULT: "#a855f7", // Matching primary highlight color
          dark: "#7e22ce", // Darker purple for hover states in dark mode
        },
      },
    },
  },
  plugins: [],
};
