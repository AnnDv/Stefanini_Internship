import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from '../movieComponents/MovieImage';
import MovieTitle from '../movieComponents/MovieTitle';
import ShowInfoButton from '../../components/infoButton/ShowInfoButton';

const MovieCard = ({ movie }) => (
  <div>
    <MovieImage image={movie.poster_path}/>
    <MovieTitle title={movie.title}/>
    <ShowInfoButton overview={movie.overview}/>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
