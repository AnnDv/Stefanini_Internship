import './MovieDescription.css'; 
import React from 'react';
import PropTypes from 'prop-types';

const MovieDescription = (movie) => {
    const info = movie.item;
    
    return (
    <div className='text'>
        <p>{info.overview}</p>
    </div>
    )
}

MovieDescription.propTypes = {
    overview: PropTypes.string
};

export default MovieDescription;