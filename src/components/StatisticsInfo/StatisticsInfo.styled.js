import styled from '@emotion/styled';

export const StatisticsInfoWrapper = styled.div`
  /* position: relative; */
`;

export const VideoTutorialWrapper = styled.div`
  position: absolute;
  bottom: 186px;
  right: 108px;

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
  font-size: 16px;
  line-height: 1.5;
`;

export const VideoTutorialCounter = styled.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

export const CalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
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
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

export const CalCounter = styled.p`
  color: #efede8;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -1px;
  text-transform: uppercase;
`;
