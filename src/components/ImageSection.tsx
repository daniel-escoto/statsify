import { motion } from "framer-motion";

interface ImageSectionProps {
  image: string;
  title: string;
}

export function ImageSection({ image, title }: ImageSectionProps) {
  return (
    <motion.div className="relative" whileHover={{ scale: 1.1 }}>
      <img
        src={image}
        alt={`${title} art`}
        className="h-36 w-full object-cover"
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0 bg-opacity-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      ></motion.div>
    </motion.div>
  );
}

export default ImageSection;
