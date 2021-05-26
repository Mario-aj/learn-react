import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

const IntentClasses = {
  symbol: 'bg-yellow-500',
  primary: 'bg-gray-900',
  secondary: 'bg-gray-200',
};

const Button = ({ intent, text, textColor }) => {
  if (!IntentClasses[intent])
    throw new Error(
      'The passed intent does not exist, you can use one of [symbol, primary, secondary]'
    );

  return (
    <button
      type="button"
      className={classname(
        'w-14 h-14 rounded-full m-2 text-2xl',
        {
          'text-white': textColor,
          'text-black': !textColor,
        },
        IntentClasses[intent]
      )}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  intent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.bool,
};

export default Button;
