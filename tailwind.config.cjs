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
          light: "#f3e8ff", // Pale purple (backgrounds, highlights)
          DEFAULT: "#c084fc", // Light purple for secondary accents
          dark: "#9333ea", // Vibrant purple for focus states
        },
        neutral: {
          light: "#f4f4f7", // Light gray with a subtle tint
          DEFAULT: "#9ca3af", // Medium gray for text, borders
          dark: "#4b5563", // Dark gray for strong contrast
        },
        accent: {
          light: "#c3bfff", // Light lavender-blue (success, accents)
          DEFAULT: "#8b5cf6", // Muted lavender accent
          dark: "#5b21b6", // Rich purple-blue accent for focus
        },
        error: {
          light: "#ffe4e6", // Soft pink (error highlights)
          DEFAULT: "#f87171", // Bright red for destructive actions
          dark: "#b91c1c", // Dark red for focus states
        },
        background: {
          light: "#ffffff", // True white for better clarity
          DEFAULT: "#faf5ff", // Subtle lavender-gray for light mode
          dark: "#1e1b29", // Unchanged dark mode
        },
        foreground: {
          light: "#333333", // Dark gray-black for text
          DEFAULT: "#292524", // Rich black for light mode text
          dark: "#d1cfe4", // Subtle text in dark mode
        },
        highlight: {
          light: "#e8dffe", // Light purple for hover states
          DEFAULT: "#a855f7", // Matching primary highlight color
          dark: "#7e22ce", // Darker purple for hover states in dark mode
        },
      },
    },
  },
  plugins: [],
};
