import { useSpotifyApi } from "./utilities/useSpotifyApi";
import { SearchOptions, TimeOptions } from "./components/Interfaces";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import Toggles from "./components/Toggles";
import { loginUrl } from "./utilities/Api";
import SignInWithSpotify from "./components/SignInWithSpotify";

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
          <SignInWithSpotify />
        )}
      </div>
    </div>
  );
}

export default App;
