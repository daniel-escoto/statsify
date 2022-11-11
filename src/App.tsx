import { useEffect, useState } from "react";
import { getToken, getTopTracksAndArtists, loginUrl } from "./utilities/Api";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "./utilities/Config";
import { TopTracksAndArtists } from "./components/Interfaces";
import SongTable from "./components/SongTable";

import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";

interface State {
  token: string;
  topTracksAndArtists: TopTracksAndArtists | null;
  isLoading: boolean;
}

function App() {
  const [state, setState] = useState<State>({
    token: "",
    topTracksAndArtists: null,
    isLoading: true,
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
    // layout that includes the navbar, using tailwind
    <div className="flex flex-col h-screen">
      <NavBar handleLogOut={logOut} token={state.token} />
      <div className="flex-grow">
        <>
          {state.token ? (
            <SongTable
              title="Top Tracks (Short Term)"
              songs={state.topTracksAndArtists?.topTracks.shortTermItems || []}
              isLoading={state.isLoading}
            />
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
