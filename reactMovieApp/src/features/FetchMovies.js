/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import getData from '../api/getData';
import CONFIG from '../config';
import MovieList from './MovieList';
import SearchBox from './SearchMovie';

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;
const SEARCH_URL = CONFIG.BASE_URL + CONFIG.SEARCH_URL + CONFIG.API_KEY + CONFIG.QUERY;

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchingData = () => {
    getData(SEARCH_URL + searchValue).then((result) => {
      setMovies(result);
    });
  };

  useEffect(() => {
    if (searchValue) {
      fetchingData(searchValue);
    } else {
      setMovies([]);
    }
  }, [searchValue]);

  useEffect(() => {
    getData(API_URL).then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <>
      <nav className='navbar'>
        <h3>Popular Movies:</h3>
        <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
      </nav>
      <div data-testid="fetch" className='container'>
        <MovieList movies={movies}/>
      </div>
    </>
  );
};

export default FetchMovies;
