// import PropTypes from 'prop-types';
import sprite from 'assets/images/sprite.svg';
import { ButtonMenu, IconBurgerMenu } from './BurgerMenu.styled';
// import { useState } from 'react';

const BurgerMenu = ({ openModal }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClickMenuBtn = () => {
  //   setIsOpen({ isOpen: !isOpen });
  // };
  return (
    <ButtonMenu onClick={openModal}>
      <IconBurgerMenu>
        <use href={`${sprite}#burger-menu`}></use>
      </IconBurgerMenu>
    </ButtonMenu>
  );
};

export default BurgerMenu;

// BurgerMenu.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
// const BurgerMenu = { onClick };
