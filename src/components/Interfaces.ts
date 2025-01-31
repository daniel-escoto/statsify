export interface Song {
  id: string;
  name: string;
  type: "track";
  album: Album;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
}

export interface Album {
  type: "album";
  artists: Artist[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  external_urls: {
    spotify: string;
  };
}

export interface Artist {
  type: "artist";
  href: string;
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  popularity: number;
  followers: {
    href: null;
    total: number;
  };
  genres: string[];
  images: Image[];
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface TopTracks {
  shortTermItems: Song[];
  mediumTermItems: Song[];
  longTermItems: Song[];
}

export interface TopArtists {
  shortTermItems: Artist[];
  mediumTermItems: Artist[];
  longTermItems: Artist[];
}

export interface TopTracksAndArtists {
  topTracks: TopTracks;
  topArtists: TopArtists;
}

export enum TimeOptions {
  SHORT_TERM = "short_term",
  MEDIUM_TERM = "medium_term",
  LONG_TERM = "long_term",
}

export enum SearchOptions {
  TRACK = "track",
  ARTIST = "artist",
}

export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface RecentlyPlayedTrack {
  track: Song;
  played_at: string;
  context: {
    type: string;
    href: string;
    external_urls: {
      spotify: string;
    };
    uri: string;
  } | null;
}

export interface ListeningInsights {
  mostActiveHour: string;
  tracksPlayedToday: number;
  totalListeningTime: number; // in milliseconds
  hourlyActivity: {
    hour: number;
    count: number;
  }[];
}

export function filterTopTracksAndArtists(
  topTracksAndArtists: TopTracksAndArtists,
  timeOption: TimeOptions,
  searchOption: SearchOptions
): Song[] | Artist[] {
  if (searchOption === SearchOptions.TRACK) {
    switch (timeOption) {
      case TimeOptions.SHORT_TERM:
        return topTracksAndArtists.topTracks.shortTermItems;
      case TimeOptions.MEDIUM_TERM:
        return topTracksAndArtists.topTracks.mediumTermItems;
      case TimeOptions.LONG_TERM:
        return topTracksAndArtists.topTracks.longTermItems;
      default:
        return [];
    }
  } else {
    switch (timeOption) {
      case TimeOptions.SHORT_TERM:
        return topTracksAndArtists.topArtists.shortTermItems;
      case TimeOptions.MEDIUM_TERM:
        return topTracksAndArtists.topArtists.mediumTermItems;
      case TimeOptions.LONG_TERM:
        return topTracksAndArtists.topArtists.longTermItems;
      default:
        return [];
    }
  }
}
