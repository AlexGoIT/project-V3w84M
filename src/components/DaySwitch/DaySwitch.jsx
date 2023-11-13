import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker';
import sprite from 'assets/images/sprite.svg';
//import { useState } from 'react';

const DaySwitch = () => {
  return (
    <DaySwitchArea>
      <StyledDatepicker />
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
