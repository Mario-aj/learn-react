import { useState, useEffect } from 'react';

import { getReposByUsername } from '../../services';

export const Repos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await getReposByUsername({ username: 'mario-aj' });
      setData(response);
    };
    loadData();
  }, []);

  if (!data.length) return <span>Loading...</span>;

  return (
    <div>
      <h1>Repos</h1>
      <ul>
        {data.map((item, index) => (
          <li key={`item-${index}`}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
