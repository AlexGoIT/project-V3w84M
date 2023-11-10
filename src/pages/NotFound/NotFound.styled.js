import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
 position: relative;
  display: inline-flex;
  height: 100vh;
  width: 669px;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #E6533C;
`;

export const LogoWrap = styled.div`
position: absolute;
top: 32px;
left: 96px;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const NotFoundTitle = styled.b`
  color: #EFEDE8;
  font-family: Roboto;
  font-size: 160px;
  font-style: normal;
  font-weight: 500;
  line-height: 93.75%;
  letter-spacing: 1.6px;
`;

export const NotFoundText = styled.p`
  width: 477px;
  color: #EFEDE8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const BackHomeBtn = styled(Link)`
  display: flex;
  padding: 16px 60px;
  width: 206px;
  text-align: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.30);
  color: #EFEDE8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;