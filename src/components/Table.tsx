import ArtistTable from "./ArtistTable";
import {
  TopTracksAndArtists,
  SearchOptions,
  TimeOptions,
  filterTopTracksAndArtists,
  Song,
  Artist,
} from "./Interfaces";
import SongCards from "./SongCards";
import SongTable from "./SongTable";
import Spinner from "./Spinner";

interface Props {
  isLoading: boolean;
  topTracksAndArtists: TopTracksAndArtists | null;
  searchOptions: SearchOptions;
  timeOptions: TimeOptions;
}

export default function Table(props: Props) {
  const { isLoading, topTracksAndArtists, searchOptions, timeOptions } = props;
  const filteredResults = topTracksAndArtists
    ? filterTopTracksAndArtists(topTracksAndArtists, timeOptions, searchOptions)
    : null;

  const filteredResultsAreSongs =
    filteredResults &&
    filteredResults.length > 0 &&
    filteredResults[0].type === "track";

  if (isLoading || !filteredResults) {
    return <Spinner />;
  }

  return (
    <div className="w-full max-w-4xl">
      {filteredResultsAreSongs ? (
        // <SongTable songs={filteredResults as Song[]} />
        <SongCards songs={filteredResults as Song[]} />
      ) : (
        <ArtistTable artists={filteredResults as Artist[]} />
      )}
    </div>
  );
}