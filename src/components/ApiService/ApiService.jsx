import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4efc7dd075300afeff5dc61a2436592d';

export const fetchTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return { ...data.results };
};
