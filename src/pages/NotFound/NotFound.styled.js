import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  margin: 20px 0 20px 30px;
`;

export const BackHomeBtn = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  color: ${p => p.theme.colors.black};
  transition: background-color 250ms linear;

  &:active,
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }
`;
