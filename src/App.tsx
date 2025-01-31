import { useSpotifyApi } from "./utilities/useSpotifyApi";
import { SearchOptions, TimeOptions } from "./components/Interfaces";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import SignInWithSpotify from "./components/SignInWithSpotify";
import { DarkModeProvider } from "./context/DarkModeContext";
import ErrorComponent from "./components/ErrorComponent";
import SegmentedSlider from "./components/SegmentedSlider";

function App() {
  const { state, dispatch, logOut } = useSpotifyApi();

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
    <DarkModeProvider>
      <div className="flex flex-col h-screen">
        <NavBar
          handleLogOut={logOut}
          token={state.token}
          userProfile={state.userProfile}
        />
        <div className="flex-grow py-10 bg-background dark:bg-neutral-dark">
          {state.error ? (
            <ErrorComponent message={state.error} onRetry={logOut} />
          ) : state.token ? (
            <div className="flex flex-col items-center justify-center w-full space-y-6">
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
          ) : (
            <SignInWithSpotify />
          )}
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
