import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import Loader from 'components/Loader';
import APIs from 'components/ApiService';
import MoviesList from 'components/MoviesList';
import { TrendingTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const FetchTrending = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await APIs.getTrending({ signal: controller.signal });
        console.log(data);
        setMovies(prevState => [...prevState, ...data.results]);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(error.message);
        // setError('Щось пішло не так... Спробуйте ще раз!');
      } finally {
        setLoading(false);
      }
    };
    FetchTrending();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <div>
      <TrendingTitle>Trending Movies</TrendingTitle>
      <MoviesList movies={movies} />
      {loading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default HomePage;
