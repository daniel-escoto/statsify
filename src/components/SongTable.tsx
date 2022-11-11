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
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Album</th>
            <th className="px-4 py-2">Song</th>
            <th className="px-4 py-2">Artist</th>
            <th className="px-4 py-2">Album</th>
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
