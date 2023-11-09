import { useField } from 'formik';
import { useState } from 'react';
import {
  AuthErrorIcon,
  AuthErrorMessage,
  AuthInput,
  AuthInputWrapper,
  AuthLabel,
  AuthSuccessIcon,
  AuthSuccessMessage,
  PasswordToggler,
  PasswordTogglerIcon,
} from './CustomInput.styled';
import sprite from '../../../assets/images/sprite.svg';

const CustomInput = props => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const showError = meta.touched && meta.error;
  const showSuccess = meta.touched && !meta.error;

  const changeInputType = () => {
    if (props.name === 'name' || (props.name === 'password' && showPassword))
      return 'text';
    else return props.name;
  };

  const validationStatus = () => {
    if (showError) {
      return 'validation-failed';
    }
    if (showSuccess) {
      return 'validation-success';
    }
    return;
  };

  const successMessages = {
    name: 'Nice to meet you!',
    email: 'Your email looks good and is ready for action.',
    password: 'Password is okay.',
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        type={changeInputType()}
        {...field}
        {...props}
        className={validationStatus()}
      />
      <AuthLabel htmlFor={props.id || props.name}>{props.name}</AuthLabel>
      {props.name === 'password' && (
        <PasswordToggler
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
        >
          <PasswordTogglerIcon width="20" height="20">
            <use href={`${sprite}#${showPassword ? 'eye-off' : 'eye'}`}></use>
          </PasswordTogglerIcon>
        </PasswordToggler>
      )}

      {showError && (
        <AuthErrorMessage>
          <AuthErrorIcon>
            <use href={`${sprite}#error`}></use>
          </AuthErrorIcon>
          {meta.error}
        </AuthErrorMessage>
      )}
      {showSuccess && (
        <AuthSuccessMessage>
          <AuthSuccessIcon>
            <use href={`${sprite}#success`}></use>
          </AuthSuccessIcon>
          {successMessages[props.name]}
        </AuthSuccessMessage>
      )}
    </AuthInputWrapper>
  );
};

export default CustomInput;
