import * as S from './styled';

const MovieRow = ({ movieLists, title }) => {
  return (
    <S.MovieRow>
      <h2>{title}</h2>
      <S.ListArea>
        <S.List>
          {movieLists.results.length > 0 &&
            movieLists.results.map((movieList, index) => (
              <div>
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/w300${movieList.poster_path}`}
                  alt={movieList.original_title}
                />
              </div>
            ))}
        </S.List>
      </S.ListArea>
    </S.MovieRow>
  );
};

export default MovieRow;
