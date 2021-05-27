import React from 'react';
import PrpTypes from 'prop-types';

const Screen = ({ result }) => (
  <div className="flex items-end justify-end w-full h-full pb-4 pr-6 text-5xl text-right text-white">
    {result}
  </div>
);

Screen.propTypes = {
  result: PrpTypes.number.isRequired,
};

export default Screen;
