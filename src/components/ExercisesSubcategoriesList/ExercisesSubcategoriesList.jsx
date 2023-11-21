import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import PropTypes from 'prop-types';

import {
  SubcategoriesList,
  ExercisesListUl,
  PaginationButton,
  PaginationBlock,
} from './ExercisesSubcategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/api/apiSelectors';

const ExercisesSubcategoriesList = ({
  pageNumber,
  elementsPerPage,
  handleSubCategoryClick,
  handleChangePage,
}) => {
  const { result: categories, total_results: totalCategories } =
    useSelector(selectFilters);

  const numberOfPages = Math.ceil(totalCategories / elementsPerPage);
  const buttonsAmount = [];

  for (let index = 1; index <= numberOfPages; index++) {
    buttonsAmount.push(index);
  }

  return (
    <SubcategoriesList>
      <ExercisesListUl>
        {categories.map(category => (
          <ExercisesSubcategoriesItem
            key={category._id}
            category={category}
            handleClick={handleSubCategoryClick}
          />
        ))}
      </ExercisesListUl>
      {numberOfPages > 1 && (
        <PaginationBlock>
          {buttonsAmount.map(number => (
            <PaginationButton
              type="button"
              onClick={() => handleChangePage(number)}
              key={number}
              className={pageNumber === number ? 'active' : null}
            ></PaginationButton>
          ))}
        </PaginationBlock>
      )}
    </SubcategoriesList>
  );
};

ExercisesSubcategoriesList.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  elementsPerPage: PropTypes.number.isRequired,
  handleSubCategoryClick: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default ExercisesSubcategoriesList;
