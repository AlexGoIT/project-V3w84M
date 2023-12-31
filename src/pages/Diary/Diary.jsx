import Container from 'components/Container';
import DayDashboard from 'components/DayDashboard';
import DayExercises from 'components/DayExercises';
import DayProducts from 'components/DayProducts';
import DaySwitch from 'components/DaySwitch';
import TitlePage from 'components/TitlePage';
import {
  DiaryWrapper,
  DiaryContainer,
  Left,
  Right,
  ForPosition,
} from './Diary.styled';
import Notice from 'components/Notice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectDiary } from 'redux/api/apiSelectors';
import { currentUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { format } from 'date-fns';
import { selectDiaryUpdated } from 'redux/api/apiSelectors';
import { diaryUpdateReset, fetchDiary } from 'redux/api/apiOperations';

const Diary = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const data = useSelector(selectDiary);

  const { consumedProducts, doneExercises, date, caloriesBurned, workoutTime } =
    data;
  const user = useSelector(selectUser);
  const newDate = format(selectedDate, 'dd-MM-yyyy');
  const dairyUpdated = useSelector(selectDiaryUpdated);

  useEffect(() => {
    dispatch(fetchDiary({ date: newDate }));
  }, [dispatch, newDate]);

  useEffect(() => {
    if (dairyUpdated) {
      dispatch(fetchDiary({ date: newDate }));
    }
    dispatch(currentUser());
    dispatch(diaryUpdateReset());
  }, [dispatch, dairyUpdated, newDate]);

  return (
    <DiaryWrapper>
      <Container>
        <ForPosition>
          <TitlePage title="Diary" />
          <DaySwitch
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            user={user}
          />
          <DiaryContainer>
            <Left>
              <DayProducts
                consumedProducts={consumedProducts}
                dateForDelete={date}
              />
              <DayExercises
                doneExercises={doneExercises}
                dateForDelete={date}
                caloriesBurned={caloriesBurned}
                workoutTime={workoutTime}
              />
            </Left>
            <Right>
              <DayDashboard data={data} />
              <Notice notice="Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices." />
            </Right>
          </DiaryContainer>
        </ForPosition>
      </Container>
    </DiaryWrapper>
  );
};

export default Diary;
