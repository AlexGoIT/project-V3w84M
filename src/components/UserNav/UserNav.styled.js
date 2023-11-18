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
  font-size: 14px;
  padding: 10px 27px 10px 27px;
  height: 44px;
  line-height: 24px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  &.active {
    background-color: #e6533c;
    border: 1px solid #e6533c;
  }
`;
