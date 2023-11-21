import styled from '@emotion/styled';

export const ExercisesListUl = styled.ul`
  @media screen and (min-width: 375px) {
    min-height: 487px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: scroll;
    max-height: 660px;
    gap: 32px 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    max-height: 487px;
  }
`;
