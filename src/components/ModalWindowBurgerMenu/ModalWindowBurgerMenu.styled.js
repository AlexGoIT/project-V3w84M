import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  overflow: hidden;
  z-index: 3;
`;
export const WrapperModalWindowUserMenu = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  background-color: rgba(230, 83, 60, 1);
  z-index: 4;
  /* @media screen and (min-width: 768px) {
    width: 350px;
    padding: 26px 32px 32px 32px;
  } */

  /* @media screen and (max-width: 1439px) {
    &.show {
      right: 0;
    }

    &.hidden {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
    }

    transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);
  } */

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BtnCloseWindow = styled.button`
  position: absolute;
  top: 6px;
  right: 3px;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const IconCloseWindow = styled.svg`
  width: 12px;
  height: 12px;
  fill: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const UserNavModalWindow = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  margin-top: 145px;
  margin-bottom: 282px;
  height: 146px;
  width: 114px;
`;
export const UserNavLinkModal = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efede8;
  /* transition: color, 200ms; */
  font-size: 14px;
  padding: 10px 27px 10px 27px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  &.active {
    background-color: #e6533c;
    border: 1px solid rgba(239, 237, 232, 1);
  }
`;