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
  console.log(movie);
  return (
    <>
      <div>
        <img src={`${poster_path}`} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <h3>
          Vote / Votes {vote_average} / {vote_count}
        </h3>
        <p>Release year {release_date}</p>
        <p>Original title {original_title}</p>
        <p>User Score {popularity}</p>
        <p>Budget ${budget}</p>
        <h2>ABOUT</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <hr />
    </>
  );
};

export default MovieDetails;
