import React from 'react';
import { config } from '../config';

const IMG_URL = config.img_url;

const MovieCard = ({title, poster_path, overview, release_date, vote_average}) =>{
    return (
		<div>
			<h1>{title}</h1>
            <img src={IMG_URL + poster_path} alt="movie"/>
            <p>{overview}</p>
            <p>{release_date} {vote_average}</p>
		</div>
	);
}



export default MovieCard;