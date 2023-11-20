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

// .SubcategoriesList {
//   margin-top: 40px;
// }

// .exercisesList {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// }

// @media screen and (min-width: 768px) {
//   .SubcategoriesList {
//     margin-top: 64px;
//   }

//   .exercisesList {
//     flex-direction: row;
//     flex-wrap: wrap;
//     gap: 32px 16px;
//   }
// }
