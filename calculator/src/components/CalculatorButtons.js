import React from 'react';
import Button from './Button';

const CalculatorBUttons = () => (
  <div className="flex items-center justify-center w-full">
    <Button text="7" intent="primary" />
    <Button text="8" intent="primary" />
    <Button text="9" intent="primary" />
    <Button text="x" intent="symbol" />
  </div>
);

export default CalculatorBUttons;
