import styled from '@emotion/styled';

export const ProductsCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 141px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
    overflow: hidden;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
  }
`;
export const ProductsCardStatus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`;
export const ProductsCardDiet = styled.span`
  display: inline-flex;
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`;
export const ProductsCardDietText = styled.p`
  color: #efede8;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const ProductsCardStatusCount = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductsCardStatusCountTrue = styled.p`
  color: #efede8;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  margin-right: 16px;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background: ${props => (props.isRecommended ? '#e6533c' : '#419b09')};
    margin-right: 8px;
  }
`;

export const ProductsCardStatusAdd = styled.button`
  width: 49px;
  height: 14px;
  background: transparent;
  border: none;
  color: #e6533c;

  font-size: 14px;
  line-height: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 53px;
    height: 24px;
  }
`;

export const IconAfterAdd = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  margin-top: -3px;
  fill: #e6533c;
`;

export const IconBeforeTitle = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0;
  top: calc(50% - 12px);
  fill: #efa082;
`;

export const ProductsCardTitle = styled.h4`
  position: relative;
  font-size: 20px;
  line-height: 24px;
  color: #efede8;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 40px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ProductsCardInfoList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ProductsCardInfoItem = styled.li`
  width: 40%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const ProductsCardInfoValue = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #efede8;
  font-size: 12px;
  line-height: 14px;
`;
