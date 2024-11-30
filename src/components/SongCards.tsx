import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Song } from "./Interfaces";
import SongCard from "./SongCard";
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

export default function SongCards({ songs }: { songs: Song[] }) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {songs.map((song, index) => (
        <AnimatedSongCard key={song.id} song={song} rank={index + 1} />
      ))}
    </motion.div>
  );
}

function AnimatedSongCard({ song, rank }: { song: Song; rank: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger animation when 10% of the card is in view
    triggerOnce: true, // Animate only once
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
      <SongCard song={song} rank={rank} />
    </motion.div>
  );
}
