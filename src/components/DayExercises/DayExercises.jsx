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
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectError, selectIsLoading } from 'redux/api/apiSelectors';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';
import ExerciseItem from './ExerciseItem';
import { Link, useLocation } from 'react-router-dom';

const DayExercises = ({ doneExercises }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();

  const findLength = async array => {
    try {
      const length = await array.length;
      return length;
    } catch (err) {
      return err;
    }
  };
  const arrayLength = findLength(doneExercises);

  const [heightExerciseArea, setHeightExerciseArea] = useState(true);
  if (arrayLength === 0) {
    setHeightExerciseArea(false);
  }

  return (
    <DayExercisesArea dimention={heightExerciseArea}>
      <TitleArea>
        <Title>Execrcises</Title>
        <Link to={`/exercises`} state={{ from: location }}>
          <Button>
            <Add>Add exercise</Add>
            <ArrowIcon iconColor="#E6533C">
              <use href={`${sprite}#arrow`} />
            </ArrowIcon>
          </Button>
        </Link>
      </TitleArea>

      <TableArea>
        {isLoading && <Loader />}
        {doneExercises && doneExercises.length > 0 ? (
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
              {doneExercises.map(
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
