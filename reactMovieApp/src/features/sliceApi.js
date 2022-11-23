import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONFIG from '../config';

const popular = CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;
const base = CONFIG.BASE_URL;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => popular,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = movieApi;
