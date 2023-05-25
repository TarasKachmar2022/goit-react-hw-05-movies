import getGenresById from './getGenresById';
import getPosterPath from './getPosterPath';
import getReleaseYear from './getReleaseYear';
import getPopularityFormat from './getPopularityFormat';
import getGenresByName from './getGenresByName';
import getVoteAverageFormat from './getVoteAverageFormat';
import getProfilePath from './getProfilePath';

const dataFilter = data => {
  const dataFiltered = data.results.map(result => {
    return {
      adult: result.adult,
      genre_ids: getGenresById(result.genre_ids),
      id: result.id,
      poster_path: getPosterPath(result.poster_path),
      release_date: getReleaseYear(result.release_date),
      title: result.title.toUpperCase(),
      vote_average: getVoteAverageFormat(result.vote_average),
    };
  });

  const dataFilteredResponse = {
    page: data.page,
    results: dataFiltered,
    total_pages: data.total_pages,
  };
  return dataFilteredResponse;
};

const dataDetailsFilter = data => {
  return {
    budget: data.budget,
    genres: getGenresByName(data.genres),
    original_title: data.original_title,
    overview: data.overview,
    popularity: getPopularityFormat(data.popularity),
    poster_path: getPosterPath(data.poster_path),
    release_date: getReleaseYear(data.release_date),
    title: data.title.toUpperCase(),
    vote_average: getVoteAverageFormat(data.vote_average),
    vote_count: data.vote_count,
  };
};

const dataCastFilter = ({ cast }) => {
  const dataFiltered = cast.map(actor => {
    return {
      id: actor.id,
      profile_path: getProfilePath(actor.profile_path),
      name: actor.name,
      character: actor.character,
    };
  });
  return dataFiltered;
};

const filteredAPIs = { dataFilter, dataDetailsFilter, dataCastFilter };

export default filteredAPIs;
