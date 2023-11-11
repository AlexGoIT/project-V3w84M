import styled from '@emotion/styled';

export const DayDashboardArea = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 375px) {
    height: 328px;
    margin-bottom: 20px;
    row-gap: 20px;
    column-gap: 13px;
  }

  @media screen and (min-width: 768px) {
    height: 248px;
    margin-bottom: 32px;
    row-gap: 16px;
    column-gap: 16px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    height: 380px;
    margin-bottom: 48px;
    flex-direction: row;
  }
`;

const setBgColor = props => {
  switch (props.accent) {
    case 'true':
      return '#e6533c';
    case 'false':
      return 'rgba(239, 237, 232, 0.05)';
    default:
      return 'rgba(239, 237, 232, 0.05)';
  }
};

export const DashboardItem = styled.li`
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: ${setBgColor};
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 375px) {
    width: 161px;
    height: 96px;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Icon = styled.svg(
  {
    width: '20px',
    height: '20px',
  },
  ({ iconColor = '#EF8964' }) => ({
    fill: iconColor,
    stroke: iconColor,
  })
);

const setTitleColor = props => {
  switch (props.accent) {
    case 'true':
      return 'rgba(239, 237, 232, 0.8)';
    case 'false':
      return 'rgba(239, 237, 232, 0.4)';
    default:
      return 'rgba(239, 237, 232, 0.4)';
  }
};

export const Title = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${setTitleColor};
`;

export const Value = styled.p`
  font-weight: 700;
  color: #efede8;

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
