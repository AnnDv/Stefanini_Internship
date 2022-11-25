import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getData from '../../api/getData';
import CONFIG from '../../config';

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => getData(API_URL));

export const getSearch = createAsyncThunk('movie/getSearch', async (url) => getData(url));

const apiSlice = createSlice(({
  name: 'movies',
  initialState: {
    movie: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      const newState = state;
      newState.loading = true;
    },

    [fetchMovies.fulfilled]: (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.movie = action.payload;
    },
    [fetchMovies.rejected]: (state) => {
      const newState = state;
      newState.loading = false;
    },

    [getSearch.pending]: (state, action) => {
      const newState = state;
      newState.loading = true;
      newState.error = action.error;
    },
    [getSearch.fulfilled]: (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.movie = action.payload;
    },
    [getSearch.rejected]: (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.error = action.error;
    },
  },

}));

export default apiSlice.reducer;
