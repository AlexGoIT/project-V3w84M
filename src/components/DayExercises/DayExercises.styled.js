import styled from '@emotion/styled';

export const DayExercisesArea = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;

  @media screen and (min-width: 375px) {
    height: 335px;
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

export const TableArea = styled.div`
  @media screen and (min-width: 1440px) {
    padding-inline: 16px;
  }
`;

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
