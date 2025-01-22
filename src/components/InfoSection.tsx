import { motion } from "framer-motion";
import TickerText from "./TickerText";
import Rank from "./Rank";

interface InfoSectionProps {
  title: string;
  subtitle?: { id: string; name: string; url?: string; separator?: string }[];
  extraInfo?: string;
  rank: number;
}

export function InfoSection({
  title,
  subtitle,
  extraInfo,
  rank,
}: InfoSectionProps) {
  return (
    <div className="relative h-24 bg-gray-900 text-white overflow-hidden">
      <motion.img
        src={title}
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
