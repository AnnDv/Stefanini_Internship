import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { POPULAR, BASE_URL, SEARCH_URL } from '../utils';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => POPULAR,
    }),
    getSearchMovie: builder.query({
      query: (query) => ({
        url: SEARCH_URL,
        params: { query },
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery, useLazyGetSearchMovieQuery } = movieApi;
