import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
`;

export const LoadMoreStyled = styled.button`
  font-size: 14px;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  margin-left: 10px;
  transition: background-color 250ms linear;
  margin-bottom: 20px;
  margin-left: 0;

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }
`;
