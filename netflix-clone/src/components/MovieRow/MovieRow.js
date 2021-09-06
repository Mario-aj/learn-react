const MovieRow = ({ movieLists, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {movieLists.results.length > 0 &&
        movieLists.results.map((movieList, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w300${movieList.poster_path}`}
            alt={movieList.original_title}
          />
        ))}
    </div>
  );
};

export default MovieRow;
