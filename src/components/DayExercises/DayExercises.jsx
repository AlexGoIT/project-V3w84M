import {
  DayExercisesArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  Message,
  TableArea,
  TableHeader,
  List,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  ShorterTitle,
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

  const [heightExerciseArea, setHeightExerciseArea] = useState(true);
  if (total_results === 0) {
    setHeightExerciseArea(false);
  }

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <DayExercisesArea dimention={heightExerciseArea}>
      <TitleArea>
        <Title>Execrcises</Title>
        <Button>
          <Add>Add execrcise</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>

      <TableArea>
        {isLoading && <Loader />}
        {total_results > 0 ? (
          <>
            <TableHeader>
              <Grid1>Body Part</Grid1>
              <Grid2>Equipment</Grid2>
              <Grid3>Name</Grid3>
              <Grid4>Target</Grid4>
              <Grid5>
                <ShorterTitle>Burned Calories</ShorterTitle>
              </Grid5>
              <Grid6>Time</Grid6>
              <Grid7 />
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
