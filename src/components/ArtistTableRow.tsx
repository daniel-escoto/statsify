import { Artist } from "./Interfaces";

export default function ArtistTableRow({
  artist,
  rank,
}: {
  artist: Artist;
  rank: number;
}) {
  const topGenres = artist.genres.slice(0, 3).join(", ");

  //   show rank, image, name, top 3 genres, popularity
  return (
    <tr className="border-b border-gray-200">
      <td className="md:px-2 px-4 py-2">{rank}</td>
      <td className="md:px-2 px-4 py-2">
        <div className="flex flex-row items-center justify-start space-x-4">
          <img
            src={artist.images[0].url}
            alt="Artist Image"
            className="w-12 h-12 rounded"
          />
          <div className="flex flex-col items-start justify-center">
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-gray-700 hover:text-red-700"
            >
              {artist.name}
            </a>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell md:px-2 px-4 py-2">{topGenres}</td>
      <td className="hidden md:table-cell md:px-2 px-4 py-2">
        {artist.popularity}
      </td>
    </tr>
  );
}
