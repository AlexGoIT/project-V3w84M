import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeSection, WelcomeWrapper } from './Welcome.styled';
import WelcomeStatistics from 'components/StatisticsInfo';
import Container from 'components/Container/Container';

const Welcome = () => {
  return (
    <WelcomeSection>
      <Container>
        <WelcomeWrapper>
          <Slogan />
          <WelcomeNavigation />
        </WelcomeWrapper>
        <WelcomeStatistics />
      </Container>
    </WelcomeSection>
  );
};

export default Welcome;
