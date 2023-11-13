import SignInForm from 'components/SignInForm';
import { AuthContainer, SignInSection } from './SignIn.styled';

const SignIn = () => {
  return (
    <SignInSection>
      <AuthContainer>
        <SignInForm />
      </AuthContainer>
    </SignInSection>
  );
};

export default SignIn;
