import routes from 'routes';
import {
  AddInfoTitle,
  AddInfoList,
  AddInfoItem,
  AddInfoLink,
} from './AddInfo.styled';

const AddInfo = () => {
  // const location = useLocation();

  return (
    <>
      <AddInfoTitle>Additional information</AddInfoTitle>
      <AddInfoList>
        <AddInfoItem>
          <AddInfoLink to={`${routes.MOVIES_CAST}`}>Cast</AddInfoLink>
        </AddInfoItem>
        <AddInfoItem>
          <AddInfoLink to={`${routes.MOVIES_REVIEWS}`}>Reviews</AddInfoLink>
        </AddInfoItem>
      </AddInfoList>
    </>
  );
};

export default AddInfo;
