import {
  DayExercisesArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  TableArea,
  Message,
  TableHeader,
  Body,
  Equipment,
  Name,
  Target,
  Calories,
  Time,
  List,
} from './DayExercises.styled';
import sprite from 'assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectError,
  selectIsLoading,
  selectExercises,
} from 'redux/api/apiSelectors';
import { fetchExercises } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';
import ExerciseItem from './ExerciseItem';

const DayExercises = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const exercisesData = useSelector(selectExercises);
  const { result, total_results } = exercisesData;
  console.log(result);
  console.log(total_results);

  const [heightExerciseArea, setHeightExerciseArea] = useState(true);
  if (total_results === 0) {
    setHeightExerciseArea(false);
  }

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <DayExercisesArea>
      <TitleArea>
        <Title>Execrcises</Title>
        <Button>
          <Add>Add execrcise</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>

      <TableArea dimention={heightExerciseArea}>
        {isLoading && <Loader />}
        {total_results > 0 ? (
          <>
            <TableHeader>
              <Body>Body Part</Body>
              <Equipment>Equipment</Equipment>
              <Name>Name</Name>
              <Target>Target</Target>
              <Calories>Burned Calories</Calories>
              <Time>Time</Time>
            </TableHeader>
            <List>
              {result.map(
                ({
                  _id,
                  bodyPart,
                  equipment,
                  name,
                  target,
                  burnedCalories,
                  time,
                }) => (
                  <ExerciseItem
                    key={_id}
                    id={_id}
                    bodyPart={bodyPart}
                    equipment={equipment}
                    name={name}
                    target={target}
                    burnedCalories={burnedCalories}
                    time={time}
                  />
                )
              )}
            </List>
          </>
        ) : (
          <Message>Not found exercises</Message>
        )}
        {error && Notify.failure(error.message)}
      </TableArea>
    </DayExercisesArea>
  );
};

export default DayExercises;
