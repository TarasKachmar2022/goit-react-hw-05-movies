import routes from 'routes';
import { SiteNavList, SiteNavItem, NavigationLink } from './SiteNav.styled';

const SiteNav = () => {
  return (
    <SiteNavList>
      <SiteNavItem>
        <NavigationLink to={`${routes.HOME}`}>Home</NavigationLink>
      </SiteNavItem>
      <SiteNavItem>
        <NavigationLink to={`${routes.MOVIES}`}>Movies</NavigationLink>
      </SiteNavItem>
    </SiteNavList>
  );
};

export default SiteNav;
