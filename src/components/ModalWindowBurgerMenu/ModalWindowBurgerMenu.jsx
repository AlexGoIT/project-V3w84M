import sprite from 'assets/images/sprite.svg';
import {
  BtnCloseWindow,
  IconCloseWindow,
  LogoutModalWindowWrapper,
  OverlayModal,
  UserNavLinkModal,
  UserNavModalWindow,
  WrapperModalWindowUserMenu,
} from './ModalWindowBurgerMenu.styled';
import Logout from 'components/Logout/Logout';

const ModalWindowMenuUser = ({ isModalOpen, closeModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
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
        <LogoutModalWindowWrapper>
          <Logout color="rgba(239, 237, 232, 1)" />
        </LogoutModalWindowWrapper>
      </WrapperModalWindowUserMenu>
    </>
  );
};

export default ModalWindowMenuUser;
