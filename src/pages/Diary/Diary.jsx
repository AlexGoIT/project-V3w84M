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
import { selectDiary } from 'redux/api/apiSelectors';
import { currentUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { format } from 'date-fns';
import { selectDiaryUpdated } from 'redux/api/apiSelectors';
import {
  //deleteProduct,
  diaryUpdateReset,
  fetchDiary,
} from 'redux/api/apiOperations';

const Diary = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const data = useSelector(selectDiary);
  console.log(data);

  const { consumedProducts, doneExercises } = data;
  const user = useSelector(selectUser);
  const newDate = format(selectedDate, 'dd-MM-yyyy');
  const dairyUpdated = useSelector(selectDiaryUpdated);

  console.log('Diary: dairyUpdated =>', dairyUpdated);

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

  // const handleClick = () => {
  //   console.log("Diary: handleClick => '123'");
  //   dispatch(deleteProduct('123'));
  // };

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
          {/* <button type="button" onClick={handleClick}>Delete</button> */}
          <Left>
            <DayProducts consumedProducts={consumedProducts} />
            <DayExercises doneExercises={doneExercises} />
          </Left>
          <Right>
            <DayDashboard data={data} />
            <Notice notice="Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices." />
          </Right>
        </DiaryContainer>
      </ForPosition>
    </Container>
  );
};

export default Diary;
