import { Formik } from 'formik';
import { signUpSchema } from 'helpers/schemas';
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

const SignUpForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <AuthWrapper>
      <AuthHeader>Sign Up</AuthHeader>

      <AuthParagraph>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </AuthParagraph>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
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
              Sign Up
            </AuthSubmitButton>
          </AuthStyledForm>
        )}
      </Formik>

      <AuthBottomText>
        Already have an account?{' '}
        <AuthStyledLink to="/signin">Sign In</AuthStyledLink>
      </AuthBottomText>
    </AuthWrapper>
  );
};

export default SignUpForm;
