import { useEffect, useReducer } from "react";
import { getToken, getTopTracksAndArtists } from "./Api";
import {
  SearchOptions,
  TimeOptions,
  TopTracksAndArtists,
} from "../components/Interfaces";

type State = {
  token: string;
  topTracksAndArtists: TopTracksAndArtists | null;
  isLoading: boolean;
  currentSearchOption: SearchOptions;
  currentTimeOption: TimeOptions;
  error: string | null;
};

type Action =
  | { type: "SET_TOKEN"; payload: string }
  | { type: "SET_TRACKS_AND_ARTISTS"; payload: TopTracksAndArtists }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" }
  | { type: "SET_SEARCH_OPTION"; payload: SearchOptions }
  | { type: "SET_TIME_OPTION"; payload: TimeOptions };

const initialState: State = {
  token: "",
  topTracksAndArtists: null,
  isLoading: true,
  currentSearchOption: SearchOptions.TRACK,
  currentTimeOption: TimeOptions.SHORT_TERM,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_TRACKS_AND_ARTISTS":
      return {
        ...state,
        topTracksAndArtists: action.payload,
        isLoading: false,
      };
    case "SET_SEARCH_OPTION":
      return { ...state, currentSearchOption: action.payload };
    case "SET_TIME_OPTION":
      return { ...state, currentTimeOption: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useSpotifyApi() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch({ type: "SET_TOKEN", payload: token });
    }
  }, []);

  useEffect(() => {
    if (state.token) {
      getTopTracksAndArtists(state.token)
        .then((data) => {
          dispatch({ type: "SET_TRACKS_AND_ARTISTS", payload: data });
        })
        .catch((error) => {
          console.error("Error fetching tracks and artists:", error);
          dispatch({ type: "SET_ERROR", payload: "Failed to fetch data" });
        });
    }
  }, [state.token]);

  const logOut = () => {
    window.localStorage.removeItem("token");
    dispatch({ type: "RESET" });
  };

  return { state, dispatch, logOut };
}
