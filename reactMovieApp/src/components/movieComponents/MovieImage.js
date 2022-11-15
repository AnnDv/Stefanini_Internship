import { CONFIG } from "../../config";
import "./MovieImage.css";
import React from "react";
import PropTypes from 'prop-types';

const IMG_URL = CONFIG.IMG_URL;

function MovieImage({image}) {
  return (
    <div >
      <img className="movie_img" src={IMG_URL + image} alt='movie'></img>
    </div>
    )
}

MovieImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default MovieImage;