import React, { useState } from "react";
import MovieDescription from "./MovieDescription";
import CustomModal from "./CustomModal";
import './ShowInfoButton.css';
import PropTypes from 'prop-types';


function ShowInfoButton({item}) {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => setIsOpen(true);
  const isCloseHandler = () => setIsOpen(false);

  return (
    <>
      <div className="card-body">
        <button className="button" onClick={isOpenHandler}>View More</button>
        <CustomModal open={isOpen} onClose={isCloseHandler}>
            <MovieDescription item={item}/>
        </CustomModal>
      </div>
    </>
    )
}

ShowInfoButton.propTypes = {
    item: PropTypes.object
}

export default ShowInfoButton;