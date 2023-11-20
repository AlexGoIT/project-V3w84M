import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ExercisesCategoriesUl = styled.ul`
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const ExercisesCategoriesLi = styled.li`
  display: flex;
  gap: 32px;
  align-items: baseline;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const ExercisesCategoriesNavLink = styled(NavLink)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: 1.28;
  position: relative;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-cubic);

  &:after {
    content: ' ';
    display: inline-block;
    width: 0;
    height: 4px;
    background: #ef8964;
    border-radius: 2px;
    position: absolute;
    bottom: -4px;
    margin: o auto;
    transition: none;
  }

  &:hover,
  &:focus {
    color: #efede8;
  }

  &.active {
    color: #efede8;
    &:after {
      content: ' ';
      display: inline-block;
      width: 100%;
      height: 4px;
      background: #ef8964;
      border-radius: 2px;
      position: absolute;
      bottom: -4px;
      transition: width 0.3s ease-out;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
