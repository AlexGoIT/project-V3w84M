import {
  ExercisesCategoriesUl,
  ExercisesCategoriesLi,
  ExercisesCategoriesNavLink,
} from './ExercisesCategories.styled';

export const ExercisesCategories = () => {
  return (
    <ExercisesCategoriesUl>
      <ExercisesCategoriesLi>
        <ExercisesCategoriesNavLink to="bodyparts">
          <p>Body parts</p>
        </ExercisesCategoriesNavLink>
        <ExercisesCategoriesNavLink to="muscles">
          <p>Muscles</p>
        </ExercisesCategoriesNavLink>
        <ExercisesCategoriesNavLink to="equipment">
          <p>Equipment</p>
        </ExercisesCategoriesNavLink>
      </ExercisesCategoriesLi>
    </ExercisesCategoriesUl>
  );
};
