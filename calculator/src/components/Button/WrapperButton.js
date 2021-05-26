import React from 'react';
import PropTypes from 'prop-types';

const WrapperButton = ({ children }) => (
  <div className="flex items-center justify-center w-full">{children}</div>
);

WrapperButton.propTypes = {
  children: PropTypes.element,
};

export default WrapperButton;
