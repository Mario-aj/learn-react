import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Counter } from './';

describe('<Counter />', () => {
  it('should render Counter component', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Content counter is/i);
    const buttonsElement = screen.getAllByRole('button');

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('Content counter is: 0');
    expect(buttonsElement.length).toBe(2);
    expect(buttonsElement[0]).toHaveTextContent('decrement');
    expect(buttonsElement[1]).toHaveTextContent('increment');
  });

  it('should increment count when we click increment button', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Content counter is/i);
    const incrementButton = screen.getByRole('button', { name: 'increment' });

    expect(spanElement).toHaveTextContent('Content counter is: 0');
    fireEvent.click(incrementButton);
    expect(spanElement).toHaveTextContent('Content counter is: 1');
    fireEvent.click(incrementButton);
    expect(spanElement).toHaveTextContent('Content counter is: 2');
  });

  it('should decrement count when we click decrement button', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Content counter is/i);
    const decrementButton = screen.getByRole('button', { name: 'decrement' });

    expect(spanElement).toHaveTextContent('Content counter is: 0');
    fireEvent.click(decrementButton);
    expect(spanElement).toHaveTextContent('Content counter is: -1');
    fireEvent.click(decrementButton);
    expect(spanElement).toHaveTextContent('Content counter is: -2');
  });
});
