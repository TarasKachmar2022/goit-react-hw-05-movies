import PropTypes from 'prop-types';
import {
  MovieDetailsContainer,
  MovieDetailsInfoContainer,
  MovieDetailsImg,
  MovieDetailsOverwiev,
  MovieDetailsAbout,
  MovieDetailsGenresTitle,
  MovieDetailsGenres,
} from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  const {
    budget,
    poster_path,
    overview,
    release_date,
    title,
    popularity,
    genres,
    original_title,
    vote_average,
    vote_count,
  } = movie;

  return (
    <>
      <MovieDetailsContainer>
        <MovieDetailsImg src={`${poster_path}`} alt={title} />

        <MovieDetailsInfoContainer>
          <h2>{title}</h2>
          <h4>
            Vote / Votes: {vote_average} / {vote_count}
          </h4>
          <p>Release year: {release_date}</p>
          <p>Original title: {original_title}</p>
          <p>User Score: {popularity}</p>
          <p>Budget: ${budget}</p>
          <MovieDetailsAbout>ABOUT</MovieDetailsAbout>
          <MovieDetailsOverwiev>{overview}</MovieDetailsOverwiev>
          <MovieDetailsGenresTitle>Genres</MovieDetailsGenresTitle>
          <MovieDetailsGenres>{genres}</MovieDetailsGenres>
        </MovieDetailsInfoContainer>
      </MovieDetailsContainer>
      <hr />
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    budget: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    vote_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieDetails;
