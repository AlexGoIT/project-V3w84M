import styled from '@emotion/styled';

export const ProductStyledForm = styled.form`
  width: 287px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 415px;
  }
`;

export const ProductFormFieldsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductNameField = styled.input`
  padding: 8px 14px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid #e6533c;
  text-overflow: ellipsis;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 244px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ProductCaloriesFieldWrapper = styled.div`
  position: relative;
`;

export const ProductCaloriesField = styled(ProductNameField)`
  width: 100%;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
  }
`;

export const ProductCaloriesLabel = styled.label`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(24 / 14);
  }
`;

export const ProductCaloriesError = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  bottom: -18px;
  left: 0px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 10px;
  line-height: calc(15 / 10);
  letter-spacing: 0.12px;
  color: #d80027;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`;

export const ProductCaloriesErrorIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: #d80027;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const ProductCaloriesText = styled.span`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(24 / 14);
  }

  & span {
    color: #efede8;
  }
`;

export const ProductCaloriesButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  gap: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const ProductCaloriesAddButton = styled.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: #e6533c;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    padding-block: 14px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }

  &:hover:not([disabled]),
  &:focus-visible:not([disabled]) {
    background: #ef8964;
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
    cursor: not-allowed;
  }
`;

export const ProductCaloriesCancelButton = styled(ProductCaloriesAddButton)`
  padding-inline: 36px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    padding-inline: 40px;
  }

  &:hover:not([disabled]),
  &:focus-visible:not([disabled]) {
    border-color: #e6533c;
    background: transparent;
  }
`;
