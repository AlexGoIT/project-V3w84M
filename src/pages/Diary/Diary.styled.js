import styled from '@emotion/styled';

export const ForPosition = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  } */
`;

export const DiaryContainer = styled.div`
  display: flex;

  @media screen and (min-width: 375px) {
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    gap: 64px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    width: 335px;
    gap: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`;

export const Right = styled.div`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;
