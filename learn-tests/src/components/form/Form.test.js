import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fake from 'faker';

import { Form } from './';

describe('<Form />', () => {
  it('should render form component', () => {
    render(<Form />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should be able tto type in the input and submit data', () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    const username = fake.internet.userName();
    const password = fake.internet.password();

    userEvent.type(screen.getByLabelText(/username/i), username);
    userEvent.type(screen.getByLabelText(/password/i), password);
    userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(handleSubmit).toHaveBeenCalledWith({ username, password });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
