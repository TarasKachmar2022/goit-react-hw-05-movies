import PropTypes from 'prop-types';

const CastCard = ({ actor }) => {
  const { profile_path, name, character } = actor;
  //   const location = useLocation();
  // console.log(actor);
  return (
    <li>
      <img src={profile_path} alt={name} />
      <h2>{name}</h2>
      <p>{character}</p>
    </li>
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
