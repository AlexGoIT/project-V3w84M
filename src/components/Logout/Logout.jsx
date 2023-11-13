import { useDispatch } from 'react-redux';
import { LogoutButtonLink, Text } from './Logout.styled';

import sprite from 'assets/images/sprite.svg';
import { logout } from 'redux/auth/authOperations';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <LogoutButtonLink onClick={handleClick}>
      <Text>Logout</Text>
      <svg width="20" height="20" fill="#efede8">
        <use href={`${sprite}#logout`} />
      </svg>
    </LogoutButtonLink>
  );
};

export default Logout;
