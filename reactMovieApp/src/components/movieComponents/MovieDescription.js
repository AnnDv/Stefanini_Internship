import './MovieDescription.css'; 
import React from 'react';
import PropTypes from 'prop-types';

const MovieDescription = ({overview}) => {
    return (
    <div className='text'>
        <p>{overview}</p>
    </div>
    )
}

MovieDescription.propTypes = {
    overview: PropTypes.string
};

export default MovieDescription;