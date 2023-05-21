import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4efc7dd075300afeff5dc61a2436592d';

const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  if (data.results.length === 0) {
    throw new Error();
  }

  return data;
};

const getSearchMovie = async (searchName, page) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchName}&page=${page}&include_adult=false`
  );

  if (data.results.length === 0) {
    throw new Error();
  }

  return data;
};

const APIs = { getTrending, getSearchMovie };
export default APIs;
