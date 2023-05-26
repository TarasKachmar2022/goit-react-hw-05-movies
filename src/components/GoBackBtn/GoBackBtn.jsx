import { GoBackBtnStyled } from './GoBackBtn.styled';

const GoBackBtn = ({ HandleGoBack }) => {
  return (
    <>
      <GoBackBtnStyled type="button" onClick={HandleGoBack}>
        Go Back
      </GoBackBtnStyled>
    </>
  );
};

export default GoBackBtn;
