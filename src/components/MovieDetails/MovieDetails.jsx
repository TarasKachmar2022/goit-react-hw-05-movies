const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    overview,
    release_date,
    title,
    popularity,
    genre_ids,
    genres,
  } = movie;
  console.log(movie);
  return (
    <>
      <div>
        <img src={`${poster_path}`} alt={title} />
      </div>
      <div>
        <h1>
          {title}
          {release_date}
        </h1>
        <p>User Score: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genre_ids}</p>
      </div>
      <hr />
    </>
  );
};

export default MovieDetails;
