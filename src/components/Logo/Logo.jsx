import PropTypes from 'prop-types';
import sprite from 'assets/images/sprite.svg';
import { LogoIcon, LogoText, LogoWrapper } from './Logo.styled';

const Logo = ({ iconColor }) => {
  return (
    <LogoWrapper to={'/'}>
      <LogoIcon iconColor={iconColor}>
        <use href={`${sprite}#logo-icon`} />
      </LogoIcon>
      <LogoText>
        <use href={`${sprite}#logo-text`} />
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;

Logo.propTypes = {
  iconColor: PropTypes.string,
};
