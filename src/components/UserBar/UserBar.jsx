import {
  IconSettings,
  IconUserAvatar,
  UserAvatar,
  UserBarBlock,
  UserBarLink,
} from './UserBar.styled';

import sprite from 'assets/images/sprite.svg';

const UserBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <UserBarBlock>
      <UserBarLink to="/profile">
        <IconSettings>
          <use href={`${sprite}#settings`} />
        </IconSettings>
      </UserBarLink>
      <UserAvatar>
        <IconUserAvatar>
          <use href={`${sprite}#user`} />
        </IconUserAvatar>
      </UserAvatar>
    </UserBarBlock>
  );
};

export default UserBar;
