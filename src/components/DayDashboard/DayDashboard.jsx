import {
  DayDashboardArea,
  DashboardItem,
  TitleArea,
  Title,
  Value,
  Icon,
} from './DayDashboard.styled';
import sprite from 'assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCalculate } from 'redux/api/apiOperations';
import { selectCalculate } from 'redux/api/apiSelectors';

const DayDashboard = () => {
  const dispatch = useDispatch();
  const calculateData = useSelector(selectCalculate);
  const { dailyActivity, BMR } = calculateData;

  useEffect(() => {
    dispatch(fetchCalculate());
  }, [dispatch]);

  return (
    <DayDashboardArea>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#food`} />
          </Icon>
          <Title accent="true">Daily calorie intake</Title>
        </TitleArea>
        <Value>{BMR}</Value>
      </DashboardItem>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#dumbbell`} />
          </Icon>
          <Title accent="true">Daily physical activity</Title>
        </TitleArea>
        {dailyActivity && <Value>{dailyActivity} min</Value>}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#apple`} />
          </Icon>
          <Title accent="false">Calories consumed</Title>
        </TitleArea>
        <Value>0</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#fire`} />
          </Icon>
          <Title accent="false">Calories burned</Title>
        </TitleArea>
        <Value>0</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#bubble`} />
          </Icon>
          <Title accent="false">Calories remaining</Title>
        </TitleArea>
        <Value>{BMR}</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#figure`} />
          </Icon>
          <Title accent="false">Sports remaining</Title>
        </TitleArea>
        {dailyActivity && <Value>{dailyActivity} min</Value>}
      </DashboardItem>
    </DayDashboardArea>
  );
};

export default DayDashboard;
