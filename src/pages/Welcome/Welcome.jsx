import Container from 'components/Container';
import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeWrapper } from './Welcome.styled';
import WelcomeStatistics from 'components/StatisticsInfo';

const Welcome = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <Slogan />
        <WelcomeNavigation />
      </WelcomeWrapper>
      <WelcomeStatistics />
    </Container>
  );
};

export default Welcome;
