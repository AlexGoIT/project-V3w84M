import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker';
import sprite from 'assets/images/sprite.svg';
import { useState } from 'react';

const DaySwitch = ({ selectedDate, setSelectedDate, user }) => {
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [disabledRight, setDisabledRight] = useState(true);
  const createdDate = Date.parse(user.createdAt);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);

    const formatNewDate = Math.floor(newDate.getTime() / (24 * 60 * 60 * 1000));
    const formatRegisterDate = Math.floor(createdDate / (24 * 60 * 60 * 1000));

    if (formatNewDate < formatRegisterDate) {
      setDisabledLeft(true);
    }
    setDisabledRight(false);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);

    const formatNewDate = Math.floor(newDate.getTime() / (24 * 60 * 60 * 1000));
    const formatTodayDate = Math.floor(new Date() / (24 * 60 * 60 * 1000)) - 1;

    if (formatNewDate > formatTodayDate) {
      setDisabledRight(true);
    }
    setDisabledLeft(false);
  };

  return (
    <DaySwitchArea>
      <StyledDatepicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        user={user}
        onDateChange={handleDateChange}
      />
      <ArrowArea>
        <Button type="button" onClick={handlePrevDay} disabled={disabledLeft}>
          <ArrowIcon
            style={{
              '--color1': disabledLeft ? 'rgba(239, 237, 232, 0.2)' : '#efede8',
            }}
          >
            <use href={`${sprite}#icon-chevron-left`} />
          </ArrowIcon>
        </Button>
        <Button type="button" onClick={handleNextDay} disabled={disabledRight}>
          <ArrowIcon
            style={{
              '--color1': disabledRight
                ? 'rgba(239, 237, 232, 0.2)'
                : '#efede8',
            }}
          >
            <use href={`${sprite}#icon-chevron-right`} />
          </ArrowIcon>
        </Button>
      </ArrowArea>
    </DaySwitchArea>
  );
};

export default DaySwitch;
