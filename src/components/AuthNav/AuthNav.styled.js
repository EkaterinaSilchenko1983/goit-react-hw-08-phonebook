import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  :last-child {
    margin-right: 50px;
  }
  :first-child {
    margin-right: 20px;
  }

  &.active {
    color: white;
    background-color: #e57373;
  }
`;
