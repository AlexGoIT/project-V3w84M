import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import avocadoImage from '../../../assets/images/avocado_1x.png';

export const DivSuccess = styled.div`
  display: flex;
  flex-direction: column;   
  width: 157px;
  justify-content: center;
  align-items: center;
`;

export const DivImg = styled.div`
  background: url(${avocadoImage}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 84px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TitleH2 = styled.h2` 
  color: #EFEDE8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 16px;
`;

export const DivCalories = styled.div`
display: flex;
  justify-content: center;  
  gap: 8px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const CaloriesP = styled.p`  
  color: rgba(239, 237, 232, 0.30);
  font-size: 14px;
  line-height: 1.3;
`;

export const ValueCalories = styled.p`
  color: #E6533C;
  font-size: 14px;
  line-height: 1.3;
`;

export const ButtonAdd = styled.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color:  white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: #E6533C;
  line-height: 1.13;
  transition:    
    background 300ms ease-in-out;
  :hover {    
    background:  #EF8964;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;

export const DivLink = styled(Link)`
  display: flex;
  justify-content: center; 
  gap: 8px;

`;

export const LinkText = styled.p`
  color: rgba(239, 237, 232, 0.30);
  font-size: 14px;
  line-height: 1.29; 
  
  transition: color 300ms ease-in-out;
`;