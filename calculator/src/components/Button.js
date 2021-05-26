import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

const IntentClasses = {
  symbol: 'bg-yellow-500',
  primary: 'bg-gray-500',
  secondary: 'bg-gray-200',
};

const Button = ({ intent, text }) => {
  if (!IntentClasses[intent])
    throw new Error(
      'The passed intent does not exist, you can use one of [symbol, primary, secondary]'
    );

  return (
    <button
      type="button"
      className={classname('w-12 h-12 rounded-full', IntentClasses[intent])}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  intent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
