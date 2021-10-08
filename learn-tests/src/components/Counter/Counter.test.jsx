import { render, screen, userEvent } from '../../__test__'
import { Counter } from './';

describe('<Counter />', () => {
  it('should render Counter component', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Current count is/i);
    const decrement = screen.getByRole('button', { name: /decrement/i });
    const increment = screen.getByRole('button', { name: /increment/i });

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent('Current count is: 0');
    expect(decrement).toBeInTheDocument();
    expect(increment).toBeInTheDocument();
  });

  it('should increment count when we click increment button', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Current count is/i);
    const increment = screen.getByRole('button', { name: 'increment' });

    expect(spanElement).toHaveTextContent('Current count is: 0');
    userEvent.click(increment);
    expect(spanElement).toHaveTextContent('Current count is: 1');
    userEvent.click(increment);
    expect(spanElement).toHaveTextContent('Current count is: 2');
  });

  it('should decrement count when we click decrement button', () => {
    render(<Counter />);

    const spanElement = screen.getByText(/Current count is/i);
    const decrement = screen.getByRole('button', { name: 'decrement' });

    expect(spanElement).toHaveTextContent('Current count is: 0');
    userEvent.click(decrement);
    expect(spanElement).toHaveTextContent('Current count is: -1');
    userEvent.click(decrement);
    expect(spanElement).toHaveTextContent('Current count is: -2');
  });
});
