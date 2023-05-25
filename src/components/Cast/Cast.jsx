import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import APIs from 'components/ApiService';
import Loader from 'components/Loader';
import CastList from 'components/CastList';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const FetchMovieCredits = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await APIs.getMovieCredits({
          movieId: movieId,
          signal: controller.signal,
        });
        setActors(data);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(error.message);
        // setError('Щось пішло не так... Спробуйте ще раз!');
      } finally {
        setLoading(false);
      }
    };
    FetchMovieCredits();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  useEffect(() => {
    if (!error) return;

    toast.error(error);
  }, [error]);

  return (
    <>
      <CastList actors={actors} />
      {loading && <Loader />}
      <Toaster position="top-right" />
    </>
  );
};

export default Cast;
