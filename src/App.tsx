import { useEffect, useState } from "react";

const CLIENT_ID = "a9f3d6f7725b4767ac02c448af1cf31a";
const REDIRECT_URI = "http://127.0.0.1:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function App() {
  const [token, setToken] = useState("");

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

  const logOut = () => {
    window.localStorage.removeItem("token");
    setToken("");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {token ? (
        <>
          <h1 className="text-2xl font-bold">Logged in!</h1>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={logOut}
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Login to Spotify</h1>
          <a
            className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private%20user-read-email`}
          >
            Login
          </a>
        </>
      )}
    </div>
  );
}

export default App;
