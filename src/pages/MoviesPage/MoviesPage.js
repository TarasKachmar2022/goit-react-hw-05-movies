import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import Loader from 'components/Loader';
import APIs from 'components/ApiService';
import Searchbar from 'components/Searchbar';
import LoadMoreBtn from 'components/LoadMore';
import MovieList from 'components/MoviesList';
import backgroundIMG from '../../images/background-img.jpg';
import { Background } from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState(
    () => searchParams.get('query') ?? ''
  );
  const [page, setPage] = useState(() => Number(searchParams.get('page')) ?? 1);
  const [pageQuantity, setPageQuantity] = useState(0);

  useEffect(() => {
    if (!searchName) return;
    setSearchParams({ query: searchName, page: page });
  }, [searchName, page, setSearchParams]);

  useEffect(() => {
    const FetchSearchMovie = async () => {
      if (searchName === '') return;
      setLoading(true);
      setError(null);
      try {
        const data = await APIs.getSearchMovie(searchName, page);
        setMovies(prevState => [...prevState, ...data.results]);
        setPageQuantity(data.total_pages);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError('Щось пішло не так... Спробуйте ще раз!');
      } finally {
        setLoading(false);
      }
    };
    FetchSearchMovie();
  }, [searchName, page]);

  useEffect(() => {
    if (!error) return;

    toast.error(error);
  }, [error]);

  const formHandlerSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setMovies([]);
  };

  const onChangePageNumber = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={formHandlerSubmit} />

      {movies.length > 0 ? (
        <>
          <MovieList movies={movies} />
        </>
      ) : (
        <>
          <hr />
          <Background src={backgroundIMG} alt="cinema" />
        </>
      )}

      {page < pageQuantity && <LoadMoreBtn addPage={onChangePageNumber} />}
      {loading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default MoviesPage;
