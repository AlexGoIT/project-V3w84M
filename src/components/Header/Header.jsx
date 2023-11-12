// import { useAuth } from 'hooks/useAuth';

import Logo from 'components/Logo';

// import LogOutBtn from './LogOutBtn/LogOutBtn';

import { HeaderBar, LogoWrap } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import UserBar from 'components/UserBar/UserBar';
import Container from 'components/Container';
import BurgerMenu from 'components/BurgerMenu';
import Logout from 'components/Logout/Logout';

const Header = () => {
  return (
    <Container>
      <HeaderBar>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <UserNav />
        <UserBar />
        <Logout />
        <BurgerMenu />
      </HeaderBar>
    </Container>
  );
};

export default Header;
