import getGenres from './getGenres';
import getPosterPath from './getPosterPath';
import getReleaseYear from './getReleaseYear';

const dataFilter = data => {
  const dataFiltered = data.results.map(result => {
    console.log(result.genre_ids);
    return {
      adult: result.adult,
      genre_ids: getGenres(result.genre_ids),
      id: result.id,
      poster_path: getPosterPath(result.poster_path),
      release_date: getReleaseYear(result.release_date),
      title: result.title,
      vote_average: result.vote_average,
    };
  });

  const dataFilteredResponse = {
    page: data.page,
    results: dataFiltered,
    total_pages: data.total_pages,
  };
  return dataFilteredResponse;
};

const filteredAPIs = { dataFilter };

export default filteredAPIs;
