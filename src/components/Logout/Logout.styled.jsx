import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const LogoutContainer = styled.div`
//   display: flex;
//   height: 20px;
//   width: 72px;

//   margin-top: 40px;
//   @media screen and (min-width: 768px) {
//     margin-top: 32px;
//   }
// `;

export const LogoutButtonLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgba(239, 237, 232, 1);
`;
export const Text = styled.span`
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;
