import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-top: 20px; */
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;
export const UserBarLink = styled(Link)``;
export const UserAvatar = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #e6533c;
  border-radius: 50%;
`;
export const IconSettings = styled.svg(
  {
    width: '33px',
    height: '33px',
  },
  ({ iconColor = '#e6533c' }) => ({
    fill: iconColor,
    stroke: iconColor,
  })
);
export const IconUserAvatar = styled.svg(
  {
    width: '24px',
    height: '24px',
  },
  ({ iconColorSettings = 'rgba(239, 237, 232, 0.3)' }) => ({
    fill: iconColorSettings,
    stroke: iconColorSettings,
  })
);
