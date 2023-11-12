import styled from '@emotion/styled';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

export const AuthWrapper = styled.div`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 496px;
  }
`;

export const AuthHeader = styled.h1`
  color: #efede8;
  font-size: 24px;
  line-height: calc(28 / 24);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(44 / 32);
    margin-bottom: 16px;
  }
`;

export const AuthParagraph = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-bottom: 32px;
  }
`;

export const AuthStyledForm = styled(Form)`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 364px;
    gap: 40px;
  }
`;

export const AuthSubmitButton = styled.button`
  margin-top: 10px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #efede8;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 12px;
  background: #e6533c;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    padding: 16px 60px;
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

export const AuthBottomText = styled.span`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const AuthStyledLink = styled(Link)`
  color: #efede8;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: underline;
`;
