import {
  DayDashboardArea,
  DashboardItem,
  TitleArea,
  Title,
  Value,
  Icon,
} from './DayDashboard.styled';
import sprite from 'assets/images/sprite.svg';

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
        {data && Object.keys(data).length !== 0 && <Value>{userBMR}</Value>}
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
        redBorder={caloriesRemaining >= 0 ? 'false' : 'true'}
      >
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#bubble`} />
          </Icon>
          <Title accent="false">Calories remaining</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && (
          <Value>{caloriesRemaining}</Value>
        )}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#figure`} />
          </Icon>
          <Title accent="false">Sports remaining</Title>
        </TitleArea>
        {data && Object.keys(data).length !== 0 && (
          <Value>{sportsRemaining} min</Value>
        )}
      </DashboardItem>
    </DayDashboardArea>
  );
};

export default DayDashboard;
