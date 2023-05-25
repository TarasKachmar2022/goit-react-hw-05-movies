import PropTypes from 'prop-types';
import CastCard from 'components/CastCard/CastCard';
import { CastUl } from './CastList.styled';

const CastList = ({ actors }) => {
  const cast = actors;
  if (!cast) return;

  console.log(cast);
  return (
    <>
      {cast.length > 0 ? (
        <>
          <CastUl>
            {cast &&
              cast.map(actor => <CastCard key={actor.id} actor={actor} />)}
          </CastUl>
        </>
      ) : (
        <p>We don't have cast for this movie </p>
      )}
    </>
  );
};

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      actor: PropTypes.object,
    }).isRequired
  ),
};

export default CastList;
