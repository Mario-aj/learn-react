import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import WrapperButton from '../Button/WrapperButton';
import { handleEqual } from './Actions';

const CalculatorButtons = ({ handleResult }) => {
  const [number, setNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('');

  useEffect(() => handleResult(number), [number]);
  useEffect(() => handleResult(secondNumber), [secondNumber]);

  const handleOperator = (e) => setOperator(e.target.innerText);

  const handleNumber = (e) => {
    if (!operator) setNumber(Number(String(number) + '' + e.target.innerText));
    else
      setSecondNumber(Number(String(secondNumber) + '' + e.target.innerText));
  };

  const handleClean = () => {
    setNumber(0);
    setSecondNumber(0);
    setOperator('');
  };

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
        <Button
          text="="
          intent="symbol"
          textColor
          onClick={() =>
            handleEqual({
              handleResult,
              number,
              operator,
              secondNumber,
              setOperator,
            })
          }
        />
      </WrapperButton>
    </div>
  );
};

CalculatorButtons.propTypes = {
  handleResult: PropTypes.func.isRequired,
};

export default CalculatorButtons;
