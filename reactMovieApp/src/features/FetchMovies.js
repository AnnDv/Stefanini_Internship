import React, { useEffect, useState } from 'react';
import getData from '../api/getData';
import CONFIG from '../config';
import MovieCard from '../components/MovieCard';

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData(API_URL).then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <div data-testid="fetch" className='container'>
      <h3>Popular Movies: </h3>
      <MovieCard movies={movies}/>
    </div>
  );
};

export default FetchMovies;
