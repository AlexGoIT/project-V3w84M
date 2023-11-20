import { ExerciseCardItem } from 'components/ExercisesItem/ExercisesItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises } from 'redux/api/apiOperations';
import { selectExercises } from 'redux/api/apiSelectors';
import { ExercisesListUl } from './ExercisesList.styled';

const ExercisesList = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(selectExercises);
  const { result } = exercises;
  //{total_results } = exercises; для бесконечного скрола
  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <ExercisesListUl>
      {result &&
        result.length > 0 &&
        result.map(
          ({
            _id,
            name,
            burnedCalories,
            bodyPart,
            target,
            equipment,
            gifUrl,
            time,
          }) => (
            <ExerciseCardItem
              key={_id}
              id={_id}
              name={name}
              burnedCalories={burnedCalories}
              bodyPart={bodyPart}
              target={target}
              gifUrl={gifUrl}
              equipment={equipment}
              time={time}
            />
          )
        )}
    </ExercisesListUl>
  );
};

export default ExercisesList;
