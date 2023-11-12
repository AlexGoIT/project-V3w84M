import Container from 'components/Container';
import SignInForm from 'components/SignInForm';
import { SignInSection } from './SignIn.styled';

const SignIn = () => {
  return (
    <SignInSection>
      <Container>
        <SignInForm />
      </Container>
    </SignInSection>
  );
};

export default SignIn;
