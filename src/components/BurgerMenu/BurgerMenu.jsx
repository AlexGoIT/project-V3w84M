// import PropTypes from 'prop-types';
import sprite from 'assets/images/sprite.svg';
import { ButtonMenu, IconBurgerMenu } from './BurgerMenu.styled';

const BurgerMenu = () => {
  return (
    <ButtonMenu>
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
