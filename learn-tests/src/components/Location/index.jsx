import React from 'react';
import { useCurrentPosition } from 'react-use-geolocation';

export const Location = () => {
  const [position, error] = useCurrentPosition();

  if (!position && !error) return <span aria-label="loading">loading...</span>;

  if (error) return <span aria-label="error">{error.message}</span>;

  return (
    <div>
      <p>Latitude: {position.coords.latitude}</p>
      <p>Longitude: {position.coords.longitude}</p>
    </div>
  );
};
