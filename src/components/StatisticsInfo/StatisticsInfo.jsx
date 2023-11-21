import { useDispatch, useSelector } from 'react-redux';
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
  NumberUsersWrapper,
  NumberUsersInfo,
  NumberUsersText,
  NumberUsers,
  TotalHoursWrapper,
  TotalHoursInfo,
  TotalHoursText,
  TotalHours,
  TotalNumberTrainingWrapper,
  TotalNumberTrainingInfo,
  TotalNumberTraining,
  TotalNumberTrainingText,
} from './StatisticsInfo.styled';
import sprite from 'assets/images/sprite.svg';
import { selectStatistics } from 'redux/api/apiSelectors';
import { useEffect } from 'react';
import { fetchStatistics } from 'redux/api/apiOperations';

const StatisticsInfo = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  if (!statistics) {
    return;
  }

  const formatNumber = number => {
    if (number < 1000) {
      return number;
    } else {
      return `${Math.floor(number / 1000)}k+`;
    }
  };

  const {
    numberVideoTraining,
    totalCaloriesBurnedAllUsers,
    numberUsers,
    totalHoursSpentTrainingAllUsers,
    totalNumberTrainingAllUsers,
  } = statistics;

  return (
    <StatisticsInfoWrapper>
      <VideoTutorialWrapper>
        <ImageThumb w={40} h={40} bgColor={'#ef8964'}>
          <svg width="20" height="20" fill="#efede8">
            <use href={`${sprite}#play-2`} />
          </svg>
        </ImageThumb>
        <VideoTutorialInfoWrapper>
          <VideoTutorialCounter>{numberVideoTraining}</VideoTutorialCounter>
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
          <CalCounter>{formatNumber(totalCaloriesBurnedAllUsers)}</CalCounter>
          <CalText>cal</CalText>
        </CalInfoWrapper>
      </CalWrapper>

      <NumberUsersWrapper>
        <NumberUsersInfo>
          <NumberUsers>{formatNumber(numberUsers)}</NumberUsers>
          <NumberUsersText>users</NumberUsersText>
        </NumberUsersInfo>
      </NumberUsersWrapper>

      <TotalHoursWrapper>
        <TotalHoursInfo>
          <TotalHours>
            {formatNumber(totalHoursSpentTrainingAllUsers)}
          </TotalHours>
          <TotalHoursText>Total Hours</TotalHoursText>
        </TotalHoursInfo>
      </TotalHoursWrapper>

      <TotalNumberTrainingWrapper>
        <TotalNumberTrainingInfo>
          <TotalNumberTraining>
            {formatNumber(totalNumberTrainingAllUsers)}
          </TotalNumberTraining>
          <TotalNumberTrainingText>
            Total number Training
          </TotalNumberTrainingText>
        </TotalNumberTrainingInfo>
      </TotalNumberTrainingWrapper>
    </StatisticsInfoWrapper>
  );
};

export default StatisticsInfo;
