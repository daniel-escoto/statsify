import { Artist } from "./Interfaces";
import GenreTag from "./GenreTag";

export default function ArtistTableRow({
  artist,
  rank,
}: {
  artist: Artist;
  rank: number;
}) {
  //   show rank, image, name, top 3 genres, popularity
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <td className="md:px-2 px-4 py-2 dark:text-gray-300">{rank}</td>
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
              className="font-bold text-gray-700 hover:text-red-700 dark:text-gray-300 dark:hover:text-red-300"
            >
              {artist.name}
            </a>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell md:px-2 px-4 py-2">
        {artist.genres.slice(0, 3).map((genre) => (
          <GenreTag genre={genre} key={genre} />
        ))}
      </td>
      <td className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
        {artist.popularity}
      </td>
    </tr>
  );
}
