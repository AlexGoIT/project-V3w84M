import {
  DayDashboardArea,
  DashboardItem,
  TitleArea,
  Title,
  Value,
  Icon,
} from './DayDashboard.styled';
import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';

const DayDashboard = ({ data }) => {
  const {
    dailyPhysicalActivity,
    userBMR,
    caloriesBurnedSum,
    caloriesConsumedSum,
    caloriesRemaining,
    sportsRemaining,
  } = data;

  return (
    <DayDashboardArea>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#food`} />
          </Icon>
          <Title accent="true">Daily calorie intake</Title>
        </TitleArea>
        {(data && Object.keys(data).length) !== 0 && userBMR ? (
          <Value>{userBMR}</Value>
        ) : (
          <Value>0</Value>
        )}
      </DashboardItem>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#dumbbell`} />
          </Icon>
          <Title accent="true">Daily physical activity</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && (
          <Value>{dailyPhysicalActivity} min</Value>
        )}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#apple`} />
          </Icon>
          <Title accent="false">Calories consumed</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && (
          <Value>{caloriesConsumedSum}</Value>
        )}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#fire`} />
          </Icon>
          <Title accent="false">Calories burned</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && (
          <Value>{caloriesBurnedSum}</Value>
        )}
      </DashboardItem>
      <DashboardItem
        accent="false"
        borderColor={userBMR && caloriesRemaining < 0 ? 'red' : 'default'}
      >
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#bubble`} />
          </Icon>
          <Title accent="false">Calories remaining</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && userBMR ? (
          <Value>{caloriesRemaining}</Value>
        ) : (
          <Value>0</Value>
        )}
      </DashboardItem>
      <DashboardItem
        accent="false"
        borderColor={sportsRemaining >= 0 ? 'default' : 'green'}
      >
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#figure`} />
          </Icon>
          <Title accent="false">Sports remaining</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && (
          <Value>
            {sportsRemaining >= 0 ? <span></span> : <span>+</span>}
            {Math.abs(sportsRemaining)} min
          </Value>
        )}
      </DashboardItem>
    </DayDashboardArea>
  );
};

DayDashboard.propTypes = {
  data: PropTypes.shape({
    dailyPhysicalActivity: PropTypes.number,
    userBMR: PropTypes.number,
    caloriesBurnedSum: PropTypes.number,
    caloriesConsumedSum: PropTypes.number,
    caloriesRemaining: PropTypes.number,
    sportsRemaining: PropTypes.number,
  }),
};

export default DayDashboard;
