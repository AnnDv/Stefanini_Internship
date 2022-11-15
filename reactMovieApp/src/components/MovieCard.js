/* eslint-disable react/prop-types */
import React from 'react';

import MovieList from './MovieList';

function MovieCard({movies}){
  return (
	<div>
		<MovieList movies={movies}/>
	</div>
	);
}

export default MovieCard;