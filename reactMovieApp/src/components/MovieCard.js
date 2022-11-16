import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

const MovieCard = ({ movies }) => (
  <div>
    <MovieList movies={movies}/>
  </div>
);

MovieCard.propTypes = {
  movies: PropTypes.array,
};

export default MovieCard;
