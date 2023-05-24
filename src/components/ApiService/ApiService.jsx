import axios from 'axios';
import filteredAPIs from 'utils/dataFiltered';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4efc7dd075300afeff5dc61a2436592d';

const getTrending = async ({ signal }) => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`, {
    signal: signal,
  });

  if (data.results.length === 0) {
    throw new Error();
  }

  const dataFilter = filteredAPIs.dataFilter(data);
  return dataFilter;
};

const getSearchMovie = async (searchName, page) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchName}&page=${page}&include_adult=false`
  );

  if (data.results.length === 0) {
    throw new Error();
  }

  const dataFilter = filteredAPIs.dataFilter(data);
  return dataFilter;
};

const getMovieDetails = async ({ movieId, signal }) => {
  const data = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    { signal: signal }
  );

  if (data.length === 0) {
    throw new Error();
  }

  return data;
};

const getMovieCredits = async ({ movieId, signal }) => {
  const data = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    { signal: signal }
  );

  if (data.length === 0) {
    throw new Error();
  }

  return data;
};

const getMovieReviews = async ({ movieId, signal }) => {
  const data = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    { signal: signal }
  );

  if (data.length === 0) {
    throw new Error();
  }

  return data;
};

const APIs = {
  getTrending,
  getSearchMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default APIs;
