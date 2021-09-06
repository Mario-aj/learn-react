import * as S from './styled';

const MovieRow = ({ movieLists, title }) => {
  return (
    <S.MovieRow>
      <h2>{title}</h2>
      <S.ListArea>
        <S.List>
          {movieLists.results.length > 0 &&
            movieLists.results.map(movieList => (
              <div key={movieList.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movieList.poster_path}`}
                  alt={movieList.id}
                />
              </div>
            ))}
        </S.List>
      </S.ListArea>
    </S.MovieRow>
  );
};

export default MovieRow;
