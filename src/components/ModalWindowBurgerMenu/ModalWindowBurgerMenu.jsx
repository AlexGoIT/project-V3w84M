// import PropTypes from 'prop-types';
import sprite from 'assets/images/sprite.svg';
import {
  BtnCloseWindow,
  IconCloseWindow,
  OverlayModal,
  UserNavLinkModal,
  UserNavModalWindow,
  WrapperModalWindowUserMenu,
} from './ModalWindowBurgerMenu.styled';
// import { useEffect, useState } from 'react';

const ModalWindowMenuUser = ({ isModalOpen, closeModal }) => {
  //   const [isModalOpen, setModalOpen] = useState(false);
  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };
  //   useEffect(() => {
  //     const handleEscKeyDown = e => {
  //       if (e.key === 'Escape') {
  //         closeModal();
  //       }
  //     };
  //     window.addEventListener('keydown', handleEscKeyDown);
  //     const closeModal = () => {
  //       setModalOpen(false);
  //     };
  //     return () => {
  //       window.removeEventListener('keydown', handleEscKeyDown);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     setModalOpen(isModalOpen);
  //   }, [isModalOpen]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      {/* {isModalOpen && (
        <OverlayModal onClick={handleBackdropClick}></OverlayModal>
      )} */}
      <OverlayModal onClick={handleBackdropClick}></OverlayModal>
      {/* <WrapperModalWindowUserMenu className={isModalOpen ? 'show' : 'hidden'}> */}
      <WrapperModalWindowUserMenu>
        <BtnCloseWindow onClick={closeModal}>
          <IconCloseWindow>
            <use href={`${sprite}#x`} />
          </IconCloseWindow>
        </BtnCloseWindow>
        <UserNavModalWindow>
          <UserNavLinkModal to="/diary" onClick={closeModal}>
            Diary
          </UserNavLinkModal>
          <UserNavLinkModal to="/products" onClick={closeModal}>
            Products
          </UserNavLinkModal>
          <UserNavLinkModal to="/exercises" onClick={closeModal}>
            Exercises
          </UserNavLinkModal>
        </UserNavModalWindow>
      </WrapperModalWindowUserMenu>
      {/* <BtnLogout /> */}
    </>
  );
};
// ModalWindowMenuUser.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };
export default ModalWindowMenuUser;
