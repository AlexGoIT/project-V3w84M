import styled from '@emotion/styled';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;

  width: 100%;

  padding-top: 19px;
  padding-bottom: 19px;
  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`;
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;

  height: 13px;
  @media screen and (min-width: 1440px) {
    height: 17px;
    width: 151px;
  }
`;
