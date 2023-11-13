// import { useAuth } from 'hooks/useAuth';

import Logo from 'components/Logo';

import { HeaderBar, LogoWrap } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import UserBar from 'components/UserBar/UserBar';
import Container from 'components/Container';
import BurgerMenu from 'components/BurgerMenu';
import Logout from 'components/Logout/Logout';

import { useEffect, useRef, useState } from 'react';
import ModalWindowBurgerMenu from 'components/ModalWindowBurgerMenu';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <Container>
      <HeaderBar>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <UserNav />
        <UserBar />
        <Logout />
        {/* <BurgerMenu /> */}
        <BurgerMenu openModal={openModal} buttonRef={buttonRef} />
        {isModalOpen && <ModalWindowBurgerMenu closeModal={closeModal} />}
      </HeaderBar>
    </Container>
  );
};

export default Header;
