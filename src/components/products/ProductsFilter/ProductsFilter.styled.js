import styled from '@emotion/styled';

export const ProdFilterWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: end;
  }
`;

export const ProdFilterForm = styled.form`
  width: 335px;
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 664px;
    margin-block: 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-block: 0px;
    margin-left: auto;
  }
`;

export const ProdFilterTitle = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    color: rgba(239, 237, 232, 0.5);
    display: inline-block;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const ProdFilterSearchBox = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 236px;
    flex-shrink: 0;
  }
`;

export const ProdFilterSearchField = styled.input`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  &:focus-visible {
    border-color: #e6533c;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px rgb(4, 4, 4) inset;
    -webkit-text-fill-color: #efede8;
    caret-color: #efede8;
  }
`;

export const ProdSearchCancelBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  padding: 0px;
  border: none;
  background: transparent;
`;

export const ProdSearchIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const ProdSearchSubmitBtn = styled(ProdSearchCancelBtn)`
  right: 14px;
`;

export const ProdFilterSelectsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const ProdFilterCategorySlct = styled.select`
  width: 146px;
  padding: 14px;
  text-transform: capitalize;
  text-overflow: ellipsis;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 52px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  & option {
    width: 146px;
    text-transform: capitalize;
    font-size: 14px;
    line-height: calc(18 / 14);
    background: #1c1c1c;

    @media screen and (min-width: 768px) {
      width: 192px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
    /* 
    &:hover {
      background: #e6533c;
    } */
  }
`;

export const ProdFilterRecSlct = styled(ProdFilterCategorySlct)`
  width: 173px;

  @media screen and (min-width: 768px) {
    width: 204px;
  }

  & option {
    width: 173px;

    @media screen and (min-width: 768px) {
      width: 204px;
    }
  }
`;
