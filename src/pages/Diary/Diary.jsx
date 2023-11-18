import Container from 'components/Container';
import DayDashboard from 'components/DayDashboard';
import DayExercises from 'components/DayExercises';
import DayProducts from 'components/DayProducts';
import DaySwitch from 'components/DaySwitch';
import TitlePage from 'components/TitlePage';
import { DiaryContainer, Left, Right, ForPosition } from './Diary.styled';
import Notice from 'components/Notice';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectDiaryUpdated } from 'redux/api/apiSelectors';
// import { useEffect } from 'react';
// import {
//   deleteProduct,
//   diaryUpdateReset,
//   fetchDiary,
// } from 'redux/api/apiOperations';

const Diary = () => {
  // const dispatch = useDispatch();
  // const dairyUpdated = useSelector(selectDiaryUpdated);

  // console.log('Diary: dairyUpdated =>', dairyUpdated);

  // useEffect(() => {
  //   if (dairyUpdated) {
  //     dispatch(fetchDiary({ date: '17-11-2023' }));
  //   }

  //   dispatch(diaryUpdateReset());
  // }, [dispatch, dairyUpdated]);

  // const handleClick = () => {
  //   console.log("Diary: handleClick => '123'");
  //   dispatch(deleteProduct('123'));
  // };

  return (
    <Container>
      <ForPosition>
        <TitlePage title="Diary" />
        <DaySwitch />
        <DiaryContainer>
          {/* <button type="button" onClick={handleClick}>Delete</button> */}
          <Left>
            <DayProducts />
            <DayExercises />
          </Left>
          <Right>
            <DayDashboard />
            <Notice notice="Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices." />
          </Right>
        </DiaryContainer>
      </ForPosition>
    </Container>
  );
};

export default Diary;
