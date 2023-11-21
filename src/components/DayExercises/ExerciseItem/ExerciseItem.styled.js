import styled from '@emotion/styled';

export const ExerciseDiv = styled.div`
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #efede8;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 81px 80px 76px 20px;
  grid-template-rows: auto;
  grid-template-areas:
    'grid1 grid1 grid1 grid1'
    'grid2 grid2 grid2 grid2'
    'grid3 grid3 grid3 grid3'
    'grid4 grid5 grid6 grid7';

  @media screen and (min-width: 768px) {
    font-size: 16px;
    grid-gap: 8px;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    grid-template-rows: 40px;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6 grid7';
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
  }
`;

export const Grid1 = styled.div`
  grid-area: grid1;
`;
export const Grid2 = styled.div`
  grid-area: grid2;
`;
export const Grid3 = styled.div`
  grid-area: grid3;
`;
export const Grid4 = styled.div`
  grid-area: grid4;
`;
export const Grid5 = styled.div`
  grid-area: grid5;
`;
export const Grid6 = styled.div`
  grid-area: grid6;
`;
export const Grid7 = styled.div`
  grid-area: grid7;
`;

export const Title = styled.p`
  color: #ef8964;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Column = styled.p`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-inline: 14px;
  width: 100%;
  height: 38px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;

export const ShorterTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    :hover {
      font-size: 12px;
    }
  }
`;

export const ButtonEl = styled.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`;

export const DeleteIcon = styled.svg(
  {
    width: '20px',
    height: '20px',
  },
  ({ iconColor = '#EF8964' }) => ({
    fill: iconColor,
    stroke: iconColor,
  })
);
