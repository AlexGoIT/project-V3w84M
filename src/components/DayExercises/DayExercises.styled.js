import styled from '@emotion/styled';

const setAreaHeight = props => {
  switch (props.dimentionArea) {
    case 'true':
      return '1010px';
    case 'false':
      return '335px';
    default:
      return '335px';
  }
};

export const DayExercisesArea = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${setAreaHeight};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Add = styled.p`
  font-weight: 500;
  color: #e6533c;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #efede8;
  }

  &:hover,
  &:focus {
    color: #efede8;
  }
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ArrowIcon = styled.svg(
  {
    width: '16px',
    height: '16px',
  },
  ({ iconColor = '#e6533c' }) => ({
    fill: iconColor,
    stroke: iconColor,
  })
);

export const Message = styled.p`
  font-weight: 400;
  color: rgba(239, 237, 232, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TableArea = styled.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`;

export const TableHeader = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    grid-template-rows: auto;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6 grid7';
    color: #ef8964;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
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

export const ShorterTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all;

  :hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    :hover {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    :hover {
      font-size: inherit;
    }
  }
`;

const setListHeight = props => {
  switch (props.dimentionList) {
    case 'true':
      return '930px';
    case 'false':
      return '335px';
    default:
      return '300px';
  }
};

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${setListHeight};
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
    width: 6px;
    height: 50px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    height: 136px;
  }
`;
