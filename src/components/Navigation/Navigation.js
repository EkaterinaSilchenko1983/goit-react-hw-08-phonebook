import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  :last-child {
    margin-left: 20px;
  }
  :first-child {
    margin-left: 50px;
  }
  &.active {
    color: white;
    background-color: #e57373;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
