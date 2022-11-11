export default function NavBar({
  token,
  handleLogOut,
}: {
  token: string;
  handleLogOut: () => void;
}) {
  const CLIENT_ID = "a9f3d6f7725b4767ac02c448af1cf31a";
  const REDIRECT_URI = "http://127.0.0.1:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
  const RESPONSE_TYPE = "token";

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Statsify</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          {token ? (
            <button
              onClick={handleLogOut}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
            >
              Log out
            </button>
          ) : (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
            >
              Login to Spotify
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
