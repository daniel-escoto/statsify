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
          light: "#d8b4fe", // Light purple (hover, highlights)
          DEFAULT: "#a855f7", // Default purple (buttons, links)
          dark: "#7e22ce", // Dark purple (active, focus)
        },
        secondary: {
          light: "#c084fc", // Light complementary purple (secondary accents)
          DEFAULT: "#9333ea", // Default complementary purple
          dark: "#6b21a8", // Dark complementary purple
        },
        neutral: {
          light: "#f3f0ff", // Very light purple-gray (backgrounds)
          DEFAULT: "#e2e8f0", // Neutral gray (borders, inactive)
          dark: "#475569", // Dark gray with a slight purple tint
        },
        accent: {
          light: "#a5b4fc", // Light blue-lavender (success, accents)
          DEFAULT: "#6366f1", // Default blue-lavender (primary accents)
          dark: "#4c51bf", // Dark blue-lavender (hover, focus)
        },
        error: {
          light: "#fed7e2", // Light pink-red (error highlights)
          DEFAULT: "#f43f5e", // Default pink-red (errors, destructive actions)
          dark: "#9f1239", // Dark pink-red (error focus states)
        },
        background: {
          light: "#f7f3ff", // Light purple-gray (default for light mode)
          DEFAULT: "#1e1b29", // Default dark purple-gray
          dark: "#16141f", // Very dark purple-gray (dark mode)
        },
        foreground: {
          light: "#1e1b29", // Dark text on light backgrounds
          DEFAULT: "#e9e7ef", // Light text on dark backgrounds
          dark: "#d1cfe4", // Subtle text in dark mode
        },
        highlight: {
          light: "#c084fc", // Light purple for hover states
          DEFAULT: "#9333ea", // Bright purple highlight (links, active states)
          dark: "#6b21a8", // Dark purple highlight for dark mode
        },
      },
    },
  },
  plugins: [],
};
