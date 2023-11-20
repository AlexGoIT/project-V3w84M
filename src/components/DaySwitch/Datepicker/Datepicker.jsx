import { forwardRef } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  calendarGlobalStyles,
  TitleWrapper,
  CalendarIcon,
} from './Datepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from 'assets/images/sprite.svg';
import { Global } from '@emotion/react';

const StyledDatepicker = ({
  selectedDate,
  setSelectedDate,
  user,
  onDateChange,
}) => {
  const createdDate = Date.parse(user.createdAt);

  const submitSelectedDate = date => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
        <CalendarIcon iconColor="#EF8964">
          <use href={`${sprite}#calendar`} />
        </CalendarIcon>
      </TitleWrapper>
    );
  });

  return (
    <>
      <Global styles={calendarGlobalStyles} />
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          submitSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        minDate={user.createdAt ? createdDate : Date.now()}
        maxDate={Date.now()}
      />
    </>
  );
};

export default StyledDatepicker;
