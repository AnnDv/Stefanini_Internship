import PropTypes from 'prop-types';
import './MovieTitle.css';
import React from 'react';

function MovieTitle( {title} ) {
    return (
        <div className="title">
            <p>{title}</p>
        </div>
    )
}

MovieTitle.propTypes = {
    title: PropTypes.string
}

export default MovieTitle;