import { memo } from "react";
import { motion } from "framer-motion";

import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

interface CardProps {
  data: {
    image: string;
    title: string;
    subtitle?: { id: string; name: string; url?: string; separator?: string }[];
    extraInfo?: string;
    link: string;
  };
  rank: number;
}

export function Card({ data, rank }: CardProps) {
  return (
    <motion.a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.05,
        translateY: -5,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      className="flex flex-col relative rounded-lg overflow-hidden shadow-lg group"
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <ImageSection image={data.image} title={data.title} />
      <InfoSection
        image={data.image}
        title={data.title}
        subtitle={data.subtitle}
        extraInfo={data.extraInfo}
        rank={rank}
      />
    </motion.a>
  );
}

export default memo(Card);
