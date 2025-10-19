import { useSpotifyApi } from '../utilities/useSpotifyApi';
import { SearchOptions, TimeOptions } from '../components/Interfaces';
import Table from '../components/Table';
import SegmentedSlider from '../components/SegmentedSlider';
import { MusicalNoteIcon, UserIcon } from '@heroicons/react/24/outline';

export default function TopPage() {
  const { state, dispatch } = useSpotifyApi();

  const handleSetSearchOption = (index: number) => {
    dispatch({
      type: 'SET_SEARCH_OPTION',
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
    dispatch({ type: 'SET_TIME_OPTION', payload: timeOptionEnum });
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Table
          isLoading={state.isLoading}
          searchOptions={state.currentSearchOption}
          timeOptions={state.currentTimeOption}
          topTracksAndArtists={state.topTracksAndArtists}
        />
      </div>

      {/* Sticky Bottom Tabs */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-4 pb-4 pt-6">
          <SegmentedSlider
            icons={[
              <MusicalNoteIcon key="song" className="h-6 w-6" />,
              <UserIcon key="artist" className="h-6 w-6" />,
            ]}
            labels={['Songs', 'Artists']}
            selectedIndex={
              state.currentSearchOption === SearchOptions.TRACK ? 0 : 1
            }
            onChange={handleSetSearchOption}
          />

          <SegmentedSlider
            icons={[
              <span key="1m" className="text-sm font-semibold">
                1M
              </span>,
              <span key="6m" className="text-sm font-semibold">
                6M
              </span>,
              <span key="1y" className="text-sm font-semibold">
                1Y
              </span>,
            ]}
            labels={['1 Month', '6 Months', '1 Year']}
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
