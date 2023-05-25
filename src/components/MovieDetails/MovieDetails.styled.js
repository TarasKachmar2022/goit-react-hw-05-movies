import styled from '@emotion/styled';

export const MovieDetailsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MovieDetailsImg = styled.img`
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

export const MovieDetailsInfoContainer = styled.div`
  margin-left: 10px;
`;

export const MovieDetailsAbout = styled.p`
  @media screen and (max-width: 1279px) {
    font-weight: 700;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const MovieDetailsOverwiev = styled.p`
  @media screen and (max-width: 1279px) {
    font-weight: 400;
    font-size: 12px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const MovieDetailsGenresTitle = styled.p`
  @media screen and (max-width: 1279px) {
    font-weight: 700;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const MovieDetailsGenres = styled.p`
  @media screen and (max-width: 1279px) {
    font-weight: 400;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
  }
`;
