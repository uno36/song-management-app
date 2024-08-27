import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { AxiosResponse } from "axios";
import { SongData } from "../components/songList";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  setSongs,
  setStats,
  addSongs,
  updateSong,
  deleteSong,
  fetchStats as fetchStatsAction,
} from "../slices/songsSlice";

const API_URL = "https://song-api-ia1y.onrender.com/api/songs";
const STATS_URL = "https://song-api-ia1y.onrender.com/api/songs/stats";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface FetchSongsResponse {
  data: Song[];
}

interface GenreStat {
  _id: string;
  count: number;
}

interface ArtistStat {
  _id: string;
  songCount: number;
  artist: string;
  albumCount: number;
}

interface FetchStatsResponse {
  data: {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreStats: GenreStat[];
    artistStats: ArtistStat[];
  };
}

export interface UpdateSongAction {
  type: string;
  payload: SongData;
}

interface FetchSongsAction {
  type: string;
  payload?: { genre: string };
}

interface DeleteSongAction {
  type: string;
  payload: string;
}

// Fetch statistics function
function* fetchStats(): Generator<any, void, FetchStatsResponse> {
  try {
    const response: FetchStatsResponse = yield call(axios.get, STATS_URL);
    yield put(setStats(response.data));
  } catch (error) {
    console.error("Error fetching statistics", error);
  }
}

// Fetch songs function
function* fetchSongs(action: FetchSongsAction): Generator<any, void, FetchSongsResponse> {
  try {
    const genre = action.payload?.genre?.toLowerCase();
    const url = genre ? `${API_URL}?genre=${encodeURIComponent(genre)}` : API_URL;
    const response: FetchSongsResponse = yield call(axios.get, url);
    yield put(setSongs(response.data));
  } catch (error) {
    console.error("Error fetching songs", error);
  }
}


// Create song function
function* createSong(action: PayloadAction<Song[]>): Generator<any, void, any> {
  try {
    const response: any = yield call(axios.post, API_URL, action.payload);
    const newSongs: Song[] = response.data;
    yield put(addSongs(newSongs));
    yield put(fetchStatsAction());
  } catch (error) {
    console.error("Error creating song", error);
  }
}

// Update song function
function* modifySong(action: UpdateSongAction): Generator<any, void, AxiosResponse<Song>> {
  try {
    
    const songId = action.payload._id;
    if (!songId) {
      throw new Error('Song ID is missing');
    }    
    const response: AxiosResponse<Song> = yield call(
      axios.put,
      `${API_URL}/${songId}`,
      action.payload
    );    
    yield put(updateSong(response.data));    
  } catch (error) {
    console.error('Error updating song:', error);
  }
}

// Delete song function
function* removeSong(action: DeleteSongAction): Generator<any, void, void> {
  try {    
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteSong(action.payload));
    
  } catch (error) {
    console.error("Error deleting song", error);
  }
}

// Root saga
function* rootSaga(): Generator<any, void, void> {
  yield takeEvery("songs/fetchSongs", fetchSongs);
  yield takeEvery("songs/createSong", createSong);
  yield takeEvery("songs/updateSong", modifySong);
  yield takeEvery("songs/deleteSong", removeSong);
  yield takeEvery("songs/fetchStats", fetchStats);
}

export default rootSaga;
