import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import PropTypes from 'prop-types';

import {
  SubcategoriesList,
  ExercisesListUl,
} from './ExercisesSubcategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/api/apiSelectors';

const ExercisesSubcategoriesList = ({ handleClick }) => {
  const categories = useSelector(selectFilters).result;

  return (
    <SubcategoriesList>
      <ExercisesListUl>
        {categories.map(category => (
          <ExercisesSubcategoriesItem
            key={category._id}
            category={category}
            handleClick={handleClick}
          />
        ))}
      </ExercisesListUl>
    </SubcategoriesList>
  );
};

ExercisesSubcategoriesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ExercisesSubcategoriesList;
