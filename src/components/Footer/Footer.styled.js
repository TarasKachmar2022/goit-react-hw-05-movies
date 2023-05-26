import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
  /* font-weight: 400; */
  /* padding-top: 29px;
  padding-bottom: 29px; */
  /* font-size: 14px; */
  /* line-height: 1.14; */
  /* color: #545454; */
  background-color: #f7f7f7;

  /* @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.18;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 29px;
    padding-bottom: 29px;
  } */
`;

export const Text = styled.p`
  margin: 8px 5px 16px 0;
`;

export const StyledBy = styled.p`
  margin: 8px 0 16px 5px;
`;

export const StudentBtn = styled(Link)`
  margin: 8px 5px 16px 5px;
  border: none;
  display: inline-block;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  text-decoration: underline;
  cursor: pointer;
  color: #000000;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #ff6b08;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
