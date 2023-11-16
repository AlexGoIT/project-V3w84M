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
  //Олександр https://t.me/Tech_Prodigy
  const user = useSelector(selectUser);

  const baseURL = 'https://powerpulse-backend-7hwo.onrender.com/';
  const avatarURL = `${baseURL}${user.avatarURL}` || user.avatarURL;

  console.log('UserBar: avatarURL =>', avatarURL);
  //Олександр https://t.me/Tech_Prodigy

  return (
    <UserBarBlock>
      <UserBarLink to="/profile">
        <IconSettings>
          <use href={`${sprite}#settings`} />
        </IconSettings>
      </UserBarLink>
      <UserAvatar>
        {/* Олександр https://t.me/Tech_Prodigy */}
        {avatarURL ? (
          <img src={avatarURL} alt="avatar" />
        ) : (
          <IconUserAvatar>
            <use href={`${sprite}#user`} />
          </IconUserAvatar>
        )}
        {/* Олександр https://t.me/Tech_Prodigy */}

        {/* <IconUserAvatar><use href={`${sprite}#user`} /></IconUserAvatar> */}
      </UserAvatar>
    </UserBarBlock>
  );
};

export default UserBar;
