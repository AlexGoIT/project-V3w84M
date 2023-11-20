import ExerciseCardItem from 'components/ExercisesItem/ExercisesItem';
import { useSelector } from 'react-redux';
import { selectExercises } from 'redux/api/apiSelectors';
import { ExercisesListUl } from './ExercisesList.styled';

const ExercisesList = () => {
  const exercises = useSelector(selectExercises);
  const { result } = exercises;

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
