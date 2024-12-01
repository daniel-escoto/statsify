import { motion } from "framer-motion";

interface ButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ isActive, onClick, children }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        isActive
          ? "bg-primary text-white"
          : "bg-neutral text-gray-800 hover:text-gray-900"
      } font-bold py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
