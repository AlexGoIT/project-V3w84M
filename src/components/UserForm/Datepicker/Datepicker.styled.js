import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
export const IconSvg = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
`;
export const CalendarGlobalStyles = () => (
  <Global
    styles={css`
      .react-datepicker__wrapper {
        position: relative;
      }
      .react-datepicker {
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translate(-15%, 0%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 14px;
        background-color: #ef8964;
        font-family: 'Roboto', sans-serif;
        border-radius: 8px;
      }
      .react-datepicker__month-container {
        float: inherit;
        box-sizing: border-box;
      }
      .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 14px;
        margin-bottom: 8px;
        border-top: 1px solid rgba(239, 237, 232, 0.2);
      }
      .react-datepicker__header {
        position: relative;
        background-color: #ef8964;
      }
      .react-datepicker__header:not(
          .react-datepicker__header--has-time-select
        ) {
        border-bottom: 0px;
        padding: 0;
      }
      .react-datepicker__day,
      .react-datepicker__day--018.react-datepicker__day--selected,
      .react-datepicker__day--today {
        outline: none;
        border: none;
      }
      .react-datepicker__current-month {
        display: none;
      }
      .react-datepicker__day-name {
        margin: 0;
        color: rgba(239, 237, 232, 0.5);
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .react-datepicker__day--disabled {
        opacity: 25%;
      }
      .react-datepicker__navigation {
        margin-top: 14px;
        color: #efede8;
      }
      .react-datepicker__navigation--previous {
        left: 7px;
        width: 16px;
        height: 16px;
      }
      .react-datepicker__navigation--next {
        right: 7px;
        width: 16px;
        height: 16px;
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
        flex-shrink: 0;
        margin: 0;
        border-radius: 50%;
        color: #efede8;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        width: 24px;
        height: 24px;
      }
      .react-datepicker__month {
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
      }
      .react-datepicker__day--selected {
        background-color: #040404;
        color: #efede8;
        font-size: 14px;
      }
      .react-datepicker__day--selected:hover {
        border-radius: 50%;
        background-color: #efede8;
      }
      .react-datepicker__day:hover {
        border-radius: 50%;
        background-color: #efede8;
        color: #ef8964;
      }
      .react-datepicker__day--keyboard-selected {
        border-radius: 50%;
        background-color: #000000;
        color: #efede8;
      }
      .react-datepicker__day--outside-month {
        opacity: 50%;
      }
      .react-datepicker__triangle {
        display: none;
      }
      .react-datepicker__month-select {
        color: #efede8;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 14px;
        border: none;
        background: inherit;
        margin-left: 15px;
        outline: none;
      }
      .react-datepicker__year-select {
        color: #efede8;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 14px;
        border: none;
        background: inherit;
        outline: none;

        &::-webkit-scrollbar-track {
          background-color: #ef8964;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 12px;
          background: rgba(239, 237, 232);
          width: 6px;
          height: 90px;
        }

        &::-webkit-scrollbar {
          width: 8px;
          height: 45px;
        }
      }

      option {
        color: #efede8;
        background-color: #ef8964;
        font-size: 12px;

        &:checked {
          color: #040404;
        }
      }

      .react-datepicker__header__dropdown,
      .react-datepicker__header__dropdown--select {
        display: flex;
      }
      .react-datepicker__year-dropdown-container--select,
      .react-datepicker__month-dropdown-container--select {
        margin-right: 15px;
      }
      .react-datepicker__year-dropdown-container--select,
      .react-datepicker__month-dropdown-container--select,
      .react-datepicker__month-year-dropdown-container--select,
      .react-datepicker__year-dropdown-container--scroll,
      .react-datepicker__month-dropdown-container--scroll,
      .react-datepicker__month-year-dropdown-container--scroll {
        display: inline-block;
        margin: 0;
        gap: 10px;
      }
    `}
  />
);
