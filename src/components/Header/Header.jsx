import Logo from 'components/Logo';

import { HeaderBar, HideLogout, LogoWrap } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import UserBar from 'components/UserBar/UserBar';
import BurgerMenu from 'components/BurgerMenu';
import Logout from 'components/Logout/Logout';

import { useCallback, useEffect, useRef, useState } from 'react';
import ModalWindowBurgerMenu from 'components/ModalWindowBurgerMenu';
import { useAuth } from 'redux/hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const { isAuthorized } = useAuth();
  const { profileDataFill } = useSelector(selectUser);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = useCallback(() => {
    if (isModalOpen) {
      setModalOpen(false);
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    }
  }, [isModalOpen]);

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
  }, [closeModal]);
  useEffect(() => {
    if (!isAuthorized && isModalOpen) {
      closeModal();
    }
  }, [isAuthorized, isModalOpen, closeModal]);
  return (
    <HeaderBar>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      {isAuthorized && (
        <>
          {!profileDataFill || <UserNav />}

          <UserBar />
          <HideLogout>
            <Logout />
          </HideLogout>
          <BurgerMenu openModal={openModal} buttonRef={buttonRef} />
          {isModalOpen && <ModalWindowBurgerMenu closeModal={closeModal} />}
        </>
      )}
    </HeaderBar>
  );
};

export default Header;
