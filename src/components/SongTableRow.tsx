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
  const songHref = song.href;
  const albumHref = song.album.href;

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-center">{rank}</td>
      <td className="py-3 px-6 text-center">
        <img src={albumImage} alt="Album" className="w-10 h-10 rounded" />
      </td>
      <td className="py-3 px-6 text-center">
        <a href={songHref} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td className="py-3 px-6 text-center">
        {song.artists.map((artist) => (
          <a href={artist.href} target="_blank" rel="noreferrer">
            {artist.name}
          </a>
        ))}
      </td>
      <td className="py-3 px-6 text-center">
        <a href={albumHref} target="_blank" rel="noreferrer">
          {albumName}
        </a>
      </td>
    </tr>
  );
}
