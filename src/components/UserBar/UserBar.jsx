import { useSelector } from 'react-redux';
import {
  IconSettings,
  IconUserAvatar,
  UserAvatar,
  UserBarBlock,
  UserBarLink,
} from './UserBar.styled';

import sprite from 'assets/images/sprite.svg';
import { selectUser } from 'redux/auth/authSelectors';

const UserBar = () => {
  const user = useSelector(selectUser);

  return (
    <UserBarBlock>
      <UserBarLink to="/profile">
        <IconSettings>
          <use href={`${sprite}#settings`} />
        </IconSettings>
      </UserBarLink>
      <UserAvatar>
        {user.avatarURL ? (
          <img src={user.avatarURL} alt="avatar" />
        ) : (
          <IconUserAvatar>
            <use href={`${sprite}#user`} />
          </IconUserAvatar>
        )}
      </UserAvatar>
    </UserBarBlock>
  );
};

export default UserBar;
