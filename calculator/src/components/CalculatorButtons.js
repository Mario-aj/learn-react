import React from 'react';
import Button from './Button';

const CalculatorBUttons = () => (
  <div className="flex items-center justify-center w-full">
    <Button text="7" intent="primary" textColor />
    <Button text="8" intent="primary" textColor />
    <Button text="9" intent="primary" textColor />
    <Button text="x" intent="symbol" textColor />
  </div>
);

export default CalculatorBUttons;
