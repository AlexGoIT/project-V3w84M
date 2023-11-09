import Container from 'components/Container';
import Logo from 'components/Logo';
import Slogan from 'components/Slogan';
import WelcomeNavigation from 'components/WelcomeNavigation';

import { WelcomeWrapper } from './Welcome.styled';

const Welcome = () => {
  return (
    <Container>
      <Logo iconColor="#e6533c" />
      <WelcomeWrapper>
        <Slogan />
        <WelcomeNavigation />
      </WelcomeWrapper>
    </Container>
  );
};

export default Welcome;
