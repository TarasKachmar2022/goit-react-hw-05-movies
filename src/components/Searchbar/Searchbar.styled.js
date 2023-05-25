import styled from '@emotion/styled';

export const SearchbarForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchbarInput = styled.input`
  background-color: transparent;
  border-width: 0;
  border-bottom: 2px solid ${p => p.theme.colors.orange};

  transition: border-bottom-color 500ms linear;

  &:hover {
    border-bottom-color: red;
  }

  &:focus {
    outline: none;
    background-color: transparent;
  }

  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    display: flex;
    align-items: center;
  }
`;

export const SearchbarBtn = styled.button`
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  margin-left: 10px;
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
  }
`;
