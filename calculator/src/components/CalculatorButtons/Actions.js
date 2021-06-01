/* eslint-disable import/prefer-default-export */
export const handleEqual = ({
  operator,
  setOperator,
  handleResult,
  number,
  secondNumber,
}) => {
  if (!operator) return;

  switch (operator) {
    case 'x': {
      handleResult(number * secondNumber);
      break;
    }

    case '/': {
      handleResult(number / secondNumber);
      break;
    }

    case '-': {
      handleResult(number - secondNumber);
      break;
    }

    default: {
      handleResult(number + secondNumber);
    }
  }

  setOperator('');
};
