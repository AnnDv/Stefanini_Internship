import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from '../movieCard/MovieCard';

function MovieList({ movies }) {
  return (
    <div data-testid="list" className='grid'>
      {movies?.results?.map((movie) => (
        <div key={movie.id} data-testid={`m-${movie.id}`} className="card_description">
          <MovieCard movie={movie}/>
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.object,
};

export default MovieList;
