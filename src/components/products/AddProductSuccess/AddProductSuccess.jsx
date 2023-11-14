import PropTypes from 'prop-types';

import {
  DivSuccess,
  DivImg,
  TitleH2,
  DivCalories,
  CaloriesP,
  ValueCalories,
  ButtonAdd,
  DivLink,
  LinkText,
} from './AddProductSuccess.styled';

import sprite from '../../../assets/images/sprite.svg';

 const AddProductSuccess = ({ onClose, totalCalories }) => {

  return (
    <DivSuccess>
      <DivImg></DivImg>

      <TitleH2>Well Done</TitleH2>

      <DivCalories>
        <CaloriesP>Calories:</CaloriesP>

        <ValueCalories>{totalCalories}</ValueCalories>
      </DivCalories>

      <ButtonAdd onClick={onClose}>Next product</ButtonAdd>

      <DivLink to="/diary">
        <LinkText>To the diary</LinkText>

        <svg width="16" height="16">
          <use href={sprite + '#arrow_gray'}></use>
        </svg>
      </DivLink>
    </DivSuccess>
  );
}
export default AddProductSuccess;

AddProductSuccess.propTypes = {
  totalCalories: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};