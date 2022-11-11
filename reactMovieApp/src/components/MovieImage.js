import { CONFIG } from "../config";
import "./MovieImage.css";
import React from "react";
import PropTypes from 'prop-types';

const IMG_URL = CONFIG.IMG_URL;

function MovieImage(movie) {

  return (
    <div >
      <img className="movie_img" src={IMG_URL + movie.item.poster_path} alt='movie'></img>
    </div>
    )
}

MovieImage.propTypes = {
  poster_path: PropTypes.object
}

export default MovieImage;