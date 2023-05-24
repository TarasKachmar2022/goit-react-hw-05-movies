import PropTypes from 'prop-types';

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
  console.log(original_title);

  return (
    <>
      <div>
        <img src={`${poster_path}`} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <h4>
          Vote / Votes: {vote_average} / {vote_count}
        </h4>
        <p>Release year: {release_date}</p>
        <p>Original title: {original_title}</p>
        <p>User Score: {popularity}</p>
        <p>Budget: ${budget}</p>
        <h2>ABOUT</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
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
