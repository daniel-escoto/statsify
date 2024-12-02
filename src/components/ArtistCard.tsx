import { memo } from "react";
import Card from "./Card";
import { Artist } from "./Interfaces"; // Assuming Artist is defined in Interfaces

function ArtistCard({ artist, rank }: { artist: Artist; rank: number }) {
  return (
    <Card
      type="artist"
      data={{
        image: artist.images[0]?.url || "/placeholder.jpg",
        title: artist.name,
      }}
      rank={rank}
    />
  );
}

export default memo(ArtistCard);
