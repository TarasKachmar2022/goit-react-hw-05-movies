import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <hr />
      <Container>
        <Outlet />
      </Container>
      <hr />
      <Footer />
    </>
  );
};

export default SharedLayout;
