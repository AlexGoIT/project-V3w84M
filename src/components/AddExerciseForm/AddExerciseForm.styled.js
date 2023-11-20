import styled from 'styled-components';

export const ExersiceModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    gap: 16px;
  }
`;

export const ExersiceModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const ExersiceModalWrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 24px;

  @media screen and (min-width: 768px) {
    min-height: 454px;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0px;
  }
`;

export const ExersiceModalTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: start;
    width: 125px;
    height: 125px;
    margin-right: none;
  }
`;

export const ExersiceModalImg = styled.img`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: linear-gradient(
      0deg,
      rgba(4, 4, 4, 0.2) 0%,
      rgba(4, 4, 4, 0.2) 100%
    ),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
`;

export const ExersiceModalWindowBtn = styled.button`
  width: 153px;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #e6533c;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }

  &:hover,
  &:focus-visible {
    background: #ef8964;
  }
`;
