/* eslint-disable prefer-template */
import React from 'react';
import Button from './Button/Button';
import WrapperButton from './Button/WrapperButton';

const SYMBOLS = ['/', '*', '+', '-', '=', '%'];

const CalculatorButtons = () => {
  let acumulator = Array(2);

  const handleClick = (value) => {
    if (value === 'AC') acumulator = [];

    if (SYMBOLS.includes(value)) {
      acumulator[1] = value;
      console.log(acumulator);
    } else {
      const prev = String();
      console.log(prev);
      acumulator[0] = Number(prev + '' + value);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <WrapperButton>
        <Button
          text="AC"
          intent="secondary"
          onClick={() => handleClick('AC')}
        />
        <Button
          text="+/-"
          intent="secondary"
          onClick={() => handleClick('+/-')}
        />
        <Button text="%" intent="secondary" onClick={() => handleClick('%')} />
        <Button
          text="/"
          intent="symbol"
          textColor
          onClick={() => handleClick('/')}
        />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="7"
          intent="primary"
          textColor
          onClick={() => handleClick(7)}
        />
        <Button
          text="8"
          intent="primary"
          textColor
          onClick={() => handleClick(8)}
        />
        <Button
          text="9"
          intent="primary"
          textColor
          onClick={() => handleClick(9)}
        />
        <Button
          text="x"
          intent="symbol"
          textColor
          onClick={() => handleClick('*')}
        />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="4"
          intent="primary"
          textColor
          onClick={() => handleClick(4)}
        />
        <Button
          text="5"
          intent="primary"
          textColor
          onClick={() => handleClick(5)}
        />
        <Button
          text="6"
          intent="primary"
          textColor
          onClick={() => handleClick(6)}
        />
        <Button
          text="-"
          intent="symbol"
          textColor
          onClick={() => handleClick('-')}
        />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="1"
          intent="primary"
          textColor
          onClick={() => handleClick(1)}
        />
        <Button
          text="2"
          intent="primary"
          textColor
          onClick={() => handleClick(2)}
        />
        <Button
          text="3"
          intent="primary"
          textColor
          onClick={() => handleClick(3)}
        />
        <Button
          text="+"
          intent="symbol"
          textColor
          onClick={() => handleClick('+')}
        />
      </WrapperButton>
      <WrapperButton>
        <Button
          text="0"
          intent="primary"
          textColor
          className="w-32 pl-6 text-left"
          onClick={() => handleClick(0)}
        />
        <Button
          text=","
          intent="primary"
          textColor
          onClick={() => handleClick('.')}
        />
        <Button
          text="="
          intent="symbol"
          textColor
          onClick={() => handleClick('=')}
        />
      </WrapperButton>
    </div>
  );
};

export default CalculatorButtons;
