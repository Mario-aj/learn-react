import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import WrapperButton from './Button/WrapperButton';

const CalculatorButtons = ({ handleResult }) => {
  const [beforeOperator, setBeforeOperator] = useState('');
  const [afterOperator, setAfterOperator] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => handleResult(result), [result]);

  const handleNumber = (e) => {
    if (operator.trim())
      setAfterOperator(afterOperator + '' + e.target.innerText);
    else setBeforeOperator(beforeOperator + '' + e.target.innerText);

    console.log(beforeOperator, afterOperator, result);
  };

  const handleClean = () => {
    setBeforeOperator(0);
    setAfterOperator(0);
    setOperator('');
    setResult(0);
  };

  const handleEqual = () => {
    if (!operator.trim()) setResult(beforeOperator);

    const firstNumber = Number(beforeOperator);
    const lastNumber = Number(afterOperator);

    switch (operator) {
      case '/': {
        setResult(firstNumber / lastNumber);
        break;
      }

      case '*': {
        setResult(firstNumber * lastNumber);
        break;
      }

      case '-': {
        setResult(firstNumber - lastNumber);
        break;
      }

      default:
        setResult(firstNumber + lastNumber);
    }

    setBeforeOperator(result);
    setAfterOperator(0);
  };

  const handleOperator = (e) => setOperator(e.target.innerText);

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
