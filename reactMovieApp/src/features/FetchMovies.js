import React, { useEffect, useState } from 'react';
import MovieList from './movieList/MovieList';
import SearchBox from './search/SearchMovie';
import { useGetPopularMoviesQuery, useLazyGetSearchMovieQuery } from '../store/sliceApi';

const FetchMovies = () => {
  const { data: movie } = useGetPopularMoviesQuery();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [execute, { data: list }] = useLazyGetSearchMovieQuery();

  useEffect(() => {
    if (!search.length) {
      setMovies(movie);
    } else if (search.length >= 3) {
      execute(search);
      setMovies(list);
    }
  }, [execute, search, list, setMovies, movie]);

  return (
    <>
      <nav className='navbar'>
        <h3>Movie TMDB</h3>
          <SearchBox
          search={search}
          setSearch={setSearch}
        />;
      </nav>
      <div data-testid="fetch" className='container'>
        <MovieList movies={movies}/>
      </div>
    </>
  );
};

export default FetchMovies;
