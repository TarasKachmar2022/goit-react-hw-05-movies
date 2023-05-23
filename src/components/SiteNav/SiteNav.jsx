import { NavLink } from 'react-router-dom';
import routes from 'routes';

const SiteNav = () => {
  return (
    <ul>
      <li>
        <NavLink to={`${routes.HOME}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`${routes.MOVIES}`}>Movies</NavLink>
      </li>
    </ul>
  );
};

export default SiteNav;
