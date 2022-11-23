import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import getData from '../api/getData';
import CONFIG from '../config';
import MovieList from './MovieList';
import SearchBox from './SearchMovie';
import { getSearch } from '../store/features/apiSlice';
import { useGetPopularMoviesQuery } from './sliceApi';
import getData from '../api/getData';

const SEARCH_URL = CONFIG.BASE_URL + CONFIG.SEARCH_URL + CONFIG.API_KEY + CONFIG.QUERY;

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [query, setQuery] = useState();
  const { data } = useGetPopularMoviesQuery();
  // const [getPopularMovies, { data }] = useGetPopularMoviesQuery();

  // console.log('data', data);

  useEffect(() => {
    getData(data).then((result) => {
      setMovies(result);
    });
  }, []);

  // const { movie } = useSelector((state) => state.movie);
  // console.log(getPopularMovies);

  const dispatch = useDispatch();

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
        <MovieList movies={data}/>
      </div>
    </>
  );
};

export default FetchMovies;
