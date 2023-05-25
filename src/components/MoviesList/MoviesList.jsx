import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import { MoviesListStyled } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <>
      <MoviesListStyled>
        {movies &&
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </MoviesListStyled>
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
