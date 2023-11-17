import Container from 'components/Container';
import DayDashboard from 'components/DayDashboard';
import DayExercises from 'components/DayExercises';
import DayProducts from 'components/DayProducts';
import DaySwitch from 'components/DaySwitch';
import TitlePage from 'components/TitlePage';
import { DiaryContainer, Left, Right, ForPosition } from './Diary.styled';
import Notice from 'components/Notice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCalculate, selectDiary } from 'redux/api/apiSelectors';
import { fetchCalculate, fetchDiary } from 'redux/api/apiOperations';
import { currentUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

const Diary = () => {
  const dispatch = useDispatch();
  const calculateData = useSelector(selectCalculate);
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const { consumedProducts, doneExercises } = useSelector(selectDiary);
  const user = useSelector(selectUser);
  const { dailyActivity, BMR } = calculateData;

  useEffect(() => {
    dispatch(fetchDiary(selectedDate));
    dispatch(currentUser());
    dispatch(fetchCalculate());
  }, [dispatch, selectedDate]);

  return (
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
            <DayProducts consumedProducts={consumedProducts} />
            <DayExercises doneExercises={doneExercises} />
          </Left>
          <Right>
            <DayDashboard dailyActivity={dailyActivity} BMR={BMR} />
            <Notice notice="Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices." />
          </Right>
        </DiaryContainer>
      </ForPosition>
    </Container>
  );
};

export default Diary;
