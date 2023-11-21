import {
  ExercisesCategoriesUl,
  ExercisesCategoriesLi,
  ExercisesCategoriesNavLink,
} from './ExercisesCategories.styled';

export const ExercisesCategories = ({ handleClick }) => {
  return (
    <ExercisesCategoriesUl>
      <ExercisesCategoriesLi>
        <ExercisesCategoriesNavLink to="bodyparts" onClick={handleClick}>
          <p>Body parts</p>
        </ExercisesCategoriesNavLink>
        <ExercisesCategoriesNavLink to="muscles" onClick={handleClick}>
          <p>Muscles</p>
        </ExercisesCategoriesNavLink>
        <ExercisesCategoriesNavLink to="equipment" onClick={handleClick}>
          <p>Equipment</p>
        </ExercisesCategoriesNavLink>
      </ExercisesCategoriesLi>
    </ExercisesCategoriesUl>
  );
};
