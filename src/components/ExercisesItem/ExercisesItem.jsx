import sprite from 'assets/images/sprite.svg';

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

// тут в пропах має бути { exercise }

export const ExerciseCardItem = () => {
  return (
    <ExercisesCard>
      <ExercisesCardStatusWorkout>
        <ExercisesCardWorkout>
          <ExercisesCardWorkoutText>WORKOUT</ExercisesCardWorkoutText>
        </ExercisesCardWorkout>
        <ExercisesCardStatus>
          <ExercisesCardAddBtn type="button">
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
        Exercise title {/* {exercise.title} */}
      </ExercisesCardTitle>

      <ExercisesCardInfoList>
        <ExercisesCardInfoItem>Burned calories:</ExercisesCardInfoItem>
        <ExercisesCardInfoValue>
          312 {/* {exercise.calories || '999'} */}
        </ExercisesCardInfoValue>
        <ExercisesCardInfoItem>Body part:</ExercisesCardInfoItem>
        <ExercisesCardInfoValue>
          Waist {/* {exercise.part || '999'} */}
        </ExercisesCardInfoValue>
        <ExercisesCardInfoItem>Target:</ExercisesCardInfoItem>
        <ExercisesCardInfoValue>
          Abs {/* {exercise.target || '300'} */}
        </ExercisesCardInfoValue>
      </ExercisesCardInfoList>
    </ExercisesCard>
  );
};
