import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from '../movieComponents/MovieImage.jsx';
import MovieTitle from '../movieComponents/MovieTitle.jsx';
import ShowInfoButton from '../../components/infoButton/ShowInfoButton.jsx';

const MovieCard = ({ movie }) => (
  <div data-testid={(movie.id).toString()}>
    <MovieImage image={movie.poster_path}/>
    <MovieTitle title={movie.title}/>
    <ShowInfoButton overview={movie.overview}/>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
