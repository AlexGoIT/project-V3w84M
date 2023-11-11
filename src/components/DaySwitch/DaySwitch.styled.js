import styled from '@emotion/styled';

export const DaySwitchArea = styled.div`
  position: absolute;
  border: 1px solid #fff;
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    right: 0;
    top: 45px;
    width: 183px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    top: 52px;
    width: 240px;
    height: 32px;
  }
`;
