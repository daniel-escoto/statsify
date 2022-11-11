import { Song } from "./Interfaces";
import SongTableRow from "./SongTableRow";

export default function SongTable({ songs }: { songs: Song[] }) {
  return (
    <table className="table-auto">
      <thead className="hidden md:table-header-group">
        <tr className="text-left text-gray-400">
          <th className="text-center md:px-2">#</th>
          <th className="md:px-2">Title</th>
          <th className="md:px-2">Album</th>
          <th className="md:px-2">Duration</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <SongTableRow song={song} rank={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
