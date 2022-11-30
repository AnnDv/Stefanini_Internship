import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovie.css';
import { useForm } from 'react-hook-form';

const SearchBox = ({ search, setSearch }) => {
  const { register } = useForm();
  const onChange = (search) => setSearch(search);
  // const value = watch();
  return (
    <form onChange={onChange}>
      <div className='form'>
        <input
          { ...register('search') }
          data-testid="search"
          className='search_form'
          type="search"
          placeholder="Type to search..."
          // value={search}
          // onChange={(e) => {
          //   setSearch(e.target.value);
          // }}
        />
      </div>
  </form>
  );
};

SearchBox.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default SearchBox;
