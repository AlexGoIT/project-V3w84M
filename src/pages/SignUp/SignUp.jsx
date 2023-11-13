import SignUpForm from 'components/SignUpForm';
import { AuthContainer, SignUpSection } from './SignUp.styled';
import Logo from 'components/Logo';

const SignUp = () => {
  return (
    <>
      <SignUpSection>
        <AuthContainer>
          <Logo />
          <SignUpForm />
        </AuthContainer>
      </SignUpSection>
    </>
  );
};

export default SignUp;
