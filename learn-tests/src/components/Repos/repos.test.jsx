import { render, screen } from '../../__test__';

import { Repos } from '.';

describe('<Repos />', () => {
  it('should render loading element', async() => {
    render(<Repos />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should call the api and render items list', async() => {
    render(<Repos />);

    const requestResponse = await screen.findAllByRole('listitem');
    expect(requestResponse.length).toBe(4);

  })
})