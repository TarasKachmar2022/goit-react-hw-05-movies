import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';

const MovieCard = ({ movie }) => {
  const { id, title, genre_ids, poster_path, release_date, vote_average } =
    movie;
  const location = useLocation();

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

export default MovieCard;
