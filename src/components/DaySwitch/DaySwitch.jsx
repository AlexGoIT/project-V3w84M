import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker';
import sprite from 'assets/images/sprite.svg';

const DaySwitch = ({ selectedDate, setSelectedDate, user }) => {
  return (
    <DaySwitchArea>
      <StyledDatepicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        user={user}
      />
      <ArrowArea>
        <Button type="button">
          <ArrowIcon iconColor="#efede8">
            <use href={`${sprite}#icon-chevron-left`} />
          </ArrowIcon>
        </Button>
        <Button type="button">
          <ArrowIcon iconColor="#efede8)">
            <use href={`${sprite}#icon-chevron-right`} />
          </ArrowIcon>
        </Button>
      </ArrowArea>
    </DaySwitchArea>
  );
};

export default DaySwitch;
