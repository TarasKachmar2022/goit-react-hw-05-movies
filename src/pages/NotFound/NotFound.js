import routes from 'routes';
import error from '../../images/not-found.webp';
import { NotFoundContainer, BackHomeBtn } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <NotFoundContainer>
        <BackHomeBtn to={`${routes.HOME}`}> BACK HOME </BackHomeBtn>
      </NotFoundContainer>
      <hr />
      <img src={error} alt="Not Found 404" />
    </div>
  );
};

export default NotFound;
