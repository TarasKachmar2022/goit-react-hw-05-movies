import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
