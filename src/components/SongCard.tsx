import { memo } from "react";
import { motion } from "framer-motion";
import { Song } from "./Interfaces";

function SongCard({ song, rank }: { song: Song; rank: number }) {
  const formattedDuration = new Date(song.duration_ms)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");

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
          src={song.album.images[0]?.url}
          alt={`${song.name} album art`}
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
          src={song.album.images[0]?.url}
          alt="Album Backdrop"
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
            {song.name}
          </motion.p>
          <motion.p
            className="text-xs truncate mt-1"
            whileHover={{ translateY: -2 }}
            transition={{ duration: 0.3 }}
          >
            {song.artists.map((artist, i) => (
              <span key={artist.id}>
                {i > 0 && " · "}
                <a
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {artist.name}
                </a>
              </span>
            ))}
          </motion.p>
          <div className="flex justify-between mt-2 text-xs">
            <span>{formattedDuration}</span>
            <span className="font-semibold">#{rank}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(SongCard);
