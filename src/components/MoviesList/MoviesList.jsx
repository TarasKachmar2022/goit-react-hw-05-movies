import MovieCard from 'components/MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default MoviesList;
