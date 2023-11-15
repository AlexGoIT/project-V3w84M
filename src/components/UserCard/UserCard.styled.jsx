import styled from '@emotion/styled';

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  margin-top: 40px;

  & > label,
  & > button {
    position: absolute;
    bottom: -16px;
  }

  & > img {
    border-radius: 50%;
    width: 87px;
    height: 87px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;
export const AvatarLabel = styled.label``;
export const AvatarInput = styled.input``;

export const AddAvatarButton = styled.button`
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;
`;

export const NameContainer = styled.div`
  font-size: 20px;
  color: efede8;
  margin-top: 36px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const UserInscription = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #efede8;
  opacity: 0.5;
  margin-top: 4px;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 35px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const InformationText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #efede8;
  opacity: 0.8;
  text-align: center;
  white-space: pre-line;
  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
`;

export const CaloriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 8px;
  width: 157px;
  height: 96px;
  background-color: #e6533c;
  border-radius: 5%;
  padding: 14px;
  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
    position: relative;
  }
`;

export const CaloriesStaticInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ActiveDataCalories = styled.span`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  color: #efede8;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    position: absolute;
    bottom: 14px;
    left: 18px;
  }
`;

export const ActiveDataMinutes = styled.span`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  color: #efede8;
  margin-bottom: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  width: 165px;
  height: 96px;
  background-color: #e6533c;
  border-radius: 5%;
  padding: 14px;
  @media screen and (min-width: 768px) {
    width: 209px;
    height: 108px;
  }
`;

export const ActivityStaticInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImageContainer = styled.div``;

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
