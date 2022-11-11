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

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-center">{rank}</td>
      <td className="py-3 px-6 text-center">
        <img src={albumImage} alt="Album" className="w-10 h-10 rounded" />
      </td>
      <td className="py-3 px-6 max-w-xs truncate hover:underline">
        <a href={songUrl} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td className="py-3 px-6 max-w-xs truncate">
        {song.artists.map((artist, index) => (
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <span className="hover:underline">{artist.name}</span>
            {index !== song.artists.length - 1 ? ", " : ""}
          </a>
        ))}
      </td>
      <td className="py-3 px-6 max-w-xs truncate hover:underline">
        <a href={albumUrl} target="_blank" rel="noreferrer">
          {albumName}
        </a>
      </td>
    </tr>
  );
}
