import { Link } from 'react-router-dom';
import routes from 'routes';

const AddInfo = () => {
  //   const location = useLocation();

  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`${routes.MOVIES_CAST}`}>Cast</Link>
        </li>
        <li>
          <Link to={`${routes.MOVIES_REVIEWS}`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default AddInfo;
