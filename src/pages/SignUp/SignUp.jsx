import SignUpForm from 'components/SignUpForm';
import { AuthContainer, SignUpSection } from './SignUp.styled';

const SignUp = () => {
  return (
    <>
      <SignUpSection>
        <AuthContainer>
          <SignUpForm />
        </AuthContainer>
      </SignUpSection>
    </>
  );
};

export default SignUp;
