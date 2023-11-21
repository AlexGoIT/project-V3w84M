import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserNavBlock = styled.nav`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    gap: 16px;
  }
`;
export const UserNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efede8;
  /* transition: color, 200ms; */
  font-size: 14px;
  line-height: 24px;
  padding: 10px 27px 10px 27px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #e6533c;
  }
  &.active {
    background-color: #e6533c;
    border: 1px solid #e6533c;
  }
  &.active:hover {
    color: #efede8;
  }
`;
