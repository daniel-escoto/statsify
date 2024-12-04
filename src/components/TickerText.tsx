import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TickerTextProps {
  text: JSX.Element;
}

export default function TickerText({ text }: TickerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Check if the text is overflowing its container
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing(container.scrollWidth > container.clientWidth);
    }
  }, [text]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      {isOverflowing ? (
        <motion.div
          className="inline-block"
          animate={{ x: ["0%", "-100%"] }}
          initial={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 20, // Adjust duration for speed
            ease: "linear",
          }}
        >
          {text}
        </motion.div>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
