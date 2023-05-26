import styled from '@emotion/styled';

export const DeveloperContainer = styled.div`
  list-style: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 29px;
    padding-bottom: 29px;
  }
`;

export const DeveloperImg = styled.img`
  @media screen and (min-width: 768px) {
    height: 482px;
    width: 320px;
  }

  @media screen and (min-width: 1280px) {
    height: 595px;
    width: 395px;
  }
`;

export const DeveloperContactsContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 32px;
  }
`;

export const DeveloperName = styled.h3`
  text-align: center;
  font-size: 36px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const DeveloperRole = styled.p`
  text-align: center;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const DeveloperContactsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin: 30px 0;
  }
`;

export const DeveloperContactsItem = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

export const DeveloperLink = styled.a`
  padding: 20px;
`;

export const DeveloperSkilsTitle = styled.h4`
  text-align: center;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const DeveloperSkilsList = styled.ul`
  margin-left: 30px;
`;

export const DeveloperSkilsItem = styled.li`
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
