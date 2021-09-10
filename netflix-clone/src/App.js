import { useEffect, useState } from 'react';
import { ServicesTMDB } from './services';
import { MovieRow, FeaturedMovie } from './components';

export function App() {
  const [homeMovieLists, setHomeMovieLists] = useState([]);
  const [featuredMovieId, setFeaturedMovieId] = useState(null);

  useEffect(() => {
    const loadHomeList = async () => {
      try {
        const response = await ServicesTMDB.getHomeMoveList();

        const netflixOriginals = response.find(
          list => list.slug === 'originals'
        );
        console.log(response);

        const randomIndex = Math.floor(
          Math.random() * (netflixOriginals.items.results.length - 1)
        );

        setHomeMovieLists(response);
        setFeaturedMovieId(netflixOriginals.items.results[randomIndex].id);
      } catch (error) {
        console.log(error);
      }
    };

    loadHomeList();
  }, []);

  if (homeMovieLists.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <FeaturedMovie movieId={featuredMovieId} />
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
