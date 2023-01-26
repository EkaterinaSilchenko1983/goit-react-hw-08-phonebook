import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username, ButtonLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <ButtonLogout type="button" onClick={handleLogOut}>
        Logout
      </ButtonLogout>
    </Wrapper>
  );
};
