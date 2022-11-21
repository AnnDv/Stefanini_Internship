import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => (
  <div>
    <span>Something went wrong</span>
    <br />
    <span>⚒️</span>
    {error}
  </div>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
