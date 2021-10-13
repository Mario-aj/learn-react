import { useState } from 'react';
import { act } from '@testing-library/react';
import { useCurrentPosition } from 'react-use-geolocation';
import { Location } from '.';
import { render, screen } from '../../__test__';

jest.mock('react-use-geolocation');

describe('<Location />', () => {
  it('should display loading state and than latitude and longitude', async () => {
    const fakePosition = {
      coords: {
        latitude: 48,
        longitude: 132,
      },
    };

    let setState;
    function useMockCurrantPosition() {
      const state = useState([]);
      setState = state[1];

      return state[0];
    }
    useCurrentPosition.mockImplementation(useMockCurrantPosition);

    render(<Location />);

    expect(screen.getByLabelText(/loading/i)).toHaveTextContent('loading...');
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();

    act(() => {
      setState([fakePosition]);
    });

    expect(screen.getByText(/Latitude/i)).toHaveTextContent(
      `Latitude: ${fakePosition.coords.latitude}`
    );
    expect(screen.getByText(/Longitude/i)).toHaveTextContent(
      `Longitude: ${fakePosition.coords.longitude}`
    );
  });
});
