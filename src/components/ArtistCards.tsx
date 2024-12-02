import { memo } from "react";
import Cards from "./Cards";
import ArtistCard from "./ArtistCard";
import { Artist } from "./Interfaces";

function ArtistCards({ artists }: { artists: Artist[] }) {
  return (
    <Cards
      items={artists}
      renderCard={(artist, index) => (
        <ArtistCard key={artist.id} artist={artist} rank={index + 1} />
      )}
    />
  );
}

export default memo(ArtistCards);
