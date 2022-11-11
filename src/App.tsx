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
}

function App() {
  const [state, setState] = useState<State>({
    token: "",
    topTracksAndArtists: null,
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
        setState({ ...state, topTracksAndArtists });
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
            />
          ) : (
            // hero call to action using tailwind
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-5xl font-bold text-gray-900">
                Spotify Top Tracks
              </h1>
              <a
                href={loginUrl}
                className="bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium mt-4 hover:bg-red-600"
              >
                Login
              </a>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
