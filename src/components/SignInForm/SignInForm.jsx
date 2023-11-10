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
} from './SignInForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshed } from 'redux/auth/authSelectors';
import { login } from 'redux/auth/authOperations';
import Loader from 'components/Loader';

const SignInForm = () => {
  const initialValues = { email: '', password: '' };

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshed);

  const handleSubmit = (credentials, actions) => {
    console.log(credentials);

    actions.resetForm();

    dispatch(login(credentials));
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

      {isRefreshing && <Loader />}
    </AuthWrapper>
  );
};

export default SignInForm;
