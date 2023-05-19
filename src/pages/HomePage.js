import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { fetchTrending } from 'components/ApiService/ApiService';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GetTrending = async () => {
      setLoading(true);
      try {
        const response = await fetchTrending();

        if (response.length === 0) {
          throw new Error();
        }
        setMovies(prevState => [...prevState, ...response]);
      } catch (error) {
        setError(toast.error('Щось пішло не так... Спробуйте ще раз!'));
      } finally {
        setLoading(false);
      }
    };
    GetTrending();
  }, []);
  return (
    <div>
      {error !== null && <Toaster position="top-right" />}
      <h1>Trending Movies</h1>
      <TrendingMoviesList movies={movies} />
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
