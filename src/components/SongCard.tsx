import React from "react";
import { Song } from "./Interfaces";

function SongCard({ song, rank }: { song: Song; rank: number }) {
  const formattedDuration = new Date(song.duration_ms)
    .toISOString()
    .substr(14, 5)
    .replace(/^0+/, "");

  return (
    <div className="flex flex-col relative transition ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
      {/* Album Art */}
      <img
        src={song.album.images[0]?.url}
        alt={`${song.name} album art`}
        className="h-36 w-full object-cover"
      />

      {/* Info Section */}
      <div className="relative h-24 bg-gray-900 text-white overflow-hidden">
        {/* Backdrop */}
        <img
          src={song.album.images[0]?.url}
          alt="Album Backdrop"
          className="absolute inset-0 object-cover opacity-30"
        />
        <div className="absolute inset-0 backdrop-blur-md backdrop-filter px-3 pt-2">
          <p className="text-sm font-bold truncate">{song.name}</p>
          <p className="text-xs truncate mt-1">
            {song.artists.map((artist, i) => (
              <span key={artist.id}>
                {i > 0 && " · "}
                <a
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {artist.name}
                </a>
              </span>
            ))}
          </p>
          <div className="flex justify-between mt-2 text-xs">
            <span>{formattedDuration}</span>
            <span className="font-semibold">#{rank}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
