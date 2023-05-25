import PropTypes from 'prop-types';
import { CastCardImg, CastCardItem, CastCardTitle } from './CastCard.styled';

const CastCard = ({ actor }) => {
  const { profile_path, name, character } = actor;
  return (
    <CastCardItem>
      <CastCardImg src={profile_path} alt={name} />
      <CastCardTitle>{name}</CastCardTitle>
      <p>{character}</p>
    </CastCardItem>
  );
};

CastCard.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastCard;
