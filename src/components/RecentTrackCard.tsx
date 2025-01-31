import { memo } from "react";
import { motion } from "framer-motion";
import { RecentlyPlayedTrack } from "./Interfaces";
import { formatDistanceToNow } from "date-fns";

interface RecentTrackCardProps {
  track: RecentlyPlayedTrack;
}

function RecentTrackCard({ track }: RecentTrackCardProps) {
  const formattedDuration = new Date(track.track.duration_ms)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");

  const timeAgo = formatDistanceToNow(new Date(track.played_at), {
    addSuffix: true,
  });

  return (
    <motion.a
      href={track.track.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{
        scale: 1.02,
        translateY: -2,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="flex items-start sm:items-center p-3 sm:p-4">
        {/* Album Art */}
        <div className="flex-shrink-0">
          <motion.img
            src={track.track.album.images[0]?.url}
            alt={track.track.album.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Track Info */}
        <div className="ml-3 sm:ml-4 flex-grow min-w-0">
          <h3 className="text-primary dark:text-white font-semibold text-sm sm:text-base truncate">
            {track.track.name}
          </h3>
          <p className="text-neutral-600 dark:text-gray-400 text-xs sm:text-sm truncate mt-0.5">
            {track.track.artists.map((artist, i) => (
              <span key={artist.id}>
                {i > 0 && " · "}
                <a
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-white hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {artist.name}
                </a>
              </span>
            ))}
          </p>
          <p className="text-neutral-500 dark:text-gray-500 text-xs mt-0.5 hidden sm:block">
            {track.track.album.name}
          </p>
        </div>

        {/* Time Info */}
        <div className="ml-2 sm:ml-4 flex-shrink-0 text-right">
          <p
            className="text-neutral-600 dark:text-gray-400 text-xs sm:text-sm whitespace-nowrap"
            title={new Date(track.played_at).toLocaleString()}
          >
            {timeAgo}
          </p>
          <p className="text-neutral-500 dark:text-gray-500 text-xs mt-0.5 hidden sm:block">
            {formattedDuration}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default memo(RecentTrackCard);
