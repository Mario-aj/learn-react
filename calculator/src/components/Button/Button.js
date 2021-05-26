import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

const IntentClasses = {
  symbol: 'bg-yellow-500',
  primary: 'bg-gray-900',
  secondary: 'bg-gray-300',
};

const Button = ({ intent, text, textColor, className }) => {
  if (!IntentClasses[intent])
    throw new Error(
      `The intent "${intent}" does not exist, you can use one of [symbol, primary, secondary]`
    );

  return (
    <button
      type="button"
      className={classname(
        'w-14 h-14 rounded-full m-2 text-2xl focus:outline-none active:bg-gray-200 transition-colors duration-300',
        {
          'text-white': textColor,
          'text-black': !textColor,
        },
        IntentClasses[intent],
        className
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
  className: PropTypes.string,
};

export default Button;
