import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const calendarGlobalStyles = css`
  .react-datepicker__wrapper {
    position: relative;
  }
  .react-datepicker {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    padding: 14px 14px;
    background-color: #ef8964;
    font-family: Inter;
    border-radius: 16px;
    border: none;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #efede8;
    margin-bottom: 8px;
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
  }
  .react-datepicker__navigation {
    margin-top: 4px;
    color: #efe8eb;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    top: 14px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    top: 14px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: #efede8;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #efede8;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #efede8;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 14px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efe8e8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #040404;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;
  }
  .react-datepicker__day--weekend {
  }
  .react-datepicker__day--disabled {
    opacity: 50%;
  }
  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;

export const TitleWrapper = styled.button`
  color: #efede8;
  background: inherit;
  border: none;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 18px;


  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 375px) {
    font-size: 18px;

  &:hover,
  &:focus {
    color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CalendarIcon = styled.svg`
  fill: none;
    width: 20px;
  height: 20px;
   transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #e6533c;
  }


  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
