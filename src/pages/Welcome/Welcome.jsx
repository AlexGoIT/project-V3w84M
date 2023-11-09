import Container from 'components/Container';
import Slogan from 'components/Slogan';
import { WelcomeWrapper } from './Welcome.styled';

const Welcome = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <Slogan />
      </WelcomeWrapper>
    </Container>
  );
};

export default Welcome;
