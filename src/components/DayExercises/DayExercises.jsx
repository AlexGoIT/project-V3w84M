import {
  DayExercisesArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  TableArea,
  Message,
} from './DayExercises.styled';
import sprite from 'assets/images/sprite.svg';

const DayExercises = () => {
  return (
    <DayExercisesArea>
      <TitleArea>
        <Title>Execrcises</Title>
        <Button>
          <Add>Add product</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>
      <TableArea>
        <Message>Not found exercises</Message>
      </TableArea>
    </DayExercisesArea>
  );
};

export default DayExercises;
