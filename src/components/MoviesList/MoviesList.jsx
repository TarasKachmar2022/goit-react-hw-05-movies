import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies &&
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      movie: PropTypes.object,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
