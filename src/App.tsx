import { useEffect, useState } from "react";
import { getToken, getTopTracksAndArtists } from "./components/Api";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "./components/Config";
import { TopTracksAndArtists } from "./components/Interfaces";

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
        {/* welcome to Statsify */}
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-gray-800">Statsify</h1>
          <p className="text-gray-600">
            A Spotify app that shows your top tracks
          </p>
          <div className="flex flex-col items-center justify-center mt-4 space-y-4">
            {!state.token && (
              <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
                className="px-4 py-2 text-white bg-green-500 rounded-md"
              >
                Login to Spotify
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
