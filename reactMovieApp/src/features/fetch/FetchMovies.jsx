import React, { useEffect, useState } from 'react';
import MovieList from '../movieList/MovieList.jsx';
import SearchBox from '../search/SearchMovie.jsx';
import { useGetPopularMoviesQuery, useLazyGetSearchMovieQuery } from '../../store/sliceApi';
// import Debouncer from '../../components/Debounce/Debouncer';

const FetchMovies = () => {
  const { data: movie } = useGetPopularMoviesQuery();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [execute, { data: list }] = useLazyGetSearchMovieQuery();

  // const debouncedSearchTerm = Debouncer(search, 500);

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
        />
      </nav>
      <div data-testid="fetch" className='container'>
        <MovieList movies={movies}/>
      </div>
    </>
  );
};

export default FetchMovies;
