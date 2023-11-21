import styled from '@emotion/styled';

export const DiaryWrapper = styled.div`
  padding-top: 62px;
  padding-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 85px;
    padding-bottom: 68px;
  }
`;

export const ForPosition = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`;

export const DiaryContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'grid2'
    'grid1';
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Left = styled.div`
  grid-area: grid1;
  display: flex;
  flex-direction: column;
  width: 335px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`;

export const Right = styled.div`
  grid-area: grid2;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;
