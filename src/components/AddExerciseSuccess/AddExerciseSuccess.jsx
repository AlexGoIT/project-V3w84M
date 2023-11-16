import PropTypes from 'prop-types';

import {
   DivSuccess,
   DivImg, 
   TitleH2,
   DivTime,
   TimeP,  
   ValueTime,
   DivBurnedCalories,
   BurnedCaloriesP,
   ValueBurnedCalories,   
   ButtonAdd,
   DivLink,
   LinkText  
} from './AddExerciseSuccess.styled';

import sprite from '../../assets/images/sprite.svg';

 const AddExerciseSuccess = ({ onClose,  totalTime, totalBurnedCalories }) => {
  return (
    <DivSuccess>
      <DivImg></DivImg>
      <TitleH2>Well Done</TitleH2>
      <DivTime>
        <TimeP>Your  time: </TimeP>
        <ValueTime>{totalTime}</ValueTime>
        </DivTime>        
       <DivBurnedCalories>
        <BurnedCaloriesP>Burned calories: </BurnedCaloriesP>
        <ValueBurnedCalories>{totalBurnedCalories}</ValueBurnedCalories>
      </DivBurnedCalories>
      <ButtonAdd onClick={onClose}>Next exercise</ButtonAdd>
      <DivLink to="/diary">
        <LinkText>To the diary</LinkText>
        <svg width="16" height="16">
          <use href={sprite + '#arrow_gray'}></use>
        </svg>
      </DivLink>
    </DivSuccess>
  );
}
export default AddExerciseSuccess;

AddExerciseSuccess.propTypes = {
   totalTime: PropTypes.number,
   totalBurnedCalories: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};
