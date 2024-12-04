import { memo } from "react";
import { Song } from "./Interfaces";
import Card from "./Card";

function SongCard({ song, rank }: { song: Song; rank: number }) {
  const formattedDuration = new Date(song.duration_ms)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");

  return (
    <Card
      data={{
        image: song.album.images[0]?.url,
        title: song.name,
        subtitle: song.artists.map((artist, i) => ({
          id: artist.id,
          name: artist.name,
          url: artist.external_urls.spotify,
          separator: i > 0 ? " · " : "",
        })),
        extraInfo: formattedDuration,
      }}
      rank={rank}
    />
  );
}

export default memo(SongCard);
