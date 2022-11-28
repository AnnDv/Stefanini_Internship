import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieDescription from '../../features/movieComponents/MovieDescription.jsx';
import CustomModal from './CustomModal.jsx';
import './ShowInfoButton.css';

function ShowInfoButton({ overview }) {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => setIsOpen(true);
  const isCloseHandler = () => setIsOpen(false);

  return (
    <>
      <div className="card-body">
        <button className="button" onClick={isOpenHandler}>View More</button>
        <CustomModal open={isOpen} onClose={isCloseHandler}>
            <MovieDescription data-testid="showInfo" overview={overview}/>
        </CustomModal>
      </div>
    </>
  );
}

ShowInfoButton.propTypes = {
  overview: PropTypes.string,
};

export default ShowInfoButton;
