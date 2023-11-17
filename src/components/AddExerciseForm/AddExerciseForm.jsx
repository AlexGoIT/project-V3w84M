import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { Notify } from 'notiflix';
import ExersiceModalWindowList from './ExersiceModalWindowList';
import Timer from './Timer';

import {ExersiceModalWrapper, ExersiceModalContainer, ExersiceModalWrapperTwo, ExersiceModalWindowBtn, ExersiceModalImg, ExersiceModalTimer} from './AddExerciseForm.styled';

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const AddExerciseForm = ({ data, onClick}) => {
  const {
    bodyPart,
    equipment,
    burnedCalories,
    gifUrl,
    name,
    target,
    _id,
    time,
  } = data;

  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [dinamicTime, setDinamicTime] = useState(0);

  const dispatch = useDispatch();
 

  // useEffect(() => {
  //   dispatch(getUserParams());
  // }, [dispatch]);

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

  const handleAddToDiary = () => {
    if (!amount) {    
      Notify.error('Must be greater than 0');
      return;
    }

    // dispatch(
    //   addExercise({
    //     date: formattedDate, 
    //     bodyPart,
    //     target,
    //     time: dinamicTime,
    //     exerciseId: _id,
    //     equipment,
    //     name,
    //     burnedCalories: dinamicBurnCal,
    //   }),
    // );
    onClick();
  };

  return (
    <ExersiceModalContainer>      
        <ExersiceModalWrapper>
          <ExersiceModalImg src={gifUrl} alt={name} />
          <ExersiceModalTimer>
            <Timer
              data={data}
              setDinamicBurnCal={setDinamicBurnCal}
              dinamicBurnCal={dinamicBurnCal}
              setDinamicTime={setDinamicTime}
            />
        </ExersiceModalTimer>
        <ExersiceModalWindowList
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
          time={time}
        />       
      </ExersiceModalWrapper>      
      <ExersiceModalWrapperTwo>        
          <ExersiceModalWindowList/>  
            <ExersiceModalWindowBtn type="button" onClick={handleAddToDiary}>
              Add to diary 
            </ExersiceModalWindowBtn>
      </ExersiceModalWrapperTwo>
    </ExersiceModalContainer>
  );
};

export default AddExerciseForm;