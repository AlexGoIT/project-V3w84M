import { forwardRef, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const createdDate = Date.parse(user.createdAt);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const submitSelectedDate = date => {
    setSelectedDate(date);
    const newDate = format(date, 'dd/MM/yyyy');
    console.log(newDate);
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
      />
    </>
  );
};

export default StyledDatepicker;
