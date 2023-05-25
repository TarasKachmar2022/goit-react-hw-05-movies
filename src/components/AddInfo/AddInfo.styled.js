import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AddInfoTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;

export const AddInfoList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const AddInfoItem = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const AddInfoLink = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  color: ${p => p.theme.colors.black};
  transition: background-color 250ms linear;

  &:active {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }
`;
