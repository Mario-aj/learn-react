import { useEffect, useState } from 'react';
import { ServicesTMDB } from './services';
import { MovieRow } from './components';

export function App() {
  const [homeMovieLists, setHomeMovieLists] = useState([]);

  useEffect(() => {
    const loadHomeList = async () => {
      try {
        const response = await ServicesTMDB.getHomeMoveList();

        console.log(response);
        setHomeMovieLists(response);
      } catch (error) {
        console.log(error);
      }
    };

    loadHomeList();
  }, []);

  if (homeMovieLists.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <section>
        {homeMovieLists.map(homeMovieList => (
          <MovieRow
            key={homeMovieList.slug}
            title={homeMovieList.title}
            movieLists={homeMovieList.items}
          />
        ))}
      </section>
    </div>
  );
}
