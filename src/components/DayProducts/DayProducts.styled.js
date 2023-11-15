import styled from '@emotion/styled';

const setHeight = props => {
  switch (props.dimention) {
    case 'true':
      return '824px';
    case 'false':
      return '335px';
    default:
      return '335px';
  }
};

export const DayProductsArea = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;

  @media screen and (min-width: 375px) {
    height: ${setHeight};
  }

  @media screen and (min-width: 768px) {
    height: 234px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 375px) {
    margin-bottom: 22px;
  }

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

  @media screen and (min-width: 375px) {
    font-size: 14px;
  }

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

  @media screen and (min-width: 375px) {
    font-size: 14px;
  }

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
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    grid-template-rows: auto;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6';
    color: #ef8964;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 212px 166px 105px 105px 110px 20px;
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

export const ShorterTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const List = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 38px;
    overflow-y: scroll;
    height: 786px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    height: 136px;
  }
`;
