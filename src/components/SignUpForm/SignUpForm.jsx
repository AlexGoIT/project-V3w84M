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
} from './SignUpForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthorized,
  selectIsRefreshed,
} from 'redux/auth/authSelectors';
import { register } from 'redux/auth/authOperations';
import Loader from 'components/Loader';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRefreshing = useSelector(selectIsRefreshed);
  const isAuthorized = useSelector(selectIsAuthorized);

  const handleSubmit = (credentials, actions) => {
    console.log(credentials);

    actions.resetForm();

    dispatch(register(credentials));

    if (isAuthorized) {
      navigate('/profile');
    }
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

      {isRefreshing && <Loader />}
    </AuthWrapper>
  );
};

export default SignUpForm;
