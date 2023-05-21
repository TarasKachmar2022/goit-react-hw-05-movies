import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import APIs from 'components/ApiService/ApiService';
import Searchbar from 'components/Searchbar/Searchbar';
import LoadMoreBtn from 'components/LoadMore/LoadMore';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const FetchSearchMovie = async () => {
      if (searchName === '') return;
      setLoading(true);
      setError(null);
      try {
        const data = await APIs.getSearchMovie(searchName, page);
        console.log(data);
        setMovies(prevState => [...prevState, ...data.results]);
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
      <LoadMoreBtn addPage={onChangePageNumber} />
      {loading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default MoviesPage;
