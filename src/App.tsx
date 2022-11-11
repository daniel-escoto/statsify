import { useEffect, useState } from "react";
import { getToken, getTopTracksAndArtists, loginUrl } from "./utilities/Api";

import {
  SearchOptions,
  TimeOptions,
  TopTracksAndArtists,
} from "./components/Interfaces";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import Toggles from "./components/Toggles";

interface State {
  token: string;
  topTracksAndArtists: TopTracksAndArtists | null;
  isLoading: boolean;
  currentSearchOption: SearchOptions;
  currentTimeOption: TimeOptions;
}

function App() {
  const [state, setState] = useState<State>({
    token: "",
    topTracksAndArtists: null,
    isLoading: true,
    currentSearchOption: SearchOptions.TRACK,
    currentTimeOption: TimeOptions.SHORT_TERM,
  });

  useEffect(() => {
    const token = getToken();

    if (token) {
      setState({ ...state, token });
    }
  }, []);

  useEffect(() => {
    if (state.token) {
      getTopTracksAndArtists(state.token).then((topTracksAndArtists) => {
        setState({ ...state, topTracksAndArtists, isLoading: false });
      });
    }
  }, [state.token]);

  const logOut = () => {
    window.localStorage.removeItem("token");
    setState({ ...state, token: "" });
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar handleLogOut={logOut} token={state.token} />
      <div className="flex-grow pt-10">
        <>
          {state.token ? (
            <div className="flex flex-col items-center justify-center w-full space-y-10">
              <Toggles
                currentSearchOption={state.currentSearchOption}
                currentTimeOption={state.currentTimeOption}
                setSearchOption={(searchOption) =>
                  setState({ ...state, currentSearchOption: searchOption })
                }
                setTimeOption={(timeOption) =>
                  setState({ ...state, currentTimeOption: timeOption })
                }
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
              <h1 className="text-5xl font-bold text-gray-900">Statsify</h1>
              <p className="text-2xl text-gray-700">
                Get all your Spotify stats in one place.
              </p>
              <a
                href={loginUrl}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Sign in with Spotify
              </a>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
