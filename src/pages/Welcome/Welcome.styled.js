import styled from '@emotion/styled';

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 66px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 64px;
    padding-top: 105px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 64px;
  }
`;
