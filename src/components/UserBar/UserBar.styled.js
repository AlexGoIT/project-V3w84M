import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 14px;
  gap: 10px;
  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: auto;
  }
  @media screen and (min-width: 1440px) {
    /* margin-left: 32px; */
    margin-left: auto;
  }
`;
export const UserBarLink = styled(Link)``;
export const UserAvatar = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #e6533c;
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
export const IconSettings = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const IconUserAvatar = styled.svg`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
