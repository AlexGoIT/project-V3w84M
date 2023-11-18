import styled from '@emotion/styled';
import { products_1x } from 'utils/background';
import { products_2x } from 'utils/background';

export const Wrapper = styled.div`
  min-width: 280px;
  background-color: #040404;
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    background: image-set(url(${products_1x}) 1x, url(${products_2x}) 2x);
    background-repeat: no-repeat;
    background-position: right;
    padding-top: 68px;
    position: relative;
    min-height: 681px;
    padding-inline: 64px;
  }
`;

// export const ProductsTitle = styled.h1`
//   color: rgba(239, 237, 232, 1);
//   @media screen and (min-width: 375px) {
//     font-size: 24px;
//     font-weight: 700;
//     line-height: 28px;
//     /* margin-top: 40px;
//     margin-bottom: 40px; */
//     position: static;
//   }

//   @media screen and (min-width: 1440px) {
//     font-size: 32px;
//     line-height: 44px;
//     position: absolute;
//     margin-bottom: 32px;
//   }
// `;
