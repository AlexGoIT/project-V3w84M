import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;
