import { LogoutContainer, LogoutButton } from './Logout.styled';

import sprite from 'assets/images/sprite.svg';

const Logout = () => {
  return (
    <LogoutContainer>
      <LogoutButton>Logout</LogoutButton>
      <svg width="20" height="20" fill="#efede8">
        <use href={`${sprite}#logout`} />
      </svg>
    </LogoutContainer>
  );
};

export default Logout;
