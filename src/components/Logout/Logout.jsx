import { useDispatch } from 'react-redux';
import { LogoutContainer, LogoutButton } from './Logout.styled';

import sprite from 'assets/images/sprite.svg';
import { logout } from 'redux/auth/authOperations';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <LogoutContainer>
      <LogoutButton onClick={handleClick}>Logout</LogoutButton>
      <svg width="20" height="20" fill="#efede8">
        <use href={`${sprite}#logout`} />
      </svg>
    </LogoutContainer>
  );
};

export default Logout;
