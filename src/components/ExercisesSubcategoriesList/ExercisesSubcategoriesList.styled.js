import styled from '@emotion/styled';

export const SubcategoriesList = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const ExercisesListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
  }
`;

export const PaginationBlock = styled.div`
  width: fit-content;
  margin-top: 40px;
  margin-inline: auto;
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const PaginationButton = styled.button`
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0px;
  background-color: rgba(239, 237, 232, 0.1);
  border: none;
  border-radius: 50%;

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: rgba(239, 237, 232, 0.3);
  }

  &.active {
    background-color: transparent;
    border: 1px solid #e6533c;
    cursor: default;

    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background-color: #e6533c;
      border-radius: 50%;
    }
  }
`;
