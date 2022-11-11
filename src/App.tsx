import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

const CLIENT_ID = "a9f3d6f7725b4767ac02c448af1cf31a";
const REDIRECT_URI = "http://127.0.0.1:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const RESPONSE_TYPE = "token";

function App() {
  const [token, setToken] = useState("");
  const [shortTermTracks, setShortTermTracks] = useState([]);
  const [mediumTermTracks, setMediumTermTracks] = useState([]);
  const [longTermTracks, setLongTermTracks] = useState([]);

  const getTopTracks = async () => {
    if (token.length === 0) return;

    const shortTermResponse = await fetch(
      `${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const shortTermData = await shortTermResponse.json();
    setShortTermTracks(shortTermData.items);

    const mediumTermResponse = await fetch(
      `${TOP_TRACKS_ENDPOINT}?time_range=medium_term&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const mediumTermData = await mediumTermResponse.json();
    setMediumTermTracks(mediumTermData.items);

    const longTermResponse = await fetch(
      `${TOP_TRACKS_ENDPOINT}?time_range=long_term&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const longTermData = await longTermResponse.json();
    setLongTermTracks(longTermData.items);
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token") || "";

    if (!token && hash) {
      token =
        hash
          .substring(1)
          .split("&")
          .find((item) => item.startsWith("access_token"))
          ?.split("=")[1] ?? "";

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  useEffect(() => {
    getTopTracks();
  }, [token]);

  const logOut = () => {
    window.localStorage.removeItem("token");
    setToken("");
    window.location.reload();
  };

  return (
    // layout that includes the navbar, using tailwind
    <div className="flex flex-col h-screen">
      <NavBar handleLogOut={logOut} token={token} />
      <div className="flex-grow">
        {/* welcome to Statsify */}
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-gray-800">Statsify</h1>
          <p className="text-gray-600">
            A Spotify app that shows your top tracks
          </p>
          <div className="flex flex-col items-center justify-center mt-4 space-y-4">
            {/* if the user is not logged in, show the login button */}
            {!token && (
              <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
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
