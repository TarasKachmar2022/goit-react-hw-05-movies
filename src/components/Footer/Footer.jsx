import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FooterContainer, Text, StyledBy, StudentBtn } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Text>© 2023 | All Rights Reserved | Developed with</Text>
        <div>
          <BsFillSuitHeartFill color="red" />
        </div>
        <StyledBy> by </StyledBy>
        <StudentBtn>GoIT Student</StudentBtn>
      </FooterContainer>
    </>
  );
};

export default Footer;
