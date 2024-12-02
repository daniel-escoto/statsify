import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface CardsProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => JSX.Element;
}

export default function Cards<T>({ items, renderCard }: CardsProps<T>) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <AnimatedCard
          key={index}
          renderContent={() => renderCard(item, index)}
        />
      ))}
    </motion.div>
  );
}

function AnimatedCard({ renderContent }: { renderContent: () => JSX.Element }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
    >
      {renderContent()}
    </motion.div>
  );
}
