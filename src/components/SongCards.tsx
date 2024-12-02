import { Song } from "./Interfaces";
import SongCard from "./SongCard";
import Cards from "./Cards";

export default function SongCards({ songs }: { songs: Song[] }) {
  return (
    <Cards
      items={songs}
      renderCard={(song, index) => (
        <SongCard key={song.id} song={song} rank={index + 1} />
      )}
    />
  );
}
