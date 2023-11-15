import styled from '@emotion/styled';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-inline: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-inline: auto;

  position: fixed;
  z-index: 10;

  @media screen and (min-width: 375px) {
    width: 375px;
    @media screen and (min-width: 768px) {
      width: 768px;
      padding-inline: 32px;
      padding-top: 19px;
      padding-bottom: 19px;
    }
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 96px;
    width: 1440px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 126px;
  height: 13px;
  @media screen and (min-width: 1440px) {
    height: 17px;
    width: 152px;
  }
`;
export const HideLogout = styled.div`
  display: block;
  /* margin-left: auto; */
  @media screen and (min-width: 1440px) {
    width: 78px;
    height: 24px;
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
