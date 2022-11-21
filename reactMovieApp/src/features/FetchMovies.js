import React, { useEffect, useState } from 'react';
import getData from '../api/getData';
import CONFIG from '../config';
import MovieList from '../components/MovieList';

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(API_URL).then((result) => {
      setMovies(result);
      try {
        if (!movies.length) {
          throw new Error('There is no movie in the list');
        }
      } catch (err) {
        setError((`${err.name}: ${err.message}`));
      }
      return error;
    });
  }, []);

  return (
    <>
      <nav className='navbar'>
        <h3>Popular Movies:</h3>
      </nav>
      <div data-testid="fetch" className='container'>
        <MovieList movies={movies}/>
      </div>
    </>
  );
};

export default FetchMovies;
