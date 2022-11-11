import { useEffect, useState } from "react";
import { getToken, getTopTracksAndArtists } from "./utilities/Api";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "./utilities/Config";
import { TopTracksAndArtists } from "./components/Interfaces";
import SongTable from "./components/SongTable";

import NavBar from "./components/NavBar";

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
            <div className="flex flex-col items-center justify-center h-full">
              <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
              >
                Login to Spotify
              </a>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
