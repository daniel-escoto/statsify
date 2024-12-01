import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-primary-dark"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {darkMode ? (
        <motion.div
          key="moon"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <MoonIcon className="h-6 w-6 text-white" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -45 }}
          transition={{ duration: 0.3 }}
        >
          <SunIcon className="h-6 w-6 text-white" />
        </motion.div>
      )}
    </motion.button>
  );
}
