import Container from 'components/Container';
import DayDashboard from 'components/DayDashboard';
import DayExercises from 'components/DayExercises';
import DayProducts from 'components/DayProducts';
import DaySwitch from 'components/DaySwitch';
import TitlePage from 'components/TitlePage';
import { DiaryContainer, Left, Right, ForPosition } from './Diary.styled';
import Notice from 'components/Notice';

const Diary = () => {
  return (
    <Container>
      <ForPosition>
        <TitlePage title="Diary" />
        <DaySwitch />
        <DiaryContainer>
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
