import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import getData from '../api/getData';
import CONFIG from '../config';
import MovieList from './MovieList';
import SearchBox from './SearchMovie';
import { fetchMovies, getSearch } from '../store/features/apiSlice';

const SEARCH_URL = CONFIG.BASE_URL + CONFIG.SEARCH_URL + CONFIG.API_KEY + CONFIG.QUERY;

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const { movie } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    if (searchValue) {
      dispatch(getSearch(SEARCH_URL + searchValue));
    } else {
      setMovies(movies);
    }
  }, [searchValue]);

  return (
    <>
      <nav className='navbar'>
        <h3>Movie TMDB</h3>
        <SearchBox
            search={searchValue}
            setSearch={setSearchValue}
          />
      </nav>
      <div data-testid="fetch" className='container'>
        <MovieList movies={movie}/>
      </div>
    </>
  );
};

export default FetchMovies;
