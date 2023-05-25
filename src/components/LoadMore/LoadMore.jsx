import PropTypes from 'prop-types';
import { Container, LoadMoreStyled } from './LoadMore.styled';

const LoadMoreBtn = ({ addPage }) => {
  return (
    <Container>
      <LoadMoreStyled type="button" onClick={addPage}>
        Load More
      </LoadMoreStyled>
    </Container>
  );
};

LoadMoreBtn.propTypes = { addPage: PropTypes.func.isRequired };

export default LoadMoreBtn;
