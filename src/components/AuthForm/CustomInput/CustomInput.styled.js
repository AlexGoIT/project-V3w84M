import styled from '@emotion/styled';

export const AuthInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const AuthLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  text-transform: capitalize;
  color: rgba(239, 237, 232, 0.6);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  input:focus + &,
  input:not(:placeholder-shown) + & {
    top: -18px;
    transform: translateY(0%);
    left: 0px;
    font-size: 12px;
    line-height: 140%;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const AuthInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-height: 46px;
  padding: 14px;
  background-color: transparent;
  color: #efede8;
  caret-color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    max-height: 52px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  &:focus-visible {
    border-color: #e6533c;
  }

  &.validation-failed {
    border-color: #d80027;
  }

  &.validation-success {
    border-color: #3cbf61;
  }

  &::placeholder {
    color: transparent;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px rgb(4, 4, 4) inset;
    -webkit-text-fill-color: #efede8;
    caret-color: #efede8;
  }
`;

export const PasswordToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
`;

export const PasswordTogglerIcon = styled.svg`
  fill: #efede8;
`;

export const AuthErrorMessage = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  bottom: -18px;
  left: 0px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 10px;
  line-height: calc(15 / 10);
  letter-spacing: 0.12px;
  color: #d80027;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`;

export const AuthSuccessIcon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const AuthErrorIcon = styled(AuthSuccessIcon)`
  fill: #d80027;
`;

export const AuthSuccessMessage = styled(AuthErrorMessage)`
  color: #3cbf61;
`;
