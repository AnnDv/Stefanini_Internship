import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div data-testid="list" className='grid'>
      {movies?.map((movie) => (
        <div key={movie.id} data-testid={`m-${movie.id}`} className="card_description">
          <MovieCard movie={movie}/>
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
