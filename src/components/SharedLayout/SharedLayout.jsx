import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
