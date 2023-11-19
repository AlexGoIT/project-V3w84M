import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker';
import sprite from 'assets/images/sprite.svg';
import { useState } from 'react';
import { format } from 'date-fns';

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

    const formatNewDate = format(newDate, 'dd-MM-yyyy');
    const formatRegisterDate = format(createdDate, 'dd-MM-yyyy');
    if (formatNewDate === formatRegisterDate) {
      setDisabledLeft(true);
    }
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);

    const formatNewDate = format(newDate, 'dd-MM-yyyy');
    const formatTodayDate = format(new Date(), 'dd-MM-yyyy');
    if (formatNewDate !== formatTodayDate) {
      setDisabledRight(false);
    }
  };

  const disabledLeftStyle = {
    fill: disabledLeft ? 'rgba(239,237,232,0.2)' : '#efede8',
  };

  const disabledRightStyle = {
    fill: disabledLeft ? 'rgba(239,237,232,0.2)' : '#efede8',
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
          <ArrowIcon style={disabledLeftStyle}>
            <use href={`${sprite}#icon-chevron-left`} />
          </ArrowIcon>
        </Button>
        <Button type="button" onClick={handleNextDay} disabled={disabledRight}>
          <ArrowIcon style={disabledRightStyle}>
            <use href={`${sprite}#icon-chevron-right`} />
          </ArrowIcon>
        </Button>
      </ArrowArea>
    </DaySwitchArea>
  );
};

export default DaySwitch;
