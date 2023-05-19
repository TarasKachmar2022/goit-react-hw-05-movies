import { Link, useLocation } from 'react-router-dom';

const TrendingMovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title } = movie;
  return (
    <Link to={`${movie}/${id}`} state={{ from: location }}>
      <li>
        <p>{title}</p>
      </li>
    </Link>
  );
};

export default TrendingMovieCard;
