import {
  Album,
  Artist,
  Song,
  TopArtists,
  TopTracks,
  TopTracksAndArtists,
  UserProfile,
  CurrentlyPlaying,
} from "../components/Interfaces";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  TOP_TRACKS_ENDPOINT,
  TOP_ARTISTS_ENDPOINT,
  RESPONSE_TYPE,
  USER_PROFILE_ENDPOINT,
  CURRENTLY_PLAYING_ENDPOINT,
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

export const getToken = () => {
  const hash = window.location.hash;
  let token = window.localStorage.getItem("token");

  if (!token && hash) {
    const extractedToken =
      hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1] ?? null;

    window.location.hash = "";
    if (extractedToken) {
      window.localStorage.setItem("token", extractedToken);
      token = extractedToken;
    }
  }

  return token;
};

export async function getUserProfile(token: string): Promise<UserProfile> {
  const response = await fetch(USER_PROFILE_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Error fetching user profile: ${response.statusText}`);
  }

  return await response.json();
}

export async function getCurrentlyPlaying(
  token: string
): Promise<CurrentlyPlaying | null> {
  const response = await fetch(CURRENTLY_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Error fetching currently playing: ${response.statusText}`);
  }

  return await response.json();
}

const SCOPES = [
  "user-top-read",
  "user-read-private",
  "user-read-email",
  "user-read-recently-played",
  "user-read-playback-state",
].join(" ");

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(
  SCOPES
)}`;

export async function makeSpotifyRequest(endpoint: string, token: string) {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}
