import { Link, useLocation } from 'react-router-dom';

const TrendingMovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title } = movie;

  return (
    <li>
      <Link to={`${movie}/${id}`} state={{ from: location }}>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default TrendingMovieCard;
