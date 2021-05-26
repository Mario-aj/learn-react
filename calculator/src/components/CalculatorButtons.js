import React from 'react';
import Button from './Button';
import WrapperButton from './WrapperButton';

const CalculatorButtons = () => (
  <>
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
  </>
);

export default CalculatorButtons;
