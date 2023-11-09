import {
  CalCounter,
  CalImage,
  CalInfoWrapper,
  CalText,
  CalWrapper,
  VideoTutorialCounter,
  VideoTutorialImage,
  VideoTutorialInfoWrapper,
  VideoTutorialText,
  VideoTutorialWrapper,
  WelcomeStatisticsWrapper,
} from './WelcomeStatistics.styled';

const WelcomeStatistics = () => {
  return (
    <WelcomeStatisticsWrapper>
      <VideoTutorialWrapper>
        <VideoTutorialImage></VideoTutorialImage>
        <VideoTutorialInfoWrapper>
          <VideoTutorialCounter>350+</VideoTutorialCounter>
          <VideoTutorialText>Video tutorial</VideoTutorialText>
        </VideoTutorialInfoWrapper>
      </VideoTutorialWrapper>

      <CalWrapper>
        <CalImage></CalImage>
        <CalInfoWrapper>
          <CalCounter>500</CalCounter>
          <CalText>Cal</CalText>
        </CalInfoWrapper>
      </CalWrapper>
    </WelcomeStatisticsWrapper>
  );
};

export default WelcomeStatistics;
