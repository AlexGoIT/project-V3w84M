import styled from '@emotion/styled';

export const StatisticsInfoWrapper = styled.div``;

export const VideoTutorialWrapper = styled.div`
  position: absolute;
  bottom: 250px;
  right: 130px;

  display: flex;
  width: 206px;
  align-items: center;
  padding: 20px 23px;
  gap: 12px;

  border-radius: 12px;
  background-color: #303030;

  @media screen and (min-width: 768px) {
    bottom: 214px;
    right: 231px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 320px;
    right: 464px;
  }
`;

export const ImageThumb = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '50%',
  },
  ({ w, h, bgColor }) => ({
    width: w,
    height: h,
    backgroundColor: bgColor,
  })
);

export const VideoTutorialInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const VideoTutorialText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const VideoTutorialCounter = styled.p`
  color: #efede8;
  font-weight: 700;

  font-size: 16px;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const CalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
  gap: 8px;
  padding: 20px 23px;
  border-radius: 12px;
  background-color: #ef8964;

  @media screen and (min-width: 375px) {
    bottom: 40px;
    right: 20px;
  }

  @media screen and (min-width: 768px) {
    bottom: 48px;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 171px;
    right: 32px;
  }
`;

export const CalInfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
`;

export const CalText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;

  font-size: 12px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.5;
  }
`;

export const CalCounter = styled.p`
  color: #efede8;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-weight: 700;

  font-size: 24px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

// =====================================================================
export const NumberUsersWrapper = styled.div`
  position: absolute;
  bottom: 370px;
  right: 150px;

  display: flex;
  width: 206px;
  align-items: center;
  padding: 20px 23px;
  gap: 12px;

  border-radius: 12px;
  background-color: #303030;

  @media screen and (min-width: 768px) {
    bottom: 550px;
    right: 100px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 170px;
    right: 600px;
  }
`;

export const NumberUsersInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumberUsers = styled.p`
  color: #efede8;
  font-weight: 700;

  font-size: 16px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const NumberUsersText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-weight: 400;

  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1;
  }
`;

// =====================================================================

export const TotalHoursWrapper = styled.div`
  position: absolute;
  bottom: 480px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  gap: 8px;
  padding: 20px 23px;
  border-radius: 12px;
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    bottom: 400px;
    right: 10px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 350px;
    right: 100px;
  }
`;

export const TotalHoursInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
`;

export const TotalHours = styled.p`
  color: #efede8;
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  font-size: 24px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const TotalHoursText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;

  font-size: 12px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.5;
  }
`;

// =====================================================================

export const TotalNumberTrainingWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 200px;

  display: flex;
  align-items: center;
  padding: 20px 23px;
  gap: 12px;

  border-radius: 12px;
  background-color: #303030;

  @media screen and (min-width: 768px) {
    right: 240px;
  }
`;

export const TotalNumberTrainingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TotalNumberTraining = styled.p`
  color: #efede8;
  font-weight: 700;

  font-size: 16px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const TotalNumberTrainingText = styled.p`
  color: rgba(239, 237, 232, 0.65);

  font-size: 12px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1;
  }
`;
