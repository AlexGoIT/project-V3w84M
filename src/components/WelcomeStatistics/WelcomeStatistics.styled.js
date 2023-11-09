import styled from '@emotion/styled';

export const WelcomeStatisticsWrapper = styled.div`
  margin-top: 171px;
  margin-left: auto;
  width: 400px;
  display: grid;
  gap: 56px 19px;

  color: #efede8;
`;

export const VideoTutorialWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  align-items: center;
  padding: 20px 23px;
  gap: 12px;

  border-radius: 12px;
  background-color: #303030;
`;
export const VideoTutorialImage = styled.svg`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: #ef8964;
`;
export const VideoTutorialInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const VideoTutorialText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const VideoTutorialCounter = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
`;

export const CalWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 23px;

  border-radius: 12px;
  background-color: #ef8964;
`;
export const CalImage = styled.svg`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  background-color: #efa082;
`;
export const CalInfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
`;
export const CalText = styled.p`
  font-family: Roboto;
  color: rgba(239, 237, 232, 0.65);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
`;
export const CalCounter = styled.p`
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -1px;
  text-transform: uppercase;
`;
