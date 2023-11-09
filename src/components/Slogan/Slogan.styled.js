import styled from '@emotion/styled';

export const SloganWrapper = styled.div`
  width: 598px;
  position: relative;

  @media screen and (max-width: 375px) {
    width: 335px;
  }
`;

export const SloganText = styled.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.429% */
  letter-spacing: 0.7px;

  @media screen and (max-width: 375px) {
    font-size: 38px;
    line-height: 1.05;
    letter-spacing: 0.38px;
  }
`;

export const SloganImage = styled.svg`
  width: 185px;
  height: 67px;
  position: absolute;
  top: 84px;
  left: -16px;

  @media screen and (max-width: 375px) {
    width: 98px;
    height: 35px;
    top: 43px;
    left: -9px;
  }
`;
