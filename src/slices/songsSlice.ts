import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenreStat {
  _id: string;
  count: number;
}

interface ArtistStat {
  _id: string;
  artist: string;
  songCount: number;
  albumCount: number;
}


interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongsState {
  songs: Song[];  
  error: string | null;
  deleteSuccess: boolean,
  updateSuccess: boolean,
  stats: {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreStats: GenreStat[];
    artistStats: ArtistStat[];
  };
}
const initialState: SongsState = {
  songs: [],  
  error: null,
  deleteSuccess: false,
  updateSuccess: false,
  stats: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
    genreStats: [],
    artistStats: [],
  },
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchStats: (state) => {},
    setStats: (state, action: PayloadAction<SongsState["stats"]>) => {
      state.stats = action.payload;
    },
    fetchSongs: (state, action: PayloadAction<{ genre?: string }>) => {},
    
    setSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
    },    
    addSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs.push(...action.payload);
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(song => song._id !== action.payload);
      state.deleteSuccess = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },

    resetDeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
    resetUpdateSuccess(state) {
      state.updateSuccess = false;
    },
    createSong: (state, action: PayloadAction<Song[]>) => {
  }
  },
});

export const {
  fetchSongs,
  fetchStats,  
  setSongs,
  setStats,
  setError,
  addSongs,
  updateSong,
  deleteSong,
  createSong,  
  resetDeleteSuccess,
  resetUpdateSuccess,
} = songsSlice.actions;

export default songsSlice.reducer;
