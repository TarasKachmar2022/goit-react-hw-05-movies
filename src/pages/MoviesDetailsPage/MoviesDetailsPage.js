import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, Outlet, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import Loader from 'components/Loader';
import APIs from 'components/ApiService';
import MovieDetails from 'components/MovieDetails';
import AddInfo from 'components/AddInfo';
import routes from 'routes';
import GoBackBtn from 'components/GoBackBtn';

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backBtnLink = useRef(location.state?.from ?? routes.MOVIES);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const FetchSearchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await APIs.getMovieDetails({
          movieId: movieId,
          signal: controller.signal,
        });
        setMovie(data);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(error.message);
        // setError('Щось пішло не так... Спробуйте ще раз!');
      } finally {
        setLoading(false);
      }
    };
    FetchSearchMovie();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  useEffect(() => {
    if (!error) return;

    toast.error(error);
  }, [error]);

  const HandleGoBack = () => navigate(backBtnLink.current);

  return (
    <div>
      <GoBackBtn HandleGoBack={HandleGoBack} />
      <hr />
      {movie && <MovieDetails movie={movie} />}
      {movie && <AddInfo />}
      <hr />
      <Outlet />
      {loading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default MoviesDetailsPage;
