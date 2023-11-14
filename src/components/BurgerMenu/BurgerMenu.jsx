import sprite from 'assets/images/sprite.svg';
import { ButtonMenu, IconBurgerMenu } from './BurgerMenu.styled';

const BurgerMenu = ({ openModal }) => {
  return (
    <ButtonMenu onClick={openModal}>
      <IconBurgerMenu width="18px" height="12px">
        <use href={`${sprite}#burger-menu`}></use>
      </IconBurgerMenu>
    </ButtonMenu>
  );
};

export default BurgerMenu;
