import styled from '@emotion/styled';

export const SloganWrapper = styled.div`
  width: 335px;
  position: relative;
  z-index: 0;

  @media screen and (min-width: 767px) {
    width: 598px;
  }
`;

export const SloganText = styled.h1`
  color: #efede8;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.38px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
    letter-spacing: 0.7px;
  }
`;

export const SloganImage = styled.svg`
  width: 98px;
  height: 35px;
  position: absolute;
  top: 43px;
  left: -9px;
  z-index: -1;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: -16px;
  }
`;
