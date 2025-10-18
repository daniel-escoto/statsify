import { useSpotifyApi } from "../utilities/useSpotifyApi";
import { SearchOptions, TimeOptions } from "../components/Interfaces";
import Table from "../components/Table";
import SegmentedSlider from "../components/SegmentedSlider";
import { MusicalNoteIcon, UserIcon } from "@heroicons/react/24/outline";

export default function TopPage() {
  const { state, dispatch } = useSpotifyApi();

  const handleSetSearchOption = (index: number) => {
    dispatch({
      type: "SET_SEARCH_OPTION",
      payload: index === 0 ? SearchOptions.TRACK : SearchOptions.ARTIST,
    });
  };

  const handleSetTimeOption = (index: number) => {
    let timeOptionEnum;
    switch (index) {
      case 0:
        timeOptionEnum = TimeOptions.SHORT_TERM;
        break;
      case 1:
        timeOptionEnum = TimeOptions.MEDIUM_TERM;
        break;
      case 2:
        timeOptionEnum = TimeOptions.LONG_TERM;
        break;
      default:
        timeOptionEnum = TimeOptions.SHORT_TERM;
    }
    dispatch({ type: "SET_TIME_OPTION", payload: timeOptionEnum });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <Table
          isLoading={state.isLoading}
          searchOptions={state.currentSearchOption}
          timeOptions={state.currentTimeOption}
          topTracksAndArtists={state.topTracksAndArtists}
        />
      </div>

      {/* Sticky Bottom Tabs */}
      <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-purple-950/20 border-t border-white/10">
        <div className="flex flex-row justify-between items-center w-full py-6 px-4 max-w-7xl mx-auto">
          <SegmentedSlider
            icons={[
              <MusicalNoteIcon className="w-6 h-6" />,
              <UserIcon className="w-6 h-6" />,
            ]}
            labels={["Songs", "Artists"]}
            selectedIndex={
              state.currentSearchOption === SearchOptions.TRACK ? 0 : 1
            }
            onChange={handleSetSearchOption}
          />

          <SegmentedSlider
            icons={[
              <span className="text-sm font-semibold">1M</span>,
              <span className="text-sm font-semibold">6M</span>,
              <span className="text-sm font-semibold">ALL</span>,
            ]}
            labels={["1 Month", "6 Months", "All Time"]}
            selectedIndex={
              state.currentTimeOption === TimeOptions.SHORT_TERM
                ? 0
                : state.currentTimeOption === TimeOptions.MEDIUM_TERM
                ? 1
                : 2
            }
            onChange={handleSetTimeOption}
          />
        </div>
      </div>
    </>
  );
}
