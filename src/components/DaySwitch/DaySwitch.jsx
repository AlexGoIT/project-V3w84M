import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker';
import sprite from 'assets/images/sprite.svg';
import { useState } from 'react';

const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };
  return (
    <DaySwitchArea>
      <StyledDatepicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      <ArrowArea>
        <Button type="button" onClick={handlePrevDay}>
          <ArrowIcon iconColor="#efede8">
            <use href={`${sprite}#icon-chevron-left`} />
          </ArrowIcon>
        </Button>
        <Button type="button" onClick={handleNextDay}>
          <ArrowIcon iconColor="#efede8)">
            <use href={`${sprite}#icon-chevron-right`} />
          </ArrowIcon>
        </Button>
      </ArrowArea>
    </DaySwitchArea>
  );
};

export default DaySwitch;
