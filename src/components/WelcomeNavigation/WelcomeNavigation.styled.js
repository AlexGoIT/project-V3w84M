import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WelcomeNavigationList = styled.ul`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const WelcomeNavigationItem = styled.li`
  display: flex;
  border-radius: 12px;

  color: #efede8;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 375px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SignUpLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  border-radius: 12px;
  color: #efede8;
  background-color: #e6533c;

  &:is(:hover, :focus) {
    background-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }
`;

export const SignInLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:is(:hover, :focus) {
    border: 1px solid #e6533c;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }
`;
