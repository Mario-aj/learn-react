import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import WrapperButton from './Button/WrapperButton';

const CalculatorButtons = ({ handleResult }) => {
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => handleResult(result), [result]);

  useEffect(() => handleResult(number), [number]);

  const handleNumber = (e) => {
    setNumber(Number(String(number) + '' + e.target.innerText));
  };

  const handleClean = () => {
    handleResult(0);
    setNumber('0');
    setResult(0);
  };

  const handleEqual = () => {};

  const handleOperator = () => {};

  const handleDot = () => {};

  return (
    <div className="flex flex-col w-full">
      <WrapperButton>
        <Button text="AC" intent="secondary" onClick={handleClean} />
        <Button text="+/-" intent="secondary" onClick={() => {}} />
        <Button text="%" intent="secondary" onClick={handleOperator} />
        <Button text="/" intent="symbol" textColor onClick={handleOperator} />
      </WrapperButton>
      <WrapperButton>
        <Button text="7" intent="primary" textColor onClick={handleNumber} />
        <Button text="8" intent="primary" textColor onClick={handleNumber} />
        <Button text="9" intent="primary" textColor onClick={handleNumber} />
        <Button text="x" intent="symbol" textColor onClick={handleOperator} />
      </WrapperButton>
      <WrapperButton>
        <Button text="4" intent="primary" textColor onClick={handleNumber} />
        <Button text="5" intent="primary" textColor onClick={handleNumber} />
        <Button text="6" intent="primary" textColor onClick={handleNumber} />
        <Button text="-" intent="symbol" textColor onClick={handleOperator} />
      </WrapperButton>
      <WrapperButton>
        <Button text="1" intent="primary" textColor onClick={handleNumber} />
        <Button text="2" intent="primary" textColor onClick={handleNumber} />
        <Button text="3" intent="primary" textColor onClick={handleNumber} />
        <Button text="+" intent="symbol" textColor onClick={handleOperator} />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="0"
          intent="primary"
          textColor
          className="w-32 pl-6 text-left"
          onClick={handleNumber}
        />
        <Button text="," intent="primary" textColor onClick={handleDot} />
        <Button text="=" intent="symbol" textColor onClick={handleEqual} />
      </WrapperButton>
    </div>
  );
};

CalculatorButtons.propTypes = {
  handleResult: PropTypes.func.isRequired,
};

export default CalculatorButtons;
