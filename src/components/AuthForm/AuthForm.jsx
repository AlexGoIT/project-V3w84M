import { Formik } from 'formik';
import {
  AuthBottomText,
  AuthHeader,
  AuthParagraph,
  AuthStyledForm,
  AuthStyledLink,
  AuthSubmitButton,
  AuthWrapper,
} from './AuthForm.styled';
import { signInSchema, signUpSchema } from 'helpers/schemas';
import CustomInput from './CustomInput';

const AuthForm = ({ formType }) => {
  let initialValues = { name: '', email: '', password: '' };
  let headerText = 'Sign Up';
  let paragraphText =
    'Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.';
  let bottomText = (
    <AuthBottomText>
      Already have an account?{' '}
      <AuthStyledLink to="/signin">Sign In</AuthStyledLink>
    </AuthBottomText>
  );

  if (formType === 'SignInForm') {
    initialValues = { email: '', password: '' };
    headerText = 'Sign In';
    paragraphText =
      'Welcome! Please enter your credentials to login to the platform:';
    bottomText = (
      <AuthBottomText>
        Don’t have an account?{' '}
        <AuthStyledLink to="/signup">Sign Up</AuthStyledLink>
      </AuthBottomText>
    );
  }

  return (
    <AuthWrapper>
      <AuthHeader>{headerText}</AuthHeader>
      <AuthParagraph>{paragraphText}</AuthParagraph>
      <Formik
        initialValues={initialValues}
        validationSchema={
          formType === 'SignInForm' ? signInSchema : signUpSchema
        }
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
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
              {headerText}
            </AuthSubmitButton>
          </AuthStyledForm>
        )}
      </Formik>
      {bottomText}
    </AuthWrapper>
  );
};

export default AuthForm;
