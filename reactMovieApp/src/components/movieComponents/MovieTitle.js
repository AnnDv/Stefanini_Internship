import PropTypes from 'prop-types';
import './MovieTitle.css';
import React from 'react';

function MovieTitle( movie ) {
    return (
        <div className="title">
            <p>{movie.item.title}</p>
        </div>
    )
}

MovieTitle.propTypes = {
    title: PropTypes.string
}

export default MovieTitle;