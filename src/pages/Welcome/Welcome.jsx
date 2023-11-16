import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeSection, WelcomeWrapper } from './Welcome.styled';
import WelcomeStatistics from 'components/StatisticsInfo';

const Welcome = () => {
  return (
    <WelcomeSection>
      <WelcomeWrapper>
        <Slogan />
        <WelcomeNavigation />
        <WelcomeStatistics />
      </WelcomeWrapper>
    </WelcomeSection>
  );
};

export default Welcome;
