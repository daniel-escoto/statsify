import {
  Album,
  Artist,
  Song,
  TopArtists,
  TopTracks,
  TopTracksAndArtists,
} from "../components/Interfaces";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  TOP_TRACKS_ENDPOINT,
  TOP_ARTISTS_ENDPOINT,
  RESPONSE_TYPE,
} from "./Config";

interface SpotifyApiResponse<T> {
  items: T[];
}

async function fetchTopItems<T>(
  endpoint: string,
  token: string
): Promise<{
  shortTermItems: T[];
  mediumTermItems: T[];
  longTermItems: T[];
}> {
  const timeRanges = ["short_term", "medium_term", "long_term"];
  const results = await Promise.all(
    timeRanges.map((timeRange) =>
      fetch(`${endpoint}?time_range=${timeRange}&limit=50`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data: SpotifyApiResponse<T> = await response.json();
        return data.items;
      })
    )
  );

  return {
    shortTermItems: results[0],
    mediumTermItems: results[1],
    longTermItems: results[2],
  };
}

export async function getTopTracks(token: string): Promise<TopTracks> {
  return await fetchTopItems<Song>(TOP_TRACKS_ENDPOINT, token);
}

export async function getTopArtists(token: string): Promise<TopArtists> {
  return await fetchTopItems<Artist>(TOP_ARTISTS_ENDPOINT, token);
}

export async function getTopTracksAndArtists(
  token: string
): Promise<TopTracksAndArtists> {
  const [topTracks, topArtists] = await Promise.all([
    getTopTracks(token),
    getTopArtists(token),
  ]);
  return { topTracks, topArtists };
}

export function getToken(): string {
  const hash = window.location.hash;
  let token = window.localStorage.getItem("token") || "";

  // Extract token from URL hash if present
  if (!token && hash) {
    const extractedToken =
      hash
        .substring(1)
        .split("&")
        .find((item) => item.startsWith("access_token"))
        ?.split("=")[1] ?? "";

    if (extractedToken) {
      token = extractedToken;
      window.localStorage.setItem("token", token);
    }

    // Clear the hash from the URL
    window.location.hash = "";
  }

  return token;
}

const SCOPES = ["user-top-read"].join(" ");

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(
  SCOPES
)}`;
