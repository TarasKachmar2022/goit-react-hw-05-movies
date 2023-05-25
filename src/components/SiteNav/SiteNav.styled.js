import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const SiteNavList = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  list-style: none;
  padding-left: 0;
`;

export const SiteNavItem = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  color: ${p => p.theme.colors.black};

  &.active {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }
`;
