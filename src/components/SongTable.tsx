import { Song } from "./Interfaces";
import SongTableRow from "./SongTableRow";
import Spinner from "./Spinner";

export default function SongTable({
  songs,
  title,
  isLoading,
}: {
  songs: Song[];
  title: string;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold">{title}</h1>
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
    </div>
  );
}
