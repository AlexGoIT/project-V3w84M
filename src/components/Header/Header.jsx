// import { useAuth } from 'hooks/useAuth';

import Logo from 'components/Logo';

// import LogOutBtn from './LogOutBtn/LogOutBtn';

import { HeaderBar, LogoWrap } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import UserBar from 'components/UserBar/UserBar';

const Header = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <HeaderBar>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <UserNav />
      <UserBar />
      {/* <LogOutBtn /> */}
    </HeaderBar>
  );
};

export default Header;
