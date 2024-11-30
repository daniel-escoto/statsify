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
          light: "#60a5fa", // Light blue (hover, highlights)
          DEFAULT: "#2563eb", // Default blue (buttons, links)
          dark: "#1e3a8a", // Dark blue (active, focus)
        },
        secondary: {
          light: "#c4b5fd", // Light purple (hover, highlights)
          DEFAULT: "#8b5cf6", // Default purple (buttons, links)
          dark: "#5b21b6", // Dark purple (active, focus)
        },
        neutral: {
          light: "#f3f4f6", // Light gray (backgrounds)
          DEFAULT: "#d1d5db", // Neutral gray (borders, inactive)
          dark: "#4b5563", // Dark gray (text, icons in dark mode)
        },
        accent: {
          light: "#34d399", // Light teal (success, accents)
          DEFAULT: "#10b981", // Default teal (primary accent color)
          dark: "#059669", // Dark teal (hover, focus)
        },
        error: {
          light: "#fca5a5", // Light red (error highlights)
          DEFAULT: "#ef4444", // Default red (errors, destructive actions)
          dark: "#991b1b", // Dark red (error focus states)
        },
        background: {
          light: "#f9fafb", // Light background (default for light mode)
          DEFAULT: "#1f2937", // Default dark background
          dark: "#111827", // Very dark background (dark mode)
        },
        foreground: {
          light: "#1f2937", // Dark text on light backgrounds
          DEFAULT: "#f3f4f6", // Light text on dark backgrounds
          dark: "#e5e7eb", // Subtle text in dark mode
        },
        highlight: {
          light: "#93c5fd", // Light blue for hover states
          DEFAULT: "#3b82f6", // Bright highlight (links, active states)
          dark: "#1e40af", // Dark highlight for dark mode
        },
      },
    },
  },
  plugins: [],
};
