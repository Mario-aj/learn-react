import { useEffect, useState } from 'react';
import { ServicesTMDB } from './services';

export function App() {
  const [homeMovieList, setHomeMovieList] = useState([]);

  useEffect(() => {
    const loadHomeList = async () => {
      try {
        const response = await ServicesTMDB.getHomeMoveList();

        console.log(response);
        setHomeMovieList(response);
      } catch (error) {
        console.log(error);
      }
    };

    loadHomeList();
  }, []);

  if (homeMovieList.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <section>
        {homeMovieList.map(item => (
          <div key={item.slug}>{item.title}</div>
        ))}
      </section>
    </div>
  );
}
