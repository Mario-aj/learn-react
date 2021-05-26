import React from 'react';
import Button from './Button/Button';
import WrapperButton from './Button/WrapperButton';

const CalculatorButtons = () => (
  <div className="flex flex-col w-full">
    <WrapperButton>
      <Button text="AC" intent="secondary" />
      <Button text="+/-" intent="secondary" />
      <Button text="%" intent="secondary" />
      <Button text="/" intent="symbol" textColor />
    </WrapperButton>
    <WrapperButton>
      <Button text="7" intent="primary" textColor />
      <Button text="8" intent="primary" textColor />
      <Button text="9" intent="primary" textColor />
      <Button text="x" intent="symbol" textColor />
    </WrapperButton>
    <WrapperButton>
      <Button text="4" intent="primary" textColor />
      <Button text="5" intent="primary" textColor />
      <Button text="6" intent="primary" textColor />
      <Button text="-" intent="symbol" textColor />
    </WrapperButton>
    <WrapperButton>
      <Button text="1" intent="primary" textColor />
      <Button text="2" intent="primary" textColor />
      <Button text="3" intent="primary" textColor />
      <Button text="+" intent="symbol" textColor />
    </WrapperButton>
    <WrapperButton>
      <Button
        text="0"
        intent="primary"
        textColor
        className="w-32 pl-6 text-left"
      />
      <Button text="," intent="primary" textColor />
      <Button text="=" intent="symbol" textColor />
    </WrapperButton>
  </div>
);

export default CalculatorButtons;
