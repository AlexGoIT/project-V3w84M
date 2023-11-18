import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 375px;
  padding-inline: 20px;
  padding-top: 100px;
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-inline: 32px;
    padding-top: 156px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-inline: 96px;
  }
`;

export const WrapperContent = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;

export const WrapperForm = styled.div`
  padding-block: 20px 66px;

  @media screen and (min-width: 768px) {
    padding-block: 40px 54px;
  }

  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-block: 32px 44px;
    padding-right: 64px;
  }
`;

export const ProfileTitle = styled.h1`
  color: #efede8;
  font-weight: 700;
  line-height: 1.375;

  @media screen and (min-width: 375px) {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
