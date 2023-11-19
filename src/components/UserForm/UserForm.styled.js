import styled from '@emotion/styled';
import { Form } from 'formik';

export const UserFormStyled = styled(Form)`
  width: 335px;
  margin-inline: auto;

  @media screen and (min-width: 768px) {
    width: 696px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const SectionTitle = styled.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const UserFormFieldWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 341px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const WrapperInputField = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: none;
    margin-bottom: 16px;
  }
`;

export const WrappInput = styled.div`
  position: relative;

  label {
    display: inline-block;
    margin-bottom: 4px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 12px;
    line-height: calc(18 / 12);

    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: calc(18 / 14);
    }
  }
`;

export const InputField = styled.input`
  width: 160px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 163px;
    padding: 14px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background-color: transparent;
    color: #efede8;
  }
`;

export const UserFormBloodSexWrapper = styled.div`
  max-height: 20px;
  margin-bottom: 40px;
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
    max-height: 24px;
    margin-bottom: 32px;
    gap: 32px;
  }
`;

export const UserFormBloodWrapper = styled.div`
  width: 168px;
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 188px;
  }
`;

export const UserFormSexWrapper = styled.div`
  width: 141px;
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`;

export const WrapperRadio = styled.div`
  @media screen and (min-width: 1440px) {
    display: block;
  }

  .radio {
    position: relative;
  }

  .radio-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .radio-label {
    padding-left: 28px;
    font-size: 14px;
    line-height: calc(18 / 14);
    letter-spacing: -0.28px;
    color: #efede8;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      padding-left: 32px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }

  .radio-label::before {
    box-sizing: border-box;
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  .radio-label::after {
    box-sizing: border-box;
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid #ef8964;
    background-color: #ef8964;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    z-index: 2;

    @media screen and (min-width: 768px) {
      left: 5px;
    }
  }

  .radio-input:checked + .radio-label::before {
    border-color: #ef8964;
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`;

export const WrapperLevel = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }

  & div {
    padding-left: 28px;

    @media screen and (min-width: 768px) {
      padding-left: 32px;
    }
  }

  .radio-label {
    padding-left: 0px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 12px 40px;
  border-radius: 12px;
  background: #e6533c;
  color: #efede8;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    padding: 16px 50px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
  &:hover:not([disabled]),
  &:focus-visible:not([disabled]) {
    background: #ef8964;
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
    cursor: not-allowed;
  }
`;

export const UserFormError = styled.span`
  max-width: fit-content;
  padding: 3px 6px;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  top: 72px;
  left: 0px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 10px;
  line-height: calc(15 / 10);
  letter-spacing: 0.12px;
  color: #d80027;
  background-color: #1c1c1c;
  border-radius: 4px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1em;
    border: 0.5rem solid transparent;
    border-top: none;
    border-bottom-color: #1c1c1c;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }

  & svg {
    width: 12px;
    height: 12px;
    fill: #d80027;

    @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
    }
  }
`;
