import React from 'react';
import './CustomModal.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function CustomModal({open, children, onClose}) {
  if(!open) return null;

  console.log(typeof(onClose))
  
  return ReactDOM.createPortal(
    <>
        <div className='modal_style'>
          <div className='text_box'>
            <button className="close_button" onClick={onClose}>Close</button>
            {children}
          </div>
        </div>
    </>,
    document.getElementById("portal")
  )
}

CustomModal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.object,
  onClose: PropTypes.func
}
