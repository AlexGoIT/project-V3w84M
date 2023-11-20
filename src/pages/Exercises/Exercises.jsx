import Container from 'components/Container';
import TitlePage from 'components/TitlePage';
import { ExercisesCategories } from 'components/ExercisesCategories/ExercisesCategories';
import { ExerciseCardItem } from 'components/ExercisesItem/ExercisesItem';

import {
  ExercisesWrapper,
  ContentDiv,
  WrapperTitleCategoriesDiv,
} from './Exercises.styled';

import { Outlet, useLocation } from 'react-router-dom';
// import Back from 'components/exercises/Back/Back';

const Exercises = () => {
  // const { pathname } = useLocation();
  // const isExersicesList = pathname.split('/').pop() === 'list';

  return (
    <ExercisesWrapper>
      <Container>
        {/* {isExersicesList && <Back />} */}
        <ContentDiv>
          <WrapperTitleCategoriesDiv>
            <TitlePage title="Exercises" />
            <ExercisesCategories />
          </WrapperTitleCategoriesDiv>

          <ExerciseCardItem></ExerciseCardItem>
          <ExerciseCardItem></ExerciseCardItem>
          <ExerciseCardItem></ExerciseCardItem>

          <Outlet />
        </ContentDiv>
      </Container>
    </ExercisesWrapper>
  );
};

export default Exercises;
