import styled from 'styled-components';
import exerciseImage from '../../assets/images/exercise_1x.png';

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
   align-items: center;
   gap: 14px; 

  @media screen and (min-width: 768px) {
   flex-direction: column;
   gap: 32px;
  }
`;

export const ExersiceModalWrapperTwo = styled.div`
  display: flex;
   flex-direction: column;
   align-items: center;
   gap: 24px;

  @media screen and (min-width: 768px) {
   align-items: flex-end;
   gap: 254px;

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
    margin-left: 105px;
    margin-right: none;
  }
`;

export const ExersiceModalImg = styled.div`
  background: url(${exerciseImage}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.20);
`;

export const ExersiceModalWindowBtn = styled.button`
  width: 153px;
  color: #EFEDE8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  padding: 12px 0;
  border-radius: 12px;
  background: #E6533C;  
  border-color: #E6533C;  

  &:hover {
    background: #EF8964;   
  }
`;