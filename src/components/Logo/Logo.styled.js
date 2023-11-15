import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  /* padding-block: 24px; */
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    /* padding-block: 32px; */
  }

  @media screen and (min-width: 1440px) {
    /* padding-left: 64px; */
  }
`;

export const LogoIcon = styled.svg(
  {
    width: '36px',
    height: '13px',
  },
  ({ iconColor = 'var(--orange-color)' }) => ({
    fill: iconColor,
    stroke: iconColor,
  })
);

export const LogoText = styled.svg`
  width: 82px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 16px;
  }
`;
