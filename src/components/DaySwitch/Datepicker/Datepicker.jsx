import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarIcon,
} from './Datepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from 'assets/images/sprite.svg';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  console.log(selectedDate);

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'MM/dd/yyyy')}
        <CalendarIcon iconColor="#EF8964">
          <use href={`${sprite}#calendar`} />
        </CalendarIcon>
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'MM dd yyyy'}
        calendarStartDay={1}
        popperPlacement="bottom-start"
        minDate={new Date()} //временно текущий день, необх поставить дату регистрации юзера
        //maxDate={(new Date(), 3)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
