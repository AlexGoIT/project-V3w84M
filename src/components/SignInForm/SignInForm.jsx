import { Formik } from 'formik';
import { signInSchema } from 'helpers/schemas';
import CustomInput from 'components/CustomInput';
import {
  AuthBottomText,
  AuthHeader,
  AuthParagraph,
  AuthStyledForm,
  AuthStyledLink,
  AuthSubmitButton,
  AuthWrapper,
} from 'assets/sharedStyles/AuthForms.styled';

const SignInForm = () => {
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <AuthWrapper>
      <AuthHeader>Sign In</AuthHeader>
      <AuthParagraph>
        Welcome! Please enter your credentials to login to the platform:
      </AuthParagraph>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, values }) => (
          <AuthStyledForm>
            {Object.keys(values).map(value => {
              return (
                <CustomInput
                  key={value}
                  name={value}
                  id={value}
                  required
                  placeholder="."
                />
              );
            })}

            <AuthSubmitButton type="submit" disabled={!(isValid && dirty)}>
              Sign In
            </AuthSubmitButton>
          </AuthStyledForm>
        )}
      </Formik>

      <AuthBottomText>
        Don’t have an account?{' '}
        <AuthStyledLink to="/signup">Sign Up</AuthStyledLink>
      </AuthBottomText>
    </AuthWrapper>
  );
};

export default SignInForm;
