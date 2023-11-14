import { useEffect, useRef } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  CategoriesFieldset,
  CategoryDiv,
  CategoryLabel,
  CategoryInput,
} from './ExercisesCategories.styled';

const EXERCISES_CATEGORY = {
  BODY_PARTS: 'bodyPart',
  MUSCLES: 'target',
  EQUIPMENT: 'equipment',
};

export default function ExercisesCategories({ category, setCategory }) {
  const path = useResolvedPath();
  const navigate = useNavigate();
  const currentPathNameRef = useRef(path.pathname);

  useEffect(() => {
    if (currentPathNameRef.current !== '/exercises') {
      navigate('./');
    }
  }, [category, navigate]);

  useEffect(() => {
    currentPathNameRef.current = path.pathname;
  }, [path.pathname]);

  const handleOptionChange = event => {
    setCategory(event.target.value);
  };

  return (
    <CategoriesFieldset>
      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.BODY_PARTS}>
          <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.BODY_PARTS}
            checked={category === EXERCISES_CATEGORY.BODY_PARTS}
            onChange={handleOptionChange}
          />
          Body parts
        </CategoryLabel>
      </CategoryDiv>

      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.MUSCLES}>
          <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.MUSCLES}
            checked={category === EXERCISES_CATEGORY.MUSCLES}
            onChange={handleOptionChange}
          />
          Muscles
        </CategoryLabel>
      </CategoryDiv>

      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.EQUIPMENT}>
          <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.EQUIPMENT}
            checked={category === EXERCISES_CATEGORY.EQUIPMENT}
            onChange={handleOptionChange}
          />
          Equipment
        </CategoryLabel>
      </CategoryDiv>
    </CategoriesFieldset>
  );
}

ExercisesCategories.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
