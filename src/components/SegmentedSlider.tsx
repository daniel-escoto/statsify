import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const options = ["Past Month", "Past 6 Months", "All Time"];

export default function SegmentedSlider() {
  const [selected, setSelected] = useState("Past 6 Months");
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const INDICATOR_OFFSET = -9;

  useEffect(() => {
    const selectedIndex = options.indexOf(selected);
    const button = buttonRefs.current[selectedIndex];
    if (button) {
      setIndicatorWidth(button.offsetWidth);
      setIndicatorPosition(button.offsetLeft + INDICATOR_OFFSET);
    }
  }, [selected]);

  return (
    <div className="relative flex items-center justify-between bg-neutral-light dark:bg-neutral-dark rounded-lg p-2 max-w-md">
      <motion.div
        className="absolute top-0 bottom-0 bg-primary rounded-lg"
        style={{
          width: indicatorWidth,
        }}
        animate={{
          x: indicatorPosition,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Options */}
      {options.map((option, index) => (
        <button
          key={option}
          ref={(el) => (buttonRefs.current[index] = el!)}
          onClick={() => setSelected(option)}
          className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            selected === option
              ? "text-white"
              : "text-gray-800 dark:text-gray-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
