import styled from '@emotion/styled';

export const WrapRevolvingDot = styled.div`
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px; 

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;