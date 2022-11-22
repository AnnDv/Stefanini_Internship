import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovie.css';

const SearchBox = ({ searchValue, setSearchValue }) => (
        <div className='form'>
            <input
                className='search_form'
                type="search"
                placeholder="Type to search..."
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
            />
        </div>
);

SearchBox.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchBox;
