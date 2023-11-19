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
} from './ExerciseItem.styled';
import sprite from 'assets/images/sprite.svg';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteExercise } from 'redux/api/apiOperations';

const ExerciseItem = ({ id, exercise, burnedCalories, time, date }) => {
  const dispatch = useDispatch();

  const handleClick = (id, date) => {
    const fDate = format(new Date(date), 'dd-MM-yyyy');

    dispatch(deleteExercise({ exerciseId: id, date: fDate }));
  };

  return (
    <ExerciseDiv key={id}>
      <Grid1>
        <Title>Body Part</Title>
        <Column>{exercise.bodyPart}</Column>
      </Grid1>
      <Grid2>
        <Title>Equipment</Title>
        <Column>{exercise.equipment}</Column>
      </Grid2>
      <Grid3>
        <Title>Name</Title>
        <Column>{exercise.name}</Column>
      </Grid3>
      <Grid4>
        <Title>Target</Title>
        <Column>{exercise.target}</Column>
      </Grid4>
      <Grid5>
        <Title>Burned Calorie</Title>
        <Column>{burnedCalories}</Column>
      </Grid5>
      <Grid6>
        <Title>Time</Title>
        <Column>{time}</Column>
      </Grid6>
      {/* <ButtonEl onClick={() => deleteThisExercise(id)}>Delete</ButtonEl> */}
      <Grid7>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(id, date)}>
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
  bodyPart: PropTypes.string,
  equipment: PropTypes.string,
  name: PropTypes.string,
  target: PropTypes.string,
  burnedCalories: PropTypes.number,
  time: PropTypes.number,
  date: PropTypes.string.isRequired,
};

export default ExerciseItem;
