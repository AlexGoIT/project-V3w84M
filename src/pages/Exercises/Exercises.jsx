import Container from 'components/Container';
import TitlePage from 'components/TitlePage';
import { ExercisesCategories } from 'components/ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from 'components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import sprite from '../../assets/images/sprite.svg';

import {
  ExercisesWrapper,
  ContentDiv,
  WrapperTitleCategoriesDiv,
  BackButton,
} from './Exercises.styled';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectIsLoading } from 'redux/api/apiSelectors';
import { useEffect, useState } from 'react';
import { fetchExercises, fetchFilters } from 'redux/api/apiOperations';
import Loader from 'components/Loader';
import ExercisesList from 'components/ExercisesList';

const exercisesCategories = {
  bodyparts: 'Body parts',
  muscles: 'Muscles',
  equipment: 'Equipment',
};

const exercisesFilter = {
  bodyparts: 'bodypart',
  muscles: 'muscles',
  equipment: 'equipment',
};

const Exercises = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split('/')[2];
  const categoryName = exercisesCategories[pageName];
  const [category, setCategory] = useState(
    localStorage.getItem('category') ?? 'Body parts'
  );
  const [toggleList, setToggleList] = useState(false);
  const [subCategory, setSubcategory] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const elementsPerPage =
    window.innerWidth >= 768 && window.innerWidth < 1440 ? 9 : 10;
  const dispatch = useDispatch();
  const filterResult = useSelector(selectFilters).result;
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/exercises') {
      navigate('/exercises/bodyparts');
    }
  }, [navigate, pathname]);

  useEffect(() => {
    localStorage.setItem('category', category);
    setCategory(categoryName);
  }, [category, categoryName]);

  useEffect(() => {
    dispatch(
      fetchFilters({
        filter: category,
        page: pageNumber,
        limit: elementsPerPage,
      })
    );
  }, [category, dispatch, elementsPerPage, pageNumber]);

  const handleCategoryClick = () => {
    setPageNumber(1);
    setToggleList(false);
    setSubcategory('');
  };

  const handleSubCategoryClick = name => {
    setSubcategory(name);
    dispatch(fetchExercises({ [exercisesFilter[pageName]]: name }));
    setToggleList(true);
  };

  const capitalizeString = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ExercisesWrapper className={toggleList ? 'exercises-list' : null}>
      <Container>
        {isLoading && <Loader />}
        <ContentDiv>
          {toggleList && (
            <BackButton
              type="button"
              onClick={() => setToggleList(prev => !prev)}
            >
              <svg>
                <use href={`${sprite}#arrow_gray`}></use>
              </svg>
              Back
            </BackButton>
          )}
          <WrapperTitleCategoriesDiv>
            <TitlePage
              title={toggleList ? capitalizeString(subCategory) : 'Exercises'}
            />
            <ExercisesCategories handleClick={handleCategoryClick} />
          </WrapperTitleCategoriesDiv>
          {filterResult && !toggleList && (
            <ExercisesSubcategoriesList
              handleSubCategoryClick={handleSubCategoryClick}
              handleChangePage={number => setPageNumber(number)}
              pageNumber={pageNumber}
              elementsPerPage={elementsPerPage}
            />
          )}
          {toggleList && <ExercisesList />}
        </ContentDiv>
      </Container>
    </ExercisesWrapper>
  );
};

export default Exercises;
