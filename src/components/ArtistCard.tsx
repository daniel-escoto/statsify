import { memo } from "react";
import Card from "./Card";
import { Artist } from "./Interfaces";

function ArtistCard({ artist, rank }: { artist: Artist; rank: number }) {
  return (
    <Card
      type="artist"
      data={{
        image: artist.images[0]?.url || "/placeholder.jpg",
        title: artist.name,
        subtitle: artist.genres.map((genre, i) => ({
          id: `${artist.id}-genre-${i}`,
          name: genre,
          separator: i > 0 ? " · " : "",
        })),
        extraInfo: `${artist.followers.total.toLocaleString()} Followers`,
      }}
      rank={rank}
    />
  );
}

export default memo(ArtistCard);
