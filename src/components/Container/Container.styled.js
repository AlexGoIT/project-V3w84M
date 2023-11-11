import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-inline: 96px;
  }
`;
