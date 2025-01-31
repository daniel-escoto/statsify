// Environment-specific configuration
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

// Spotify API endpoints
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
export const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
export const USER_PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

// OAuth configuration
export const RESPONSE_TYPE = "token";
