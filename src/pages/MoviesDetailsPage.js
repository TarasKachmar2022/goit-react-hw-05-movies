import { useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
  const params = useParams();
  console.log(params);
  return <>Movie Details</>;
};

export default MoviesDetailsPage;
