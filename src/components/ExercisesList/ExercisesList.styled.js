import styled from '@emotion/styled';

export const ExercisesListUl = styled.ul`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;   
    
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: scroll; 
    max-height: 660px;
    gap: 32px 16px; 
    /* width: 686px; */
    /* margin-right: 16px; */
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    max-height: 487px;
    margin-top: 32px;
  }
`;
