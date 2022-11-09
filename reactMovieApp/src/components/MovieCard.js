import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';
import MovieDescription from './MovieDescription';
import "./MovieCard.css"

function MovieCard (props){

    return (
		<div className='card'>
			{props.item.map(movie => (
          <div key={movie.id}>
            <MovieImage item={movie}/>
            <MovieTitle item={movie}/>
            <MovieDescription item={movie}/>
				</div>
			))}
			
		</div>
	);
}



export default MovieCard;