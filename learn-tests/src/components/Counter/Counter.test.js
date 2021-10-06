import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Counter } from './';

describe('<Counter />', () => {
  it('should render Counter component', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Current count is/i);
    const [decrement, increment] = screen.getAllByRole('button');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('Current count is: 0');
    expect(decrement).toHaveTextContent('decrement');
    expect(increment).toHaveTextContent('increment');
  });

  it('should increment count when we click increment button', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Current count is/i);
    const incrementButton = screen.getByRole('button', { name: 'increment' });

    expect(spanElement).toHaveTextContent('Current count is: 0');
    fireEvent.click(incrementButton);
    expect(spanElement).toHaveTextContent('Current count is: 1');
    fireEvent.click(incrementButton);
    expect(spanElement).toHaveTextContent('Current count is: 2');
  });

  it('should decrement count when we click decrement button', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Current count is/i);
    const decrementButton = screen.getByRole('button', { name: 'decrement' });

    expect(spanElement).toHaveTextContent('Current count is: 0');
    fireEvent.click(decrementButton);
    expect(spanElement).toHaveTextContent('Current count is: -1');
    fireEvent.click(decrementButton);
    expect(spanElement).toHaveTextContent('Current count is: -2');
  });
});
