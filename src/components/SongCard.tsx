// given a song, return a card with image, title, artist, album, and duration

import { Song } from "./Interfaces";

export default function SongCard({ song, rank }: { song: Song; rank: number }) {
  const albumName = song.album.name;
  const albumImage = song.album.images[0].url;
  const songUrl = song.external_urls.spotify;
  const albumUrl = song.album.external_urls.spotify;

  const formattedDuration = new Date(song.duration_ms)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");

  // include rank, image, title, artist, album, duration
  return (
    <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-md">
      {/* centered image */}
      <div className="flex flex-row items-center justify-center">
        <img
          src={albumImage}
          alt="Album Cover"
          className="w-full h-auto rounded-t"
        />
      </div>
      <div className="p-4">
        {/* title */}
        {/* <a
          href={songUrl}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-gray-700 hover:text-red-700 dark:text-gray-300 dark:hover:text-red-300 truncate"
        >
          {song.name}
        </a> */}
        {/* prevent text overflow */}
        <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          <a
            href={songUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-gray-700 hover:text-red-700 dark:text-gray-300 dark:hover:text-red-300 truncate"
          >
            {song.name}
          </a>
        </div>
        {/* artist · album */}
        <p className="text-gray-500 dark:text-gray-400 truncate">
          <span>
            <a
              href={song.artists[0].external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
            >
              {song.artists[0].name}
            </a>
          </span>
          <span className="mx-1">·</span>
          <span>
            <a
              href={albumUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
            >
              {albumName}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
