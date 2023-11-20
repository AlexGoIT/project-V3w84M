import styled from '@emotion/styled';
import { products_1x } from 'utils/background';
import { products_2x } from 'utils/background';

export const ProductsWrapper = styled.div`
  padding-top: 62px;
  padding-bottom: 80px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 85px;
    padding-bottom: 81px;
    background: image-set(url(${products_1x}) 1x, url(${products_2x}) 2x);
    background-repeat: no-repeat;
    background-position: top 85px right;
  }
`;

export const Wrapper = styled.div`
  min-width: 280px;
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    /* background: image-set(url(${products_1x}) 1x, url(${products_2x}) 2x);
    background-repeat: no-repeat;
    background-position: right; */
    /* padding-top: 68px; */
    position: relative;
    min-height: 681px;
    padding-inline: 64px;
  }
`;
