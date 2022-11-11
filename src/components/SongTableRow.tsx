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
    // padding between rows
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="text-center md:px-2">{rank}</td>
      <td className="flex items-center md:px-2">
        <img
          src={albumImage}
          alt={albumName}
          className="w-10 h-10 mr-2 rounded"
        />
        <div className="truncate">
          <a
            href={songUrl}
            className="text-gray-900 font-medium truncate hover:underline"
          >
            {song.name}
          </a>
          <div className="text-gray-500 truncate ">
            <a
              className="hover:underline"
              href={song.artists[0].external_urls.spotify}
            >
              {song.artists[0].name}
            </a>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell text-left">
        <a href={albumUrl} className="text-gray-500 hover:underline">
          {albumName}
        </a>
      </td>
      <td className="text-right text-gray-400 md:px-2 pr-2">
        {formattedDuration}
      </td>
    </tr>
  );
}
