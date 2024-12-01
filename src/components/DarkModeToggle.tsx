import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {darkMode ? (
        <span className="text-yellow-300">🌙</span>
      ) : (
        <span className="text-blue-500">☀️</span>
      )}
    </button>
  );
}
