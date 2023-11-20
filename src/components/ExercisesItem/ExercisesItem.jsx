import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';

import {
  ExercisesCard,
  ExercisesCardStatusWorkout,
  ExercisesCardWorkout,
  ExercisesCardWorkoutText,
  ExercisesCardStatus,
  ExercisesCardAddBtn,
  IconStart,
  ExercisesCardTitle,
  IconBeforeTitle,
  ExercisesCardInfoList,
  ExercisesCardInfoItem,
  ExercisesCardInfoValue,
} from './ExercisesItem.styled';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from 'components/AddExerciseForm/AddExerciseForm';
import { useState } from 'react';
import AddExerciseSuccess from 'components/AddExerciseSuccess/AddExerciseSuccess';

const ExerciseCardItem = ({
  id,
  name,
  burnedCalories,
  bodyPart,
  target,
  equipment,
  gifUrl,
  time,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExercAdded, setIsExercAdded] = useState(true);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
    setIsExercAdded(false);
    setTotalCalories(0);
    setTotalTime(0);
  };

  const onAddedSuccessfully = (time, calories) => {
    setTotalCalories(calories);
    setTotalTime(time);
    setIsExercAdded(true);
  };

  return (
    <ExercisesCard>
      <ExercisesCardStatusWorkout>
        <ExercisesCardWorkout>
          <ExercisesCardWorkoutText>WORKOUT</ExercisesCardWorkoutText>
        </ExercisesCardWorkout>
        <ExercisesCardStatus>
          <ExercisesCardAddBtn type="button" onClick={toggleModal}>
            Start
            <IconStart>
              <use href={`${sprite}#icon-arrow`} />
            </IconStart>
          </ExercisesCardAddBtn>
        </ExercisesCardStatus>
      </ExercisesCardStatusWorkout>

      <ExercisesCardTitle>
        <IconBeforeTitle>
          <use href={`${sprite}#icon-icon`} />
        </IconBeforeTitle>
        {name}
      </ExercisesCardTitle>

      <ExercisesCardInfoList>
        <ExercisesCardInfoItem>
          Burned calories:
          <ExercisesCardInfoValue>{burnedCalories}</ExercisesCardInfoValue>
        </ExercisesCardInfoItem>

        <ExercisesCardInfoItem>
          Body part:
          <ExercisesCardInfoValue>{bodyPart}</ExercisesCardInfoValue>
        </ExercisesCardInfoItem>

        <ExercisesCardInfoItem>
          Target:
          <ExercisesCardInfoValue>{target}</ExercisesCardInfoValue>
        </ExercisesCardInfoItem>
      </ExercisesCardInfoList>

      {isModalOpen && (
        <BasicModalWindow isOpenModalToggle={toggleModal}>
          {isExercAdded ? (
            <AddExerciseSuccess
              key={'exercSuccess'}
              onClose={toggleModal}
              totalTime={totalTime}
              totalBurnedCalories={totalCalories}
            />
          ) : (
            <AddExerciseForm
              key={'addExerc'}
              id={id}
              name={name}
              burnedCalories={burnedCalories}
              bodyPart={bodyPart}
              target={target}
              gifUrl={gifUrl}
              equipment={equipment}
              time={time}
              onSuccess={onAddedSuccessfully}
              dynamicTime={totalTime}
              setDynamicTime={setTotalTime}
            />
          )}
        </BasicModalWindow>
      )}
    </ExercisesCard>
  );
};

ExerciseCardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  burnedCalories: PropTypes.number.isRequired,
  bodyPart: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  equipment: PropTypes.string.isRequired,
  gifUrl: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ExerciseCardItem;
