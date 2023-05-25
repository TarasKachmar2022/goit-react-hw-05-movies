import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from 'routes';
import {
  MovieCardItem,
  NavigationLink,
  MovieCardImage,
  MovieCardContainer,
  MovieCardTitle,
  MovieCardContainerInfo,
  MovieCardGenres,
  MovieCardVote,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { id, title, genre_ids, poster_path, release_date, vote_average } =
    movie;
  const location = useLocation();
  console.log(movie);
  return (
    <MovieCardContainer>
      <MovieCardItem>
        {/* <Link to={`${routes.MOVIES}/${movie.id}`} state={{ from: location }}> */}
        <NavigationLink
          to={routes.STATIC_MOVIE_ID(id)}
          state={{ from: location }}
        >
          <MovieCardImage src={poster_path} alt={title} />
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardContainerInfo>
            <MovieCardGenres>
              {genre_ids} | {release_date}
            </MovieCardGenres>
            <MovieCardVote>{vote_average}</MovieCardVote>
          </MovieCardContainerInfo>
        </NavigationLink>
      </MovieCardItem>
    </MovieCardContainer>
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
