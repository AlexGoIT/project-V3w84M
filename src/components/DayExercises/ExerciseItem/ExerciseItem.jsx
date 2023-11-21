import {
  ExerciseDiv,
  Column,
  ButtonEl,
  DeleteIcon,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Title,
  ShorterTitle,
} from './ExerciseItem.styled';
import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteExercise } from 'redux/api/apiOperations';

const ExerciseItem = ({
  id,
  exercise,
  caloriesBurned,
  workoutTime,
  dateForDelete,
}) => {
  const dispatch = useDispatch();

  const handleClick = (id, dateForDelete) => {
    dispatch(deleteExercise({ exerciseId: id, date: dateForDelete }));
  };

  return (
    <ExerciseDiv key={id}>
      <Grid1>
        <Title>Body Part</Title>
        <Column>
          <ShorterTitle>{exercise.bodyPart}</ShorterTitle>
        </Column>
      </Grid1>
      <Grid2>
        <Title>Equipment</Title>
        <Column>
          <ShorterTitle>{exercise.equipment}</ShorterTitle>
        </Column>
      </Grid2>
      <Grid3>
        <Title>Name</Title>
        <Column>
          <ShorterTitle>{exercise.name}</ShorterTitle>
        </Column>
      </Grid3>
      <Grid4>
        <Title>Target</Title>
        <Column>
          <ShorterTitle>{exercise.target}</ShorterTitle>
        </Column>
      </Grid4>
      <Grid5>
        <Title>Burned Calorie</Title>
        <Column>{caloriesBurned}</Column>
      </Grid5>
      <Grid6>
        <Title>Time</Title>
        <Column>{workoutTime}</Column>
      </Grid6>
      <Grid7>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(id, dateForDelete)}>
          <DeleteIcon iconColor="#EF8964">
            <use href={`${sprite}#trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid7>
    </ExerciseDiv>
  );
};

ExerciseItem.propTypes = {
  id: PropTypes.string,
  exercise: PropTypes.shape({
    bodyPart: PropTypes.string,
    equipment: PropTypes.string,
    name: PropTypes.string,
    target: PropTypes.string,
  }),
  caloriesBurned: PropTypes.number,
  workoutTime: PropTypes.number,
  dateForDelete: PropTypes.string,
};

export default ExerciseItem;
