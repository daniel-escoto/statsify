import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TickerTextProps {
  text: JSX.Element;
}

export default function TickerText({ text }: TickerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

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
          className="inline-flex"
          animate={{ x: ["0%", "-25%"] }}
          initial={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 25, // Adjust duration for speed
            ease: "linear",
          }}
        >
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
        </motion.div>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
