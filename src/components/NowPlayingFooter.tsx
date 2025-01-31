import { useSpotifyApi } from "../utilities/useSpotifyApi";

const NowPlayingFooter = () => {
  const { state } = useSpotifyApi();
  const { currentlyPlaying } = state;

  if (!currentlyPlaying?.is_playing || !currentlyPlaying.item) {
    return null;
  }

  const { item: track } = currentlyPlaying;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={track.album.images[0]?.url}
              alt={track.album.name}
              className="w-12 h-12 rounded-md hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Now Playing:
            </p>
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-medium text-gray-900 dark:text-white hover:underline">
                {track.name}
              </h3>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {track.artists.map((artist, index) => (
                <>
                  {index > 0 && ", "}
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {artist.name}
                  </a>
                </>
              ))}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{
                width: `${
                  (currentlyPlaying.progress_ms / track.duration_ms) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingFooter;
