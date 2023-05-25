import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <hr />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
