import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import APIs from 'components/ApiService/ApiService';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchTrending = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await APIs.getTrending();
        console.log(data);
        setMovies(prevState => [...prevState, ...data.results]);
      } catch (error) {
        setError('Щось пішло не так... Спробуйте ще раз!');
      } finally {
        setLoading(false);
      }
    };
    FetchTrending();
  }, []);

  useEffect(() => {
    if (!error) return;

    toast.error(error);
  }, [error]);

  return (
    <div>
      <h1>Trending Movies</h1>
      <TrendingMoviesList movies={movies} />
      {loading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default HomePage;
