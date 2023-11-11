import {
  CalCounter,
  CalInfoWrapper,
  CalText,
  CalWrapper,
  ImageThumb,
  VideoTutorialCounter,
  VideoTutorialInfoWrapper,
  VideoTutorialText,
  VideoTutorialWrapper,
  StatisticsInfoWrapper,
} from './StatisticsInfo.styled';
import sprite from 'assets/images/sprite.svg';

const StatisticsInfo = () => {
  return (
    <StatisticsInfoWrapper>
      <VideoTutorialWrapper>
        <ImageThumb w={40} h={40} bgColor={'#ef8964'}>
          <svg width="20" height="20" fill="#efede8">
            <use href={`${sprite}#play-2`} />
          </svg>
        </ImageThumb>
        <VideoTutorialInfoWrapper>
          <VideoTutorialCounter>350+</VideoTutorialCounter>
          <VideoTutorialText>Video tutorial</VideoTutorialText>
        </VideoTutorialInfoWrapper>
      </VideoTutorialWrapper>

      <CalWrapper>
        <ImageThumb w={24} h={24} bgColor={'#efa082'}>
          <svg width="16" height="16" fill="#efede8">
            <use href={`${sprite}#figure`} />
          </svg>
        </ImageThumb>
        <CalInfoWrapper>
          <CalCounter>500</CalCounter>
          <CalText>cal</CalText>
        </CalInfoWrapper>
      </CalWrapper>
    </StatisticsInfoWrapper>
  );
};

export default StatisticsInfo;
