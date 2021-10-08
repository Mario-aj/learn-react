import axiosMock from 'axios';
import { render, screen } from '../../__test__';

import { Repos } from '.';

describe('<Repos />', () => {
  it('should render loading element', () => {
    render(<Repos />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should call the api and render items list', async() => {
    axiosMock.get.mockResolvedValueOnce({ result: { data: [
      { name: 'Avelino' },
      { name: 'Paulo' },
      { name: 'Fernando' },
      { name: 'Isabel' }
    ] }})
    
    render(<Repos />);

    const reposList = await screen.findAllByRole('listitem');
    expect(reposList.length).toBe(4);

  })
})