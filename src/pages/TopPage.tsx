import { useSpotifyApi } from "../utilities/useSpotifyApi";
import { SearchOptions, TimeOptions } from "../components/Interfaces";
import Table from "../components/Table";
import SegmentedSlider from "../components/SegmentedSlider";

export default function TopPage() {
  const { state, dispatch } = useSpotifyApi();

  const handleSetSearchOption = (searchOption: string) => {
    dispatch({
      type: "SET_SEARCH_OPTION",
      payload:
        searchOption === "Songs" ? SearchOptions.TRACK : SearchOptions.ARTIST,
    });
  };

  const handleSetTimeOption = (timeOption: string) => {
    let timeOptionEnum;
    switch (timeOption) {
      case "1 Month":
        timeOptionEnum = TimeOptions.SHORT_TERM;
        break;
      case "6 Months":
        timeOptionEnum = TimeOptions.MEDIUM_TERM;
        break;
      case "All Time":
        timeOptionEnum = TimeOptions.LONG_TERM;
        break;
      default:
        timeOptionEnum = TimeOptions.SHORT_TERM;
    }
    dispatch({ type: "SET_TIME_OPTION", payload: timeOptionEnum });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12">
      <div className="flex flex-col items-center w-full max-w-4xl space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
        <div className="w-[90%] max-w-xs md:w-auto">
          <SegmentedSlider
            options={["Songs", "Artists"]}
            selected={
              state.currentSearchOption === SearchOptions.TRACK
                ? "Songs"
                : "Artists"
            }
            onChange={handleSetSearchOption}
          />
        </div>

        <div className="w-[90%] max-w-xs md:w-auto">
          <SegmentedSlider
            options={["1 Month", "6 Months", "All Time"]}
            selected={
              state.currentTimeOption === TimeOptions.SHORT_TERM
                ? "1 Month"
                : state.currentTimeOption === TimeOptions.MEDIUM_TERM
                ? "6 Months"
                : "All Time"
            }
            onChange={handleSetTimeOption}
          />
        </div>
      </div>

      <Table
        isLoading={state.isLoading}
        searchOptions={state.currentSearchOption}
        timeOptions={state.currentTimeOption}
        topTracksAndArtists={state.topTracksAndArtists}
      />
    </div>
  );
}
