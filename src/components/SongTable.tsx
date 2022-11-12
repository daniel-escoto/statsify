import { Song } from "./Interfaces";
import SongTableRow from "./SongTableRow";

export default function SongTable({ songs }: { songs: Song[] }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200 text-left dark:border-gray-700">
          <th className="md:px-2 px-4 py-2 dark:text-gray-300">#</th>
          <th className="md:px-2 px-4 py-2 dark:text-gray-300">Title</th>
          <th className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
            Album
          </th>
          <th className="hidden md:table-cell md:px-2 px-4 py-2 dark:text-gray-300">
            Duration
          </th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <SongTableRow song={song} rank={index + 1} key={song.id} />
        ))}
      </tbody>
    </table>
  );
}
