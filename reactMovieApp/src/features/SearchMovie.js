import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovie.css';

const SearchBox = ({ search, setSearch }) => (
        <div className='form'>
            <input
                className='search_form'
                type="search"
                placeholder="Type to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
);

SearchBox.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default SearchBox;
