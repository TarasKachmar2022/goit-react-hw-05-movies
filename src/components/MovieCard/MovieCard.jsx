import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';

const MovieCard = ({ movie }) => {
  const { id, title } = movie;
  const location = useLocation();

  return (
    <li>
      {/* <Link to={`${routes.MOVIES}/${movie.id}`} state={{ from: location }}> */}
      <Link to={routes.STATIC_MOVIE_ID(id)} state={{ from: location }}>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
