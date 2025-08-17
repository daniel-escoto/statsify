import { motion } from "framer-motion";
import TickerText from "./TickerText";
import Rank from "./Rank";

interface InfoSectionProps {
  image: string;
  title: string;
  subtitle?: { id: string; name: string; url?: string; separator?: string }[];
  extraInfo?: string;
  rank: number;
}

export function InfoSection({
  image,
  title,
  subtitle,
  extraInfo,
  rank,
}: InfoSectionProps) {
  return (
    <div className="relative h-24 bg-gray-900 text-white overflow-hidden">
      {/* Layer 1: Background Image */}
      <motion.img
        src={image}
        alt="Backdrop"
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Layer 2: Heavy Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>

      {/* Layer 3: Text Content */}
      <div className="relative z-10 px-3 pt-2 h-full flex flex-col justify-between">
        <motion.p
          className="text-sm font-bold truncate"
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.p>
        <motion.div
          className="text-xs mt-1 min-h-[20px]"
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.3 }}
        >
          {subtitle && subtitle.length > 0 ? (
            <TickerText
              text={
                <>
                  {subtitle.map((item) => (
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
                </>
              }
            />
          ) : (
            <span className="opacity-0">No subtitle</span>
          )}
        </motion.div>
        <div className="flex justify-between mt-2 text-xs">
          {extraInfo && <span>{extraInfo}</span>}
          <Rank rank={rank} />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
