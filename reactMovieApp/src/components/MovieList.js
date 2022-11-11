/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';
import "./MovieCard.css";
import ShowInfoButton from './ShowInfoButton';
import PropTypes from 'prop-types';

function MovieList({movies}){
  return (
    <div className='grid'>
      {movies.map(movie => (
        <div key={movie.id} className="card_description">
          <MovieImage item={movie}/>
          <MovieTitle item={movie}/>
          <ShowInfoButton item={movie}/>
	    </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList;