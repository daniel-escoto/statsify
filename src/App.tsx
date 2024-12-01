import { useSpotifyApi } from "./utilities/useSpotifyApi";
import { SearchOptions, TimeOptions } from "./components/Interfaces";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import Toggles from "./components/Toggles";
import { loginUrl } from "./utilities/Api";

function App() {
  const { state, dispatch, logOut } = useSpotifyApi();

  const handleSetSearchOption = (searchOption: SearchOptions) => {
    dispatch({ type: "SET_SEARCH_OPTION", payload: searchOption });
  };

  const handleSetTimeOption = (timeOption: TimeOptions) => {
    dispatch({ type: "SET_TIME_OPTION", payload: timeOption });
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar handleLogOut={logOut} token={state.token} />
      <div className="flex-grow py-10 bg-background dark:bg-neutral-dark">
        {state.token ? (
          <div className="flex flex-col items-center justify-center w-full space-y-10">
            <Toggles
              currentSearchOption={state.currentSearchOption}
              currentTimeOption={state.currentTimeOption}
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
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-foreground dark:text-neutral-light">
              Statsify
            </h1>
            <p className="text-2xl text-neutral dark:text-neutral-light">
              Get all your Spotify stats in one place.
            </p>
            <a
              href={loginUrl}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mt-4 dark:bg-secondary dark:hover:bg-secondary-dark"
            >
              Sign in with Spotify
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
