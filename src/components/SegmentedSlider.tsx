import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SegmentedSliderProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  indicatorOffset?: number;
}

export default function SegmentedSlider({
  options,
  selected,
  onChange,
  indicatorOffset = 0,
}: SegmentedSliderProps) {
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    const selectedIndex = options.indexOf(selected);
    const button = buttonRefs.current[selectedIndex];
    if (button) {
      setIndicatorWidth(button.offsetWidth);
      setIndicatorPosition(button.offsetLeft + indicatorOffset);
    }
  }, [selected, options, indicatorOffset]);

  return (
    <div className="relative flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg py-2 max-w-md border border-gray-300 dark:border-gray-700 flex-wrap gap-2 md:flex-nowrap">
      {/* Sliding indicator */}
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

      {/* Option buttons */}
      {options.map((option, index) => (
        <button
          key={option}
          ref={(el) => (buttonRefs.current[index] = el!)}
          onClick={() => onChange(option)}
          className={`relative z-10 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
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
