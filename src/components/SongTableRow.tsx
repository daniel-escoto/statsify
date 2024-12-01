import { Song } from "./Interfaces";

export default function SongTableRow({
  song,
  rank,
}: {
  song: Song;
  rank: number;
}) {
  const albumName = song.album.name;
  const albumImage = song.album.images[0].url;
  const songUrl = song.external_urls.spotify;
  const albumUrl = song.album.external_urls.spotify;

  const formattedDuration = new Date(song.duration_ms)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");

  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <td className="md:px-2 px-4 py-2 dark:text-gray-300">{rank}</td>
      <td className="md:px-2 px-4 py-2">
        <div className="flex flex-row items-center justify-start space-x-4">
          <img
            src={albumImage}
            alt="Album Cover"
            className="w-12 h-12 rounded"
          />
          <div className="flex flex-col items-start justify-center">
            <a
              href={songUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-gray-700 hover:text-red-700 dark:text-gray-300 dark:hover:text-red-300"
            >
              {song.name}
            </a>
            <a
              href={song.artists[0].external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
            >
              {song.artists[0].name}
            </a>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
        <a
          href={albumUrl}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
        >
          {albumName}
        </a>
      </td>
      <td className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
        {formattedDuration}
      </td>
    </tr>
  );
}
