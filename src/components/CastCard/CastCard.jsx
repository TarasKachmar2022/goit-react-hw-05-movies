const CastCard = ({ actor }) => {
  const { profile_path, name, character } = actor;
  //   const location = useLocation();
  return (
    <li>
      <img src={{ profile_path }} alt={name} />
      <h2>{name}</h2>
      <p>{character}</p>
    </li>
  );
};

export default CastCard;
