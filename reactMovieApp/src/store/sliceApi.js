import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONFIG from '../config';

const popular = CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;
const base = CONFIG.BASE_URL;
const search = CONFIG.SEARCH_URL + CONFIG.API_KEY;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => popular,
    }),
    getSearchMovie: builder.query({
      query: (query) => ({
        url: search,
        params: { query },
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery, useLazyGetSearchMovieQuery } = movieApi;
