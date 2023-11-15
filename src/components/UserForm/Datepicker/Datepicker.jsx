import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg } from './Datepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../../assets/images/sprite.svg';
import { InputField } from '../UserForm.styled';

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#calendar`}></use>
        </IconSvg>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<InputField style={{ cursor: 'pointer' }} />}
          dateFormat={'dd/MM/yyyy'}
          calendarStartDay={1}
          formatWeekDay={day => day.substring(0, 1)}
          maxDate={eighteenYearsAgo}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
  
        />

        <CalendarGlobalStyles />
      </div>
    </>
  );
};

StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
};

export default StyledDatepicker;