import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SegmentedSliderProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function SegmentedSlider({
  options,
  selected,
  onChange,
}: SegmentedSliderProps) {
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    const selectedIndex = options.indexOf(selected);
    const sectionWidth = sliderRef.current
      ? sliderRef.current.offsetWidth / options.length
      : 0;
    setIndicatorPosition(selectedIndex * sectionWidth);
  }, [selected, options]);

  return (
    <div
      ref={sliderRef}
      className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg py-2 max-w-md border border-gray-300 dark:border-gray-700"
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute top-0 bottom-0 bg-primary rounded-lg"
        style={{
          width: `${100 / options.length}%`,
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
          className={`flex-1 text-center relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
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
