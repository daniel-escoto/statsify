import {
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

export async function getTopTracks(token: string): Promise<TopTracks> {
  const shortTermTracks = await fetch(
    `${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
  const mediumTermTracks = await fetch(
    `${TOP_TRACKS_ENDPOINT}?time_range=medium_term&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
  const longTermTracks = await fetch(
    `${TOP_TRACKS_ENDPOINT}?time_range=long_term&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
  return {
    shortTermItems: shortTermTracks.items,
    mediumTermItems: mediumTermTracks.items,
    longTermItems: longTermTracks.items,
  };
}

export async function getTopArtists(token: string): Promise<TopArtists> {
  const shortTermArtists = await fetch(
    `${TOP_ARTISTS_ENDPOINT}?time_range=short_term&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
  const mediumTermArtists = await fetch(
    `${TOP_ARTISTS_ENDPOINT}?time_range=medium_term&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
  const longTermArtists = await fetch(
    `${TOP_ARTISTS_ENDPOINT}?time_range=long_term&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
  return {
    shortTermItems: shortTermArtists.items,
    mediumTermItems: mediumTermArtists.items,
    longTermItems: longTermArtists.items,
  };
}

export async function getTopTracksAndArtists(
  token: string
): Promise<TopTracksAndArtists> {
  const topTracks = await getTopTracks(token);
  const topArtists = await getTopArtists(token);
  return { topTracks, topArtists };
}

export function getToken(): string {
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

  return token;
}

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`;
