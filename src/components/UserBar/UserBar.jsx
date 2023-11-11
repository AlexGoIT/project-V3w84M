import {
  IconSettings,
  IconUserAvatar,
  UserAvatar,
  UserBarBlock,
  UserBarLink,
} from './UserBar.styled';

import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';

const UserBar = ({ iconColor }) => {
  //   const { isLoggedIn } = useAuth();

  return (
    <UserBarBlock>
      <UserBarLink to="/profile">
        <IconSettings iconColor={iconColor}>
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
UserBar.propTypes = {
  iconColor: PropTypes.string,
};
