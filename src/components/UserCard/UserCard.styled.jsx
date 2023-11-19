import styled from '@emotion/styled';

export const UserCardContainer = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 440px;
    padding-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 27px;
    justify-content: flex-start;
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #e6533c;
  border-radius: 50%;

  & > img {
    border-radius: 50%;
    width: 90px;
    height: 90px;

    @media screen and (min-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const AddAvatarButton = styled.button`
  padding: 0px;
  position: absolute;
  bottom: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    bottom: -16px;
  }

  & svg {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const NameContainer = styled.p`
  margin-top: 30px;
  color: #efede8;
  font-size: 18px;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;

export const UserInscription = styled.p`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`;

export const InformationText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  line-height: calc(16 / 12);
  font-feature-settings: 'clig' off, 'liga' off;
  color: #efede8;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`;

export const InformationCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 8px;
  width: 157px;
  height: 96px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #e6533c;
  padding: 14px;

  @media screen and (min-width: 768px) {
    padding-inline: 18px;
    width: 214px;
    height: 108px;
    position: relative;
  }
`;

export const InformationCounter = styled.span`
  color: #efede8;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    position: absolute;
    bottom: 14px;
    left: 18px;
  }
`;

export const NoticeContainer = styled.div`
  margin-top: 40px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 439px;
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
