import { memo } from "react";
import { motion } from "framer-motion";

interface CardProps {
  type: "song" | "artist";
  data: {
    image: string;
    title: string;
    subtitle?: { id: string; name: string; url?: string; separator?: string }[];
    extraInfo?: string;
  };
  rank: number;
}

export function Card({ type, data, rank }: CardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        translateY: -5,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      className="flex flex-col relative rounded-lg overflow-hidden shadow-lg group"
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <motion.div className="relative" whileHover={{ scale: 1.1 }}>
        <img
          src={data.image}
          alt={`${data.title} art`}
          className="h-36 w-full object-cover"
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-white text-xl font-bold">#{rank}</p>
        </motion.div>
      </motion.div>

      {/* Info Section */}
      <div className="relative h-24 bg-gray-900 text-white overflow-hidden">
        <motion.img
          src={data.image}
          alt="Backdrop"
          className="absolute inset-0 object-cover opacity-30"
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 backdrop-blur-md backdrop-filter px-3 pt-2">
          <motion.p
            className="text-sm font-bold truncate"
            whileHover={{ translateY: -2 }}
            transition={{ duration: 0.3 }}
          >
            {data.title}
          </motion.p>
          {data.subtitle && (
            <motion.p
              className="text-xs truncate mt-1"
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.3 }}
            >
              {data.subtitle.map((item) => (
                <span key={item.id}>
                  {item.separator}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </span>
              ))}
            </motion.p>
          )}
          <div className="flex justify-between mt-2 text-xs">
            {data.extraInfo && <span>{data.extraInfo}</span>}
            <span className="font-semibold">#{rank}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(Card);
