import Container from 'components/Container';
import Slogan from 'components/Slogan';

import { WelcomeWrapper } from './Welcome.styled';
import WelcomeNavigation from 'components/WelcomeNavigation';

const Welcome = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <Slogan />
        <WelcomeNavigation />
      </WelcomeWrapper>
    </Container>
  );
};

export default Welcome;
