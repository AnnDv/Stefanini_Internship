import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovie.css';
import { useForm } from 'react-hook-form';

const SearchBox = ({ setSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ reValidateMode: 'onSubmit' });

  // const [request, setRequest] = useState('');

  // const searchMovies = async (e) => {
  //   e.preventDefault();
  //   setSearch(request);
  //   setRequest('');
  // };

  const onSubmit = async (data) => {
    // data.preventDefault();
    await setSearch(data);
    // console.log(setSearch(data));
    // reset();
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className='form'>
      <div>
      <label className="label">Search Movie</label>
        <input
          {...register('search')}
          data-testid="search"
          className='search_form'
          type="text"
          // name='search'
          placeholder="Type to search..."
          // value={request}
          // onChange={(e) => { onSubmit(e.target.value); }}
        />
        {errors?.search && <h6>{errors?.search.message || 'Error'}</h6>}
        <button className="button" type="submit" disabled={!isValid}>Search</button>
      </div>
  </form>
  );
};

SearchBox.propTypes = {
  search: PropTypes.object,
  setSearch: PropTypes.func,
};

export default SearchBox;
