import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import WrapperButton from './Button/WrapperButton';

const CalculatorButtons = ({ handleResult }) => {
  const [beforeOperator, setBeforeOperator] = useState(0);
  const [afterOperator, setAfterOperator] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => handleResult(result), [result]);

  const handleNumber = (value) => {
    if (operator.trim())
      setAfterOperator(Number(String(afterOperator) + '' + String(value)));
    else setBeforeOperator(Number(String(beforeOperator) + '' + String(value)));

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

    switch (operator) {
      case '/': {
        setResult(beforeOperator / afterOperator);
        break;
      }

      case '*': {
        setResult(beforeOperator * afterOperator);
        break;
      }

      case '-': {
        setResult(beforeOperator - afterOperator);
        break;
      }

      default:
        setResult(beforeOperator / afterOperator);
    }

    setBeforeOperator(result);
    setAfterOperator(0);
  };

  const handleSum = () => setOperator('+');
  const handleSub = () => setOperator('-');
  const handleMult = () => setOperator('*');
  const handleDiv = () => setOperator('/');
  const handlePercentage = () => setOperator('%');

  const handleDot = () => {};

  return (
    <div className="flex flex-col w-full">
      <WrapperButton>
        <Button text="AC" intent="secondary" onClick={handleClean} />
        <Button text="+/-" intent="secondary" onClick={() => {}} />
        <Button text="%" intent="secondary" onClick={handlePercentage} />
        <Button text="/" intent="symbol" textColor onClick={handleDiv} />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="7"
          intent="primary"
          textColor
          onClick={() => handleNumber(7)}
        />
        <Button
          text="8"
          intent="primary"
          textColor
          onClick={() => handleNumber(8)}
        />
        <Button
          text="9"
          intent="primary"
          textColor
          onClick={() => handleNumber(9)}
        />
        <Button text="x" intent="symbol" textColor onClick={handleMult} />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="4"
          intent="primary"
          textColor
          onClick={() => handleNumber(4)}
        />
        <Button
          text="5"
          intent="primary"
          textColor
          onClick={() => handleNumber(5)}
        />
        <Button
          text="6"
          intent="primary"
          textColor
          onClick={() => handleNumber(6)}
        />
        <Button text="-" intent="symbol" textColor onClick={handleSub} />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="1"
          intent="primary"
          textColor
          onClick={() => handleNumber(1)}
        />
        <Button
          text="2"
          intent="primary"
          textColor
          onClick={() => handleNumber(2)}
        />
        <Button
          text="3"
          intent="primary"
          textColor
          onClick={() => handleNumber(3)}
        />
        <Button text="+" intent="symbol" textColor onClick={handleSum} />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="0"
          intent="primary"
          textColor
          className="w-32 pl-6 text-left"
          onClick={() => handleNumber(0)}
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
