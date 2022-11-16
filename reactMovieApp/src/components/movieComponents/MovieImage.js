import React from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../config';
import './MovieImage.css';

const { IMG_URL } = CONFIG;

const MovieImage = ({ image }) => (
    <div >
      <img className="movie_img" src={IMG_URL + image} alt='movie'></img>
    </div>
);

MovieImage.propTypes = {
  image: PropTypes.string,
};

export default MovieImage;
