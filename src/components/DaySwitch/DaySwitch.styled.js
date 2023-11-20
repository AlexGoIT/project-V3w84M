import styled from '@emotion/styled';

export const DaySwitchArea = styled.div`
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    right: 0;
    top: 46px;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    top: 52px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    right: 64px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowArea = styled.div`
  display: flex;
  gap: 6px;
`;
