import SignUpForm from 'components/SignUpForm';
import { SignUpSection } from './SignUp.styled';
import Container from 'components/Container';

const SignUp = () => {
  return (
    <>
      <SignUpSection>
        <Container>
          <SignUpForm />
        </Container>
      </SignUpSection>
    </>
  );
};

export default SignUp;
