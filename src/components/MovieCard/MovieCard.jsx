import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from 'routes';

const MovieCard = ({ movie }) => {
  const { id, title, genre_ids, poster_path, release_date, vote_average } =
    movie;
  const location = useLocation();
  console.log(movie);
  return (
    <li>
      {/* <Link to={`${routes.MOVIES}/${movie.id}`} state={{ from: location }}> */}
      <Link to={routes.STATIC_MOVIE_ID(id)} state={{ from: location }}>
        <img src={poster_path} alt={title} />
        <h2>{title}</h2>
        <p>
          {genre_ids} {release_date} | {vote_average}
        </p>
      </Link>
    </li>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
