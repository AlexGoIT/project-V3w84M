import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import ExersiceModalWindowList from './ExersiceModalWindowList';
import Timer from './Timer';

import {
  ExersiceModalWrapper,
  ExersiceModalContainer,
  ExersiceModalWrapperTwo,
  ExersiceModalWindowBtn,
  ExersiceModalImg,
  ExersiceModalTimer,
} from './AddExerciseForm.styled';
import { addExercise } from 'redux/api/apiOperations';
import { selectError, selectIsLoading } from 'redux/api/apiSelectors';
import Loader from 'components/Loader';

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const AddExerciseForm = ({
  id,
  name,
  burnedCalories,
  bodyPart,
  target,
  equipment,
  gifUrl,
  time,
  onSuccess,
  dynamicTime,
  setDynamicTime,
}) => {
  const [dynamicBurnCal, setDynamicBurnCal] = useState(0);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const amount = Math.round((burnedCalories / (time * 60)) * 180);

  const savedDate = localStorage.getItem('selectedDate');
  let date = new Date();

  if (savedDate) {
    const parsedDate = new Date(savedDate);
    if (!isNaN(parsedDate.getTime())) {
      date = parsedDate;
    }
  }

  const formattedDate = formatDate(date);

  const handleAddToDiary = async () => {
    if (!amount) {
      Notify.failure('Must be greater than 0');
      return;
    }

    if (dynamicTime < 1) {
      Notify.failure(
        'To log your activity you must work out for at least one minute'
      );
      return;
    }

    await dispatch(
      addExercise({
        exerciseId: id,
        date: formattedDate,
        workoutTime: dynamicTime,
        caloriesBurned: dynamicBurnCal,
      })
    ).unwrap();

    if (!isLoading && !error) {
      onSuccess(dynamicTime, dynamicBurnCal);
    }
  };

  return (
    <ExersiceModalContainer>
      {isLoading && <Loader />}
      <ExersiceModalWrapper>
        <ExersiceModalImg src={gifUrl} alt={name} />
        <ExersiceModalTimer>
          <Timer
            burnedCalories={burnedCalories}
            time={time}
            setDynamicBurnCal={setDynamicBurnCal}
            dynamicBurnCal={dynamicBurnCal}
            setDynamicTime={setDynamicTime}
          />
        </ExersiceModalTimer>
      </ExersiceModalWrapper>
      <ExersiceModalWrapperTwo>
        <ExersiceModalWindowList
          name={name}
          bodyPart={bodyPart}
          target={target}
          equipment={equipment}
          time={time}
        />
        <ExersiceModalWindowBtn type="button" onClick={handleAddToDiary}>
          Add to diary
        </ExersiceModalWindowBtn>
      </ExersiceModalWrapperTwo>
    </ExersiceModalContainer>
  );
};

AddExerciseForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  burnedCalories: PropTypes.number.isRequired,
  bodyPart: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  equipment: PropTypes.string.isRequired,
  gifUrl: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  dynamicTime: PropTypes.number.isRequired,
  setDynamicTime: PropTypes.func.isRequired,
};

export default AddExerciseForm;
