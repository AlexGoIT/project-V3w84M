import SignInForm from 'components/SignInForm';
import { AuthContainer, SignInSection } from './SignIn.styled';
import Logo from 'components/Logo';

const SignIn = () => {
  return (
    <SignInSection>
      <AuthContainer>
        <Logo />
        <SignInForm />
      </AuthContainer>
    </SignInSection>
  );
};

export default SignIn;
