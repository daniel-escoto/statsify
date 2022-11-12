// artist table component
import ArtistTableRow from "./ArtistTableRow";
import { Artist } from "./Interfaces";

export default function ArtistTable({ artists }: { artists: Artist[] }) {
  //   show rank, image, name, top 3 genres, popularity
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200 text-left">
          <th className="md:px-2 px-4 py-2 dark:text-gray-300">#</th>
          <th className="md:px-2 px-4 py-2 dark:text-gray-300">Name</th>
          <th className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
            Genres
          </th>
          <th className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
            Popularity
          </th>
        </tr>
      </thead>
      <tbody>
        {artists.map((artist, index) => (
          <ArtistTableRow artist={artist} rank={index + 1} key={artist.id} />
        ))}
      </tbody>
    </table>
  );
}
