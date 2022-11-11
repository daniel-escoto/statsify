import { Song } from "./Interfaces";
import SongTableRow from "./SongTableRow";

export default function SongTable({
  songs,
  title,
}: {
  songs: Song[];
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Song Name</th>
            <th className="px-4 py-2">Artist Name</th>
            <th className="px-4 py-2">Album Name</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <SongTableRow song={song} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
