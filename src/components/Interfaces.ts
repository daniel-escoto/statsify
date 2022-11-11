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
