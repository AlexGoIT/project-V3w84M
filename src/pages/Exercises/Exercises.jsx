import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import TitlePage from 'components/TitlePage';
import ExercisesCategories from 'components/ExercisesCategories';
import { ContentDiv, WrapperTitleCategoriesDiv } from './Exercises.styled';

const EXERCISES_CATEGORY = {
  BODY_PARTS: 'bodyPart',
  MUSCLES: 'target',
  EQUIPMENT: 'equipment',
};

export function Exercises() {
  const [category, setCategory] = useState(EXERCISES_CATEGORY.BODY_PARTS);
  const location = useLocation();
  const { subcategory } = useParams();

  const subcategoriesLocation =
    location.pathname === '/exercises' || location.pathname === '/exercises/';

  return (
    <ContentDiv>
      <WrapperTitleCategoriesDiv margin={Boolean(subcategory)}>
        <TitlePage title={subcategoriesLocation ? 'Exercises' : subcategory} />
        <ExercisesCategories setCategory={setCategory} category={category} />
      </WrapperTitleCategoriesDiv>

      <Outlet context={category} />
    </ContentDiv>
  );
}

export default Exercises;
