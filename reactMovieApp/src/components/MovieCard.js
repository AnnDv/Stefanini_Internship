import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';
import "./MovieCard.css";
import ShowInfoButton from './ShowInfoButton';

function MovieCard (props){

    return (
		<div className='grid'>
			{props.item.map(movie => (
                <div key={movie.id} className="card_description">
					<MovieImage item={movie}/>
					<MovieTitle item={movie}/>
					<ShowInfoButton item={movie}/>
				</div>
			))}
			
		</div>
	);
}



export default MovieCard;