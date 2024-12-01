import { useSpotifyApi } from "./utilities/useSpotifyApi";
import { SearchOptions, TimeOptions } from "./components/Interfaces";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import SignInWithSpotify from "./components/SignInWithSpotify";
import { DarkModeProvider } from "./context/DarkModeContext";
import FilterBars from "./components/FilterBars";
import ErrorComponent from "./components/ErrorComponent";

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
      case "Past Month":
        timeOptionEnum = TimeOptions.SHORT_TERM;
        break;
      case "Past 6 Months":
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
        <NavBar handleLogOut={logOut} token={state.token} />
        <div className="flex-grow py-10 bg-background dark:bg-neutral-dark">
          {state.error ? (
            <ErrorComponent message={state.error} onRetry={logOut} />
          ) : state.token ? (
            <div className="flex flex-col items-center justify-center w-full space-y-10">
              <FilterBars
                currentSearchOption={
                  state.currentSearchOption === SearchOptions.TRACK
                    ? "Songs"
                    : "Artists"
                }
                currentTimeOption={
                  state.currentTimeOption === TimeOptions.SHORT_TERM
                    ? "Past Month"
                    : state.currentTimeOption === TimeOptions.MEDIUM_TERM
                    ? "Past 6 Months"
                    : "All Time"
                }
                setSearchOption={handleSetSearchOption}
                setTimeOption={handleSetTimeOption}
              />
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
