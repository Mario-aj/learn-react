import { useEffect, useState } from 'react';
import { ServicesTMDB } from '../../services';

import * as S from './styled';

const FeaturedMovie = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const response = await ServicesTMDB.getMoveById(movieId);

      console.log('response: ', response);
      setMovie(response);
    };

    loadMovie();
  }, [movieId]);

  if (!movie) return null;

  return (
    <S.Container
      backdropUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    >
      <S.VerticalShadow>
        <S.HorizontalShadow>
          <h1>{movie.original_name}</h1>
        </S.HorizontalShadow>
      </S.VerticalShadow>
    </S.Container>
  );
};

export default FeaturedMovie;
