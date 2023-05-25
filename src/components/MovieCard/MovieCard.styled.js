import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCardItem = styled.li`
  display: block;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 1px 3px 0px #00000033, 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
`;

export const MovieCardImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 5px;
  height: 402px;
  width: 280px;

  @media screen and (min-width: 768px) {
    height: 455px;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    height: 574px;
    width: 395px;
    margin-bottom: 12px;
  }
`;

export const MovieCardContainer = styled.div`
  display: block;
  transition: transform 250ms linear;
  overflow: hidden;
  width: 280px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const MovieCardTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  margin: 0;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const MovieCardContainerInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const MovieCardGenres = styled.p`
  color: ${p => p.theme.colors.orange};
  margin: 0;
  font-size: 12px;
  line-height: calc(16 / 12);
  justify-content: center;
  color: #ff6b08;
  max-width: 290px;
  margin: 0;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: calc(24 / 20);
    max-width: 345px;
  }
`;

export const MovieCardVote = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  border-radius: 5px;
  color: #ffffff;
  background-color: #ff6b08;
  text-align: center;
  width: 36px;
  height: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 20px;
  }
`;
