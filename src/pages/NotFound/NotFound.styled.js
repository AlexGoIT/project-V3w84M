import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
 position: relative;
  display: inline-flex;
  height: 100vh;
  width: 240px;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #E6533C;
      @media screen and (min-width: 768px) {
          width: 420px;  
      }

      @media screen and (min-width: 1440px) {
         width: 669px;
      }
`;

export const LogoWrap = styled.div`
      position: absolute;
      top: 24px;
      left: 20px;

      @media screen and (min-width: 768px) {
         top: 32px;
         left: 32px;
      }

      @media screen and (min-width: 1440px) {
         top: 32px;
         left: 96px;
      }
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
      @media screen and (min-width: 768px) {
         gap: 28px;
      }
`;

export const NotFoundTitle = styled.b`
  color: #EFEDE8;  
  font-size: 66px;  
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66;
      @media screen and (min-width: 768px) {    
         font-size: 160px;   
         line-height: 0.94;
         letter-spacing: 1.6px;
      }
`;

export const NotFoundText = styled.p`
   width: 200px;
   color: #EFEDE8;
   font-size: 14px;
   line-height: 1.29;
      @media screen and (min-width: 768px) {
         width: 356px;  
         font-size: 16px;  
         line-height: 1.5;
      }
      @media screen and (min-width: 1440px) {
         width: 477px;       
      }
`;

export const BackHomeBtn = styled(Link)`
   display: inline-flex;
   padding: 12px 40px;        
   justify-content: center;
   align-items: center;
   width: 149px;         
   border-radius: 12px;
   border: 1px solid rgba(239, 237, 232, 0.30);
   color: #EFEDE8;   
   font-size: 16px;   
   font-weight: 500;
   line-height: 1.13;
      @media screen and (min-width: 768px) {       
         padding: 16px 60px;  
         width: 206px;   
         font-size: 20px;
         line-height: 1.2;
      }
`;