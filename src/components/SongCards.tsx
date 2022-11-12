// return a grid of song cards
// make sure its mobile responsive

import { Song } from "./Interfaces";
import SongCard from "./SongCard";

export default function SongCards({ songs }: { songs: Song[] }) {
  // give padding for mobile screens
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
      {songs.map((song, index) => (
        <SongCard song={song} rank={index + 1} key={song.id} />
      ))}
    </div>
  );
}
