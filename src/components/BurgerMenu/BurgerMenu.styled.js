import styled from '@emotion/styled';

export const ButtonMenu = styled.button`
  width: 24px;
  height: 24px;
  display: block;

  background-color: inherit;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const IconBurgerMenu = styled.svg`
  width: 18px;
  height: 12px;
  fill: orange;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 16px;
  }
`;
