import { useEffect, useReducer, useState } from "react";
import { getToken, getTopTracksAndArtists, loginUrl } from "./utilities/Api";

import {
  SearchOptions,
  TimeOptions,
  TopTracksAndArtists,
} from "./components/Interfaces";

import NavBar from "./components/NavBar";
import Table from "./components/Table";
import Toggles from "./components/Toggles";

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
  | { type: "SET_SEARCH_OPTION"; payload: SearchOptions }
  | { type: "SET_TIME_OPTION"; payload: TimeOptions }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };

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
      return { ...state, error: action.payload };
    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function App() {
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
    window.location.reload();
  };

  const handleSetSearchOption = (searchOption: SearchOptions) => {
    dispatch({ type: "SET_SEARCH_OPTION", payload: searchOption });
  };

  const handleSetTimeOption = (timeOption: TimeOptions) => {
    dispatch({ type: "SET_TIME_OPTION", payload: timeOption });
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar handleLogOut={logOut} token={state.token} />
      <div className="flex-grow py-10 dark:bg-gray-900">
        <>
          {state.token ? (
            <div className="flex flex-col items-center justify-center w-full space-y-10">
              <Toggles
                currentSearchOption={state.currentSearchOption}
                currentTimeOption={state.currentTimeOption}
                setSearchOption={handleSetSearchOption}
                setTimeOption={handleSetTimeOption}
              />
              <Table
                isLoading={state.isLoading}
                searchOptions={state.currentSearchOption}
                timeOptions={state.currentTimeOption}
                topTracksAndArtists={state.topTracksAndArtists}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
                Statsify
              </h1>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                Get all your Spotify stats in one place.
              </p>
              <a
                href={loginUrl}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 dark:bg-green-600 dark:hover:bg-green-700"
              >
                Sign in with Spotify
              </a>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
