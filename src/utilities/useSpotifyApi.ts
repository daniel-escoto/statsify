import { useEffect, useReducer, useCallback } from 'react';
import {
  getToken,
  getTopTracksAndArtists,
  getUserProfile,
  makeSpotifyRequest,
  getCurrentlyPlaying,
} from './Api';
import {
  SearchOptions,
  TimeOptions,
  TopTracksAndArtists,
  UserProfile,
  CurrentlyPlaying,
} from '../components/Interfaces';

type State = {
  token: string;
  topTracksAndArtists: TopTracksAndArtists | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  currentSearchOption: SearchOptions;
  currentTimeOption: TimeOptions;
  error: string | null;
  currentlyPlaying: CurrentlyPlaying | null;
};

type Action =
  | { type: 'SET_TOKEN'; payload: string }
  | { type: 'SET_TRACKS_AND_ARTISTS'; payload: TopTracksAndArtists }
  | { type: 'SET_USER_PROFILE'; payload: UserProfile }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' }
  | { type: 'SET_SEARCH_OPTION'; payload: SearchOptions }
  | { type: 'SET_TIME_OPTION'; payload: TimeOptions }
  | { type: 'SET_CURRENTLY_PLAYING'; payload: CurrentlyPlaying | null };

const initialState: State = {
  token: '',
  topTracksAndArtists: null,
  userProfile: null,
  isLoading: true,
  currentSearchOption: SearchOptions.TRACK,
  currentTimeOption: TimeOptions.SHORT_TERM,
  error: null,
  currentlyPlaying: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_TRACKS_AND_ARTISTS':
      return {
        ...state,
        topTracksAndArtists: action.payload,
        isLoading: false,
      };
    case 'SET_USER_PROFILE':
      return { ...state, userProfile: action.payload };
    case 'SET_SEARCH_OPTION':
      return { ...state, currentSearchOption: action.payload };
    case 'SET_TIME_OPTION':
      return { ...state, currentTimeOption: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'SET_CURRENTLY_PLAYING':
      return { ...state, currentlyPlaying: action.payload };
    case 'RESET':
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
      dispatch({ type: 'SET_TOKEN', payload: token });
    }
  }, []);

  useEffect(() => {
    if (state.token) {
      Promise.all([
        getTopTracksAndArtists(state.token),
        getUserProfile(state.token),
      ])
        .then(([tracksAndArtists, profile]) => {
          dispatch({
            type: 'SET_TRACKS_AND_ARTISTS',
            payload: tracksAndArtists,
          });
          dispatch({ type: 'SET_USER_PROFILE', payload: profile });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch data' });
        });
    }
  }, [state.token]);

  useEffect(() => {
    if (!state.token) return;

    const fetchCurrentTrack = async () => {
      try {
        const data = await getCurrentlyPlaying(state.token);
        dispatch({ type: 'SET_CURRENTLY_PLAYING', payload: data });
      } catch (error) {
        console.error('Error fetching current track:', error);
        dispatch({ type: 'SET_CURRENTLY_PLAYING', payload: null });
      }
    };

    const interval = setInterval(fetchCurrentTrack, 10000);
    return () => clearInterval(interval);
  }, [state.token]);

  const logOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.clear();
    window.location.hash = '';
    dispatch({ type: 'RESET' });
    window.location.reload();
  };

  const get = useCallback(
    async (endpoint: string) => {
      if (!state.token) {
        throw new Error('No token available');
      }
      return makeSpotifyRequest(endpoint, state.token);
    },
    [state.token]
  );

  return { state, dispatch, logOut, get };
}
