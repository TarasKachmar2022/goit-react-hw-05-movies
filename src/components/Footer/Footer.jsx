import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FooterContainer, Text, StyledBy, StudentBtn } from './Footer.styled';
import routes from 'routes';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Text>© 2023 | All Rights Reserved | Developed with</Text>
        <div>
          <BsFillSuitHeartFill color="red" />
        </div>
        <StyledBy> by </StyledBy>
        <StudentBtn to={`${routes.MOVIES_DEVELOPER}`}>GoIT Student</StudentBtn>
      </FooterContainer>
    </>
  );
};

export default Footer;
