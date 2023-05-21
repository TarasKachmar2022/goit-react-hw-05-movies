import TrendingMovieCard from 'components/TrendingMovieCard/TrendingMovieCard';

const TrendingMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(movie => <TrendingMovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default TrendingMoviesList;
